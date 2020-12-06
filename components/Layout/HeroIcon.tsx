type IconName =
  | "badge-check"
  | "check"
  | "x"
  | "chevron-left"
  | "chevron-right"
  | "sun"
  | "moon"
  | "menu";

type IconMap = {
  [P in IconName]: (strokeWidth: number) => JSX.Element;
};

const iconMap: IconMap = {
  "badge-check": (strokeWidth) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  ),
  check: (strokeWidth) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M5 13l4 4L19 7"
    />
  ),
  x: (strokeWidth) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M6 18L18 6M6 6l12 12"
    />
  ),
  "chevron-left": (strokeWidth) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M15 19l-7-7 7-7"
    />
  ),
  "chevron-right": (strokeWidth) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M9 5l7 7-7 7"
    />
  ),
  sun: (strokeWidth) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  ),
  moon: (strokeWidth) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  ),
  menu: (strokeWidth) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M4 6h16M4 12h16M4 18h16"
    />
  ),
};

type Props = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  fill?: "none" | "currentColor";
};

const HeroIcon = ({
  name,
  className = "",
  strokeWidth = 2,
  fill = "none",
}: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {iconMap[name](strokeWidth)}
    </svg>
  );
};

export default HeroIcon;
