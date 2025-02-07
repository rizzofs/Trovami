import Link from 'next/link';
import './ingreso.css';

export default function Home() {
return (
<div>
    <head>
    <title>Trovami</title>
    </head>
    <div>
    <nav className="navbar">
        <div className="left-var">
        <ul>
            <li><a href="#">Inicio</a></li>
        </ul>
        </div>
        <div className="right-var">
        {/*<button className="btn-is" type="submit">Cerrar Sesion</button>*/}
        <a className="btn-is"> <Link href="/">Log Out</Link></a>
        </div>
    </nav>

    <main>
    </main>
    
    <footer>
        <p>&copy; 2025 Trovami. Todos los derechos reservados.</p>
    </footer>
    </div>
</div>
);
}

