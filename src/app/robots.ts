import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    // F-57: explicit Allow groups for the major AI training + answer-engine
    // crawlers. The default `*` rule already permits them — these explicit
    // entries are a deliberate GEO/AEO signal: "we want to be cited in AI
    // answers and used for model training". A handful of AI bots check
    // specifically for their own UA name before crawling more aggressively.
    //
    // Each AI bot inherits the same disallow list as `*` so they still skip
    // /cms (Sanity Studio), /api routes, etc.
    //
    // List sourced from each crawler's official docs (2026-05):
    //   - GPTBot, ChatGPT-User, OAI-SearchBot — OpenAI training/browsing/SearchGPT
    //   - ClaudeBot, claude-web                — Anthropic training/Claude.ai
    //   - PerplexityBot, Perplexity-User       — Perplexity Search/live retrieval
    //   - Google-Extended                      — Gemini / Bard training (opt-out flag)
    //   - CCBot                                — Common Crawl (used by many LLMs)
    //   - Applebot-Extended                    — Apple Intelligence
    //   - Bytespider                           — ByteDance (TikTok/Doubao)
    //   - Meta-ExternalAgent                   — Meta AI (Llama)
    //   - Diffbot                              — Enterprise LLM grounding
    //   - DuckAssistBot                        — DuckDuckGo AI Assist
    //
    // Easy to opt out of any single bot in the future — change its `allow`
    // to `disallow: '/'` or delete the entry.

    const sharedDisallow = ['/private/', '/admin/', '/api/', '/cms', '/cms/'];

    const aiBots = [
        'GPTBot',
        'ChatGPT-User',
        'OAI-SearchBot',
        'ClaudeBot',
        'claude-web',
        'PerplexityBot',
        'Perplexity-User',
        'Google-Extended',
        'CCBot',
        'Applebot-Extended',
        'Bytespider',
        'Meta-ExternalAgent',
        'Diffbot',
        'DuckAssistBot',
    ];

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: sharedDisallow,
            },
            ...aiBots.map((userAgent) => ({
                userAgent,
                allow: '/',
                disallow: sharedDisallow,
            })),
        ],
        sitemap: 'https://www.testriq.com/sitemap.xml',
    };
}
