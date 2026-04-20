import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'customTable',
    title: 'Table',
    type: 'object',
    fields: [
        defineField({
            name: 'rows',
            title: 'Table Rows',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'tableRow',
                    title: 'Row',
                    fields: [
                        defineField({
                            name: 'cells',
                            title: 'Cells',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            rows: 'rows',
        },
        prepare({ rows }) {
            return {
                title: 'Table',
                subtitle: `${rows?.length || 0} rows`,
            }
        },
    },
})
