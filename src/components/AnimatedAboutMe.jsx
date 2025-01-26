import { motion } from 'framer-motion';

export default function AnimatedAboutMe() {
  return (
    <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"
      >
        <p>
          ¡Hola! Soy <strong>Albert</strong>, desarrollador Full-Stack con 
          especialización en Backend. Mi stack tecnológico incluye <strong>
          C# con .NET para el desarrollo de APIs RESTful y arquitecturas de microservicios,
          bases de datos SQL y NoSQL, así como experiencia en el ecosistema JavaScript
          con TypeScript, React y Angular</strong>.
        </p>

        <p>
          Mi enfoque principal es el <strong>desarrollo de soluciones escalables y 
          mantenibles</strong>, con especial atención en las buenas prácticas y patrones 
          de diseño. Me destaco por mi capacidad de <strong>adaptación a nuevas tecnologías
          y mi compromiso con el aprendizaje continuo</strong>. Busco una oportunidad para 
          aportar valor desde mi experiencia full-stack, con particular énfasis en el 
          desarrollo backend y arquitectura de sistemas.
        </p>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        width="200"
        height="200"
        src="/IMG_6490.jpg"
        alt="Albert"
        className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"
        style={{ objectPosition: '50% 50%' }}
      />
    </article>
  );
} 