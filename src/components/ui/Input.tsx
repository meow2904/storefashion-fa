import * as React from "react"
import { cn } from "@/utils/cn"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, icon, ...props }, ref) => {
        return (
            <div className="w-full space-y-1.5">
                {label && (
                    <label className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                        {label}
                    </label>
                )}

                <div className="relative">
                    {icon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                            {icon}
                        </div>
                    )}

                    <input
                        type={type}
                        className={cn(
                            "flex h-11 w-full border border-zinc-200 bg-white px-3 py-2 text-sm transition-all focus:border-zinc-600 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                            icon && "pl-10",
                            error && "border-red-500 focus:border-red-500",
                            className
                        )}
                        ref={ref}
                        {...props}
                    />
                </div>

                {error && (
                    <p className="text-[11px] font-medium text-red-500 uppercase tracking-tight">
                        {error}
                    </p>
                )}
            </div>
        )
    }
)

Input.displayName = "Input"

export { Input }