'use client'
import Image from 'next/image'
import Link from 'next/link'
import introCiscoBadge from '../../public/intro-to-cyber-cisco.png'

const Education = () => {
    return (
        <section className="flex items-center justify-center px-4 text-center min-h-[60vh]" id='experience'>
            <div>
                <h2
                    className="text-4xl md:text-5xl font-extrabold text-gray-800 text-end mb-12"
                >
                    Formación y certificados
                </h2>
                <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-end mb-2">
                        Máster de full-stack Development / Octubre 2023 - Mayo 2024
                    </h3>
                    <h4 className="text-2xl md:text-2xl font-extrabold text-gray-600 text-end mb-2">Nuclio Digital School</h4>
                    <p className='text-xl md:text-xl text-gray-800 text-end font-semibold'>
                        Máster en Desarrollo Full-Stack de Nuclio Digital School (octubre 2023 – marzo 2024), que cursé de forma intensiva y online cubriendo conocimientos de front y back end. Aprendí y apliqué tecnologías clave —React, JavaScript (HTML, CSS y Tailwind), Node.js, WebSockets y MongoDB— y profundicé en protocolos web, buenas prácticas de código y seguridad en el desarrollo.

                        Trabajé bajo metodologías ágiles (SCRUM) y utilicé flujos de versión con Git y procesos de integración continua/entrega continua (CI/CD). Gracias a los proyectos prácticos, reforcé mis habilidades de comunicación, adaptabilidad, trabajo en equipo y mediación, desarrollando soluciones reales de principio a fin y colaborando eficazmente con mis compañeros para garantizar la calidad y escalabilidad de las aplicaciones.
                    </p>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-end mb-2 mt-20">
                    Certificados
                </h3>
                <div className='flex flex-row justify-start my-10'>
                    <Link href={'https://www.credly.com/badges/a7977946-0f4d-4319-972c-d32b61dca599/public_url'} target='_blank'>
                        <Image src={introCiscoBadge} alt="" width={240} height={240} className='hover:opacity-70 transition-all transition-duration-300'></Image>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Education