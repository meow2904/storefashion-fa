import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh] items-center">

                <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 space-y-8">

                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-cyan-700">
                        Spring Summer 2024
                    </span>

                    <div className="space-y-0">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-900 leading-[0.9]">
                            THE SILENT
                        </h1>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter text-zinc-300 italic leading-[0.9]">
                            STATEMENT
                        </h1>
                    </div>

                    <p className="max-w-md text-sm md:text-base text-zinc-500 leading-relaxed tracking-wide">
                        An exploration of tectonic silhouettes and architectural textures.
                        Designed for those who let the garment speak for itself.
                    </p>
                    <div className="flex flex-wrap items-center gap-8 pt-4">
                        <Button
                            className="bg-[#2D6A64] hover:bg-[#23534e] text-white px-10 h-12 rounded-sm text-[11px] tracking-[0.15em]"
                        >
                            EXPLORE COLLECTION
                        </Button>

                        <button className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-800 transition-colors hover:text-zinc-500">
                            View Film
                            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>

                <div className="relative h-full min-h-[500px] w-full bg-zinc-100">
                    <Image
                        src="/hero-model.jpg"
                        alt="Spring Summer Collection Model"
                        fill
                        priority
                        className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
        </section>
    );
}