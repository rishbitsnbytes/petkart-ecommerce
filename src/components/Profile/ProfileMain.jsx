import "./profile.css";
import { ProfileDetails, Addresses, Orders } from "../../components";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ProfileMain = () => {
  const { pathname } = useLocation();
  const initialProfileComponent = () => {
    switch (pathname) {
      case "/profile":
        return "PROFILE";

      case "/profile/addresses":
        return "ADDRESSES";

      case "/profile/orders":
        return "ORDERS";

      default:
        return "PROFILE";
    }
  };
  const [activeProfileComponent, setActiveProfileComponent] = useState(
    initialProfileComponent
  );

  const profileTabs = [
    {
      tabName: "PROFILE",
      linkPath: "/profile",
      profileComponent: "PROFILE",
    },
    {
      tabName: "ADDRESSES",
      linkPath: "/profile/addresses",
      profileComponent: "ADDRESSES",
    },
    {
      tabName: "ORDERS",
      linkPath: "/profile/orders",
      profileComponent: "ORDERS",
    },
  ];

  const profileComponentSwitching = () => {
    switch (activeProfileComponent) {
      case "PROFILE":
        return <ProfileDetails />;

      case "ADDRESSES":
        return <Addresses />;

      case "ORDERS":
        return <Orders />;

      default:
        return <ProfileDetails />;
    }
  };

  const handleProfileComponentChange = (profileComponent) => {
    setActiveProfileComponent(profileComponent);
  };

  useEffect(() => {
    setActiveProfileComponent(initialProfileComponent);
  }, [initialProfileComponent]);

  return (
    <main className="profile-main w-full rounded-md relative flex-col flex-align-start flex-justify-center gap-2 w-full">
      <div className="tabs-wrapper flex-row flex-justify-center flex-align-center w-full">
        {profileTabs.map(({ tabName, linkPath, profileComponent }) => (
          <Link
            key={tabName}
            to={linkPath}
            className={`tabs-btn w-full text-center p-2 rounded-md ${
              activeProfileComponent === profileComponent && "active"
            }`}
            onClick={() => handleProfileComponentChange(profileComponent)}
          >
            <p className="tabs-btn-text h2">{tabName}</p>
          </Link>
        ))}
      </div>
      <section className="px-5 py-2 w-full">
        {profileComponentSwitching()}
      </section>
    </main>
  );
};

export { ProfileMain };
