
    let indice = 0;

    function actualizarCarrusel() {
      document.getElementById("imagenProducto").src = productos[indice].imagen;
      document.getElementById("tituloProducto").textContent = productos[indice].nombre;
    }

    function moverIzquierda() {
      indice = (indice - 1 + productos.length) % productos.length;
      actualizarCarrusel();
    }

    function moverDerecha() {
      indice = (indice + 1) % productos.length;
      actualizarCarrusel();
    }

    actualizarCarrusel();
    // Importar módulos necesarios desde el SDK online
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// 🔹 Tu configuración de Firebase (ya con tus datos)
const firebaseConfig = {
  apiKey: "AIzaSyCNaHrzsCTgvwrFGibBwQxf3oe0uJurWCI",
  authDomain: "shop-portafolio.firebaseapp.com",
  projectId: "shop-portafolio",
  storageBucket: "shop-portafolio.firebasestorage.app",
  messagingSenderId: "671919680259",
  appId: "1:671919680259:web:c8009e0fdb93682f305736",
  measurementId: "G-2VSDHYWMDE"
};

// 🔹 Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔹 Capturar el formulario
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = form.querySelector('input[type="text"]').value.trim();
  const correo = form.querySelector('input[type="email"]').value.trim();
  const mensaje = form.querySelector('textarea').value.trim();

  if (!nombre || !correo || !mensaje) {
    alert("Por favor completá todos los campos.");
    return;
  }

  try {
    // Guardar en Firestore
    await addDoc(collection(db, "mensajes-contacto"), {
      nombre,
      correo,
      mensaje,
      fecha: new Date().toISOString()
    });

    alert("✅ ¡Mensaje enviado correctamente!");
    form.reset();
  } catch (error) {
    console.error("Error al enviar mensaje:", error);
    alert("❌ Ocurrió un error al enviar el mensaje.");
  }
});
