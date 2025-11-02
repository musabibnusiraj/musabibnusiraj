import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Get In Touch
        </h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:musab.dot@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700 transition-all group"
            >
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <p className="text-white font-medium">musab.dot@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+94755513162"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700 transition-all group"
            >
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Phone</p>
                <p className="text-white font-medium">+94755513162</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/50">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Location</p>
                <p className="text-white font-medium">57/2 Poles Road, Puttalam, Sri Lanka</p>
              </div>
            </div>

            <a
              href="https://linkedin.com/in/musab-ibnu-siraj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700 transition-all group"
            >
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">LinkedIn</p>
                <p className="text-white font-medium">musab-ibnu-siraj</p>
              </div>
            </a>
          </div>

          <div className="text-center pt-6 border-t border-slate-700">
            <p className="text-slate-400 mb-4">
              Open to exciting opportunities and collaborations
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://linkedin.com/in/musab-ibnu-siraj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-700 hover:bg-blue-600 transition-all hover:scale-110 text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/musab-ibnu-siraj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-700 hover:bg-blue-600 transition-all hover:scale-110 text-white"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
