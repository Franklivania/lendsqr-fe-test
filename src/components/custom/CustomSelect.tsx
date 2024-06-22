import { ChangeEvent, HTMLAttributes } from "react";

export type DropdownOption = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: DropdownOption[];
  value: string;
  placeholder?: "Select" | string;
  label: string;
} & HTMLAttributes<HTMLSelectElement>;

export default function CustomSelect({
  label,
  placeholder,
  options,
  value,
  ...props
}: DropdownProps) {
  return (
    <div id="custom-select-container">
      <label htmlFor="select">{label}</label>
      <select name="select" id="select" value={value} onChange={(e: ChangeEvent<HTMLSelectElement>) => props.onChange && props.onChange(e)}>
        <option value="" id="placeholder">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="option">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
