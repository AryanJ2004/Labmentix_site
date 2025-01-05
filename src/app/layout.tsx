import "@/styles/globals.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })
export const metadata = {
  title: "LabMentix",
  icons: {
    icon: "/logo1.jpg"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo1.jpg" type="image/jpeg" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}

