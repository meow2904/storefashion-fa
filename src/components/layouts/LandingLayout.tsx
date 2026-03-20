// src/components/layouts/LandingLayout.tsx
import { Footer } from '../shared/Footer';
import { Header } from '../shared/Header';
export async function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
        </div>
    );
}