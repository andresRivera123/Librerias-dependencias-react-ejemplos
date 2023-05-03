import { useForm } from "react-hook-form";

function Form1() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="px-4 py-2 w-full flex flex-col">
      <h2 className="text-3xl font-bold underline text-center mb-5">
        Formulario
      </h2>
      <form className="mx-auto flex flex-col">
        <label>Nombre</label>
        <input type="text" name="" className="border"></input>
        <label>Dirección</label>
        <input type="text" name="" className="border"></input>
        <label>Edad</label>
        <input type="text" name="" className="border"></input>
        <label>País</label>
        <select>
          <option value="es">España</option>
          <option value="it">Italia</option>
          <option value="fr">Ecuador</option>
        </select>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Form1;
