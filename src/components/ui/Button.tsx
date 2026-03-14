import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-[#E85D04] text-white hover:bg-[#C94D02] shadow-md hover:shadow-lg active:scale-[0.98]",
  secondary:
    "bg-[#7209B7] text-white hover:bg-[#5A0692] shadow-md hover:shadow-lg active:scale-[0.98]",
  outline:
    "border-2 border-[#E85D04] text-[#E85D04] hover:bg-[#FFF3E8] active:scale-[0.98]",
  ghost:
    "text-[#3D2B1F] hover:bg-[#FFF3E8] active:scale-[0.98]",
  dark:
    "bg-[#3D2B1F] text-white hover:bg-[#1A0F08] shadow-md hover:shadow-lg active:scale-[0.98]",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2 font-semibold
        transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
