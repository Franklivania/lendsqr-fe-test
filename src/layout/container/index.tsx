import { HTMLAttributes, ReactNode } from "react"
import styles from "./container.module.scss";

type ContainerTypes = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>

export default function Container({children, className, ...props}: ContainerTypes) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  )
}
