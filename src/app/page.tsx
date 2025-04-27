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
    <section className="py-24 bg-gradient-to-br">

    </section>

</div>
  );
}
