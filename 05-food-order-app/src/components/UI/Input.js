import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;

// {...props.input} here object de-structuring happens which will result into type="text" if object
// contains {type: "text"}, if applied on html element
