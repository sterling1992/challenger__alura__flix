import { Link } from "react-router-dom";
import "../assets/css/Footer.css"
import Instagram from "../assets/img/instagram.png";
import linkeding from "../assets/img/linkedin.png";
import sitioWeb  from "../assets/img/sitio-web.png";


const Footer = () => {
    return <footer className='footer'>
        <div className='redes'>
            <Link to='https://www.instagram.com/klever_s.ac?igsh=MWFnamE5dXZnemZ2YQ=='>
                <img src={Instagram} alt='Instagram' />
            </Link>
            <Link to='https://www.linkedin.com/in/klever-arrechea-castillo/'>
                <img src={linkeding} alt='linkeding' />
            </Link>
            <Link target="_blank" to='https://main.d1z9ud58u09z0j.amplifyapp.com/some-works'>
                <img src={sitioWeb} alt='sitio web'/>
            </Link>
        </div>
        
        <strong>
        <p>© {new Date().getFullYear()} Sterling ac.</p>
        </strong>
    </footer>
}

export default Footer