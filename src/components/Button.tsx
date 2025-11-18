import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const buttonClasses = cva("border w-[310px] h-[64px] px-6 text-[18px]", {
  variants: {
    variant: {
      teal: "bg-[#74C2CD] text-black rounded-xl",
      purple: "bg-[#746FAE] text-white rounded-xl",
      black: "bg-[#000000] text-white rounded-xl",
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
