import Body from "./components/Body"
import {Toaster} from 'react-hot-toast'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      mirror: true,   // Whether elements should animate out while scrolling past them
    });
    AOS.refresh();   // Refresh AOS animations
  }, []);

  return (
    <>
    <Body/>
    <Toaster />
    </>
  )
}
export default App