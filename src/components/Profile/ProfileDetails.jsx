import "./profile.css";
import { useAuth } from "../../contexts";

const ProfileDetails = () => {
  const {
    authState: { user },
  } = useAuth();
  const { firstName, lastName, email, createdAt } = user;
  return (
    <div className="flex-col flex-align-center flex-justify-center gap-5 w-full px-5 py-1">
      <h2 className="profile-details-head h1 color-tertiary w-full text-center py-1">
        Your Profile
      </h2>
      <section className="flex-col flex-align-center flex-justify-center gap-3 w-full">
        <div className="flex-row flex-justify-start flex-align-center w-70-pc gap-5">
          <p className="profile-details-titles h2 font-bold">FullName :</p>
          <p className="h3 font-bold color-tertiary">{`${firstName} ${lastName}`}</p>
        </div>
        <div className="flex-row flex-justify-start flex-align-center w-70-pc gap-5">
          <p className="profile-details-titles h2 font-bold">Email :</p>
          <p className="h3 font-bold color-tertiary">{email}</p>
        </div>
        <div className="flex-row flex-justify-start flex-align-center w-70-pc gap-5">
          <p className="profile-details-titles h2 font-bold">
            Joined Petkart on :
          </p>
          <p className="h3 font-bold color-tertiary">{Date(createdAt)}</p>
        </div>
      </section>
    </div>
  );
};

export { ProfileDetails };
