🎮 TiendaReact - Gestor de Videojuegos
Este proyecto es una evolución de mi tienda en React, adaptada ahora como un gestor interactivo de videojuegos. La idea principal fue pasar de una estructura estática a una aplicación totalmente dinámica, conectando componentes mediante props, manejando estados fluidos y aprovechando efectos secundarios para simular el comportamiento de una API real.

🚀 ¿Qué se puede hacer en la app?
Catálogo Dinámico: Los juegos del catálogo se cargan de forma automática al iniciar la aplicación gracias al hook useEffect.

Carrito Interactivo: Puedes agregar juegos, ajustar las cantidades sumando o restando unidades, o eliminar productos por completo con total libertad.

Cálculos al Vuelo: El sistema calcula de manera automática el total de productos y el monto exacto a pagar utilizando métodos nativos de JavaScript.

Buscador con Filtros: Si buscas un título que no está en la lista, la interfaz reacciona de inmediato mostrando un aviso de que no hay coincidencias.

Mensajes Condicionales: Si el carrito se queda sin productos, aparece un mensaje avisando que está vacío en lugar de dejar la sección en blanco.

📱 Diseño y Adaptabilidad
Todo el diseño está armado utilizando las clases y el sistema de grillas de Bootstrap 5, lo que permite que la interfaz se vea ordenada tanto en pantallas grandes de escritorio como en dispositivos móviles, acomodando las columnas del catálogo y el panel del carrito de forma responsiva.

🧠 Estructura del Código
Para mantener el orden y la lógica limpia, organicé el proyecto en componentes clave:

App.jsx: Es el componente principal. Aquí centralizo los estados globales (useState) tanto para los productos como para el carrito, además de manejar la carga inicial de datos.

VideojuegoCard.jsx: Se encarga de pintar cada tarjeta de los juegos de forma independiente, recibiendo la información a través de props.

Carrito.jsx: Procesa la información de los ítems seleccionados para mostrarlos ordenados y calcular los totales financieros en tiempo real.

🛠️ Cómo correrlo en local
Clona este repositorio y asegúrate de instalar las dependencias:

Bash
npm install
Inicia el servidor de desarrollo local con Vite:

Bash
npm run dev
Abre el enlace que te entrega la terminal (por lo general http://localhost:5173) en tu navegador.

## 📸 Evidencias de Funcionamiento

1. **Estado inicial de la aplicación (Catálogo cargado y carrito vacío):**
   ![Estado Inicial](./capturas/estado-inicial.jpg)

2. **Carrito de compras funcionando (con productos agregados, totales y cantidades):**
   ![Catálogo y Carrito](./capturas/catalogo-carrito.jpg)

3. **Renderizado condicional en acción (Aviso de "Sin coincidencias" en el buscador):**
   ![Renderizado Condicional](./capturas/renderizado-condicional.png)