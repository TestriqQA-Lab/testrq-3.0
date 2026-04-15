import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    defineField({
      name: 'certificateId',
      title: 'Certificate ID',
      type: 'string',
      description: 'The unique ID that will be used in the verification URL (e.g., test-id-123).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Recipient Name',
      type: 'string',
      description: 'The name of the individual or company receiving this certificate.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
      description: 'The organization associated with the recipient (optional).',
    }),
    defineField({
      name: 'issueDate',
      title: 'Issue Date',
      type: 'date',
      description: 'The date this certificate was issued or verified.',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
      }
    }),
    defineField({
      name: 'pdfFile',
      title: 'Certificate PDF',
      type: 'file',
      description: 'Upload the physical PDF document of the certificate.',
      validation: (Rule) => Rule.required(),
      options: {
        accept: 'application/pdf',
      }
    }),
  ],
  preview: {
    select: {
      title: 'certificateId',
      subtitle: 'name',
    },
  },
});
