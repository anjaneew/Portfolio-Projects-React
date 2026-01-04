import {Button} from "../Button";
import styles from "./Recommended.module.css";


const Recommended = ({ handleClick }: {handleClick: (e: React.MouseEvent<HTMLButtonElement>)=> void}) => {
  return (
    <div>
        <h2 className={styles.recommendedTitle}>Recommended</h2>
        <div className={styles.recommendedFlex}>
            <Button onClickHandler={handleClick} value="" btntitle="" />
            <Button onClickHandler={handleClick} value="" btntitle="" />
            <Button onClickHandler={handleClick} value="" btntitle="" />
            <Button onClickHandler={handleClick} value="" btntitle="" />
            <Button onClickHandler={handleClick} value="" btntitle="" />
        </div>
    </div>
  )
}

export default Recommended;