// pages/api/testConnection.js
import db from '../../lib/db';

export default function handler(req, res) {
if (req.method === 'GET') {
// Realizar una consulta simple para probar la conexión
db.query('SELECT 1', (err, results) => {
    if (err) {
    console.error('Error de consulta:', err);
    return res.status(500).json({ error: 'Error de conexión con la base de datos' });
    }
    return res.status(200).json({ message: 'Conexión exitosa', results });
});
} else {
res.status(405).json({ error: 'Método no permitido' });
}
}
