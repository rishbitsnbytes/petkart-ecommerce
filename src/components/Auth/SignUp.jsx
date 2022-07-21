import "./auth-components.css";
import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuthFormData, useDocumentTitle } from "../../custom-hooks";
import { useAuth } from "../../contexts";
import { initiateSignup, setAuthStateInLocalStorage } from "../../utils";
import { LoadingAnimation } from "../../components";

const SignUp = ({ activeAuthComponentDisplay }) => {
  const { authState, setAuthState } = useAuth();
  const { isAuthenticated, authError } = authState;
  const [authFormDataState, authFormDataDispatch] = useAuthFormData();
  const { firstName, lastName, email, password, confirmPassword } =
    authFormDataState;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPasswordMatch, setConfirmPasswordMatch] = useState(true);
  const [loadingState, setLoadingState] = useState(false);
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

  const handleConfirmPasswordVisibility = (event) => {
    event.preventDefault();
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const handleConfirmPasswordMatch = () => {
    if (confirmPassword === password) {
      setConfirmPasswordMatch(true);
    } else {
      setConfirmPasswordMatch(false);
    }
  };

  const handleAuthFormSubmit = async (event) => {
    event.preventDefault();
    setLoadingState(true);
    try {
      await initiateSignup(authState, setAuthState, authFormDataState);
      const from = location?.state?.from?.pathname ?? -1;
      navigate(from, { replace: true });
      setLoadingState(false);
    } catch (error) {
      authFormDataDispatch({
        type: "CLEAR_AUTH_FORM_DATA",
        payload: "",
      });
      setLoadingState(false);
      console.log("This error occured:", error);
    }
  };

  useEffect(() => {
    if (confirmPassword === "") {
      setConfirmPasswordMatch(true);
    } else {
      handleConfirmPasswordMatch();
    }
  }, [confirmPassword, password]);

  useEffect(() => {
    setAuthStateInLocalStorage(authState, setAuthState, authFormDataState);
  }, [authState]);

  useEffect(() => {
    setDocumentTitle("Sign-Up || Petkart");
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, []);

  return (
    <div>
      {loadingState ? (
        <div className="w-full h-50">
          <LoadingAnimation
            width="10"
            height="10"
            loadingMessage="Signing up..."
          />
        </div>
      ) : (
        <form
          className="auth-form flex-col flex-justify-center flex-align-center my-1 py-2 mx-2 px-5 w-90-pc"
          onSubmit={(event) => handleAuthFormSubmit(event)}
        >
          <div className="flex-col flex-justify-center flex-align-start gap-0-5 h5 font-bold w-90-pc my-1-5">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(event) =>
                handleAuthFormDataChange(event, "UPDATE_FIRST_NAME")
              }
              required
            />
          </div>
          <div className="flex-col flex-justify-center flex-align-start gap-0-5 h5 font-bold w-90-pc my-1-5">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(event) =>
                handleAuthFormDataChange(event, "UPDATE_LAST_NAME")
              }
              required
            />
          </div>
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
          <div className="flex-col flex-justify-center flex-align-start gap-0-5 h5 font-bold w-90-pc my-1-5">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="relative w-full h5 font-bold">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className={`w-full ${
                  confirmPasswordMatch ? "" : "input-error"
                }`}
                id="confirm-password"
                name="confirm-password"
                placeholder="**********"
                value={confirmPassword}
                onChange={(event) =>
                  handleAuthFormDataChange(event, "UPDATE_CONFIRM_PASSWORD")
                }
                required
              />
              <button
                type="button"
                className="btn btn-icon password-eye absolute"
                onMouseDown={(event) => handleConfirmPasswordVisibility(event)}
                onMouseUp={(event) => handleConfirmPasswordVisibility(event)}
              >
                <span className="text-lg relative">
                  {showConfirmPassword ? (
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
            <span
              className={`input-error-msg text-sm font-sbold m-0-5 ${
                confirmPasswordMatch ? "hidden" : ""
              }`}
            >
              Confirm Password must match the Password!
            </span>
          </div>
          <div className="w-90-pc my-2 py-1">
            <div className="btn flex-row flex-justify-center flex-align-center w-fit gap-0-5 font-bold">
              <input
                type="checkbox"
                id="accept-t-and-c"
                name="accept-t-and-c"
                required
              />
              <label htmlFor="accept-t-and-c">
                I accept Terms and Conditions
              </label>
            </div>
          </div>
          <div className="flex-col flex-justify-center flex-align-center w-90-pc gap-2">
            <div className="sign-up-btn w-full relative">
              <button
                type="submit"
                className={`btn btn-primary rounded-md py-1 w-full font-bold ${
                  !confirmPasswordMatch ? "btn-disabled" : ""
                }`}
                disabled={!confirmPasswordMatch}
              >
                Sign Up
              </button>
              <span
                className={`tooltip absolute text-sm text-center w-15 h-fit mx-3 px-1 py-0-5 rounded-md ${
                  confirmPasswordMatch ? "hidden" : ""
                }`}
              >
                Enter valid details to enable this button!
              </span>
            </div>
            <Link
              to="/login"
              className="btn btn-link-animated-3 h5 font-sbold font-bold"
              onClick={() => activeAuthComponentDisplay("LOGIN")}
            >
              Already have an account ? Login
              <span className="mx-0-5 text-md text-center">
                <i className="fa-solid fa-circle-arrow-right" />
              </span>
            </Link>
            {authError && (
              <p className="auth-error h4 p-1 m-1 rounded-md">
                Error Occured :<span> {authError} </span>
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export { SignUp };
