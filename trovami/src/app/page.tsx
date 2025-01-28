import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main>

        <div>
            <Image
              // className="dark:invert"
              src="/LogoTrovami.png"
              alt="Vercel logomark"
              width={600}
              height={400}
            />
        </div>

        <header>
        <p>Conecta a trabajadores no registrados con clientes que los necesitan</p>

    </header>
    
        <nav className="navbar">
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#acercade">Acerca de</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
        <div>
            <a href="/inicio-sesion" className="btn">Iniciar Sesión</a>
            <a href="/registro" className="btn">Registrarse</a>
        </div>
        </nav>

    <section className="hero">
        <h1>Encuentra el talento adecuado para cualquier tarea</h1>
        <p>Trovami te permite contactar con personas calificadas en diversas áreas</p>
    </section>

    <section className="features">
        <div className="feature">
            <h2>Fácil de usar</h2>
            <p>Regístrate y publica tu servicios en minutos. Los clientes interesados te contactarán directamente.</p>
        </div>
        <div className="feature">
            <h2>Variedad de categorías</h2>
            <p>Encuentra soluciones en múltiples áreas: construcción, limpieza, jardineria y más.</p>
        </div>
        <div className="feature">
            <h2>Empoderando a los trabajadores</h2>
            <p>Ayudamos a trabajadores no registrados a encontrar oportunidades de empleo sin intermediarios.</p>
        </div>
        <div className="feature">
            <h2>Conexiones confiables</h2>
            <p>Consulta las calificaciones y recomendaciones de otros usuarios antes de contratar.</p>
        </div>
    </section>

      </main>
      <footer>
        <p>&copy; 2025 Trovami. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
