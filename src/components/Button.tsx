import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva('border  h-12 rounded-full px-6 font-medium', {
    variants: {
        variant: {
            primary: 'bg-blue-400 text-neutral-950 border-blue-400',
            secondary: 'border-white',

        },
        size:{
            sm: 'h-10',

        }
    }
})

export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: 'sm'
 } & ButtonHTMLAttributes<HTMLButtonElement>
){
    const {variant, className, size, ...otherProps} = props;
    return (<button className={classes({ 
        variant,
        className,
        size,
        })}
    {...otherProps}
    />
);
}