"use client"
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const faqs = [{
    question: "Q1",
    answer: "Q2",
},
{
    question: "Q2",
    answer: "Q2",
},
{
    question: "Q3",
    answer: "Q3",
},
{
    question: "Q4",
    answer: "Q4",
},
{
    question: "Q5",
    answer: "Q5",
},
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <section className="py-24 px-4 md:px-8 lg:px-16">
            <div className="">
                <div className="flex justify-center">
                    <h2>Faqs</h2>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">Questions? we've got <span className="text-blue-400">answers</span></h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div key={faq.question} className="bg-neutral-900 rounded-2xl border border-white/10 p-6">
                            <div className="flex justfiy-between items-center"
                                onClick={() => setSelectedIndex(faqIndex)}>
                                <h3 className="font-medium">{faq.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={"24"}
                                    height={"24"}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={"2"}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={twMerge("feather feather-plus text-blue-400 flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex && 'rotate-45')}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div 
                                    initial = {{
                                        height:0,
                                        marginTop:0}} 
                                    animate = {{
                                        height:"auto",
                                        marginTop:"24px",
                                    }} 
                                    exit = {{
                                        height:0,
                                        marginTop:0,
                                    }}
                                    className={twMerge("overflow-hidden",)}>
                                        <p className="text-white/50">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

