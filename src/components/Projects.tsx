import { ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 'checklogix',
        title: 'CheckLogix',
        subtitle: 'Full-Stack Cross-Platform Application with Landing Website',
        description:
            'Cross-platform Flutter app with Laravel backend. Engineering focus on API-first design, JWT auth, and performant mobile/web UX. Includes marketing landing site and enterprise-grade architecture.',
        image: '/projects/checklogix.png',
        tags: ['Flutter', 'Laravel', 'API', 'AWS', 'Cross-platform'],
        links: [{ label: 'Live App', href: 'https://app.checklogix.org/' }, { label: 'Website', href: 'https://checklogix.org/' }],
    },
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

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.tags.map((t) => (
                                        <span key={t} className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                                            {t}
                                        </span>
                                    ))}
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
