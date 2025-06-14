"use client"

import { useState, useEffect } from "react"
import Container from "@/components/layout/container"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { RiLinkedinBoxFill, RiTwitterFill, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"

const team = [
  {
    name: "Aniekan Edemenang",
    role: "COO",
    image: "/team/sarah.jpg",
    bio: "Operations expert ensuring smooth execution of our product roadmap and maintaining high quality standards.",
    expertise: ["Project Management", "Process Optimization", "Client Relations"],
    social: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
    },
  },
  {
    name: "Victoria Obalana",
    role: "CFO",
    image: "/team/michael.jpg",
    bio: "Financial strategist with deep understanding of the Nigerian business landscape and investment opportunities.",
    expertise: ["Financial Planning", "Investment Strategy", "Risk Management"],
    social: {
      linkedin: "https://linkedin.com/in/michaelokonkwo",
      twitter: "https://twitter.com/michaelokonkwo",
    },
  },
  {
    name: "Abigail Patricks",
    role: "CMO",
    image: "/team/amina.jpg",
    bio: "Marketing innovator with expertise in digital strategies that connect our platforms with their target users.",
    expertise: ["Digital Marketing", "Brand Strategy", "Market Research"],
    social: {
      linkedin: "https://linkedin.com/in/aminabello",
      twitter: "https://twitter.com/aminabello",
    },
  },
  {
    name: "Benedict Nwanze",
    role: "CTO",
    image: "/team/david.jpg",
    bio: "Technology leader focused on building scalable and innovative digital platforms that address real-world challenges.",
    expertise: ["Product Development", "Technology Strategy", "Innovation"],
    social: {
      linkedin: "https://linkedin.com/in/davidadeyemi",
      twitter: "https://twitter.com/davidadeyemi",
    },
  },
  {
    name: "Randalf Ehigiator",
    role: "CEO",
    image: "/team/john.jpg",
    bio: "Visionary leader with a passion for building digital platforms that solve critical problems in Nigeria.",
    expertise: [
      "Business Strategy",
      "Product Vision",
      "Team Leadership",
    ],
    social: {
      linkedin: "https://linkedin.com/in/johnsmith",
      twitter: "https://twitter.com/johnsmith",
    },
  },
]

export default function Team() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = team.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Auto-advance slides on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
          <h2 className="text-3xl font-bold mb-4">Meet Our Founders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Led by passionate entrepreneurs with a vision to build scalable digital platforms
            that solve critical problems in Nigeria.
          </p>
        </motion.div>

        {/* Mobile Slider View */}
        <div className="md:hidden">
          <div className="relative">
            <motion.div
              key={team[currentSlide].name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="relative bg-card rounded-xl shadow-md p-4 space-y-4 h-full flex flex-col">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 mb-3">
                    <Image
                      src={team[currentSlide].image}
                      alt={team[currentSlide].name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{team[currentSlide].name}</h3>
                    <p className="text-primary text-sm">{team[currentSlide].role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm flex-grow">{team[currentSlide].bio}</p>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Expertise:</h4>
                  <div className="flex flex-wrap gap-1">
                    {team[currentSlide].expertise.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-3 pt-2">
                  <Link
                    href={team[currentSlide].social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <RiLinkedinBoxFill className="w-5 h-5" />
                  </Link>
                  <Link
                    href={team[currentSlide].social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <RiTwitterFill className="w-5 h-5" />
                  </Link>
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            </motion.div>

            {/* Slider Navigation */}
            <div className="flex justify-between mt-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <RiArrowLeftSLine className="w-5 h-5" />
              </Button>

              <div className="flex gap-1 items-center">
                {team.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-primary' : 'bg-muted'}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <RiArrowRightSLine className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-card rounded-xl shadow-md p-4 space-y-4 h-full flex flex-col">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 mb-3">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-primary text-sm">{member.role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm flex-grow">{member.bio}</p>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Expertise:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-3 pt-2">
                  <Link
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <RiLinkedinBoxFill className="w-5 h-5" />
                  </Link>
                  <Link
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <RiTwitterFill className="w-5 h-5" />
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
