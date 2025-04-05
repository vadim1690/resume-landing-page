import { Suspense, lazy, useState, useEffect } from "react";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import ErrorBoundary from "./components/ui/ErrorBoundary";

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

function App() {
  const [isClient, setIsClient] = useState(false);

  // This ensures hydration mismatch is avoided for lazy-loaded components
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
