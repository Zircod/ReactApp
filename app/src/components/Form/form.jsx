import {useState} from "react";
import s from './form.module.css';

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} type="text" />
        <input className={s.button}  type="submit" />
      </form>
    </div>
  );
};

export default Form;