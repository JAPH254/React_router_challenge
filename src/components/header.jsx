import { Link } from "react-router-dom"
function Header(){
    return(
       
        <div style={{color:"green",display:"flex",gap:"5rem"}}>
            <Link to ="/">Home</Link>
            <Link to ="/Blog">Blog</Link>
            <Link to ="/Explore">Explore</Link>
            <Link to ="/Contact">Contact Us</Link>
        </div>
       
    )
}
export default Header