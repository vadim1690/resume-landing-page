// SectionTitle.tsx - Updated for CI/CD testing
import { FC } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const SectionTitle: FC<SectionTitleProps> = ({
  title,
  subtitle,
  icon: Icon,
}) => {
  return (
    <div className="flex flex-col items-center mb-10">
      {Icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 mb-4">
          <Icon
            className="w-6 h-6 text-primary-600 dark:text-primary-400"
            aria-hidden="true"
          />
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl relative">
        {title}
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-primary-500 rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-2xl text-center">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
