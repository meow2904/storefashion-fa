export function BrandStatement() {
    return (
        <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-zinc-900 px-6">
            <div
                className="absolute inset-0 opacity-40 mix-blend-overlay"
                style={{ backgroundImage: "url('/fabric-texture.jpg')", backgroundSize: 'cover' }}
            />

            <div className="relative z-10 text-center max-w-4xl space-y-4">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white tracking-[0.15em] leading-tight uppercase">
                    "Style is the <span className="font-bold italic">substance</span> <br />
                    of thought made visible."
                </h2>

                <div className="w-12 h-px bg-zinc-500 mx-auto mt-8" />
            </div>
        </section>
    );
}