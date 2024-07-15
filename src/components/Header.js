import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import "../assets/css/reset.css";




 const Header = ()  => {
  return (

    <header className="container__header" >
      <div >
        <img src="/img/logo-inndico.png" className="logo"  alt="Logo empresa innovación Digital Corporativa S.A.S"/>
      </div>
      <nav className="container__home__and__new__video">
        <Link  to="/home">Home</Link>
        <Link to="/crear-nuevo-video">Nuevo Video</Link>
      </nav>
    </header>
  )
 }


 export default Header;