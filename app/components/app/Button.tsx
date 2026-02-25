import type { ReactElement } from "react";

const Button = ({ children, type, disabled }: { 
  children: ReactElement | string;
  type: "submit" | "reset" | "button" | undefined
  disabled?: boolean;
}): ReactElement => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="text-white font-semibold px-4 py-1 cursor-pointer rounded bg-linear-to-l from-cyan-500 to-blue-500"
    >
      { children }
    </button>
  )
};

export default Button;
