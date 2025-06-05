"use client"

import Container from "@/components/layout/container"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { RiLinkedinBoxFill, RiGithubFill, RiTwitterFill } from "react-icons/ri"

const team = [
  {
    name: "John Smith",
    role: "CEO",
    image: "/team/john.jpg",
    bio: "Visionary leader with 15+ years in software development and business strategy for Nigerian enterprises.",
    expertise: [
      "Business Strategy",
      "Software Development",
      "Team Leadership",
    ],
    social: {
      linkedin: "https://linkedin.com/in/johnsmith",
      github: "https://github.com/johnsmith",
      twitter: "https://twitter.com/johnsmith",
    },
  },
  {
    name: "Sarah Johnson",
    role: "COO",
    image: "/team/sarah.jpg",
    bio: "Operations expert ensuring smooth delivery of all projects and maintaining our high quality standards.",
    expertise: ["Project Management", "Process Optimization", "Client Relations"],
    social: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      github: "https://github.com/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
    },
  },
  {
    name: "Michael Okonkwo",
    role: "CFO",
    image: "/team/michael.jpg",
    bio: "Financial strategist with deep understanding of the Nigerian business landscape and investment opportunities.",
    expertise: ["Financial Planning", "Investment Strategy", "Risk Management"],
    social: {
      linkedin: "https://linkedin.com/in/michaelokonkwo",
      github: "https://github.com/michaelokonkwo",
      twitter: "https://twitter.com/michaelokonkwo",
    },
  },
  {
    name: "Amina Bello",
    role: "CMO",
    image: "/team/amina.jpg",
    bio: "Marketing innovator with expertise in digital strategies that connect Nigerian businesses with their ideal customers.",
    expertise: ["Digital Marketing", "Brand Strategy", "Market Research"],
    social: {
      linkedin: "https://linkedin.com/in/aminabello",
      github: "https://github.com/aminabello",
      twitter: "https://twitter.com/aminabello",
    },
  },
]

export default function Team() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Led by passionate tech entrepreneurs with extensive experience in
            software development and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-card rounded-xl shadow-md p-6 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground">{member.bio}</p>

                <div className="space-y-4">
                  <h4 className="font-medium">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Link
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <RiLinkedinBoxFill className="w-6 h-6" />
                  </Link>
                  <Link
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <RiGithubFill className="w-6 h-6" />
                  </Link>
                  <Link
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <RiTwitterFill className="w-6 h-6" />
                  </Link>
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
