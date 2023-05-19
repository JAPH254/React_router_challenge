
import{ FaFacebookSquare,FaTwitterSquare,FaInstagramSquare} from "react-icons/fa"

function Contact(){
    return(
        <div style={{height:"80vh",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",fontSize:"20px",gap:"1rem"}}>
        <p><FaTwitterSquare/>Follow us on Twitter @wapKenya</p>
        <p><FaInstagramSquare/>Our Instagram Page @wapKenya</p>
        <p><FaFacebookSquare/>Follow us on Our Facebook Page Waplink Kenya</p>
        </div>
    );
}
export default Contact