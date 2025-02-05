// pages/api/register.js
import db from '../../lib/db'; // Importamos la conexión a la base de datos

export default async function handler(req, res) {
if (req.method === 'POST') {
const { primerNombre, segundoNombre, apellido, direccion, telefono, dni, email, password, servicio } = req.body;

// Validación básica
if (!primerNombre || !apellido || !direccion || !telefono || !dni || !email || !password) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
}

// Validación si la contraseña tiene al menos 6 caracteres
if (password.length < 6) {
    return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres' });
}

try {
    // Consulta SQL para insertar el nuevo usuario en la base de datos
    const query = `
    INSERT INTO usuarios (primerNombre, segundoNombre, apellido, direccion, telefono, dni, email, password, servicio)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // Ejecutamos la consulta
    db.query(query, [primerNombre, segundoNombre, apellido, direccion, telefono, dni, email, password, servicio], (err, results) => {
    if (err) {
        console.error('Error al registrar usuario:', err);
        return res.status(500).json({ error: 'Error al registrar el usuario' });
    }

    // Si todo está bien, respondemos con éxito
    res.status(200).json({ message: 'Usuario registrado exitosamente' });
    });
} catch (error) {
    console.error('Error en la API:', error);
    res.status(500).json({ error: 'Error en el servidor' });
}
} else {
// Si no es un POST, devolvemos un error de método no permitido
res.status(405).json({ error: 'Método no permitido' });
}
}
