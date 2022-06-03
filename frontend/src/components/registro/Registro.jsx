
import {Link} from "react-router-dom";


const Registro = () =>{

    return(
        <div className="contenedor">
            <div className="contenedor__registro">
                <div className="registro__bienvenida">

                </div>
                <form  className="form">
                    <div className="contenedor__campo">
                        <label htmlFor="">Nombre</label>
                        <input type="text" placeholder="Nombre Completo" className="campo" />
                    </div>
                    <div className="contenedor__campo">
                        <label htmlFor="">Nombre de usuario</label>
                        <input type="text" placeholder="Username" className="campo" />
                    </div>
                    <div className="contenedor__campo">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Email" className="campo" />
                    </div>
                    <div className="contenedor__campo">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Password" className="campo" />
                    </div>
                    <div className="contenedor__btn">
                        <input type="submit" value="Registrar" className="btnSend"/>
                    </div>
                </form>
                <div className="contenedor__redireccion">
                    <Link to="/" >Inicio</Link>
                    <Link to="/login" >Inicia sesion</Link>
                </div>
            </div>
        </div>
    )
};

export default Registro;