import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomizedButton } from '../components';
import {
  mainContainerAnimation,
  headContentAnimation,
  mainTextAnimation,
  shiftAnimation
} from '../config/motion';

const StartPage = () => {
  const snap = useSnapshot(state);

  const handleARView = () => {
    // Add code to start AR view here
    console.log('Starting AR View...');
  }

  return (
    <>
      <header className="bg-zinc-800 text-white p-4">
        <nav className="flex justify-between items-center">
          <div>
            <img 
              src="./default-logo.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Я шукаю..."
              className="bg-gray-600 w-60 px-5 py-2 rounded-md bg-gray-800 text-white focus:outline-none mt-0 ml"
            />
            <button 
              className="absolute top-0 right-0 h-full w-12 flex items-center justify-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-white" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M8 15a7 7 0 100-14 7 7 0 000 14zM16.707 16.707a1 1 0 11-1.414 1.414l-3.14-3.14a6 6 0 111.414-1.414l3.14 3.14z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          </div>
          <div>
            <ul className="flex gap-6">
              <li>
                <a href="#" className="hover:text-gray-400">Інші товари</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Про нас</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Вхід</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {snap.intro && (
          <motion.section className="home" {...shiftAnimation('left')}>
          <motion.div className="home-content" {...mainContainerAnimation}>
            <motion.div {...mainTextAnimation}>
              <div className="flex flex-col">
                <h1 className="head-text">
                  <span className="head-text-small">Уперед з</span>
                  <br className="xl:block hidden" />
                  <span className="head-text-big">Interactive 3D</span>
                </h1>
                <p className="max-w-md font-normal text-gray-800 text-base mt-[-420px]">
                  Створіть свою унікальну футболку за допомогою нашого конструктора,{" "}
                  <strong> використайте свою уяву, </strong> та розробіть власний стиль
                </p>
                <CustomizedButton
                  type="filled"
                  title="Починайте творити!"
                  handleClick={() => state.intro = false}
                  customStyles="bg-zinc-800 w-fit px-6 py-2 font-bold text-lg mt-4"
                />
                <CustomizedButton
                  type="outlined"
                  title="Режим доповненої реальності"
                  handleClick={handleARView}
                  customStyles="w-fit px-6 py-2 font-bold text-lg mt-4 ml border-2 border-gray-800"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
        
        )}
      </AnimatePresence>
      <footer className="bg-zinc-800 text-white p-4">
        <p>
        2023 &copy; Всі права захищені
        </p>
      </footer>
    </>
  )
}

export default StartPage;
