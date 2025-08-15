/* Imports
---------------------------------------------------------------------------------------------------- */
// Styles
import './scss/style.css';



/* Setup the meta data
---------------------------------------------------------------------------------------------------- */
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Template Design System",
	description: ""
};



/* Create our main app entry point
---------------------------------------------------------------------------------------------------- */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
	);
}
