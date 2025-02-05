export default function Home() {
    return (
        //formulario de registro
        <div>
            <head>
                <title>Registrarse</title>
            </head>
            <form className="login-form">
                <h2>Registrate</h2>
                <div>
                    <label>Primer Nombre</label>
                    <input type="text" placeholder="primer nombre" required/>
                </div>
                <div>
                    <label>Segundo Nombre</label>
                    <input type="text" placeholder="segundo nombre"/>
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" placeholder="apellido" required/>
                </div>
                <div>
                    <label>Dirección</label>
                    <input type="text" placeholder="direccion" required/>
                </div>
                <div>
                    <label>Teléfono</label>
                    <input type="phone" placeholder="xxxx-xxxx" required/>
                </div>
                <div>
                    <label>DNI</label>
                    <input type="number" placeholder="12345678" required/>
                </div>
                <div>
                    <label>E-Mail</label>
                    <input type="email" placeholder="tuEmail@email.com" required/>
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" placeholder="contraseña" required/>
                </div>
                <div>
                    <label>Confirmar Contraseña</label>
                    <input type="password" placeholder="confirmar contraseña" required/>
                </div>
                <div>
                    <label>Carga tu servicio</label>
                    <input type="checkbox"/>
                </div>

                
            




                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}