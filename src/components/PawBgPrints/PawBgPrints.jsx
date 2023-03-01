import "./paw-bg-prints.css";
import pawBgImg1 from "../../assets/others/Paw-Image-transparent.png";
import pawBgImg2 from "../../assets/others/Paw-GIF-Scale-transparent.gif";

// Use this comopnent anywhere as a direct child of a relatively positioned parent.

const PawBgPrints = () => {
  const pawBgImgData = [
    { imgSrc: pawBgImg1, imgClass: "paw-spot-1" },
    { imgSrc: pawBgImg2, imgClass: "paw-spot-2" },
    { imgSrc: pawBgImg2, imgClass: "paw-spot-3" },
    { imgSrc: pawBgImg1, imgClass: "paw-spot-4" },
    { imgSrc: pawBgImg2, imgClass: "paw-spot-5" },
  ];

  return (
    <div className="paw-bg-prints-wrapper absolute w-full h-full">
      {/* Background graphical paws (design elements) */}
      {pawBgImgData.map(({ imgSrc, imgClass }) => (
        <img
          key={imgClass}
          className={`paw-bg-spots ${imgClass}`}
          src={imgSrc}
          alt="Paw-Background"
        />
      ))}
    </div>
  );
};

export { PawBgPrints };
