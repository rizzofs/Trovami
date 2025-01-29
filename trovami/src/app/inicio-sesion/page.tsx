export default function Home() {
    return (
        //formulario de inicio de sesion
        <div>
            <form className="login-form">
                <h1>Iniciar Sesión</h1>
                <div>
                    <label>Correo Electrónico</label>
                    <input type="email" placeholder="Correo Electrónico" />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" placeholder="Contraseña" />
                </div>
                <button type="submit">Iniciar Sesión</button>
                <p>¿No tienes una cuenta? <a href="/registro">Regístrate</a></p>
            </form>
        </div>
    );
}