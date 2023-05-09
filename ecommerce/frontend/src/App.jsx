import Canvas from "./canvas";
import Customization from "./pages/Customization";
import StartPage from "./pages/StartPage";
import ARView from './components/ARView';

function App() {

  return (
    <main className="app transition-all ease-in">
      <StartPage />
      <Canvas />
      <Customization />
    </main>

  )
}

export default App
