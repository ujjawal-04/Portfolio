'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: 'WebNotes',
    description: 'A platform providing notes to students, built with Next.js and Firebase.',
    image: '/image/webnotes.JPG',
    link: 'https://webnotesss.vercel.app/',
    github: 'https://github.com/Ujjawal-04/webnotes',
    tech: ['Next.js', 'Firebase', 'Tailwind CSS']
  },
  {
    title: 'ChatForge',
    description: 'A customizable chatbot solution',
    image: '/image/ChatForge.JPG',
    link: 'https://chatforge.vercel.app/',
    github: 'https://github.com/ujjawal-04/ChatForge--frontend',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'Machine Learning', 'LangGraph']
  },
  {
    title: 'Soulscape',
    description: 'A gateway to experiencing the magic of India.',
    image: '/image/soulscape.JPG',
    link: 'https://soulscape123.vercel.app/',
    github: 'https://github.com/Ujjawal-04/soulscape',
    tech: ['Next.js', 'Tailwind CSS', 'JSON','EmailJS']
  },
  {
    title: 'DataHub',
    description: 'A HUb for learning types of data structure & Algo\'s\'.',
    image: '/image/datahub.JPG',
    link: 'https://data-structure-hub.vercel.app/',
    github: 'https://github.com/ujjawal-04/DataHub',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript']
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-100 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold sm:text-4xl mb-12 text-center text-purple-800"
        >
          Projects
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    layout="fill" 
                    objectFit="cover" 
                    className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-purple-800">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-indigo-900 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 bg-opacity-90 flex items-center justify-center"
                >
                  <div className="text-center p-2">
                    <h3 className="text-2xl font-bold mb-1 text-white">{project.title}</h3>
                    <p className="mb-2 text-white">{project.description}</p>
                    <div className="flex justify-center space-x-4">
                      <Button
                        variant="secondary"
                        className="inline-flex items-center"
                        asChild
                      >
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Explore Project
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="inline-flex items-center bg-white text-purple-600 hover:bg-gray-100"
                        asChild
                      >
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Explore Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}