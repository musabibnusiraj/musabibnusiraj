import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full-Stack Engineer',
    company: 'Imara Software Solutions',
    period: 'February 2023 – Present',
    responsibilities: [
      'Developed enterprise-level web and mobile applications using Laravel, Flutter, React, Angular, and Node.js',
      'Led AI integration and optimized system performance across frontend and backend components',
      'Utilized AWS (EC2, S3, RDS, CodeCommit), Docker, and CI/CD pipelines for efficient deployment of full-stack applications'
    ]
  },
  {
    title: 'Full-Stack Engineer',
    company: 'Imara Software Solutions',
    period: 'January 2021 – February 2023',
    responsibilities: [
      'Built and maintained web and mobile applications using Flutter, Laravel, React, Angular, and Node.js',
      'Integrated AI features and enhanced performance optimization across full-stack solutions'
    ]
  },
  {
    title: 'Full-Stack Developer',
    company: 'Imara Software Solutions',
    period: 'November 2018 – January 2021',
    responsibilities: [
      'Developed full-stack web and mobile applications with focus on UI/UX design and scalable architecture',
      'Implemented RESTful APIs and database integration for seamless data flow',
      'Collaborated with cross-functional teams to deliver responsive and user-friendly applications'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-slate-400 text-sm">{exp.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-slate-300 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
