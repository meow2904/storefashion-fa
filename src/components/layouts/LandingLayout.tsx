// src/components/layouts/LandingLayout.tsx
import { Footer } from '../shared/Footer';
import { Header } from '../shared/Header';
export async function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
            <Header />
            <main className="grow w-full flex flex-col max-w-[1920px] mx-auto ">{children}</main>
            <Footer />
        </div>
    );
}