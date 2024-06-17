import { HTMLAttributes } from "react";
import { Icon } from "@iconify/react";

export type ButtonTypes = {
  type: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "red" | "blue";
  isLoading?: boolean;
  disabled?: boolean;
  title: string;
  className?: string
} & HTMLAttributes<HTMLButtonElement>

export default function Button({
  type,
  variant,
  isLoading = false,
  disabled = false,
  title,
  className,
  ...props }: ButtonTypes) {
  return (
    <button
      type={type}
      disabled={disabled}
      title={title}
      aria-label={title}
      aria-labelledby={title}
      className={`button 
        ${isLoading ? "loading" : ""}
        ${disabled ? "disabled" : ""}
        ${variant} 
        ${className}
      `}
      {...props}
    >
      {!isLoading ? (
        <>
          {title}
        </>
      ) : (
        <Icon icon={"line-md:loading-loop"} width={24} />
      )}
    </button>
  )
}
