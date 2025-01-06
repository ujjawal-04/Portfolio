'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const webDevSkills = [
  { name: 'React', icon: '/icon/react.png' },
  { name: 'Next.js', icon: '/icon/next-js.svg' },
  { name: 'JavaScript', icon: '/icon/js.png' },
  { name: 'HTML', icon: '/icon/html.png' },
  { name: 'CSS', icon: '/icon/css.png' },
  { name: 'Tailwind CSS', icon: '/icon/Tailwind CSS.png' },
]

const programmingLanguages = [
  { name: 'Python', icon: '/icon/python.png' },
  { name: 'C++', icon: '/icon/c.png' },
  { name: 'Java', icon: '/icon/java.png' },
]

const SkillGrid = ({ skills }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8"
  >
    {skills.map((skill, index) => (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
        className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-all duration-300"
      >
        <div className="w-16 h-16 relative mb-4">
          <Image src={skill.icon} alt={skill.name} layout="fill" objectFit="contain" />
        </div>
        <p className="text-lg font-medium text-indigo-900">{skill.name}</p>
      </motion.div>
    ))}
  </motion.div>
)

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-100 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold sm:text-4xl mb-12 text-center text-purple-800"
        >
          Skills
        </motion.h2>

        <div className="space-y-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-bold mb-6 text-indigo-700"
            >
              Web Development
            </motion.h3>
            <SkillGrid skills={webDevSkills} />
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold mb-6 text-indigo-700"
            >
              Programming Languages
            </motion.h3>
            <SkillGrid skills={programmingLanguages} />
          </div>
        </div>
      </div>
    </section>
  )
}