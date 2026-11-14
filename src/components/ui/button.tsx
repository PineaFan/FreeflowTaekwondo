import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import type { BeltColour } from "@/lib/data/belts";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground hover:bg-accent/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

type BeltButtonProps = Omit<ButtonPrimitive.Props & VariantProps<typeof buttonVariants>, "variant"> & {
    belt: BeltColour;
    variant?: "default" | "secondary" | "outline";
};

const beltColorsDefault: Record<BeltColour, string> = {
    white: "bg-white text-black hover:bg-white/80 border border-black/20",
    yellow: "bg-yellow-400 text-primary hover:bg-yellow-400/80",
    green: "bg-green-600 text-white hover:bg-green-600/80",
    blue: "bg-blue-600 text-white hover:bg-blue-600/80",
    red: "bg-red-600 text-white hover:bg-red-600/80",
    black: "bg-black text-white hover:bg-black/80 border border-white/20",
    orange: "bg-orange-500 text-white hover:bg-orange-500/80",
    purple: "bg-purple-600 text-white hover:bg-purple-600/80"
};
const beltColorsSecondary: Record<BeltColour, string> = {
    white: "border-2 border-black/20",
    yellow: "border-2 border-yellow-400/40",
    green: "border-2 border-green-600/40",
    blue: "border-2 border-blue-600/40",
    red: "border-2 border-red-600/40",
    black: "border-2 border-white/20",
    orange: "border-2 border-orange-500/40",
    purple: "border-2 border-purple-600/40"
};
const beltColorsOutline: Record<BeltColour, string> = {
    white: "bg-transparent hover:bg-white/10 border-2 border-black/20",
    yellow: "bg-transparent hover:bg-yellow-400/10 border-2 border-yellow-400/20",
    green: "bg-transparent hover:bg-green-600/10 border-2 border-green-600/20",
    blue: "bg-transparent hover:bg-blue-600/10 border-2 border-blue-600/20",
    red: "bg-transparent hover:bg-red-600/10 border-2 border-red-600/20",
    black: "bg-transparent hover:bg-black/10 border-2 border-black/20",
    orange: "bg-transparent hover:bg-orange-500/10 border-2 border-orange-500/20",
    purple: "bg-transparent hover:bg-purple-600/10 border-2 border-purple-600/20"
};

export function BeltButton({ belt, className, variant = "default", ...props }: BeltButtonProps) {
    const extraVariants = {
        default: beltColorsDefault,
        secondary: beltColorsSecondary,
        outline: beltColorsOutline
    }[variant][belt];
    return <Button {...props} variant={variant} className={cn(extraVariants, className)} />;
}

export { Button, buttonVariants }
