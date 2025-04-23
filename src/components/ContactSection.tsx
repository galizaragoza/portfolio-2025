// components/ContactSection.tsx
"use client";
import Link from "next/link";
import { contacts } from "@/data/contacts";

export default function ContactSection() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="min-h-screen py-20"
        >
            <div className="max-w-3xl mx-auto text-center px-4">
                {/* Título principal */}
                <h2
                    id="contact-heading"
                    className="text-5xl font-extrabold text-gray-900 mb-4"
                >
                    ¡Hablemos!
                </h2>

                {/* Subtítulo / llamada a la acción */}
                <p className="text-lg text-gray-600 mb-12">
                    ¿Tienes un proyecto en mente o te ha gustado mi perfil profesional? <br />
                    Escríbeme y conversemos sobre cómo podemos colaborar, o coméntame sobre tu oferta laboral.
                </p>

                {/* Iconos de redes */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
                    {contacts.map(({ Icon, href, label, color }) => (
                        <Link
                            key={label}
                            href={href}
                            target="_blank"
                            aria-label={label}
                            className="flex flex-col items-center space-y-2 transform hover:scale-110 transition-transform"
                        >
                            <Icon size={56} style={color ? { color } : undefined} />
                            <span className="text-sm font-medium text-gray-700">{label}</span>
                        </Link>
                    ))}
                </div>

                {/* Enlaces a CV */}
                <div className="space-y-4">
                    <Link href={'/resume'} className="text-xl text-gray-600 hover:text-gray-800 transition-colors p-8">Resume</Link>
                    <Link href={'/curriculum'} className="text-xl text-gray-600 hover:text-gray-800 transition-colors p-8">Curriculum</Link>
                </div>
            </div>
        </section>
    );
}
