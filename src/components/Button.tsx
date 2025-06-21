import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const buttonClasses = cva("border h-12 px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-blue-400 text-neutral-950 border-blue-400 rounded-full",
      secondary: "border-white rounded-full",
      squarePrimary: "bg-blue-400 text-neutral-950 border-blue-400 rounded-none",
      squareSecondary: "border-white rounded-none",
    },
    size: {
      sm: "h-10",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "squarePrimary" | "squareSecondary";
  size?: "sm";
}

export default function Button({
  variant,
  size,
  className,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      className={buttonClasses({ variant, size, className })}
      {...otherProps}
    />
  );
}
