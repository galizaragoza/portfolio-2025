import React from "react";

const ContactSection = () => {
  return (
    <section className="flex mt-20 px-4 text-center min-h-[60vh]" id="contact">
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-12">
          Hablemos
        </h2>
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center mb-2">
            Si tienes una duda, un proyecto en mente o estás reclutando y te ha
            interesado mi perfil, por favor, no dudes en contactarme vía
            LinkedIn o email (tienes ambos enlaces en la esquina superior
            izquierda).
          </h3>
          <h4 className="text-2xl md:text-2xl font-extrabold text-gray-600 text-center mb-2">
            {" "}
            También puedes escribirme a: galizaragozadev@gmail.com
          </h4>
          <p className="text-xl md:text-xl text-gray-800 text-center font-semibold">
            Te haré un hueco lo antes posible para que podamos reunirnos y profundizar en los detalles del motivo de tu contacto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
