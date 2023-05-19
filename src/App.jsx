
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Footer from './components/footer'
import Blog from './navigate/Blog'
import Contact from './navigate/Contact'
import Explore from './navigate/Explore'
import Homepage from './navigate/Homepage'


import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App(){
  return(
    <>
    <div style={{backgroundColor:"#faebed"}}>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
    </>
  );
}
  
export default App
