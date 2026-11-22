import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata={title:"TripSet · Travel mode for coached training",description:"A demo that adapts a prescribed session to hotel equipment without abandoning coach intent."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
