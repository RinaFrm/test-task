import { Geologica } from "next/font/google";
import Sidebar from "@/src/components/Sidebar/sidebar";
import ProductPage from "@/src/pages/ProductPage/productPage";

const geologicaSans = Geologica({
  variable: "--font-geologica-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
        className={`${geologicaSans.className} grid min-h-screen font-[family-name:var(--font-geologica-sans)]`}
      >
      <main className="flex flex-row">
        <Sidebar />
        <ProductPage />
      </main>
    </div>
  );
}