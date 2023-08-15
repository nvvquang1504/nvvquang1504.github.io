import BannerImg from "../../../assets/banner-img.png";
import "./style.scss";
const Banner = () => {
  return (
    <div className={"hero-banner"}>
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum hic
            ipsum laudantium officia quibusdam quis sapiente sit totam ut vitae.
          </p>
          <div className="ctas">
            <div className={"banner-cta"}>Read More</div>
            <div className={"banner-cta v2"}>Shop Now</div>
          </div>
        </div>
        <img className={'banner-img'} src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
