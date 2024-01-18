"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import { createContext, useState } from "react";

import { AuthProvider } from "@/components/provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const Context = createContext();

export default function RootLayout({ children }) {
  const [isOpenRecord, setIsOpenRecord] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("GrAccessibility");
  const [IconColor, setIconColor] = useState("");
  return (
    <html lang="en">
      <body className={inter.className}>
        <Context.Provider
          value={{
            isOpenCategory,
            setIsOpenCategory,
            isOpenRecord,
            setIsOpenRecord,
            selectedIcon,
            IconColor,
            setIconColor,
            setSelectedIcon,
          }}
        >
          <AuthProvider>{children}</AuthProvider>
        </Context.Provider>
      </body>
    </html>
  );
}
