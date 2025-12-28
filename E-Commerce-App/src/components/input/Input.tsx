import "./Input.module.css";

type InputPropType = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    title: string;
    name: string;
}

const Input = ({handleChange, value, title, name}: InputPropType) => {
  return (
    <label className="sidebar-label-container">
        <input 
            onChange={handleChange} 
            type="radio" 
            value={value}
            name={name} 
        />
        <span className="checkmark"></span>
        {title}
    </label>
  );
};

export default Input;