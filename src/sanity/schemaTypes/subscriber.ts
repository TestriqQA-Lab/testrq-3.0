import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'subscriber',
    title: 'Newsletter Subscribers',
    type: 'document',
    fields: [
        defineField({
            name: 'email',
            title: 'Email Address',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'subscribedAt',
            title: 'Subscribed At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Active', value: 'active' },
                    { title: 'Unsubscribed', value: 'unsubscribed' },
                ],
                layout: 'radio',
            },
            initialValue: 'active',
        }),
    ],
    preview: {
        select: {
            title: 'email',
            subtitle: 'status',
        },
    },
})
