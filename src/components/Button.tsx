import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const buttonClasses = cva("border h-12 px-6 font-medium", {
  variants: {
    variant: {
      teal: "bg-[#74C2CD] text-white rounded-md",
      purple: "bg-[#746FAE] rounded-md",
      black: "bg-[#000000] text-white rounded-md",
      squarePrimary: "bg-blue-400 text-neutral-950 border-blue-400 rounded-none",
      squareSecondary: "border-white rounded-none",
    },
    size: {
      sm: "h-10",
    },
  },
  defaultVariants: {
    variant: "teal",
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "teal" | "purple" |"black"| "squarePrimary" | "squareSecondary";
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
