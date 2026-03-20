export const colors = [
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#000000" },
    { name: "Navy", hex: "#1D2A44" },
];

interface ColorPickerProps {
    selectedColor: string;
    onSelectColor: (color: string) => void;
}

export function ColorPicker({ selectedColor, onSelectColor }: ColorPickerProps) {
    return (
        <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-800">
                Color: <span className="font-medium text-zinc-500">{selectedColor}</span>
            </h4>
            <div className="flex items-center gap-3">
                {colors.map((color) => (
                    <button
                        key={color.name}
                        onClick={() => onSelectColor(color.name)}
                        style={{ backgroundColor: color.hex }}
                        className={`size-8 rounded-full border transition-all ${
                            selectedColor === color.name 
                                ? 'border-zinc-900 ring-2 ring-zinc-900 ring-offset-2' 
                                : 'border-zinc-200 hover:border-zinc-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

const sizes = ["S", "M", "L", "XL"];

interface SizePickerProps {
    selectedSize: string;
    onSelectSize: (size: string) => void;
}

export function SizePicker({ selectedSize, onSelectSize }: SizePickerProps) {
    return (
        <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-800 flex items-center justify-between">
                Size
                <a href="#" className="text-[10px] font-medium text-zinc-400 hover:text-black border-b border-zinc-200 hover:border-black transition-all">
                    Size Guide
                </a>
            </h4>
            <div className="flex items-center gap-3">
                {sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => onSelectSize(size)}
                        className={`h-11 grow flex items-center justify-center border text-[11px] font-bold uppercase tracking-widest transition-all ${
                            selectedSize === size 
                                ? 'border-zinc-900 bg-zinc-900 text-white' 
                                : 'border-zinc-100 text-zinc-800 bg-zinc-50 hover:border-zinc-900 hover:bg-white'
                        }`}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
}