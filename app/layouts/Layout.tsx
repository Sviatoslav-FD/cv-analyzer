import Navbar from "~/components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="p-10 flex flex-col h-screen">
			<Navbar />

      {children}
		</main>
	);
};

export default Layout;