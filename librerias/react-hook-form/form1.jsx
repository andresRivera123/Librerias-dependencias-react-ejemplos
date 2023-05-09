import { useForm } from "react-hook-form";
import { edadValidator } from "./validators";

function Form1() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    defaultValues: {
      direccion: 'Ambato'
    }
  });
  const onSubmit = (data) => {
    //Recibimos los datos del formulario
    console.log(data);
  };

  const incluirTelefono = watch('incluirTelefono');

  return (
    <div className="px-4 py-2 w-full flex flex-col">
      <h2 className="text-3xl font-bold underline text-center mb-5">
        Formulario
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex flex-col">
        <div className="mb-3">
          <label className="block">Nombre</label>
          <input
            type="text"
            {...register("nombre", {
              required: true,
              maxLength: 10,
            })}
            className="border"
          />
          {errors.nombre?.type === "required" && (
            <p className="text-red-600">El campo nombre es requerido</p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p className="text-blue-600">
              El campo debe tener menos de 10 caracteres
            </p>
          )}
        </div>
        <div className="mb-3">
          <label className="block">Dirección</label>
          <input type="text" {...register("direccion")} className="border" />
        </div>
        <div className="mb-3">
          <label className="block">Correo electrónico</label>
          <input
            type="text"
            {...register("correo", {
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, //Expresión regular para validar correo.
            })}
            className="border"
          />
          {errors.correo?.type === "pattern" && (
            <p className="text-red-600">El formato del correo es incorrecto</p>
          )}
        </div>
        <div className="mb-3">
          <label className="block">Edad</label>
          <input
            type="text"
            {...register("edad", { validate: edadValidator })}
            className="border"
          />
          {errors.edad?.type === "validate" && (
            <p className="text-red-600">Su edad debe estar entre 18 y 90</p>
          )}
        </div>
        <div className="mb-3">
          <label className="mr-2">País</label>
          <select {...register("pais")}>
            <option value="España">España</option>
            <option value="Italia">Italia</option>
            <option value="Ecuador">Ecuador</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="mr-2">¿Incluir telefono?</label>
          <input type="checkbox" className="mb-3"  {...register("incluirTelefono") } />
          {incluirTelefono && (
            <div className="mb-3">
              <label className="mr-2">Teléfono</label>
              <input type="text" className="border" {...register("telefono")} />
            </div>
          )}
        </div>

        <input type="submit" value="Enviar" />
      </form>
      <div className="w-full">
        <h3>Nombre: {watch("nombre")}</h3>
      </div>
    </div>
  );
}

export default Form1;
