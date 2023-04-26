import { disconnected } from "../store/store";
import { useDispatch } from "react-redux";

export function LogoutButton({ name }) {
  const dispatch = useDispatch();

  const handleDisconnectInClick = (event) => {
    event.preventDefault();
    window.location = '/'
    dispatch(disconnected()); 
  };

  return (
    <div>
      <a className="main-nav-item" href="/profil">
        <i className="fa fa-user-circle"></i>
        {name}
      </a>
      <button className="main-nav-item" onClick={handleDisconnectInClick}>
        <i className="fa fa-sign-out"></i>
        Sign Out
      </button>
    </div>
  );
}
