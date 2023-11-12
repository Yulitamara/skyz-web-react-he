import googleImg from "../assets/imgs/login/google.png";
import microsoftImg from "../assets/imgs/login/microsoft.png";
import facebookImg from "../assets/imgs/login/facebook.png";
import compterWoman from "../assets/imgs/undraw_dev_focus_re_6iwt.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <div className="content">
        <form className="form">
          <h2>Skyz Login</h2>
          <div className="fields">
            <div class="field-container">
              <div className="label-container">
                <span className="material-symbols-outlined label-icon">
                  mail
                </span>
              </div>
              <div className="input-container">
                <input type="text" class="input" placeholder="Mail/User Name" />
              </div>
            </div>
            <div className="field-container">
              <div className="label-container">
                <span className="material-symbols-outlined label-icon">
                  lock
                </span>
              </div>
              <div className="input-container">
                <input
                  type="password"
                  class="input"
                  placeholder="Password"
                  id="loginFormPassword"
                />
              </div>
            </div>
          </div>
          <input type="submit" className="btn btn-secondary" value="Login" />
          <div className="form-control">
            <label id="rememberMeBtn">
              <input type="checkbox" className="checkbox-login" />
              Remember me
            </label>
            <Link to="/privacy">Privacy Policy</Link>
            <a>Forgot Password?</a>
          </div>
          <div className="login-options">
            <p>Or Sign in with</p>
            <div className="img-container">
              <img src={googleImg} alt="google" />
            </div>
            <div className="img-container">
              <img src={microsoftImg} alt="microsoft" />
            </div>
            <div className="img-container">
              <img src={facebookImg} alt="facebook" />
            </div>
          </div>
        </form>
        <div className="info">
          <h2>
            Skyz<span>CRM</span>
          </h2>
          <p>Manage customers in real time at a glance.</p>
          <div className="btn btn-primary">Leran More</div>
          <img src={compterWoman} alt="computer" />
        </div>
      </div>
    </section>
  );
};

export default Login;
