import { Link } from "react-router-dom"
import{ FaHome,FaBlog,FaInternetExplorer,FaPeopleCarry,FaLaptopCode} from "react-icons/fa"

function Header(){
    return(
        <>
      
    <div style={{backgroundColor:"#21FFCE",display:"flex",gap:"7rem",height:"50px",justifyContent:"center",alignItems:"center",fontSize:"30px",textDecoration:"none"}}>
    <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",border:"2px solid",borderRadius:"10%"}}>
            <FaLaptopCode/>
            WAPLINK
        </div>
            <Link to ="/"><FaHome/>Home</Link>
            <Link to ="/Blog"><FaBlog/>Blog</Link>
            <Link to ="/Explore"><FaInternetExplorer/>Explore</Link>
            <Link to ="/Contact"><FaPeopleCarry/>Contact Us</Link>
        </div>
       </>
    )
}
export default Header