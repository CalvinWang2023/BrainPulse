interface IconProps {
  path: string; // SVG path data
  alt: string; // Alt text for accessibility
  className?: string; // Additional CSS classes
}

const Icon: React.FC<IconProps> = ({ path, alt, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className} height="24" viewBox="0 -960 960 960" width="24" aria-label={alt}>
    <path d={path} />
  </svg>
);

export default Icon;
