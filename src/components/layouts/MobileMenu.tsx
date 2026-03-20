"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Plus, Minus } from 'lucide-react';
import { MenuItem } from '@/types/menu';
import { cn } from '@/utils/cn';

export function MobileMenu({ items }: { items: MenuItem[] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [openSub, setOpenSub] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const menuOverlay = (
        <div className={cn("fixed inset-0 z-50 overflow-hidden pointer-events-none", isOpen && "pointer-events-auto")}>
            <div className={cn("absolute inset-0 bg-white transition-transform duration-300 pointer-events-auto", isOpen ? "translate-x-0" : "translate-x-full")}>
                <div className="flex justify-end p-6">
                    <button onClick={() => setIsOpen(false)}><X size={24} /></button>
                </div>

                <nav className="px-8 space-y-4">
                    {items.map((item) => (
                        <div key={item.id} className="border-b border-zinc-100 pb-4">
                            <div className="flex justify-between items-center" onClick={() => setOpenSub(openSub === item.id ? null : item.id)}>
                                <span className="text-sm font-medium uppercase tracking-widest">{item.title}</span>
                                {item.submenu && (openSub === item.id ? <Minus size={14} /> : <Plus size={14} />)}
                            </div>

                            {item.submenu && openSub === item.id && (
                                <div className="mt-4 ml-4 space-y-3">
                                    {item.submenu.map(sub => (
                                        <a key={sub.id} href={sub.href} className="block text-xs text-zinc-500 uppercase">{sub.title}</a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );

    return (
        <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(true)} className="p-1"><Menu size={20} strokeWidth={1.5} /></button>
            {mounted ? createPortal(menuOverlay, document.body) : null}
        </div>
    );
}