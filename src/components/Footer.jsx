'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, Phone, ArrowUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-purple-900/80 backdrop-blur-md shadow-lg rounded-lg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white">Ujjawal</h3>
            <p className="mt-2 text-white">Professional Web Developer</p>
            <div className="mt-4 flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/ujjawal-5b86a8291"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/Ujjawal-04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-800 hover:text-gray-900 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Github size={24} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a href={`#${item.toLowerCase()}`} className="text-white hover:text-indigo-100 transition-colors duration-300">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-white">
                <Mail size={18} className="mr-2 text-blue-500" />
                ujjawal0406@gmail.com
              </li>
              <li className="flex items-center text-white">
                <Phone size={18} className="mr-2 text-green-500" />
                +91 8178851507
              </li>
            </ul>
          </motion.div>
        </div>
        
        <Separator className="my-8 bg-indigo-200" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4">
          <p className="text-white text-lg text-center">
            &copy; {new Date().getFullYear()} Ujjawal. All rights reserved.
          </p>
        </motion.div>
      </div>
      
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8"
        >
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full bg-purple-400 text-white hover:bg-purple-200"
            onClick={scrollToTop}
          >
            <ArrowUp size={24} />
          </Button>
        </motion.div>
      )}
    </footer>
  )
}