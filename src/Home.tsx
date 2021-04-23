import { Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import { NavLink } from "react-router-dom";
import "./Home.css";
import Input from "./Input";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className="home">
        <header>
          <div className="home__headerLeft">
            <NavLink to={""}>About</NavLink>
            <NavLink to={""}>Store</NavLink>
          </div>
          <div className="home__headerRight">
            <NavLink to={""}>Gallery</NavLink>
            <NavLink to={""}>image</NavLink>
            <AppsIcon />
            <Avatar />
          </div>
        </header>
        <div className="home_body">
          <img
            src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
          <Input hideButtons />
        </div>
      </div>
    </>
  );
};

export default Home;
