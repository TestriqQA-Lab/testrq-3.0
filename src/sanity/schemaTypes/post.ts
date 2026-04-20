import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    __experimental_search: [
        { weight: 10, path: 'title' },
        { weight: 2, path: 'excerpt' },
        { weight: 1, path: 'slug.current' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Descriptive text for SEO and accessibility.',
                },
                {
                    name: 'title',
                    type: 'string',
                    title: 'Image Title (Tooltip)',
                    description: 'Text that appears when users hover over the image.',
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Image Caption',
                    description: 'Visible text displayed below the image.',
                }
            ]
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'tag' } }],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'bodyHtml',
            title: 'Body HTML (Legacy)',
            type: 'text',
            description: 'Raw HTML content migrated from outdated sources. If present, this overrides the Body field.',
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'object',
            fields: [
                defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
                defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
                defineField({
                    name: 'metaKeywords',
                    title: 'Meta Keywords',
                    type: 'string',
                    description: 'Comma separated keywords for SEO.'
                }),
            ]
        }),
    ],

    orderings: [
        {
            title: 'Published Date, Newest',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }]
        },
        {
            title: 'Title, A-Z',
            name: 'titleAsc',
            by: [{ field: 'title', direction: 'asc' }]
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        prepare(selection: any) {
            const { author } = selection
            return { ...selection, subtitle: author ? `by ${author}` : undefined }
        },
    },
})
