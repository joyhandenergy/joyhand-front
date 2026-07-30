import Link from "next/link";
import { Fragment } from "react";
import { PiHouse, PiCaretRight } from "react-icons/pi";
import "./Breadcrumbs.css";

const Breadcrumbs = ({ items, currentTitle }) => {
  const schemaItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.joyhand.com/"
    }
  ];

  if (items) {
    items.forEach((item, idx) => {
      schemaItems.push({
        "@type": "ListItem",
        "position": idx + 2,
        "name": item.label,
        "item": `https://www.joyhand.com${item.link}`
      });
    });
  }
  
  if (currentTitle) {
    schemaItems.push({
      "@type": "ListItem",
      "position": schemaItems.length + 1,
      "name": currentTitle
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": schemaItems
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link href="/" className="breadcrumbs__link">
              <PiHouse className="breadcrumbs__home-icon" />
              <span>Home</span>
            </Link>
          </li>
          <li className="breadcrumbs__sep"><PiCaretRight /></li>
          
          {items && items.map((item, index) => (
            <Fragment key={index}>
              <li className="breadcrumbs__item">
                <Link href={item.link} className="breadcrumbs__link">{item.label}</Link>
              </li>
              <li className="breadcrumbs__sep"><PiCaretRight /></li>
            </Fragment>
          ))}
          
          <li className="breadcrumbs__item" aria-current="page">
            <span className="breadcrumbs__current">{currentTitle}</span>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
