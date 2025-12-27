import { GiSuperMushroom, GiFruitBowl } from "react-icons/gi";
import { SiGitea } from "react-icons/si";
import { TbPlant2 } from "react-icons/tb";
import "./Navigation.module.css";

type NavPropType = {
    handleInputChange: () => void;
    query: string;
}

const Navigation = ({ handleInputChange, query}: NavPropType) => {
  return (
    <nav>
        <div className="nav-container">
            <input 
                type="text" 
                className="search-input"
                onChange={handleInputChange}
                value={query}
                placeholder="Enter your search"
            />
        </div>
        <div className="profile-container">
            <a href="#">
                <TbPlant2 />
            </a>
            <a href="#">
                <GiFruitBowl />
            </a>
            <a href="#">
                <SiGitea />
            </a>
            <a href="#">
               <GiSuperMushroom /> 
            </a>
        </div>

    </nav>
  );
};

export default Navigation;

