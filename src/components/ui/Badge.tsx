interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "muted" | "new" | "trending";
  size?: "sm" | "md";
}

const variantStyles: Record<string, string> = {
  default: "bg-[#F0DCC8] text-[#3D2B1F]",
  primary: "bg-[#FFF3E8] text-[#E85D04] border border-[#F0DCC8]",
  secondary: "bg-[#F3E8FF] text-[#7209B7]",
  muted: "bg-[#F0DCC8] text-[#8B6F5E]",
  new: "bg-[#7209B7] text-white",
  trending: "bg-[#E85D04] text-white",
};

const sizeStyles: Record<string, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export default function Badge({
  children,
  variant = "default",
  size = "sm",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </span>
  );
}
