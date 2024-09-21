import { IconProps } from "@/types";

export const TiptapIcon: React.FC<IconProps> = ({ size = 24, className }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 436.000000 436.000000"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <g
        transform="translate(0.000000,436.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path
          d="M1975 3954 c-252 -36 -392 -79 -605 -186 -128 -64 -300 -178 -300
        -199 0 -5 433 -9 1118 -9 l1117 1 -35 30 c-172 149 -491 294 -762 345 -80 15
        -462 28 -533 18z"
        />
        <path
          d="M655 3110 c-43 -71 -140 -274 -150 -313 l-7 -27 1682 0 1682 0 -7 27
        c-10 39 -107 242 -150 313 l-36 60 -1489 0 -1489 0 -36 -60z"
        />
        <path
          d="M406 2364 c-9 -23 -7 -357 2 -372 7 -10 369 -12 1778 -10 l1769 3 0
        195 0 195 -1771 3 c-1609 2 -1772 1 -1778 -14z"
        />
        <path
          d="M505 1563 c10 -39 107 -242 150 -313 l36 -60 1489 0 1489 0 36 60
        c43 71 140 274 150 313 l7 27 -1682 0 -1682 0 7 -27z"
        />
        <path
          d="M1090 769 c132 -114 405 -254 602 -307 174 -48 253 -57 488 -57 229
        0 320 10 470 52 140 39 304 108 430 181 73 42 220 148 220 157 0 3 -505 5
        -1122 5 l-1123 -1 35 -30z"
        />
      </g>
    </svg>
  );
};