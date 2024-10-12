'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData()
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value)
    })
    
    // Add the access key to the form data
    formData.append('access_key', 'f5338bf3-8179-468f-814e-bd48f7c4ed22')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        })
        setFormState({ name: '', email: '', message: '' })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-100 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold sm:text-4xl mb-12 text-center text-purple-800"
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-800">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-indigo-900">
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Mail className="h-6 w-6 mr-2 text-purple-600" />
                    ujjawal0406@gmail.com
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Phone className="h-6 w-6 mr-2 text-purple-600" />
                    +91 8178851507
                  </motion.li>
                  <motion.li 
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Linkedin className="h-6 w-6 text-purple-600" />
                    <a href="https://www.linkedin.com/in/ujjawal-5b86a8291" target="_blank" className="text-purple-600 hover:text-purple-800 transition-colors duration-300">LinkedIn</a>
                    <Github className="h-6 w-6 text-purple-600" />
                    <a href="https://github.com/Ujjawal-04" target="_blank" className="text-purple-600 hover:text-purple-800 transition-colors duration-300">GitHub</a>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-800">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-indigo-900 mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      required
                      onChange={handleChange}
                      value={formState.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-indigo-900 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      required
                      onChange={handleChange}
                      value={formState.email}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-indigo-900 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      id="message"
                      rows="4"
                      required
                      onChange={handleChange}
                      value={formState.message}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 text-white hover:bg-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}