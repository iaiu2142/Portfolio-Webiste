"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, Youtube, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    const mailtoLink = `mailto:dev.ilsaafzaal@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dev.ilsaafzaal@gmail.com",
      link: "mailto:dev.ilsaafzaal@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 307 9900233",
      link: "tel:+923079900233",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      link: null,
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ilsaafzaal/",
      color: "hover:text-cyan-400",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/iaiu2142",
      color: "hover:text-slate-300",
    },
    {
      icon: Youtube,
      label: "YouTube",
      link: "https://www.youtube.com/@learningwithilsa",
      color: "hover:text-cyan-400",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact <span className="text-cyan-400">Me!</span>
          </motion.h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Let's connect and explore opportunities to collaborate on exciting projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, or simply connect
                with fellow tech enthusiasts. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-cyan-500/20 p-3 rounded-lg">
                            <IconComponent className="h-5 w-5 text-cyan-400" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">{info.label}</p>
                            {info.link ? (
                              <a href={info.link} className="text-white hover:text-cyan-400 transition-colors">
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-white">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className={`bg-slate-800/50 border border-slate-700 p-3 rounded-lg text-gray-400 ${social.color} transition-colors`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-slate-700"
        >
          <p className="text-gray-400">© 2025 Copyright Ilsa ❤️ | All Rights Reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}
