import type { ReactElement } from "react";

const Button = ({
	children,
	type,
	classes,
	disabled,
}: {
	children: ReactElement | string;
	type: "submit" | "reset" | "button" | undefined;
	classes?: string;
	disabled?: boolean;
}): ReactElement => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`text-white font-semibold px-4 py-1 cursor-pointer rounded-2xl bg-linear-to-r to-cyan-500 from-blue-500 ${classes || ""}`}
		>
			{children}
		</button>
	);
};

export default Button;
