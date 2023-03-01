import "./auth-page.css";
import { Login, SignUp, PawBgPrints } from "../../components";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AuthPage = () => {
  const { pathname } = useLocation();
  const initialAuthComponent = pathname === "/login" ? "LOGIN" : "SIGN UP";

  const [activeAuthComponent, setActiveAuthComponent] =
    useState(initialAuthComponent);

  const handleAuthComponentDisplay = (authComponentDisplay) => {
    setActiveAuthComponent(authComponentDisplay);
  };

  useEffect(() => {
    setActiveAuthComponent(initialAuthComponent);
  }, [initialAuthComponent]);

  const buttonsAndComponentDisplay = [
    {
      btnName: "LOGIN",
      linkPath: "/login",
      authComponent: "LOGIN",
    },
    {
      btnName: "SIGN UP",
      linkPath: "/sign-up",
      authComponent: "SIGN UP",
    },
  ];

  return (
    <div>
      {/* Main Sign Up Form Section */}
      <main className="auth-main flex-col flex-justify-center flex-align-center relative">
        <section className="auth-main-content-wrapper rounded-md my-5">
          <div className="login-signup-btns-wrapper flex-row flex-justify-center flex-align-center w-full">
            {buttonsAndComponentDisplay.map(
              ({ btnName, linkPath, authComponent }) => (
                <Link
                  to={linkPath}
                  key={btnName}
                  className={`btn-tabs w-full text-center p-1 rounded-md  ${
                    activeAuthComponent === authComponent && "active"
                  }`}
                  onClick={() => {
                    handleAuthComponentDisplay(authComponent);
                  }}
                >
                  <p className="btn-text h2">{btnName}</p>
                </Link>
              )
            )}
          </div>
          {activeAuthComponent === "LOGIN" ? (
            <Login activeAuthComponentDisplay={handleAuthComponentDisplay} />
          ) : activeAuthComponent === "SIGN UP" ? (
            <SignUp activeAuthComponentDisplay={handleAuthComponentDisplay} />
          ) : (
            <p className="h4 color-tertiary">
              Some Error Occured related to active auth component related to
              auth tabs.
            </p>
          )}
        </section>
        <PawBgPrints />
      </main>
    </div>
  );
};

export { AuthPage };
