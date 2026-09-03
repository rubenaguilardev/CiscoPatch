import { forwardRef, SVGProps } from "react";

interface GoogleIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

const GoogleIcon = forwardRef<SVGSVGElement, GoogleIconProps>(
  (
    {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      className = "",
      ...rest
    },
    ref
  ) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M21 12a9 9 0 1 1-3.5-7.1" />
      <path d="M21 12h-8" />
    </svg>
  )
);

GoogleIcon.displayName = "GoogleIcon";

export default GoogleIcon;