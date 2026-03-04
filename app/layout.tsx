export const metadata = {
  title: "Saga",
  description: "It is website that inspired by ega.az"
}

import "./globals.css";
import "../css/hero.css"
import "../css/navbar.css"
import "../css/services.css"
import "../css/statistic.css"
import "../css/faq.css"
import "../css/companies.css"
import "../css/animations.css"
import "../css/reviews.css"
import "../css/footer.css"
import "../css/heroOfEndpoints.css"
import "../css/about.css"
import "../css/blogPage.css"
import "../css/contactPage.css"
import "../css/seminarRegister.css"
import "../css/servicesPage.css"
import Providers from "./providers";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}