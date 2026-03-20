"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/utils/cn";

interface InputSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    suggestions?: string[];
    onResultClick?: (value: string) => void;
    isLoading?: boolean;
}

const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>(
    ({ className, label, suggestions = [], onResultClick, isLoading, value, onChange, ...props }, ref) => {
        const [isFocused, setIsFocused] = React.useState(false);
        const [internalValue, setInternalValue] = React.useState("");

        const searchTerm = value !== undefined ? String(value) : internalValue;
        const showDropdown = isFocused && (suggestions.length > 0 || isLoading);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setInternalValue(e.target.value);
            onChange?.(e);
        };

        const handleClear = (e: React.MouseEvent) => {
            e.preventDefault();
            setInternalValue("");
            if (onChange) {
                const event = { target: { value: "" } } as React.ChangeEvent<HTMLInputElement>;
                onChange(event);
            }
        };

        return (
            <div className={cn("relative w-full max-w-sm")}>
                <div className={cn("w-full space-y-1.5")}>
                    {label && (
                        <label htmlFor="Search" className={cn("block text-xs font-medium uppercase tracking-widest text-zinc-500")}>
                            {label}
                        </label>
                    )}

                    <div className={cn("relative")}>
                        <div className={cn("absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400")}>
                            <Search className={cn("size-4")} />
                        </div>

                        <input
                            type="text"
                            id="Search"
                            ref={ref}
                            className={cn(
                                "flex h-11 w-full border border-zinc-200 bg-white py-2 pl-10 pr-10 text-sm transition-all focus:border-zinc-600 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                                className
                            )}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                            value={searchTerm}
                            onChange={handleChange}
                            {...props}
                        />

                        <div className={cn("absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400")}>
                            {isLoading ? (
                                <div className={cn("p-1")}>
                                    <div className={cn("size-4 animate-spin rounded-full border-2 border-zinc-200 border-t-zinc-600")} />
                                </div>
                            ) : searchTerm.length > 0 ? (
                                <button
                                    type="button"
                                    onMouseDown={handleClear}
                                    className={cn("p-1 transition-colors hover:text-zinc-600")}
                                >
                                    <X className={cn("size-4")} />
                                </button>
                            ) : null}
                        </div>
                    </div>
                </div>

                {/* Dropdown Results */}
                {showDropdown && (
                    <div className={cn("absolute z-50 mt-1 w-full rounded-md border border-zinc-200 bg-white shadow-lg")}>
                        <ul className={cn("max-h-60 overflow-auto py-1 text-sm text-zinc-700")}>
                            {suggestions.map((item, index) => (
                                <li
                                    key={index}
                                    className={cn("cursor-pointer px-4 py-2 hover:bg-zinc-100 hover:text-black")}
                                    onClick={() => onResultClick?.(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
);

InputSearch.displayName = "InputSearch";

export { InputSearch };