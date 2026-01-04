// import { GiSuperMushroom, GiFruitBowl } from "react-icons/gi";
// import { SiGitea } from "react-icons/si";
// import { TbPlant2 } from "react-icons/tb";
// import { Button } from "../Button";
import styles from "./Navigation.module.css";

type NavPropType = {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    query: string;
    // currentPage: "shop" | "about" | "contact";
    // setCurrentPage: (page: "shop" | "about" | "contact") => void;
}

const Navigation = ({ handleInputChange, query }: NavPropType) => {
  return (
    <nav className={styles.nav}>
        <div className={styles.navContainer}>
            <input 
                type="text" 
                className={styles.searchInput}
                onChange={handleInputChange}
                value={query}
                placeholder="Enter your search"
            />
        </div>
        {/* <div className="profile-container">

            <Button 
                onClickHandler={()=>setCurrentPage("shop")} 
                value="shop"
                btntitle="Shop 🛒"
            />

            <Button 
                onClickHandler={()=>setCurrentPage("about")} 
                value="about"
                btntitle="About 🌴"
            />

            <Button 
                onClickHandler={()=>setCurrentPage("contact")} 
                value="contact"
                btntitle="Contact 📞"
            />
             */}
            {/* <a href="#" className={styles.navIcons}>
                <TbPlant2 />
            </a>
            <a href="#" className={styles.navIcons}>
                <GiFruitBowl />
            </a>
            <a href="#" className={styles.navIcons}>
                <SiGitea />
            </a>
            <a href="#" className={styles.navIcons}>
               <GiSuperMushroom /> 
            </a> 
        </div>*/}
    </nav>
  );
};

export default Navigation;

