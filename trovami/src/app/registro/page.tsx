'use client'; 
import { useState } from 'react';

export default function Home() {
// Definimos los estados para cada uno de los campos del formulario
const [primerNombre, setPrimerNombre] = useState('');
const [segundoNombre, setSegundoNombre] = useState('');
const [apellido, setApellido] = useState('');
const [direccion, setDireccion] = useState('');
const [telefono, setTelefono] = useState('');
const [dni, setDni] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

const [message, setMessage] = useState('');

// Función para manejar el envío del formulario
interface FormData {
    primerNombre: string;
    segundoNombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    dni: string;
    email: string;
    password: string;
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación básica (puedes agregar más validaciones según sea necesario)
    if (password !== confirmPassword) {
        setMessage('Las contraseñas no coinciden');
        return;
    }

    if (!primerNombre || !apellido || !direccion || !telefono || !dni || !email || !password) {
        setMessage('Todos los campos son obligatorios');
        return;
    }

    try {
        // Enviar datos al backend (API)
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                primerNombre,
                segundoNombre,
                apellido,
                direccion,
                telefono,
                dni,
                email,
                password,
            } as FormData),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage('Usuario registrado exitosamente');
        } else {
            setMessage(data.error || 'Error al registrar usuario');
        }
    } catch (error) {
        setMessage('Error en la conexión con el servidor');
    }
};

return (
<div>
    <head>
    <title>Registrarse</title>
    </head>
    <form className="login-form" onSubmit={handleSubmit}>
    <h2>Registrate</h2>

    {/* Campos del formulario */}
    <div>
        <label>Primer Nombre</label>
        <input
        type="text"
        placeholder="primer nombre"
        value={primerNombre}
        onChange={(e) => setPrimerNombre(e.target.value)}
        required
        />
    </div>
    <div>
        <label>Segundo Nombre</label>
        <input
        type="text"
        placeholder="segundo nombre"
        value={segundoNombre}
        onChange={(e) => setSegundoNombre(e.target.value)}
        />
    </div>
    <div>
        <label>Apellido</label>
        <input
        type="text"
        placeholder="apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        required
        />
    </div>
    <div>
        <label>Dirección</label>
        <input
        type="text"
        placeholder="direccion"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
        required
        />
    </div>
    <div>
        <label>Teléfono</label>
        <input
        type="phone"
        placeholder="xxxx-xxxx"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        required
        />
    </div>
    <div>
        <label>DNI</label>
        <input
        type="number"
        placeholder="12345678"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
        required
        />
    </div>
    <div>
        <label>E-Mail</label>
        <input
        type="email"
        placeholder="tuEmail@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
    </div>
    <div>
        <label>Contraseña</label>
        <input
        type="password"
        placeholder="contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
    </div>
    <div>
        <label>Confirmar Contraseña</label>
        <input
        type="password"
        placeholder="confirmar contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        />
    </div>

    <button type="submit">Registrarse</button>

    {/* Mensajes de error o éxito */}
    {message && <p>{message}</p>}
    </form>
</div>
);
}
