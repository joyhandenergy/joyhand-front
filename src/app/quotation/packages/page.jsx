import PageHeader from "@/components/pageHeader/PageHeader";
import PackageQuotationBuilder from "./PackageQuotationBuilder";

export const metadata = {
  title: "Full Set Solar Quotations | JoyHand Energy",
  description: "Download fixed package quotations for our 3.3KW, 5KW, and 10KW solar full sets.",
};

export default function PackageQuotationPage() {
  return (
    <main className="quotation-page">
      <PageHeader
        title="Full Set Quotations"
        subtitle="Download preset quotations for our standard 3.3KW, 5KW, and 10KW solar sets."
        pageImage="/pageHeadImg/pageheader-products01.jpg"
      />
      <div className="container" style={{ padding: "4rem 0" }}>
        <PackageQuotationBuilder />
      </div>
    </main>
  );
}
