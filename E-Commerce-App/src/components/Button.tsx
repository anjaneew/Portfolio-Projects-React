type ButtonPropType = {
    onClickHandler: () => void;
    value: string;
    btntitle: string;
}

const Button = ({ onClickHandler, value, btntitle }: ButtonPropType) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">{btntitle}</button>
  );
};

export default Button;