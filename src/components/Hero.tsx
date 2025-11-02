import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/3 copy.png"
                  alt="M. Siraj Musab"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              M. S. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Musab</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-300 font-light">
              Senior Full-Stack Software Engineer
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              6+ years of expertise in building scalable applications with modern technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-300">
            <a href="mailto:musab.dot@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
              <span>musab.dot@gmail.com</span>
            </a>
            <a href="tel:+94755513162" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone className="w-5 h-5" />
              <span>+94755513162</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Puttalam, Sri Lanka</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://linkedin.com/in/musab-ibnu-siraj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 transition-all hover:scale-110 text-white"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/musab-ibnu-siraj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 transition-all hover:scale-110 text-white"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
