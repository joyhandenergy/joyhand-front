import QuotationClient from "./QuotationClient";

export const metadata = {
  title: "Custom Quotation | Joyhand Energy",
  description: "View and download your custom quotation from Joyhand Energy.",
};

export default function QuotationPage() {
  return (
    <QuotationClient />
  );
}
