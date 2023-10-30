import { Button } from "../../Components/Button";
import { Bgimg } from "../../assets";

export const Home = () => {
  return (
    <div className="bg-blue-900">
      <p className="">Your SSW content is here</p>
      {/* <img src={Bgimg} /> */}
      <Button ButtonName="Home" />
      <Button ButtonName="About" />
    </div>
  );
};
