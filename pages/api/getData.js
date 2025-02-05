// pages/api/getData.js
import db from '../../lib/db';

export default function handler(req, res) {
if (req.method === 'GET') {
// Realiza una consulta a la base de datos
db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
    return res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
    }
    res.status(200).json(results); // Devuelve los resultados como respuesta JSON
});
} else {
// Si el método HTTP no es GET, devuelve un error 405 (Método no permitido)
res.status(405).json({ error: 'Método no permitido' });
}
}
