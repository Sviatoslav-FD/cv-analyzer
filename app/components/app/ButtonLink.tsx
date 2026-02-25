import type { ReactElement } from "react";
import { Link } from "react-router";

const ButtonLink = ({ children, path }: { children: ReactElement | string; path: string }): ReactElement => {
  return (
    <Link to={path}>
      <button
        className="text-white font-semibold px-4 py-1 cursor-pointer rounded bg-linear-to-l from-cyan-500 to-blue-500"
      >
        { children }
      </button>
    </Link>
  )
};

export default ButtonLink;
