import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { vanishAnimation, shiftAnimation } from '../config/motion';
import { AIChooser, ColorChooser, CustomizedButton, FileChooser, FilterTab } from '../components';
import downloadImage from '../assets/download.png';


const Customization = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState('');

  const [prompt, setPrompt] = useState('');
  const [generatingImage, setGeneratingImage] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoOnlyCloth: true,
    allAreaCloth: false,
  })

  
  const [downloadLink, setDownloadLink] = useState('');

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorchooser":
        return <ColorChooser />
      case "filechooser":
        return <FileChooser
          file={file}
          setFile={setFile}
          readFile={readFile}
        />
      case "aichooser":
        return <AIChooser 
          prompt={prompt}
          setPrompt={setPrompt}
          generatingImage={generatingImage}
          handleSubmit={handleSubmit}
        />

      default:
        return null;
    }
  }


  const handleSubmit = async (type) => {
    if(!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImage(true);

      const response = await fetch('http://localhost:8080/api/v1/dalle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt,
        })
      })

      const data = await response.json();

      handleDecals(type, `data:image/png;base64,${data.photo}`)
    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImage(false);
      setActiveEditorTab("");
      setDownloadLink(result);
    }
  }

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if(!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoOnlyCloth":
          state.isLogoOnlyTexture = !activeFilterTab[tabName];
        break;
      case "allAreaCloth":
          state.isFullAreaTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoOnlyTexture = true;
        state.isFullAreaTexture = false;
        break;
    }

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }

  const readFile = (type) => {
    reader(file)
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      })
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...shiftAnimation('left')}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((filterTab) => (
                  <FilterTab 
                    key={filterTab.name}
                    filterTab={filterTab}
                    handleClick={() => setActiveEditorTab(filterTab.name)}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...vanishAnimation}
          >
          <CustomizedButton
            type="filled"
            title="Назад"
            handleClick={() => state.intro = true}
            customStyles="bg-grey-800 w-fit px-4 py-2.5 font-bold mt-20 text-base"
          />
          </motion.div>

          { <motion.div
            className="absolute z-10 top-5 right-5"
            {...vanishAnimation}
          >
          <CustomizedButton
            type="filled"
            title="Завантажити результат"
            handleClick={() => downloadCanvasToImage(downloadLink)}
            customStyles="bg-green-500 w-fit px-4 py-2.5 font-bold mt-40 text-base"
          />
          </motion.div> }

          <motion.div
            className='filtertabs-container'
            {...shiftAnimation("up")}
          >
            {FilterTabs.map((filterTab) => (
              <FilterTab
                key={filterTab.name}
                filterTab={filterTab}
                isFilterTab
                isActiveTab={activeFilterTab[filterTab.name]}
                handleClick={() => handleActiveFilterTab(filterTab.name)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customization