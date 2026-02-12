import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const buttonStyles = {
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    default:
      "bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-foreground",
    outline:
      "border border-border bg-transparent hover:bg-muted hover:text-foreground focus-visible:ring-foreground",
    ghost: "hover:bg-muted hover:text-foreground focus-visible:ring-foreground",
    link: "text-foreground underline-offset-4 hover:underline focus-visible:ring-foreground",
  },
  sizes: {
    default: "h-11 px-6 py-2 text-sm",
    sm: "h-9 px-4 text-xs",
    lg: "h-12 px-8 text-base",
  },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const compClassName = `${buttonStyles.base} ${buttonStyles.variants[variant]} ${buttonStyles.sizes[size]} ${className}`;

    if (asChild && React.isValidElement(props.children)) {
      return React.cloneElement(props.children as React.ReactElement<{ className?: string }>, {
        className: `${compClassName} ${(props.children as React.ReactElement<{ className?: string }>).props?.className ?? ""}`.trim(),
      });
    }

    return (
      <button
        ref={ref}
        className={compClassName}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
