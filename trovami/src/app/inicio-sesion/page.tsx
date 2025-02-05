export default function Home() {
    return (
        



        //formulario de inicio de sesion
        <div className="login-container">
            <head>
                <title>Iniciar Sesión</title>
            </head>
            <form className="login-form">
                <h2>Iniciar Sesión</h2>
                <div>
                    <label>Correo Electrónico</label>
                    <input type="email" placeholder="Correo Electrónico" />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" placeholder="Contraseña" />
                </div>
                <button type="submit">Iniciar Sesión</button>
                <br /><br />
                <p>¿No tienes una cuenta? <a href="/registro">Regístrate</a></p>
            </form>
        </div>
    );
}