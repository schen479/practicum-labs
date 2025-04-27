import Image from "next/image";
import {Button} from "@/components/ui/Button";
import {Badge} from "@/components/ui/Badge";

export default function Home() {
return (
<div className="min-h-screen bg-white font-[&apos;Merriweather Sans&apos;]">
    <section className="relative overflow-hidden bg-slate-900">
        <div className="container mx-auto px-6 sm:px-4 py-16 sm:py-32 relative z-20">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <Badge className="mb-4 bg-blue-500 hover:bg-blue-700 text-lg text-white px-4 py-1 mx-auto md:mx-0">
                        2025 - Launching Soon
                    </Badge>
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                        Empowering Learning Through Research
                    </h1>
                    <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
                        Our programs aim to empower students to gain access to research and mentorship opportunities by giving them the tools and skills necessary to reach out to professionals in their fields.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 w-full sm:w-auto">
                            Sign Up
                        </Button>
                        <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 text-lg px-8 py-6 w-full sm:w-auto">
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <div className="flex justify-center">
                        <Image src="/landing1.png" alt="Students exploring careers" width={500} height={350} className="max-w-full h-auto" />
                    </div>

                    <div className="mt-20 flex flex-wrap justify-center gap-8 mb-2">
                        <div className="flex items-center gap-2 text-gray-200 text-lg sm:text-xl">
                            <span className="text-green-400 text-2xl">✅</span>
                            <span>Hands-on Research</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-200 text-lg sm:text-xl">
                            <span className="text-green-400 text-2xl">✅</span>
                            <span>Industry Mentorship</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-200 text-lg sm:text-xl">
                            <span className="text-green-400 text-2xl">✅</span>
                            <span>Real-World Projects</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto text-center px-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                The Need for Research & Mentorship
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
                Many students want to dive into research but lack the support and opportunities to succeed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                <div className="flex flex-col items-center">
                    <div className="text-5xl font-extrabold text-blue-600 mb-2">72%</div>
                    <p className="text-gray-700 text-lg">of students want to get into research but don’t know where to start.</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-5xl font-extrabold text-blue-600 mb-2">18%</div>
                    <p className="text-gray-700 text-lg">of underrepresented students have mentorship access.</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-5xl font-extrabold text-blue-600 mb-2">65%</div>
                    <p className="text-gray-700 text-lg">believe research experience is crucial for career success.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-10 mb-16">
                <div className="flex flex-col items-center">
                    <div className="text-5xl font-extrabold text-blue-600 mb-2">80%</div>
                    <p className="text-gray-700 text-lg text-center">feel disconnected from real-world applications in school.</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-5xl font-extrabold text-blue-600 mb-2">57%</div>
                    <p className="text-gray-700 text-lg text-center">say mentorship dramatically increases their confidence.</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Bridging the Gap Between Ambition and Opportunity
                </h3>
                <p className="text-gray-700 text-lg mb-4">
                    Too many students are eager to dive into research and real-world learning but face problems like lack of mentorship, unclear pathways, and limited access to resources.
                </p>
                <p className="text-gray-700 text-lg">
                    Our program is designed to change that. By providing access and guides to hands-on research experience and direct mentorship from industry professionals, we empower students to take the first step toward impactful careers. Whether you’re just getting started or looking to deepen your skills, we help turn your potential into real-world success.
                </p>
            </div>
        </div>
    </section>
</div>
);
}