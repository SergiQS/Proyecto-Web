import { useState } from "react";

// Componente funcional `Contacto`:
// - Gestiona un pequeño formulario controlado con estado local.
// - No realiza envío a servidor (simula envío mostrando un mensaje temporal).
export default function Contacto() {
  // Estado del formulario: campos controlados (nombre, email, mensaje)
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  // Estado para indicar que el formulario fue "enviado" y mostrar feedback
  const [enviado, setEnviado] = useState(false);

  // handleChange: actualiza el campo del formulario correspondiente
  // - e.target.name corresponde a la propiedad del objeto `form`
  // - se usa spread operator para mantener el resto de campos
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handleSubmit: maneja el submit del formulario
  // - previene el comportamiento por defecto (recarga de página)
  // - activa el estado `enviado` para mostrar un mensaje de éxito
  // - limpia los campos del formulario
  // - opcionalmente oculta el mensaje después de 3 segundos
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);

    // Limpiar formulario (deja los campos vacíos)
    setForm({ nombre: "", email: "", mensaje: "" });

    // Ocultar mensaje de éxito pasado un tiempo (3000 ms)
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <div className="contacto-container">
      {/* Tarjeta principal del formulario de contacto */}
      <div className="contacto-card">
        {/* Título y descripción */}
        <h2>Contacto</h2>
        <p>¿Quieres colaborar o tienes alguna duda? Escríbeme aquí abajo.</p>

        {/* Formulario controlado: onSubmit usa handleSubmit */}
        <form onSubmit={handleSubmit}>
          {/* Campo de texto para el nombre
              - name debe coincidir con la propiedad en el estado `form`
              - value enlazado a `form.nombre`
              - onChange actualiza el estado mediante handleChange */}
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          {/* Campo de email (input tipo email valida el formato básico) */}
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={form.email}
            onChange={handleChange}
            required
          />

          {/* Área de texto para el mensaje */}
          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            rows="5"
            value={form.mensaje}
            onChange={handleChange}
            required
          ></textarea>

          {/* Botón de envío: al hacer clic desencadena onSubmit */}
          <button type="submit">Enviar</button>
        </form>

        {/* Mensaje de confirmación: solo se muestra cuando `enviado` es true */}
        {enviado && (
          <p className="success">✅ ¡Tu mensaje se ha enviado correctamente!</p>
        )}
      </div>
    </div>
  );
}