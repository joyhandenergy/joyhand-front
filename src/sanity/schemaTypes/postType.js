import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Used for SEO title. Keep it under 60 characters.',
      validation: (Rule) => Rule.max(60).warning('Longer meta titles might be truncated by search engines.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Used for SEO description. Keep it under 160 characters.',
      validation: (Rule) => Rule.max(160).warning('Longer meta descriptions might be truncated by search engines.'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the blog post, displayed in lists.',
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'e.g., "7 min read"',
    }),
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Image Gallery',
      description: 'Add extra photos here to automatically create a beautiful image gallery at the bottom of the post.',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }
          ]
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [defineArrayMember({type: 'reference', to: [{type: 'category'}]})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      title: 'Body Content',
    }),
    defineField({
      name: 'relatedLinks',
      title: 'Recommended Product & Category Links (Bottom Card Box)',
      description: 'Internal links shown in the Recommended Factory Product Lines box at the bottom of the article.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Link Keyword Label (e.g., LiFePO4 Solar Battery OEM Manufacturer)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'reference',
              title: 'Link to Product or Blog Post',
              type: 'reference',
              to: [{type: 'product'}, {type: 'post'}],
            },
            {
              name: 'routePath',
              title: 'Or Category / Factory Page',
              type: 'string',
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
                ],
              },
            },
            {
              name: 'customHref',
              title: 'Or Custom Relative Path (e.g., /products/10kwh-wall-mount-battery)',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'label',
              routePath: 'routePath',
              customHref: 'customHref',
              refSlug: 'reference.slug.current',
            },
            prepare({title, routePath, customHref, refSlug}) {
              return {
                title: title || 'Internal Link',
                subtitle: refSlug ? `/products/${refSlug}` : (routePath || customHref || 'Select target'),
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'autoKeywordLinks',
      title: 'Auto-Link Unlinked Product Keywords',
      type: 'boolean',
      description: 'Automatically links the first mention of key product terms (LiFePO4 batteries, hybrid inverters, electric scooters, power banks) if not manually linked in Body.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
