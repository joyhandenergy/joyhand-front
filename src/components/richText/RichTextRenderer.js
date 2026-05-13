import { PortableText } from "@portabletext/react";
import Link from "next/link";

const defaultComponents = {
  block: {
    h1: ({ children }) => <h1 className="rich-text__h1">{children}</h1>,
    h2: ({ children }) => <h2 className="rich-text__h2">{children}</h2>,
    h3: ({ children }) => <h3 className="rich-text__h3">{children}</h3>,
    h4: ({ children }) => <h4 className="rich-text__h4">{children}</h4>,
    normal: ({ children }) => <p className="rich-text__p">{children}</p>,
    blockquote: ({ children }) => <blockquote className="rich-text__quote">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="rich-text__bullet-list">{children}</ul>,
    number: ({ children }) => <ol className="rich-text__number-list">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="rich-text__bullet-item">{children}</li>,
    number: ({ children }) => <li className="rich-text__number-item">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <Link href={value.href} rel={rel} className="rich-text__link">
          {children}
        </Link>
      );
    },
    strong: ({ children }) => <strong className="rich-text__strong">{children}</strong>,
    em: ({ children }) => <em className="rich-text__em">{children}</em>,
  },
};

export default function RichTextRenderer({ value, components = {} }) {
  if (!value) return null;

  // If the value is a string, wrap it in a basic Portable Text block structure
  const content = typeof value === 'string' 
    ? [{ _type: 'block', children: [{ _type: 'span', text: value }], style: 'normal' }] 
    : value;

  // Merge default components with overrides
  const mergedComponents = {
    ...defaultComponents,
    ...components,
    block: { ...defaultComponents.block, ...components.block },
    list: { ...defaultComponents.list, ...components.list },
    listItem: { ...defaultComponents.listItem, ...components.listItem },
    marks: { ...defaultComponents.marks, ...components.marks },
  };

  return (
    <div className="rich-text-content">
      <PortableText value={content} components={mergedComponents} />
    </div>
  );
}
