"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';
import { MenuItem } from '@/types/menu';

export function NavMenu({ items }: { items: MenuItem[] }) {
    return (
        <nav className="hidden lg:flex items-center gap-8">
            {items.map((item) => (
                <div key={item.id} className="relative group">
                    <div className="flex items-center gap-1 cursor-pointer py-6">
                        <Link href={item.href || "#"} className="text-[14px] font-medium uppercase tracking-[0.2em] text-zinc-500 hover:text-black transition-colors">
                            {item.title}
                        </Link>
                        {item.submenu && <ChevronDown className="size-3 text-zinc-300 group-hover:rotate-180 transition-transform" />}
                    </div>

                    {item.submenu && (
                        <div className="absolute left-0 top-[80%] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-200 z-50">
                            <ul className="w-48 border border-zinc-100 bg-white p-2 shadow-xl">
                                {item.submenu.map((sub) => (
                                    <li key={sub.id}>
                                        <Link href={sub.href || "#"} className="block px-3 py-2 text-[12px] uppercase tracking-wider text-zinc-400 hover:bg-zinc-50 hover:text-black">
                                            {sub.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
}