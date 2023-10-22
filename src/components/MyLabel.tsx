import "./MyLabel.css";

export interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalize all letters
   */
  allCaps?: boolean;
  /**
   * Label color style
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * Font Color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color = "text-primary",
  fontColor,
}: Props) => {
  return (
    <span
      className={`${size} ${color} label`}
      style={{
        color: fontColor,
        textTransform: allCaps ? "uppercase" : "none",
      }}
    >
      {label}
    </span>
  );
};

export default MyLabel;
