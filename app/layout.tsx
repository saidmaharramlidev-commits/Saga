"use client"

const metadata = {
  title: "Saga",
  description: "It is website that inspired by ega.az"
}

import { Provider } from "react-redux";
import "./globals.css";
import "../css/hero.css"
import "../css/navbar.css"
import "../css/services.css"
import "../css/statistic.css"
import "../css/faq.css"
import "../css/companies.css"
import "../css/animations.css"
import { store } from "../redux/store"
import { Description } from "@mui/icons-material";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          {children}
        </body>
      </Provider>

    </html>
  );
}
