import React from 'react'

const Experience = () => {
    return (
        <section className="flex items-center justify-center px-4 text-center min-h-[60vh]" id='experience'>
            <div>
                <h2
                    className="text-4xl md:text-5xl font-extrabold text-gray-800 text-start mb-12"
                >
                    Experiencia
                </h2>
                <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-start mb-2">
                        eStudents / Septiembre 2024 - Actualidad
                    </h3>
                    <h4 className="text-2xl md:text-2xl font-extrabold text-gray-600 text-start mb-2">Desarrollador web fullstack</h4>
                    <p className='text-xl md:text-xl text-gray-800 text-start font-semibold'>
                        eStudents es una start-up en la que ocupo el rol de programador full-stack, encargándome del diseño, implementación y despliege de la web, desde la
                        base de datos hasta la interfaz de usuario. Además, desempeño algunas otras funciones, como DevOps. <br />
                        En este puesto utilizo una gran variedad de lenguajes y frameworks, como Next, Node, MongoDB, Tailwind, React, TypeScript, etc.
                        Utilizo LLMs para agilizar y optimizar mis tareas y elaboro documentación e informes diarios sobre los cambios y actualizaciones para mis compañeros.
                        También participo en las reuniones en las que se deciden los siguientes pasos y los objetivos a cumplir.
                    </p>
                    <p className='text-xl md:text-xl text-gray-900 text-start font-bold mt-2'>El sitio principal aún se encuentra en fase de desarrollo,
                        puedes visitar la landing clicando en la imagen de la sección de proyectos</p>

                </div>
            </div>
        </section>
    )
}

export default Experience