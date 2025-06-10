import Button from "./Button";
import Image from "next/image";
import exampleImage from '@/assets/images/cavis logo.png'
import exampleImage2 from '@/assets/images/cavis logo2.png'
import Pointer from "./Pointer";



export default function Hero() {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 overflow-x-clip">
            <div className="relative">
                {/** Logo Images  
                 * <div className="absoulte -left32 top-16 hidden lg:block">
                    <Image
                        src={exampleImage}
                        alt="Example Image 1"></Image>
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image
                        src={exampleImage2}
                        alt="Example Image 2"></Image>
                </div>
                 */}
                {/**  Cursor Pointers
                 * 
                 * <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer text='Text'></Pointer>
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer text='Text2' color="red"></Pointer>
                </div> */}
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full text-neutral-950 font-semibold">
                        10 examples services provided</div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">Impactful service, created efforlessly</h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Create tools that shouldn't slow you down. Lorem Ipsum awdwadwadwa</p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input className="bg-transparent px-4 md:flex-1 w-full"
                        type='email'
                        placeholder="Enter your email" />

                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap"
                        size="sm">
                        Sign Up</Button>
                </form>
            </div>
        </section>
    );
} 