import "./not-found-page.css";
import notFoundImage from "../../assets/others/404-not-found-illustration.svg";

const NotFoundPage = () => {
  return (
    <div className="main-not-found flex-col flex-align-center flex-justify-center gap-5">
      <h1>404, Sorry this page doesn't exist!! Try later.</h1>
      <img
        src={notFoundImage}
        className="w-30-pc h-30-pc"
        alt="Page-Not-Found"
      />
    </div>
  );
};

export { NotFoundPage };
