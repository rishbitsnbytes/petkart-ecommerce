import "../../components/Profile/profile.css";
import { ProfileMain, ProfileDetails } from "../../components";
import { Logout, PawBgPrints } from "../../components";

const ProfilePage = () => {
  return (
    <div className="profile-page flex-col flex-align-end flex-justify-start gap-3 w-90-pc mx-auto my-2 p-2 relative">
      <Logout />
      <ProfileMain />
      <PawBgPrints />
    </div>
  );
};

export { ProfilePage };
