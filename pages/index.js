// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
const [data, setData] = useState([]);

// Llamada a la API para obtener los datos cuando el componente se monta
useEffect(() => {
fetch('/api/getData')
    .then(response => response.json()) // Convierte la respuesta en JSON
    .then(data => setData(data)) // Guarda los datos en el estado
    .catch(error => console.error('Error al obtener los datos:', error));
}, []); // Este hook solo se ejecuta una vez cuando el componente se monta

return (
<div>
    <h1>Datos de la Base de Datos</h1>
    <ul>
    {data.map(item => (
        <li key={item.id}>{item.nombre}</li> // Cambia estos campos según tu tabla
    ))}
    </ul>
</div>
);
}
