
import "../../styles/header.css"
import logo from "../../asset/argentBankLogo.png"
import { LogoutButton } from "../LogoutButton"
import { SignButton } from "../SignButton";
// on import useSelector depuis react-redux
import { useSelector } from "react-redux";
 


export function Header(){
  const userIsConnect = useSelector((state) => state.connected)
  const firstName = useSelector((state) => state.user.firstName)
  const connectButton = userIsConnect ? <LogoutButton name={firstName}/> : <SignButton/>
    return <nav className="main-nav">
    <a className="main-nav-logo" href="/">
      <img
        className="main-nav-logo-image"
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </a>
    <div>
       {connectButton}
    </div>
    </nav>
}