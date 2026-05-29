import {PackageIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: PackageIcon,
  groups: [
    { name: 'general', title: 'General Info', default: true },
    { name: 'specs', title: 'Specifications' },
    { name: 'media', title: 'Media' },
    { name: 'seo', title: 'SEO & Structured Data' },
  ],
  fields: [
    // --- GENERAL ---
    defineField({ name: 'name', type: 'string', title: 'Product Name', group: 'general' }),
    defineField({ name: 'model', type: 'string', title: 'Model / SKU', group: 'general' }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'name' },
      group: 'general'
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      group: 'general',
      options: {
        list: [
          {title: 'Storage Battery', value: 'battery'},
          {title: 'Solar Inverter', value: 'inverter'},
          {title: 'Portable Power Station', value: 'portable-power'},
          {title: 'Power Bank', value: 'power-bank'},
          {title: 'E-Mobility', value: 'electric-mobility'},
          {title: 'Tech & Solar Accessories', value: 'accessories'}
        ],
      }
    }),
    defineField({
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
      description: 'Used for product cards and quick overviews.',
      group: 'general'
    }),
    defineField({
      name: 'description',
      type: 'blockContent',
      title: 'Full Product Description',
      group: 'general'
    }),

    // --- SPECS ---
    defineField({
      name: 'keySpecs',
      title: 'Key Specifications (SEO Critical)',
      description: 'Add the 6-8 most important specs here. These will be highlighted on the page and used for search snippets.',
      type: 'array',
      group: 'specs',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {name: 'specName', type: 'string', title: 'Specification Name (e.g., Battery Capacity)'},
            {name: 'specValue', type: 'string', title: 'Value (e.g., 1000Wh)'}
          ],
          preview: { select: { title: 'specName', subtitle: 'specValue' } }
        })
      ]
    }),
    defineField({
      name: 'fullSpecs',
      title: 'Full Specifications Table',
      description: 'All remaining technical specifications.',
      type: 'array',
      group: 'specs',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {name: 'specName', type: 'string', title: 'Specification Name'},
            {name: 'specValue', type: 'string', title: 'Value'}
          ],
          preview: { select: { title: 'specName', subtitle: 'specValue' } }
        })
      ]
    }),
    defineField({
      name: 'features',
      title: 'Key Features / Highlights',
      type: 'array',
      group: 'specs',
      of: [{type: 'string'}],
    }),

    // --- MEDIA ---
    defineField({
      name: 'mainImage',
      title: 'Main Product Image',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt Text (Crucial for Image SEO)' }]
    }),
    defineField({
      name: 'gallery',
      title: 'Product Gallery',
      type: 'array',
      group: 'media',
      of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }] }]
    }),
    defineField({
      name: 'datasheet',
      title: 'Datasheet / Manual (PDF)',
      type: 'file',
      group: 'media'
    }),

    // --- SEO & RICH SNIPPETS ---
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.max(60).warning('Keep under 60 characters')
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      validation: (Rule) => Rule.max(160).warning('Keep under 160 characters')
    }),
    defineField({
      name: 'faq',
      title: 'Product FAQs (For FAQ Schema Markup)',
      description: 'Adding FAQs generates rich snippets in Google search results, massively boosting click-through rates.',
      type: 'array',
      group: 'seo',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {name: 'question', type: 'string', title: 'Question'},
            {name: 'answer', type: 'text', title: 'Answer'}
          ]
        })
      ]
    }),
  ],
  preview: {
    select: {
      title: 'name',
      model: 'model',
      seoTitle: 'seoTitle',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, model, seoTitle, media} = selection;
      return {
        title: title,
        subtitle: seoTitle ? `SEO: ${seoTitle}` : (model ? `Model: ${model}` : 'No SEO Title!'),
        media: media,
      };
    }
  },
})
