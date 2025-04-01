import { FC } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/resume";
import SectionContainer from "../ui/SectionContainer";
import SectionTitle from "../ui/SectionTitle";
import { UserIcon } from "@heroicons/react/24/outline";

const About: FC = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionContainer id="about">
      <SectionTitle
        title="About Me"
        subtitle="My background, expertise, and passion"
        icon={UserIcon}
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative h-[500px] rounded-lg overflow-hidden"
          variants={itemVariants}
        >
          <img
            src="/images/profile.jpg"
            alt={personalInfo.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-white text-2xl font-bold">
              {personalInfo.name}
            </h3>
            <p className="text-white/80 text-lg">{personalInfo.role}</p>
          </div>
        </motion.div>

        <motion.div variants={contentVariants}>
          <motion.h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            Who I Am
          </motion.h3>

          <motion.div
            className="space-y-4 text-gray-600 dark:text-gray-300"
            variants={contentVariants}
          >
            <motion.p variants={itemVariants}>
              I'm a passionate Full Stack Developer with expertise in C#/.NET
              and React, dedicated to creating elegant solutions to complex
              problems. With a strong foundation in software architecture and
              development best practices, I'm committed to building applications
              that are not only functional but also scalable and maintainable.
            </motion.p>

            <motion.p variants={itemVariants}>
              My journey in software development began with a deep interest in
              creating efficient systems and has evolved into a career focused
              on building robust web applications and microservices. I'm
              constantly learning and adapting to new technologies, with a
              recent focus on cloud-native architectures and DevOps practices.
            </motion.p>

            <motion.p variants={itemVariants}>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I'm driven by the belief that technology
              should solve real-world problems and enhance people's lives.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-2 gap-4"
            variants={contentVariants}
          >
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">
                Location
              </h4>
              <p className="text-gray-900 dark:text-white font-medium">
                {personalInfo.location}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">
                Email
              </h4>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-900 dark:text-white font-medium hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {personalInfo.email}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};

export default About;
