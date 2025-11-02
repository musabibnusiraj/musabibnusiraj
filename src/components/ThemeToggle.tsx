import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        try {
            const saved = localStorage.getItem('theme');
            if (saved) return saved === 'dark';
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        } catch (e) {
            return false;
        }
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <button
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setIsDark((s) => !s)}
            className="inline-flex items-center justify-center px-2 py-1 rounded-md text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition"
        >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
    );
}

export default ThemeToggle;
