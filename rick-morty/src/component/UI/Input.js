import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input {...props.input} onChange={props.onChange} />
    </div>
  );
};

export default Input;
