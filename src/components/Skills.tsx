import { Brain, Code, Database, Layout, Server, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI & Cloud Computing',
    icon: Brain,
    skills: [
      'AI Integration',
      'AWS (EC2, S3, RDS, CodeCommit)',
      'Cloud-based Deployments',
      'Infrastructure Management'
    ]
  },
  {
    title: 'Mobile & Web Development',
    icon: Smartphone,
    skills: ['Laravel', 'Flutter', 'React', 'Node.js']
  },
  {
    title: 'Software Architecture',
    icon: Server,
    skills: [
      'RESTful APIs & Microservices',
      'Scalable & Secure Development',
      'Performance Optimization'
    ]
  },
  {
    title: 'UI/UX & Product',
    icon: Layout,
    skills: [
      'Git, GitHub, GitLab, Bitbucket',
      'User-Centric Development',
      'Accessibility'
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: Code,
    skills: ['Docker', 'CI/CD Pipelines', 'CodeCommit']
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
