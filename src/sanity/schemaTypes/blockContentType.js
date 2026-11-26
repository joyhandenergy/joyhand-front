import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon} from '@sanity/icons'

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Internal Product / Page Link',
            name: 'internalLink',
            type: 'object',
            fields: [
              {
                title: 'Link to Specific Product or Blog Post',
                name: 'reference',
                type: 'reference',
                description: 'Pick a product or article directly from Sanity for safe internal keyword linking.',
                to: [{type: 'product'}, {type: 'post'}],
              },
              {
                title: 'Or Link to Category / Factory Page',
                name: 'routePath',
                type: 'string',
                description: 'Used if no specific Product/Post is picked above.',
                options: {
                  list: [
                    {title: 'All Wholesale Products (/products)', value: '/products'},
                    {title: 'LiFePO4 Solar Batteries (/products/category/solar-batteries)', value: '/products/category/solar-batteries'},
                    {title: 'Hybrid Solar Inverters (/products/category/solar-inverters)', value: '/products/category/solar-inverters'},
                    {title: 'Portable Power Stations (/products/category/portable-power-stations)', value: '/products/category/portable-power-stations'},
                    {title: 'Electric Scooters & Motorcycles (/products/category/electric-motorcycles)', value: '/products/category/electric-motorcycles'},
                    {title: 'Solar Panels & Tech Accessories (/products/category/solar-accessories)', value: '/products/category/solar-accessories'},
                    {title: 'Custom Power Bank OEM (/products/category/power-banks)', value: '/products/category/power-banks'},
                    {title: 'Manufacturing Facility (/manufacturing)', value: '/manufacturing'},
                    {title: 'About JoyHand (/about-us)', value: '/about-us'},
                    {title: 'Contact / Request Quote (/contact-us)', value: '/contact-us'},
                    {title: 'JoyHand Blog (/blog)', value: '/blog'},
                  ],
                },
              },
            ],
          },
          {
            title: 'URL / Custom Link',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL (supports /products/... or https://...)',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineArrayMember({
      type: 'object',
      name: 'inlineGallery',
      title: 'Inline Image Gallery',
      fields: [
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [
            {
              type: 'image',
              options: {hotspot: true},
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                }
              ]
            }
          ]
        }
      ]
    }),
  ],
})
