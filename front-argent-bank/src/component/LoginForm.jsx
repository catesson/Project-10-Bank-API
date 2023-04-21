import "../styles/loginForm.css";
import { postAPI } from "../api/post";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleSignInClick = async (event) => {
    event.preventDefault();

    const data = { email: username, password: password };
    postAPI(
      "http://localhost:3001/api/v1/user/login",
      data
    ).then((data) => {
      console.log(data)
      if (data.status !== 200) {
       alert("Erreur numéro " + data.status + " message d'erreur " + data.message)
        throw new Error("Erreur numéro " + data.status + " message " + data.message);
      }
      else{
        setPassword("")
        setUsername("")
        return navigate("/profil");}
      
    });
  };
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" onClick={handleSignInClick}>
          Sign In
        </button>
      </form>
    </section>
  );
}
