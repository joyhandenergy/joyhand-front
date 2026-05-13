import "./SectionHeader.css";
import { PiLightning } from "react-icons/pi";

/**
 * Reusable Section Header Component
 * Used for consistent section titles across the entire website.
 * 
 * @param {string} badge - Optional small text above the title (e.g., "Our Services")
 * @param {string} title - Main section title
 * @param {string} subtitle - Optional paragraph below the title
 * @param {string} align - "left" | "center" | "right" (default: "left")
 * @param {string} theme - "dark" | "light" (default: "dark" - meaning dark text for light backgrounds. "light" means light text for dark backgrounds)
 * @param {string} className - Optional extra classes for custom styling
 */
const SectionHeader = ({ 
  badge, 
  title, 
  subtitle, 
  align = "left",
  theme = "dark",
  center,
  right,
  light,
  dark,
  className = "" 
}) => {
  // Support boolean shorthand props while falling back to string props
  const finalAlign = center ? "center" : right ? "right" : align;
  const finalTheme = light ? "light" : dark ? "dark" : theme;

  return (
    <div className={`section-header section-header--align-${finalAlign} section-header--theme-${finalTheme} ${className}`}>
      {badge && (
        <span className="section-header__badge">
          <PiLightning size={14} className="section-header__badge-icon" />
          {badge}
        </span>
      )}
      
      <h2 className="section-header__title">
        {title}
      </h2>
      
      {subtitle && (
        <p className="section-header__subtitle">
          {subtitle}
        </p>
      )}
      
      <div className="section-header__bar"></div>
    </div>
  );
};

export default SectionHeader;