"use client"
import { ChangeEvent, HTMLAttributes, MouseEvent, useState } from "react";

export type FormInputTypes = {
  id: string;
  type: string
  title: string;
  value: string;
  placeholder?: string;
} & HTMLAttributes<HTMLSpanElement> & HTMLAttributes<HTMLInputElement>

export default function FormInput({id, type, title, value, placeholder, ...props}:FormInputTypes) {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [formState, setFormState] = useState({
    [id]: value
  })

  const togglePasswordVisibility = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <span className="formCover">
      <input 
        type={type === "password" && showPassword ? 'text' : type}
        id={id}
        name={id}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleChange(e);
          if (props.onChange) {
            props.onChange(e);
          }
        }}
        placeholder={placeholder}
        {...props}
      />
      <label htmlFor={id} className={value ? "activeLabel" : ""}>{title}</label>

      {type === "password" && (
        <span onClick={togglePasswordVisibility} className="passwordDisplay">
          {showPassword ? "HIDE" : "SHOW"}
        </span>
      )}
    </span>
  )
}
