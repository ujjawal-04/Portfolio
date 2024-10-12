'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-100 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold sm:text-4xl mb-12 text-center text-purple-800"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-xl text-indigo-900 leading-relaxed">
            I'm a passionate web developer with expertise in the MERN stack, React, and Next.js. 
            Currently pursuing my B.Tech in Computer Science & Engineering at Dr. Akhilesh Das Gupta 
            Institute of Technology & Management (ADGIPS), I'm always eager to learn and apply new technologies 
            to create efficient and scalable web solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl font-bold mb-6 text-purple-800"
          >
            Education
          </motion.h3>
          <ul className="space-y-6">
            {[
              {
                title: "B.Tech in Computer Science & Engineering",
                institution: "Dr. Akhilesh Das Gupta Institute of Technology & Management (ADGIPS)",
                details: "Expected Graduation: Nov 2026 | Current CGPA: 9.2"
              },
              {
                title: "12th CBSE Board",
                institution: "GSBV Krishna Nagar Delhi-110051 (2021)",
                details: "Score: 90%"
              },
              {
                title: "10th CBSE Board",
                institution: "Puneet Public School Vishwas Nagar Delhi-110032 (2019)",
                details: "Score: 90%"
              }
            ].map((edu, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              >
                <h4 className="text-lg font-semibold text-purple-900 mb-2">{edu.title}</h4>
                <p className="text-indigo-800 mb-1">{edu.institution}</p>
                <p className="text-purple-700">{edu.details}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}