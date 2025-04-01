import { FC } from "react";
import { personalInfo, socialLinks } from "../../data/resume";
import SectionContainer from "../ui/SectionContainer";
import SectionTitle from "../ui/SectionTitle";
import ContactForm from "../ui/ContactForm";
import SocialLinks from "../ui/SocialLinks";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Contact: FC = () => {
  const contactItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const ContactItem = ({
    icon: Icon,
    title,
    content,
    href,
  }: {
    icon: typeof EnvelopeIcon;
    title: string;
    content: string;
    href?: string;
  }) => (
    <motion.div
      className="flex items-start space-x-4"
      variants={contactItemVariants}
    >
      <div className="rounded-full bg-primary-100 dark:bg-primary-900 p-3 flex-shrink-0">
        <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-900 dark:text-white">
          {title}
        </h4>
        {href ? (
          <a
            href={href}
            className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">{content}</p>
        )}
      </div>
    </motion.div>
  );

  return (
    <SectionContainer id="contact">
      <SectionTitle
        title="Get in Touch"
        subtitle="Let's connect and discuss your project"
        icon={EnvelopeIcon}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h3>

          <div className="space-y-6 mb-8">
            <ContactItem
              icon={EnvelopeIcon}
              title="Email"
              content={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />

            {personalInfo.phone && (
              <ContactItem
                icon={PhoneIcon}
                title="Phone"
                content={personalInfo.phone}
                href={`tel:${personalInfo.phone}`}
              />
            )}

            {personalInfo.location && (
              <ContactItem
                icon={MapPinIcon}
                title="Location"
                content={personalInfo.location}
              />
            )}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Follow Me
            </h3>
            <SocialLinks socialLinks={socialLinks} className="mt-4" />
          </div>
        </motion.div>

        <div>
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
