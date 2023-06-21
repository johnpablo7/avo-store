import { Poppins, Roboto } from "next/font/google";

export const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const roboto = Roboto({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
