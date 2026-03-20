
import * as React from "react"
import { cn } from "@/utils/cn"

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'secondary' | 'success'
    size?: 'sm' | 'md' | 'lg' | 'icon'
    isLoading?: boolean,
    className?: string,
    children?: React.ReactNode,
}

const Button = ({ variant = 'primary', size = 'md', isLoading = false, className, children, ...props }: ButtonProps) => {
    return (
        <button
            type='button'
            className={cn(
                'relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
                variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-700',
                variant === 'outline' && 'border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-900',
                variant === 'success' && 'bg-green-500 text-white hover:bg-green-700',
                variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
                size === 'sm' && 'h-8 px-3 rounded-md',
                size === 'md' && 'h-10 px-4 rounded-md',
                size === 'lg' && 'h-12 px-6 rounded-md',
                size === 'icon' && 'h-10 w-10 rounded-full',
                className
            )}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                </div>
            )}
            <span className={cn(isLoading && "invisible")}>
                {children}
            </span>
        </button>
    )
}
Button.displayName = "Button"
export { Button }