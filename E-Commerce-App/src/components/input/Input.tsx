import styles from  "./Input.module.css";

type InputPropType = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    title: string;
    name: string;
}

const Input = ({handleChange, value, title, name}: InputPropType) => {
  return (
    <label htmlFor={`${name}-${value}`} className={styles.sidebarLabelContainer}>
        <input 
            onChange={handleChange} 
            type="radio" 
            value={value}
            name={name} 
            id={`${name}-${value}`}
            className={styles.sidebarInput}
        />{title}
        <span className="checkmark"></span>
        
    </label>
  );
};

export default Input;