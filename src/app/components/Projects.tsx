import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, ExternalLink, TrendingUp } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

const projects = [
  {
    title: 'Retail Demand Forecasting Analytics System',
    subtitle: 'Machine Learning-Based Sales Prediction',
    description:
      'Built a data analytics pipeline to analyze retail sales data and forecast product demand using time-series models. Implemented ETL workflows for data cleaning and transformation and developed interactive dashboards to visualize sales trends, seasonal demand patterns, and inventory risks.',
    tags: ['Python', 'Pandas', 'Prophet', 'SQL', 'Power BI', 'PostgreSQL'],
    metrics: [
      { label: 'Dataset', value: 'Retail Sales Data' },
      { label: 'Forecasting', value: 'Time-Series Model' },
    ],
    gradient: 'from-blue-500 to-purple-600',
    github: 'https://github.com/anupamraj0711/retail-demand-forecasting-analytics',
    demo: null,
    highlight: true,
  },
{
  title: 'Employee Management System (EMS)',
  subtitle: 'Full-Stack Employee Data Management Application',
  description:
    'Developed a web-based Employee Management System to manage employee records, including adding, updating, deleting, and viewing employee details. Implemented database integration and CRUD operations to efficiently handle employee information.',
  tags: ['Python', 'Flask', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
  metrics: [
    { label: 'System Type', value: 'CRUD Application' },
    { label: 'Database', value: 'MongoDB' },
  ],
  gradient: 'from-blue-500 to-cyan-600',
  github: 'https://github.com/anupamraj0711/ems',
  demo: null,
},
    {
      title: 'Disease Prediction using Random Forest',
      subtitle: 'Supervised Machine Learning Model',
      description:
        'Built a classification model using Random Forest for disease prediction with feature engineering, model evaluation, and performance optimization.',
      tags: ['Python', 'Scikit-learn', 'Random Forest', 'Model Evaluation'],
      metrics: [
        { label: 'Algorithm', value: 'Random Forest' },
        { label: 'Task', value: 'Classification' },
      ],
      gradient: 'from-green-500 to-emerald-600',
      github: '#',
      demo: null,
    },
      {
  title: 'Smart Video Surveillance System',
  subtitle: 'IoT-Based Security & Monitoring System',
  description:
    'Developed a hybrid hardware–software surveillance system using ESP32, Arduino UNO, RFID, and ESP32-CAM modules integrated with a web-based dashboard. The system enables real-time user authentication, motion detection using IR sensors, live camera streaming, and secure access monitoring.',
  tags: ['ESP32', 'Arduino', 'RFID', 'IoT', 'HTML', 'CSS', 'JavaScript'],
  metrics: [
    { label: 'System Type', value: 'IoT Surveillance' },
    { label: 'Features', value: 'Live Monitoring' },
  ],
  gradient: 'from-green-500 to-emerald-600',
  github: 'https://github.com/anupamraj0711',
  demo: null,
},
{
  title: 'Agentic AI for Personalized Healthcare Coordination System',
  subtitle: 'Capstone Project – Intelligent Healthcare Automation',
  description:
    'Developing an Agentic AI-based healthcare coordination system that analyzes patient health data and medical records to provide personalized healthcare recommendations and automated decision support.',
  tags: ['Python', 'Agentic AI', 'Machine Learning', 'Healthcare AI'],
  metrics: [
    { label: 'Domain', value: 'Healthcare AI' },
    { label: 'Status', value: 'In Progress' },
  ],
  gradient: 'from-purple-500 to-pink-600',
  github: 'https://github.com/anupamraj0711',
  demo: null,
  inProgress: true,
},

  ];

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full ${
                project.highlight ? 'ring-2 ring-yellow-500/40' : ''
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative flex flex-col h-full">
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-blue-400">{project.subtitle}</p>
                    </div>

                    {project.highlight && (
                      <TrendingUp className="w-6 h-6 text-yellow-400" />
                    )}
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-lg p-3"
                    >
                      <div className="text-xs text-gray-400 mb-1">{metric.label}</div>
                      <div className="font-bold text-sm">{metric.value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                  <div className="flex-grow" />
                {project.github !== '#' && (
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </a>
                  </div>
                )}

                {project.inProgress && (
                  <div className="mt-4 text-xs text-yellow-400">
                    🚧 Currently Under Development
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}