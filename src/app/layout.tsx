"use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AddXpHeader from "../Components/Navigations/AddXpHeader";
import AddXpFooter from "../Components/Navigations/AddXpFooter";
// import "../assets/src/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../assets/src/css/main.css";
import "../assets/src/scss/main.scss";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Addxp Technologies",
  description: "Digital Customer Experience Management Solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  let bodyclass = "";
  if (
    pathname == "/brand-guidelines" ||
    pathname == "/strapi-cms-development-service" ||
    pathname == "/strapi-plugin-development-service" ||
    pathname == "/strapi-upgrade-service" ||
    pathname == "/strapi-migration-service" ||
    pathname == "/strapi-cms-consultation-service" ||
    pathname == "/strapi-support-maintenance-service" ||
    pathname == "/strapi-ui-design-service" ||
    pathname == "/hire-strapi-developer" ||
    pathname == "/blogs-insights"
  ) {
    bodyclass = "hire-resource";
  } else {
    bodyclass = "";
  }
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={bodyclass}>
        <AddXpHeader />
        {children}
        <AddXpFooter />
      </body>
    </html>
  );
}
