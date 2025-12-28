import Button from "../Button";
import "./Recommended.module.css";


const Recommended = ({ handleClick }: {handleClick: ()=> void}) => {
  return (
    <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommened-flex">
            <Button onClickHandler={handleClick} value="" title="" />
            <Button onClickHandler={handleClick} value="" title="" />
            <Button onClickHandler={handleClick} value="" title="" />
            <Button onClickHandler={handleClick} value="" title="" />
            <Button onClickHandler={handleClick} value="" title="" />
        </div>
    </div>
  )
}

export default Recommended