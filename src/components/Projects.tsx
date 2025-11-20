import { ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 'checklogix',
        title: 'CheckLogix',
        subtitle: 'Full-Stack Cross-Platform Application with Landing Website',
        description:
            'Cross-platform Flutter app with Laravel backend. Engineering focus on API-first design, JWT auth, Stripe payments, and subscription management. Includes marketing landing site and enterprise-grade architecture.',
        image: '/projects/checklogix.png',
        // 'role' describes the scope of my involvement. Use 'Full-stack' for projects where
        // I worked on both frontend and backend; use 'Frontend' or 'Backend' if my work
        // was limited to one side. Add '(partial)' when I contributed but wasn't the primary
        // owner.
        role: 'Full-stack',
        tags: ['Flutter', 'Laravel', 'API', 'AWS', 'Stripe', 'Subscription', 'Cross-platform'],
        links: [{ label: 'App', href: 'https://app.checklogix.org/' }, { label: 'Website', href: 'https://checklogix.org/' }],
    },
    {
        id: 'mailfast',
        title: 'MailFast',
        subtitle: 'Next Day International Parcel Booking Platform',
        description:
            'Built with WordPress, MailFast uses CourierAPI for shipping, integrates PayPal, and provides competitor price comparison, QR code generation, and parcel booking features.',
        image: '/projects/mailfast.png',
        role: 'Full-stack (partial)',
        tags: ['WordPress', 'CourierAPI', 'PayPal', 'Competitor Comparison', 'QR Code', 'Parcel Booking', 'Shipping', 'Web App', 'Calculator', 'Logistics'],
        links: [
            // { label: 'Website', href: 'http://mail-fast.test/' }
        ],
    },
    {
        id: 'addon-poze', // unique slug-like id
        title: 'Addon Poze',
        subtitle: 'Laravel package for inventory & purchase management',
        description:
            'An inventory & purchase order Laravel package with advanced features: permission control, vendor management, import/export and UI modules to quickly add PO flows to Laravel apps.',
        image: '/projects/addon-poze.png',
        tags: ['Laravel', 'PHP', 'Inventory', 'Package', 'B2B'],
        links: [
            //   { label: 'Repository', href: 'https://github.com/your-org/addon-poze' },
            //   { label: 'Docs', href: 'https://your-docs-site.example.com/addon-poze' }
        ],
    },
    // {
    //     id: 'mi-invitation-platform',
    //     title: 'MI Invitation Platform',
    //     subtitle: 'Full-Stack Event Management SaaS with Mobile App & Admin Dashboard',
    //     description:
    //         'Complete event invitation platform featuring a Flutter mobile app (iOS/Android) and React-based admin dashboard. Built on MERN stack with MongoDB for data persistence, Express.js REST APIs, and Node.js backend. Admin panel includes user management, invitation analytics, content moderation, and real-time monitoring. Mobile app features AWS Amplify for storage, OTP authentication, contact integration, and interactive engagement tools.',
    //     image: '/projects/epic-invitation.png',
    //     role: 'Full-stack',
    //     tags: ['Flutter', 'React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack', 'AWS S3', 'Admin Dashboard', 'REST API', 'Cross-platform', 'SaaS'],
    //     links: [
    //         // { label: 'Admin Dashboard', href: 'https://admin.epicinvitation.com/' },
    //         // { label: 'App Store', href: 'https://apps.apple.com/app/epic-invitation/id...' },
    //         // { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=...' }
    //     ],
    // },
    // {
    //     id: 'mi-invitation-engagement-platform',
    //     title: 'MI Invitation & Engagement Platform',
    //     subtitle: 'Multi-Platform Event Invitation SaaS with Gamification & Rewards System',
    //     description:
    //         'Enterprise-grade invitation and engagement platform featuring a Flutter mobile app (iOS/Android), React admin dashboard, and Node.js backend. The system enables businesses to create and distribute marketing invitations via SMS to mobile contacts. Recipients earn points by viewing invitations, clicking advertisement links, and engaging with product promotions. Points can be redeemed through in-app games to win real prizes. The admin dashboard provides comprehensive management of invitations, user engagement analytics, point systems, prize configuration, game templates, advertisement tracking, and real-time monitoring. Built with MERN stack, AWS S3 for media storage, OTP authentication, contact integration, and RESTful APIs for seamless cross-platform communication.',
    //     image: '/projects/epic-invitation.png',
    //     role: 'Full-Stack Developer & System Architect',
    //     tags: [
    //         'Flutter',
    //         'React',
    //         'TypeScript',
    //         'Node.js',
    //         'Express.js',
    //         'MongoDB',
    //         'MERN Stack',
    //         'AWS S3',
    //         'REST API',
    //         'Gamification',
    //         'SMS Integration',
    //         'OTP Authentication',
    //         'Admin Dashboard',
    //         'Points & Rewards',
    //         'Analytics',
    //         'Cross-platform',
    //         'SaaS',
    //         'Mobile Development'
    //     ],
    //     features: [
    //         'SMS-based invitation distribution from mobile contacts',
    //         'Points & rewards system for user engagement',
    //         'Interactive games with real prize redemption',
    //         'Advertisement link tracking and analytics',
    //         'Multi-tenant admin dashboard',
    //         'Real-time engagement monitoring',
    //         'Prize and game template management',
    //         'Contact integration and management',
    //         'Comprehensive user action history',
    //         'Credit and notification systems'
    //     ],
    //     technicalHighlights: [
    //         'Microservices architecture with Docker containerization',
    //         'JWT-based authentication with OTP verification',
    //         'AWS S3 integration for scalable media storage',
    //         'Real-time analytics and reporting',
    //         'Responsive admin panel with advanced filtering',
    //         'RESTful API design with Express.js',
    //         'MongoDB with multi-tenant data isolation',
    //         'Flutter cross-platform mobile development',
    //         'TypeScript for type-safe frontend development'
    //     ],
    //     links: [
    //         // { label: 'Admin Dashboard', href: 'https://admin.mi-invitation.com/' },
    //         // { label: 'API Documentation', href: 'https://docs.mi-invitation.com/' },
    //         // { label: 'App Store', href: 'https://apps.apple.com/app/mi-invitation/id...' },
    //         // { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=...' }
    //     ],
    // },
    {
        id: 'mi-invitation-platform',
        title: 'MI Invitation & Rewards Platform',
        subtitle: 'SaaS Platform with Gamification & SMS Marketing',
        description:
            'Invitation platform with Flutter app and React dashboard. Send SMS invitations, earn points from engagement and ad views, win prizes through games. Includes admin panel for management and analytics. MERN stack with AWS S3.',
        image: '/projects/epic-invitation.png',
        role: 'Full-Stack Developer',
        tags: ['Flutter', 'React', 'Node.js', 'MongoDB', 'AWS S3', 'Gamification', 'SMS Marketing'],
        links: []
    }
    // Add more working projects here
];

export function Projects() {
    return (
        <section id="projects" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">My Work & Contributions</h2>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">A showcase of completed projects and live applications I've built or contributed to.</p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <article key={p.id} className="group rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-card hover:shadow-md transition-all">
                            <div className="relative h-44 overflow-hidden">
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-20 pointer-events-none"></div>
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{p.subtitle}</p>
                                <p className="mt-3 text-slate-700 dark:text-slate-200 text-sm">{p.description}</p>

                                <div className="mt-3 flex flex-wrap gap-2 items-center">
                                    {/* {p.role && (
                                        <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-primary-50 text-primary-600">
                                            {p.role}
                                        </span>
                                    )} */}

                                    <div className="flex flex-wrap gap-2">
                                        {p.tags.map((t) => (
                                            <span key={t} className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-3">
                                    {p.links.map((l) => (
                                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary-50 text-primary-600 hover:bg-primary-100 border border-transparent transition-all">
                                            <ExternalLink className="w-4 h-4" />
                                            <span className="text-sm">{l.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
