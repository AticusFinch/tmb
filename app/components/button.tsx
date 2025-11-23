import Link from "next/link";
import styles from "./button.module.css";

const Button = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`${styles.button} inline-block transition-all duration-300 hover:scale-105 ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
