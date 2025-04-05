import { FC } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import SocialLinks from "../ui/SocialLinks";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { PersonalInfo, SocialLink, NavLink } from "../../types";
import {
  fetchPersonalInfo,
  fetchSocialLinks,
  fetchNavLinks,
} from "../../api/resumeApi";
import { useState, useEffect } from "react";

const Footer: FC = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [navLinks, setNavLinks] = useState<NavLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const loadFooterData = async () => {
      try {
        const [personalData, socialData, navData] = await Promise.all([
          fetchPersonalInfo(),
          fetchSocialLinks(),
          fetchNavLinks(),
        ]);

        setPersonalInfo(personalData);
        setSocialLinks(socialData);
        setNavLinks(navData);
        setLoading(false);
      } catch (err) {
        console.error("Error loading footer data:", err);
        setError("Failed to load footer information");
        setLoading(false);
      }
    };

    loadFooterData();
  }, []);

  if (loading) {
    return (
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            Loading footer information...
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {currentYear} <span className="text-primary-500">V</span>L. All
              rights reserved.
            </p>
            <p className="mt-4 sm:mt-0 text-gray-500 dark:text-gray-400 text-sm flex items-center">
              Built with{" "}
              <HeartIcon
                className="h-4 w-4 text-red-500 mx-1"
                aria-hidden="true"
              />{" "}
              using React & TypeScript
            </p>
          </div>
        </div>
      </footer>
    );
  }

  if (error || !personalInfo) {
    return (
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center text-red-600 dark:text-red-400">
            {error || "Failed to load footer information"}
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {currentYear} <span className="text-primary-500">V</span>L. All
              rights reserved.
            </p>
            <p className="mt-4 sm:mt-0 text-gray-500 dark:text-gray-400 text-sm flex items-center">
              Built with{" "}
              <HeartIcon
                className="h-4 w-4 text-red-500 mx-1"
                aria-hidden="true"
              />{" "}
              using React & TypeScript
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              About Me
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {personalInfo.bio}
            </p>
            <SocialLinks socialLinks={socialLinks} />
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              {personalInfo.phone && (
                <li>
                  <span className="font-medium">Phone:</span>{" "}
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </li>
              )}
              {personalInfo.location && (
                <li>
                  <span className="font-medium">Location:</span>{" "}
                  {personalInfo.location}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} <span className="text-primary-500">V</span>L. All
            rights reserved.
          </p>
          <p className="mt-4 sm:mt-0 text-gray-500 dark:text-gray-400 text-sm flex items-center">
            Built with{" "}
            <HeartIcon
              className="h-4 w-4 text-red-500 mx-1"
              aria-hidden="true"
            />{" "}
            using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
