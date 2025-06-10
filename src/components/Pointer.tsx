import {twMerge} from "tailwind-merge";

export default function Pointer(props: {
    text: string; 
    color?: "red"|"blue"}
){
    const { text, color} = props;
    return(
    <div className="relative">
        <svg 
        xmlns="https://www.w3.org/2000/svg"
        width='24'
        height='24'
        viewBox = '0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='feather feather-mouse-pointer text-white size-5'
        >
            <path d='M3 3l7 17 2-7 7-2z' ></path>
            <path d='M13 13l6 6' ></path>
        </svg>
        <div className="absolute top-full left-full">
            <div className={twMerge
                ("inlnine-flex rounded-full font-bold text-sm bg-blue-400 px-2 rounded-tl-none", color === 'red' && 'bg-red-500')}>
                {text}
            </div>
        </div>

    </div>)
}