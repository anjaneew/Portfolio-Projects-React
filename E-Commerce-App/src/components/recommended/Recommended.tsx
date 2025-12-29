import {Button} from "../Button";
import "./Recommended.module.css";


const Recommended = ({ handleClick }: {handleClick: (e: React.MouseEvent<HTMLButtonElement>)=> void}) => {
  return (
    <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommened-flex">
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