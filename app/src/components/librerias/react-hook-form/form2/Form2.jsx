import { useForm } from "react-hook-form";
import React from "react";

export default function Form2() {
  const Input = ({ label, register, required }) => (
    <>
      <label>{label}</label>
      <input {...register(label, { required })}></input>
    </>
  );

  const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  ));

  const App = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      alert(JSON.stringify(data));
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="First Name" register={register} required></Input>
        <Select label="Age" {...register("Age")} />
        <input type="submit"></input>
      </form>
    );
  };

  return(
    <App/>
  );
}
