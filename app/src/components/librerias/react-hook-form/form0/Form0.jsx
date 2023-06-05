
import {useForm} from "react-hook-form"

export default function Form0(){
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
            <h3>FORMULARIO</h3>
            <label>Primer nombre</label>
            <input {...register("first name")}></input>
            <select {...register("gender")}>
                <option value="female">Mujer</option>
                <option value="male">Hombre</option>
                <option value='other'>Otro</option>
            </select>
            <input type="submit"></input>
        </form>
    )
}
