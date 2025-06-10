import FeatureCard from "./FeatureCard";


const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4",
    "Feature 5",
    "Feature 6",
    "Feature 7"
];


export default function Features() {
    return (
        <section>
            <div className="px-4 md:px-8 lg:px-16">
                <div className="flex justify-center">
                    <h2>Features</h2>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Where power meets <span className="text-blue-400">simplicity</span></h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2  gap-8 ">
                    <FeatureCard
                        title="Lorem Ipsum"
                        description="Lorem ispum lorem lorem lorem">
                        <div className="aspect-video">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                            We've achieved {" "}<span className=" bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">ether</span> {" "} example title </p>
                        </div>

                    </FeatureCard>

                    <FeatureCard
                        title="Lorem Ipsum 2"
                        description="Lorem ispum lorem lorem lorem">
                        <div className="aspect-video flex items-center justify-center">
                            <div> Image 1 </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Lorem Ipsum 3"
                        description="Lorem ispum lorem lorem lorem">
                    </FeatureCard>

                    <FeatureCard
                        title="Lorem Ipsum 4"
                        description="Lorem ispum lorem lorem lorem">
                    </FeatureCard>


                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map(feature => (
                        <div 
                        key={feature} 
                        className="bg-neutral-900 border border-white/10 inline-flex 
                        px-3 md:px 5 py-1.5 md:py-2 rounded-2xl gap-3 items-center 
                        hover:scale-105 transition duration-500 group">
                            <span className="bg-blue-400 text-neutral-950 size-5 rounded-full 
                            inline-flex items-center justify-center text-xl 
                            group-hover:rotate-45 transition duration-500">&#10038;</span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}