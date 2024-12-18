import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

let contadorId = 0;
export default function Register({onLogin}) {
    let { register, handleSubmit, watch, formState : { errors } } = useForm();
    let contra = watch("contrasena");
    let navigate = useNavigate();
    let onSubmited = async ( data )=>{
        console.log("datos del formulario");
        console.log(data);
        try {
            let respuesta = await axios.post("http://localhost:7714/usuarios", {
                usuario: data.nombreapellido,
                nombre: data.nombre,
                contrasena: data.contrasena,
                profecion: data.profesion,
                edad: data.edad,
                telefono: data.telefono,
                correo: data.correo,
                vivo: true,
                id: contadorId+1
                
            });
            alert("Usuario Creado con exito");
            onLogin(respuesta.data.nombre);
            navigate("/Dashboard");
            console.log("respuesta del servidor");
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <>
        <div className="container-fluid imagen-fondo1">
            <div className="row justify-content-center">
                <div className="col-sm-12">
                    <h1 className='text-center text-warning'>Formulario de Registro</h1>
                </div>
                <div className="col-sm-8 my-5">
                    <form onSubmit={handleSubmit(onSubmited)} className='bg-body-secondary p-3 rounded row'>
                        <div className="col-6">
                            <div className="mb-3">
                                <label className="form-label">Usuario</label>
                                <input type="text" {...register("nombre", {required: true})} className="form-control" />
                                { errors.nombre && <p className='text-danger'>Debes escribir un nombre de usuario</p> }
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nombre y apellido</label>
                                <input type="text" {...register("nombreapellido", {required: true})} className="form-control" />
                                { errors.nombreapellido && <p className='text-danger'>Debes escribir un nombre y apellido valido</p> }
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Profesion</label>
                                <input type="text" {...register("profesion", {required: true})} className="form-control" />
                                { errors.profesion && <p className='text-danger'>Debes escribir una profesion valida</p> }
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Edad</label>
                                <input type="number" {...register("edad", {required: true})} className="form-control" />
                                { errors.edad && <p className='text-danger'>Debes escribir una edad valida</p> }
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label">Telefono</label>
                            <input type="number" {...register("telefono", {required: true})} className="form-control" />
                            { errors.telefono && <p className='text-danger'>Debes escribir un telefono valido</p> }
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" {...register("correo", {required: true})} className="form-control" />
                            { errors.correo && <p className='text-danger'>Debes escribir un correo</p> }
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" {...register("contrasena", {required: true})} className="form-control" />
                            { errors.contrasena && <p className='text-danger'>La contraseña es obligatoria</p> }
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirmar Password</label>
                            <input type="password" 
                            {...register("confirmar_contrasena", 
                                {required: "Por favor digita una contraseña",
                                    validate: (value)=> value == contra || "La contraseña no coincide"
                                }) 
                            } className="form-control" />
                            { errors.confirmar_contrasena && <p className='text-danger'>{errors.confirmar_contrasena.message}</p> }
                        </div>
                        <button type="submit" className="btn btn-primary">Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
