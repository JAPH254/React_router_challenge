import { Link } from "react-router-dom"
import{ FaHome,FaBlog,FaInternetExplorer,FaPeopleCarry,FaLaptopCode} from "react-icons/fa"

function Header(){
    return(
        <>
      
    <div style={{backgroundColor:"#f5d6db",display:"flex",gap:"7rem",height:"50px",justifyContent:"center",alignItems:"center",fontSize:"30px",textDecoration:"none"}}>
    <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",border:"2px solid",borderRadius:"10%"}}>
            <FaLaptopCode/>
            WAPLINK
        </div>
        <div style={{display:"flex",gap:"7rem",justifyContent:"center",alignItems:"center",gap:"7rem"}}>
            <Link to ="/"style={{display:"flex",alignItems:"center",gap:"1rem"}}><FaHome/>Home</Link>
            <Link to ="/Blog" style={{display:"flex",alignItems:"center",gap:"1rem"}}><FaBlog/>Blog</Link>
            <Link to ="/Explore" style={{display:"flex",alignItems:"center",gap:"1rem"}}><FaInternetExplorer/>Explore</Link>
            <Link to ="/Contact" style={{display:"flex",alignItems:"center", gap:"1rem"}}><FaPeopleCarry/>Contact Us</Link>
        </div>
        </div>
       </>
    )
}
export default Header