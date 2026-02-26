"use client"


import { Provider } from "react-redux";
import "./globals.css";
import "../css/hero.css"
import "../css/navbar.css"
import { store } from "../redux/store"



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
