import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import Image from "next/image"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kyle Korve",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <Link href="/">
                <Image
                  src="/k3.png"
                  alt="k3"
                  width={180}
                  height={180}
                  className="h-20 w-20 dark:invert"
                  />
                  </Link>
                <span className="flex items-center gap-4">
                  <Link href="/posts" className=" font-normal text-lg tracking-wide ">blog</Link>
                  <ModeToggle />
                </span>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
