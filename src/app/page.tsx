import Image from "next/image";
import {Button} from "@/components/ui/Button";

export default function Home() {
  return (
  <div className="min-h-screen bg-white font-[&apos;Merriweather Sans&apos;]">
  
    <section className="relative overflow-hidden bg-slate-900">
      <div className="container mx-auto px-6 sm:px-4 py-16 sm:py-32 relative z-20">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2 text-center md:text-left">
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
             {/*<ArrowRight className="ml-2 h-5 w-5" /> */}
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative">
        <div className="flex justify-center">
          <Image 
            src="/landing1.png" 
            alt="Students exploring careers" 
            width={500} 
            height={350}
            className="max-w-full h-auto"
          />
        </div>
        <div className="absolute -bottom-8 right-0 md:-right-8 bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-4">
            
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
  </div>
  );
}
