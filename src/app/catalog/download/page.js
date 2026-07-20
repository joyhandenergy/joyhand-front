import { Suspense } from "react";
import CatalogDownloadClient from "./CatalogDownloadClient";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Downloading Catalog | JoyHand Energy",
  robots: { index: false, follow: false }
};

export default function CatalogDownloadPage() {
  return (
    <>
      <Header />
      <h1 className="visually-hidden" style={{ display: 'none' }}>Catalog Download</h1>
      <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
        <CatalogDownloadClient />
      </Suspense>
      <Footer />
    </>
  );
}
