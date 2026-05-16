// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
    return <NextStudio config={config} />
}
