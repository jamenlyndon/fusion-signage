/* Imports
---------------------------------------------------------------------------------------------------- */
// Global styles
import './scss/style.scss';



/* Setup the meta data
---------------------------------------------------------------------------------------------------- */
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Edit Power Schedule Timers - Fusion Signage",
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
