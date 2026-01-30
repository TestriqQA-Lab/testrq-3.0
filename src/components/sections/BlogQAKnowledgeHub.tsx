import Link from 'next/link';
import React, { useState } from 'react';
import {
    FaArrowRight,
    FaLightbulb,
    FaShieldAlt,
    FaRocket,
    FaCode,
    FaMobile,
    FaChartLine,
    FaBookOpen,
    FaUsers,
    FaClock,
    FaStar,
    FaFire,
    FaDownload,
    FaPlay,
    FaBell,
    FaCheckCircle
} from 'react-icons/fa';

const QAKnowledgeHub: React.FC = () => {
    const [selectedPath, setSelectedPath] = useState<number | null>(null);
    const [email, setEmail] = useState('');

    const learningPaths = [
        {
            id: 1,
            title: 'Automation Mastery',
            level: 'Beginner to Advanced',
            duration: '8 weeks',
            modules: 24,
            icon: <FaCode className="w-6 h-6" />,
            gradient: 'from-blue-500 via-blue-600 to-indigo-600',
            topics: ['Selenium', 'Cypress', 'Playwright', 'CI/CD'],
            students: '12.5K',
        },
        {
            id: 2,
            title: 'Security Expert Path',
            level: 'Intermediate',
            duration: '6 weeks',
            modules: 18,
            icon: <FaShieldAlt className="w-6 h-6" />,
            gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
            topics: ['OWASP', 'Penetration Testing', 'Vulnerability Assessment'],
            students: '8.3K',
        },
        {
            id: 3,
            title: 'Performance Pro',
            level: 'Advanced',
            duration: '5 weeks',
            modules: 15,
            icon: <FaRocket className="w-6 h-6" />,
            gradient: 'from-violet-500 via-purple-600 to-fuchsia-600',
            topics: ['JMeter', 'K6', 'Load Testing', 'Scalability'],
            students: '9.7K',
        },
        {
            id: 4,
            title: 'Mobile Testing Pro',
            level: 'Intermediate',
            duration: '7 weeks',
            modules: 21,
            icon: <FaMobile className="w-6 h-6" />,
            gradient: 'from-amber-500 via-orange-600 to-red-600',
            topics: ['Appium', 'iOS Testing', 'Android', 'Cross-Platform'],
            students: '10.2K',
        },
    ];

    const trendingTopics = [
        {
            title: 'AI-Powered Test Generation',
            views: '45.2K',
            trend: '+156%',
            badge: 'Hot',
            color: 'pink',
        },
        {
            title: 'Shift-Left Testing Strategies',
            views: '38.9K',
            trend: '+124%',
            badge: 'Trending',
            color: 'blue',
        },
        {
            title: 'API Testing with Postman & REST Assured',
            views: '52.1K',
            trend: '+98%',
            badge: 'Popular',
            color: 'violet',
        },
        {
            title: 'Test Automation ROI Calculator',
            views: '29.4K',
            trend: '+187%',
            badge: 'New',
            color: 'emerald',
        },
    ];

    const resources = [
        {
            title: 'Ultimate QA Checklist',
            type: 'PDF Guide',
            downloads: '23.5K',
            icon: <FaDownload className="w-5 h-5" />,
        },
        {
            title: 'Testing Tools Comparison',
            type: 'Interactive Tool',
            downloads: '18.2K',
            icon: <FaChartLine className="w-5 h-5" />,
        },
        {
            title: 'Video Tutorials Series',
            type: '20+ Videos',
            downloads: '31.7K',
            icon: <FaPlay className="w-5 h-5" />,
        },
    ];

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle email submission
        console.log('Email submitted:', email);
        setEmail('');
    };

    return (
        <section className="relative bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/20 via-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-violet-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-emerald-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 lg:mb-20">
                    {/* Animated Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20 rounded-2xl mb-6 backdrop-blur-sm">
                        <FaFire className="w-4 h-4 text-orange-400 animate-pulse" />
                        <span className="text-sm text-blue-300 font-bold tracking-wide">INTERACTIVE LEARNING HUB</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.15]">
                        Your Journey to{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Testing Excellence
                            </span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-fuchsia-500/30 blur-lg" />
                        </span>
                    </h2>
                    <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Structured learning paths, trending insights, and premium resources designed for modern QA professionals
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Left Column - Learning Paths (2/3 width) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl flex items-center justify-center">
                                    <FaBookOpen className="w-5 h-5 text-white" />
                                </div>
                                Curated Learning Paths
                            </h3>
                            <Link href="/learning-paths" className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-2 transition-colors">
                                View All
                                <FaArrowRight className="w-3 h-3" />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {learningPaths.map((path) => (
                                <div
                                    key={path.id}
                                    onClick={() => setSelectedPath(path.id)}
                                    className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${selectedPath === path.id
                                        ? 'border-blue-500 bg-slate-800/80'
                                        : 'border-slate-700/50 hover:border-slate-600'
                                        }`}
                                >
                                    {/* Gradient accent */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                                    <div className="relative p-6">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-14 h-14 bg-gradient-to-br ${path.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                                                {path.icon}
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-700/50 rounded-lg">
                                                <FaStar className="w-3 h-3 text-yellow-400" />
                                                <span className="text-xs text-slate-300 font-semibold">{path.students}</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                            {path.title}
                                        </h4>

                                        {/* Meta */}
                                        <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                                            <span className="flex items-center gap-1.5">
                                                <FaClock className="w-3.5 h-3.5" />
                                                {path.duration}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <FaBookOpen className="w-3.5 h-3.5" />
                                                {path.modules} modules
                                            </span>
                                        </div>

                                        {/* Topics */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {path.topics.map((topic, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg border border-slate-600/50"
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Level badge */}
                                        <div className="pt-4 border-t border-slate-700/50">
                                            <span className="inline-flex items-center gap-2 text-sm">
                                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                                <span className="text-slate-400">{path.level}</span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Checkmark for selected */}
                                    {selectedPath === path.id && (
                                        <div className="absolute top-4 right-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                            <FaCheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Trending & Resources */}
                    <div className="space-y-6">
                        {/* Trending Topics */}
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <FaFire className="w-5 h-5 text-orange-400" />
                                Trending Now
                            </h3>

                            <div className="space-y-4">
                                {trendingTopics.map((topic, idx) => (
                                    <Link
                                        key={idx}
                                        href={`/blog/${topic.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="group block"
                                    >
                                        <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-700/30 transition-colors">
                                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                                                {idx + 1}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors line-clamp-2">
                                                    {topic.title}
                                                </h4>
                                                <div className="flex items-center gap-3 text-xs">
                                                    <span className="text-slate-400">{topic.views} views</span>
                                                    <span className="text-green-400 font-semibold">{topic.trend}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Free Resources */}
                        <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <FaDownload className="w-5 h-5 text-blue-400" />
                                Free Resources
                            </h3>

                            <div className="space-y-3">
                                {resources.map((resource, idx) => (
                                    <button
                                        key={idx}
                                        className="w-full flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/80 transition-all group"
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center text-white">
                                            {resource.icon}
                                        </div>
                                        <div className="flex-1 text-left">
                                            <h4 className="text-sm font-semibold text-white mb-0.5 group-hover:text-blue-300 transition-colors">
                                                {resource.title}
                                            </h4>
                                            <p className="text-xs text-slate-400">{resource.type}</p>
                                        </div>
                                        <FaArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter CTA - Lead Generation */}
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 rounded-[2.5rem] blur-2xl" />

                    <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-[2rem] border border-slate-700/50 overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-violet-500/10 to-transparent rounded-full blur-2xl" />

                        <div className="relative z-10 px-8 py-12 md:px-16 md:py-16">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left - Newsletter Form */}
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl mb-4">
                                        <FaBell className="w-4 h-4 text-blue-400" />
                                        <span className="text-sm text-blue-300 font-semibold">WEEKLY NEWSLETTER</span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                        Get Expert QA Insights{" "}
                                        <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                                            Delivered Weekly
                                        </span>
                                    </h3>

                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        Join 50,000+ QA professionals receiving curated testing tips, industry news, and exclusive resources
                                    </p>

                                    <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="flex-1 px-5 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-violet-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                                        >
                                            <span>Subscribe</span>
                                            <FaArrowRight className="w-4 h-4" />
                                        </button>
                                    </form>

                                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                                        <div className="flex items-center gap-2">
                                            <FaCheckCircle className="w-4 h-4 text-green-400" />
                                            <span>No spam, ever</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaCheckCircle className="w-4 h-4 text-green-400" />
                                            <span>Unsubscribe anytime</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaCheckCircle className="w-4 h-4 text-green-400" />
                                            <span>Free forever</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right - Stats Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-colors">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                                            <FaBookOpen className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-3xl font-bold text-white mb-1">200+</div>
                                        <div className="text-sm text-slate-400 font-medium">Expert Articles</div>
                                    </div>

                                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-violet-500/30 transition-colors">
                                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                                            <FaUsers className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-3xl font-bold text-white mb-1">50K+</div>
                                        <div className="text-sm text-slate-400 font-medium">Active Readers</div>
                                    </div>

                                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-emerald-500/30 transition-colors">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                                            <FaClock className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-3xl font-bold text-white mb-1">Weekly</div>
                                        <div className="text-sm text-slate-400 font-medium">New Content</div>
                                    </div>

                                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-orange-500/30 transition-colors">
                                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                                            <FaLightbulb className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-3xl font-bold text-white mb-1">100%</div>
                                        <div className="text-sm text-slate-400 font-medium">Free Access</div>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                                        <span className="text-green-400 font-bold text-xs">✓</span>
                                    </div>
                                    <span>ISTQB Certified Authors</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                                        <span className="text-blue-400 font-bold text-xs">✓</span>
                                    </div>
                                    <span>Industry Best Practices</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 bg-violet-500/20 rounded-lg flex items-center justify-center border border-violet-500/30">
                                        <span className="text-violet-400 font-bold text-xs">✓</span>
                                    </div>
                                    <span>Real-World Case Studies</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QAKnowledgeHub;