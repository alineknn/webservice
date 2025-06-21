import FeatureCard from "./FeatureCard";
import {
  ServerIcon,
  ShieldCheckIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

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
                <h2 className="text-6xl font-medium text-center mt-6 max-w-8xl mx-auto">
                    A <span className="text-blue-400">complete</span> solution for hosting and maintaining your sites</h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2  gap-8 ">
                    {/* Card 1: Site Administration */}
                    <FeatureCard
                        title={
                            <>
                                <ServerIcon className="inline-block h-6 w-6 mr-2 text-blue-400" />
                                Site Administration
                            </>
                        }
                    >
                        <ul className="list-disc list-inside text-white/50 space-y-2">
                            <li>Provision and configure web servers in one click</li>
                            <li>Deploy popular CMS platforms (WordPress, Drupal, Joomla)</li>
                            <li>Switch between PHP, Python, or Node.js runtimes</li>
                            <li>Manage your files via an intuitive file browser</li>
                            <li>Edit scripts directly with our built-in code editor</li>
                        </ul>
                    </FeatureCard>

                    {/* Card 2: Advanced Security */}
                    <FeatureCard
                        title={
                            <>
                                <ShieldCheckIcon className="inline-block h-6 w-6 mr-2 text-blue-400" />
                                Advanced Security
                            </>
                        }
                    >
                        <ul className="list-disc list-inside text-white/50 space-y-2">
                            <li>Real-time DDoS protection at the network edge</li>
                            <li>Built-in malware and spam filtering</li>
                            <li>Granular role-based access controls</li>
                            <li>Scheduled, automated backups with one-click restore</li>
                        </ul>
                    </FeatureCard>

                    {/* Card 3: Email Hosting */}
                    <FeatureCard
                        title={
                            <>
                                <EnvelopeIcon className="inline-block h-6 w-6 mr-2 text-blue-400" />
                                Email Hosting
                            </>
                        }
                    >
                        <ul className="list-disc list-inside text-white/50 space-y-2">
                            <li>Create custom mailboxes on your domain</li>
                            <li>Access mail through an integrated web-client</li>
                            <li>Set up filtering rules and auto-responders</li>
                        </ul>
                    </FeatureCard>

                    {/* Card 4: SSL Management */}
                    <FeatureCard
                        title={
                            <>
                                <LockClosedIcon className="inline-block h-6 w-6 mr-2 text-blue-400" />
                                SSL Management
                            </>
                        }
                    >
                        <ul className="list-disc list-inside text-white/50 space-y-2">
                            <li>Auto-issue and renew Let’s Encrypt certificates</li>
                            <li>Install commercial SSL certs for web & mail</li>
                            <li>Monitor and manage all certificates from one dashboard</li>
                        </ul>
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