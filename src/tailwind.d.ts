// This file is needed for TypeScript to recognize Tailwind classes
// in string literals and provide autocompletion

interface HTMLAttributes {
  className?: string;
  // Add support for common styling props
  tw?: string;
  css?: string;
  // Support for common component props that might use Tailwind classes
  variant?: string;
  size?: string;
  color?: string;
  bg?: string;
  padding?: string;
  margin?: string;
  border?: string;
  shadow?: string;
  rounded?: string;
  // Add any other custom props your components might use
  containerClass?: string;
  wrapperClass?: string;
  headerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  buttonClass?: string;
  labelClass?: string;
  inputClass?: string;
}

// For JSX components that use custom props
declare namespace JSX {
  interface IntrinsicAttributes {
    tw?: string;
    css?: string;
    className?: string;
  }
}
