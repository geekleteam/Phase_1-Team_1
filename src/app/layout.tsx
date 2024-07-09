import { PropsWithChildren } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import NavContextProvider from "@/context/nav-context";
import {
	ChatSider,
	Navigation,
	PromptForm,
	RightSidebar,
	TableDemo,
	UserProfile,
} from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatProvider from "@/context/chat.context";
import "../app/globals.css";
export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						<NavContextProvider>
							<main className="h-[calc(100vh-64px)]">{children}</main>
						</NavContextProvider>
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}