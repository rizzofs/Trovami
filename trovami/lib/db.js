import mysql from 'mysql2';


const connection = mysql.createConnection({
  host: 'localhost', // El host de la base de datos, puede ser 'localhost' o una IP
  user: 'root', // El nombre de usuario de la base de datos
  password: '42392323', // La contraseña de tu base de datos
  database: 'server370', // El nombre de la base de datos
});

// Verifica si la conexión fue exitosa
connection.connect(err => {
if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
}
console.log('Conexión exitosa a la base de datos');
});

// Exporta la conexión para usarla en otras partes de la aplicación
export default connection;