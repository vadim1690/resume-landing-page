import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { PersonalInfo, SocialLink } from "../../types";
import { fetchPersonalInfo, fetchSocialLinks } from "../../api/resumeApi";
import { useState, useEffect } from "react";
import SocialLinks from "../ui/SocialLinks";

const Hero: FC = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHeroData = async () => {
      try {
        const [personalData, socialData] = await Promise.all([
          fetchPersonalInfo(),
          fetchSocialLinks(),
        ]);

        setPersonalInfo(personalData);
        setSocialLinks(socialData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching hero data:", err);
        setError("Failed to load data");
        setLoading(false);
      }
    };

    loadHeroData();
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  if (loading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 z-0" />
        <div className="text-center text-gray-600 dark:text-gray-400 z-10">
          Loading profile information...
        </div>
      </section>
    );
  }

  if (error || !personalInfo) {
    return (
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 z-0" />
        <div className="text-center text-red-600 dark:text-red-400 z-10">
          {error || "Failed to load profile information"}
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center px-4 overflow-hidden">
      {/* Background with subtle color */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 z-0" />

      {/* Subtle background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-100/30 dark:bg-blue-900/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-indigo-100/30 dark:bg-indigo-900/10 blur-3xl"></div>

      {/* Background dots pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIiBjeD0iMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9zdmc+')] bg-repeat bg-[length:20px_20px] opacity-30 z-0" />

      <div className="container mx-auto z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="text-gray-900 dark:text-white">I'm </span>
            <span className="text-primary-600">{personalInfo.name}</span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl font-medium text-gray-800 dark:text-gray-200 mb-8"
            variants={itemVariants}
          >
            <span className="text-secondary-600 dark:text-secondary-400">
              {personalInfo.role}
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {personalInfo.summary ||
              "Building modern web applications with C#/.NET and React. Passionate about creating scalable architecture and delivering exceptional user experiences."}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div className="mb-12" variants={itemVariants}>
            <SocialLinks socialLinks={socialLinks} className="justify-center" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <button
              onClick={scrollToNextSection}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 shadow-md hover:text-primary-700 dark:hover:text-primary-300 focus:outline-none transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDownIcon className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
