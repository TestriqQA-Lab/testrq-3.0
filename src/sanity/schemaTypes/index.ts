import { type SchemaTypeDefinition } from 'sanity'

import post from './post'
import author from './author'
import category from './category'
import tag from './tag'
import blockContent from './blockContent'
import customTable from './customTable'
import subscriber from './subscriber'
import caseStudy from './caseStudy'
import jobPosting from './jobPosting'
import certificate from './certificate'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, author, category, tag, blockContent, customTable, subscriber, caseStudy, jobPosting, certificate],
}
