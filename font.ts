import { Poppins, Roboto } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  preload: true,
});

export const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  preload: true,
});
