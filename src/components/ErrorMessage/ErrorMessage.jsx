import errorImg from "../../assets/others/error-svg.svg";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className="w-full h-full flex-col flex-justify-center flex-align-center text-center gap-2">
      <img
        className="rounded-circle w-15 h-15"
        src={errorImg}
        alt="Error SVG"
      />
      <p className="h4 font-bold color-tertiary">{errorMessage}</p>
    </div>
  );
};

export { ErrorMessage };
