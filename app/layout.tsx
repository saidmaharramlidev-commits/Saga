export const metadata = {
  title: "Whispa Child Safety Standards",
  description: "WhispaMe is committed to protecting children by prohibiting child sexual abuse and exploitation (CSAE), removing prohibited content when identified, and complying with applicable child safety laws and reporting obligations."
}

import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}