import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto flex items-center justify-between py-3">
                <a href="#" aria-label="Home" className="inline-flex items-center gap-2">
                    {/* <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold">MS</div> */}
                </a>

                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center gap-4">
                        <a href="#about" className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600">About</a>
                        <a href="#experience" className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600">Experience</a>
                        <a href="#skills" className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600">Skills</a>
                        <a href="#projects" className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600">Projects</a>
                        <a href="#contact" className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600">Contact</a>
                    </nav>

                    <a href="/resume.pdf" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700">Resume</a>

                    <div className="md:hidden">
                        <button
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            aria-expanded={open}
                            onClick={() => setOpen((s) => !s)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-800 border border-slate-100 dark:border-slate-800"
                        >
                            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>

                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            {open && (
                <div className="md:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setOpen(false)}>
                    <div className="absolute right-4 top-4 w-[88vw] max-w-xs bg-white dark:bg-slate-900 rounded-lg p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <nav className="flex flex-col gap-3">
                            <a href="#about" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-slate-800 dark:text-white">About</a>
                            <a href="#experience" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-slate-800 dark:text-white">Experience</a>
                            <a href="#skills" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-slate-800 dark:text-white">Skills</a>
                            <a href="#projects" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-slate-800 dark:text-white">Projects</a>
                            <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-slate-800 dark:text-white">Contact</a>
                            <a href="/resume.pdf" className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary-600 text-white">Resume</a>
                            <div className="mt-3 flex items-center justify-between">
                                <span className="text-sm text-slate-600 dark:text-slate-400">Theme</span>
                                <ThemeToggle />
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Nav;
