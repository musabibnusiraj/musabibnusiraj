import { GraduationCap } from 'lucide-react';

const education = [
  {
    institution: 'Kingston University - UK',
    degree: 'Bachelor of Science (BSc) with Honours in Software Engineering',
    year: '2024'
  },
  {
    institution: 'Sri Lanka - German Training Institute',
    degree: 'National Diploma in Information and Communication Technology (NVQ 5)',
    year: '2018'
  },
  {
    institution: 'Vocational Training Authority of Sri Lanka',
    degree: 'ICT Technician (NVQ 4)',
    year: '2015'
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {edu.institution}
                      </h3>
                      <p className="text-slate-300">{edu.degree}</p>
                    </div>
                    <span className="text-blue-400 font-medium">{edu.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
