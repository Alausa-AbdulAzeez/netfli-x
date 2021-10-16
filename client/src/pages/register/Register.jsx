import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router";
import "./register.scss";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();
  const axiosInstance = axios.create({
    baseURL: "https://netfli-x.herokuapp.com/api/",
  });

  // `http://localhost:${
  //       process.env.PORT || 5000
  //     }/api`

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      setPassword(passwordRef.current.value);
      setUsername(usernameRef.current.value);
      await axiosInstance.post("/auth/register", { email, username, password });
      history.push("/login");
    } catch (error) {}
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
            className="logo"
          />
          <button className="loginButton">Sign In</button>
        </div>
        <div className="container">
          <h1>Unlimited movies, TV shows and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership
          </p>
          {email ? (
            <form className="input">
              <input type="username" placeholder="Username" ref={usernameRef} />
              <input type="password" placeholder="Password" ref={passwordRef} />
              <button className="registerButton" onClick={handleFinish}>
                Finish
              </button>
            </form>
          ) : (
            <div className="input">
              <input type="email" placeholder="email address" ref={emailRef} />
              <button className="registerButton" onClick={handleStart}>
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
