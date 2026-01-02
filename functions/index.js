const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp();

// Función para guardar mensajes de contacto
exports.enviarMensaje = functions.https.onRequest((req, res) => {
cors(req, res, async () => {
    if (req.method !== "POST") {
    return res.status(405).send("Método no permitido");
    }

    const { nombre, correo, mensaje } = req.body;

    if (!nombre || !correo || !mensaje) {
    return res.status(400).send("Faltan campos requeridos");
    }

    try {
    await admin.firestore().collection("mensajesContacto").add({
        nombre,
        correo,
        mensaje,
        fecha: admin.firestore.Timestamp.now(),
    });
    return res.status(200).send("Mensaje enviado correctamente");
    } catch (error) {
    console.error("Error al guardar mensaje:", error);
    return res.status(500).send("Error interno del servidor");
    }
});
});
