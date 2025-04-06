import { Suspense, lazy, useState, useEffect, createContext } from "react";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import { useResumeData } from "./hooks/useResumeData";
import {
  PersonalInfo,
  NavLink,
  SocialLink,
  Experience as ExperienceType,
  Education as EducationType,
  SkillCategory,
  Project,
} from "./types";

// Dynamically import non-critical sections for better initial load performance
const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Education = lazy(() => import("./components/sections/Education"));
const Contact = lazy(() => import("./components/sections/Contact"));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-16">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary-500"></div>
  </div>
);

// Create a context to share resume data
interface ResumeContextType {
  personalInfo: PersonalInfo | null;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  experiences: ExperienceType[];
  education: EducationType[];
  skillCategories: SkillCategory[];
  projects: Project[];
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

export const ResumeContext = createContext<ResumeContextType | null>(null);

function App() {
  const [isClient, setIsClient] = useState(false);

  // Get resume data
  const resumeData = useResumeData();

  // This ensures hydration mismatch is avoided for lazy-loaded components
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Format error message to be more user-friendly
  const formatErrorMessage = (error: string | null) => {
    if (!error) return null;

    if (error.includes("Failed to fetch")) {
      return "Could not connect to the resume server. Please check your connection or try again later.";
    }

    return error;
  };

  // User-friendly error message
  const errorMessage = formatErrorMessage(resumeData.error);

  return (
    <ResumeContext.Provider value={resumeData}>
      <Layout>
        <div className="container mx-auto px-4">
          {resumeData.loading ? (
            <div className="text-center py-8">
              <SectionLoader />
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Loading resume data...
              </p>
            </div>
          ) : errorMessage ? (
            <div className="text-center py-8">
              <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                <p className="text-red-600 dark:text-red-400">{errorMessage}</p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  onClick={resumeData.refreshData}
                >
                  Retry
                </button>
              </div>
            </div>
          ) : (
            <>
              <ErrorBoundary
                fallback={
                  <div className="text-center p-8 text-red-500">
                    Something went wrong loading the hero section
                  </div>
                }
              >
                <Hero />
              </ErrorBoundary>

              {isClient && (
                <>
                  <ErrorBoundary
                    fallback={
                      <div className="text-center p-8 text-red-500">
                        Something went wrong loading the about section
                      </div>
                    }
                  >
                    <Suspense fallback={<SectionLoader />}>
                      <About />
                    </Suspense>
                  </ErrorBoundary>

                  <ErrorBoundary
                    fallback={
                      <div className="text-center p-8 text-red-500">
                        Something went wrong loading the skills section
                      </div>
                    }
                  >
                    <Suspense fallback={<SectionLoader />}>
                      <Skills />
                    </Suspense>
                  </ErrorBoundary>

                  <ErrorBoundary
                    fallback={
                      <div className="text-center p-8 text-red-500">
                        Something went wrong loading the projects section
                      </div>
                    }
                  >
                    <Suspense fallback={<SectionLoader />}>
                      <Projects />
                    </Suspense>
                  </ErrorBoundary>

                  <ErrorBoundary
                    fallback={
                      <div className="text-center p-8 text-red-500">
                        Something went wrong loading the experience section
                      </div>
                    }
                  >
                    <Suspense fallback={<SectionLoader />}>
                      <Experience />
                    </Suspense>
                  </ErrorBoundary>

                  <ErrorBoundary
                    fallback={
                      <div className="text-center p-8 text-red-500">
                        Something went wrong loading the education section
                      </div>
                    }
                  >
                    <Suspense fallback={<SectionLoader />}>
                      <Education />
                    </Suspense>
                  </ErrorBoundary>

                  <ErrorBoundary
                    fallback={
                      <div className="text-center p-8 text-red-500">
                        Something went wrong loading the contact section
                      </div>
                    }
                  >
                    <Suspense fallback={<SectionLoader />}>
                      <Contact />
                    </Suspense>
                  </ErrorBoundary>
                </>
              )}
            </>
          )}
        </div>
      </Layout>
    </ResumeContext.Provider>
  );
}

export default App;
