import myImage from "../../assets/assetapex.jpg";

const Hero = () => {
  return (
    <div>
      <h1>This is the Hero</h1>
      <img src="./publicapex.jpg" alt="" />
      <img src={myImage} alt="" />
    </div>
  );
};

export default Hero;
