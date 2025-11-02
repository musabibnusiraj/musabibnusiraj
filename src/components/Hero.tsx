import { Github, Linkedin, Mail, Brain, Globe, Smartphone } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600 to-slate-700 text-white p-10 shadow-card">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
          <div className="flex flex-col md:flex-row md:flex-row-reverse items-center gap-8 relative">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden ring-4 ring-white/30">
                <img src="/3.png" alt="Musab Ibnu Siraj" className="w-full h-full object-cover" loading="eager" />
              </div>
            </div>

            <div className="flex-1 text-left md:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">Senior Full-Stack Engineer</h1>

              <div className="mt-3 flex items-center flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <Brain className="w-4 h-4" />
                  AI
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <Globe className="w-4 h-4" />
                  Web
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <Smartphone className="w-4 h-4" />
                  Mobile
                </span>


                <p className="text-white/95 text-base md:text-lg lg:text-xl font-medium">building reliable products at scale</p>
              </div>

              <p className="mt-4 text-white/90 max-w-xl">I design and ship production-ready systems using TypeScript, React, Node, Flutter, Laravel and AWS. I focus on performance, observability, and developer experience.</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:musab.dot@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-slate-900 font-medium hover:opacity-95">
                  <Mail className="w-4 h-4" />
                  Email
                </a>

                <a href="https://linkedin.com/in/musab-ibnu-siraj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 border border-white/20 hover:bg-white/20">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>

                <a href="https://github.com/musabibnusiraj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 border border-white/20 hover:bg-white/20">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
