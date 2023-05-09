import React from 'react'

import CustomizedButton from './CustomizedButton';

const AIChooser = ({ prompt, setPrompt, generatingImage, handleSubmit }) => {
  return (
    <div className="aichooser-container">
      <textarea 
        placeholder="Запитай у штучного інтелекта..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aichooser-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImage ? (
          <CustomizedButton 
            type="outline"
            title="ШІ обробляє запит..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomizedButton 
              type="outline"
              title="ШІ лого"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />

            <CustomizedButton 
              type="filled"
              title="ШІ поверхня"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIChooser