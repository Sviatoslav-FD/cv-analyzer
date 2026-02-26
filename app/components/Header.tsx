import type { ReactElement } from "react";
import { Link } from "react-router";
import ButtonLink from "~/components/app/ButtonLink";

const Header = (): ReactElement => {
	return (
		<header className="flex justify-between items-center bg-white p-4 rounded-2xl">
			<Link to="/">
				<p className="text-2xl font-bold text-gradient">Resume Analyzer</p>
			</Link>
			<ButtonLink path="/upload">Upload resume</ButtonLink>
		</header>
	);
};

export default Header;
