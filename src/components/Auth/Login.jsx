import "./auth-components.css";
import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthFormData,
  useDocumentTitle,
  useToast,
} from "../../custom-hooks";
import { useAuth } from "../../contexts";
import { initiateLogin, setAuthStateInLocalStorage } from "../../utils";
import { LoadingAnimation, ToastPortal } from "../../components";

const Login = ({ activeAuthComponentDisplay }) => {
  const { authState, setAuthState } = useAuth();
  const { isAuthenticated, authError } = authState;
  const [authFormDataState, authFormDataDispatch] = useAuthFormData();
  const { email, password, rememberMe } = authFormDataState;
  const [showPassword, setShowPassword] = useState();
  const [loadingState, setLoadingState] = useState(false);
  const { showToast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const [setDocumentTitle] = useDocumentTitle();

  const handleAuthFormDataChange = (event, actionType) =>
    authFormDataDispatch({
      type: actionType,
      payload: event.target.value,
    });

  const handlePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLoginWithTestCredentials = (event) =>
    handleAuthFormDataChange(event, "LOGIN_WITH_TEST_CREDENTIALS");

  const handleAuthFormSubmit = async (event) => {
    event.preventDefault();
    setLoadingState(true);
    try {
      await initiateLogin(authState, setAuthState, authFormDataState);
      const from = location?.state?.from?.pathname ?? -1;
      navigate(from, { replace: true });
      showToast("Logged in successfully", "success");
      setLoadingState(false);
    } catch (error) {
      authFormDataDispatch({
        type: "CLEAR_AUTH_FORM_DATA",
        payload: "",
      });
      showToast(`${error}`, "error");
      setLoadingState(false);
    }
  };

  useEffect(() => {
    setAuthStateInLocalStorage(authState, setAuthState, authFormDataState);
  }, [authState]);

  useEffect(() => {
    setDocumentTitle("Login || Petkart");
    if (isAuthenticated) {
      navigate("/profile", { replace: true });
    }
  }, []);

  return (
    <div>
      {loadingState ? (
        <div className="w-full h-50">
          <LoadingAnimation
            width="10"
            height="10"
            loadingMessage="Logging in..."
          />
        </div>
      ) : (
        <form
          className="auth-form flex-col flex-justify-center flex-align-center my-1 py-2 mx-auto px-5 w-90-pc"
          onSubmit={(event) => handleAuthFormSubmit(event)}
        >
          <div className="flex-col flex-justify-center flex-align-start gap-0-5 h5 font-bold w-90-pc my-1-5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="kindness@humanity.org"
              value={email}
              onChange={(event) =>
                handleAuthFormDataChange(event, "UPDATE_EMAIL")
              }
              required
            />
          </div>
          <div className="flex-col flex-justify-center flex-align-start gap-0-5 h5 font-bold w-90-pc my-1-5">
            <label htmlFor="password">Password</label>
            <div className="relative w-full h5 font-bold">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full"
                id="password"
                name="password"
                placeholder="**********"
                value={password}
                onChange={(event) =>
                  handleAuthFormDataChange(event, "UPDATE_PASSWORD")
                }
                required
              />
              <button
                type="button"
                className="btn btn-icon password-eye absolute"
                onMouseDown={(event) => handlePasswordVisibility(event)}
                onMouseUp={(event) => handlePasswordVisibility(event)}
              >
                <span className="text-lg relative">
                  {showPassword ? (
                    <i className="btn fa-regular fa-eye-slash" />
                  ) : (
                    <i className="btn fa-regular fa-eye" />
                  )}
                  <span className="tooltip absolute text-sm text-center w-12 h-fit my-1-5 px-1 py-0-5 rounded-md">
                    Hold to peek at entered password!
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="flex-row flex-justify-start flex-align-start w-90-pc my-2 py-1">
            <div className="remember-me-btn btn flex-row flex-justify-center flex-align-center w-fit gap-0-5 font-bold relative">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                className="pointer"
                checked={rememberMe}
                value="rememberMe"
                onChange={(event) =>
                  handleAuthFormDataChange(event, "UPDATE_REMEMBER_ME")
                }
              />
              <label htmlFor="remember-me" className="pointer">
                Remember me
              </label>
              <span className="tooltip absolute text-sm text-center w-15 h-fit mx-1-5 px-1 py-0-5 rounded-md">
                Stay logged in even after closing the tab, window or browser.
                Only Manual Log-Out will log you out.
              </span>
            </div>
          </div>
          <div className="flex-col flex-justify-center flex-align-center w-90-pc gap-2">
            <button
              type="submit"
              className="btn btn-primary rounded-md py-1 w-full font-bold"
            >
              Login
            </button>
            <button
              type="submit"
              className="btn btn-secondary rounded-md py-1 w-full font-bold"
              onClick={(event) => handleLoginWithTestCredentials(event)}
            >
              Login with Test Credentials
            </button>
            <Link
              to="/sign-up"
              className="btn btn-link-animated-3 h5 font-sbold font-bold"
              onClick={() => activeAuthComponentDisplay("SIGN UP")}
            >
              New to Petkart ? Create Account
              <span className="mx-0-5 text-md text-center">
                <i className="fa-solid fa-circle-arrow-right" />
              </span>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export { Login };
