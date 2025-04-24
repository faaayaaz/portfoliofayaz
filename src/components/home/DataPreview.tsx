
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DataPreview() {
  const chartRef = useRef<HTMLDivElement>(null);

  const dataProjects = [
    {
      title: "Clinical Analysis Report - Cortex",
      technologies: "Power BI, Power Query, MySQL, DAX",
      description: "Developed and maintained interactive Power BI dashboards to visualize key clinic metrics, including patient data, operational performance, and financial insights. Integrated data from MySQL and connected a complex data model to drive data-driven insights."
    },
    {
      title: "Employee Performance | PwC Switzerland Power BI Job Simulation",
      technologies: "Power BI , DAX, Microsoft Excel",
      description: "Built a prediction model for fashion inventory management with 92% accuracy."
    },
    {
      title: "Emission CO2 Insights",
      technologies: "Power BI, Microsoft Excel, DAX",
      description: "Developed a dynamic Power BI Dashboard focused on analyzing and visualizing vehicle CO2 emissions based on fuel type, Powertrain. Empowered stakeholders to make informed decisions regarding emission reduction strategies and sustainable vehicle options."
    }
  ];

  return (
    <section className="section-padding bg-data-lightblue/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-3">Data Analysis Projects</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Leveraging data science and analytical skills to extract insights and
              solve complex business problems.
            </p>
          </div>
          {/* REMOVED PROJECT BAR CHART PER REQUEST */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <h3 className="text-xl font-serif mb-2">My Analytical Approach</h3>
              <p className="text-gray-700">
                I combine statistical methods with modern data science techniques to 
                derive actionable insights from complex datasets.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Python & Data Science</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress bg-data-blue"
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">SQL & Database</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress bg-data-teal"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Data Visualization</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress bg-data-navy"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* Could feature profile or other image/summary here in future */}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataProjects.map((project, index) => (
              <motion.div
                key={index}
                className="data-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-serif mb-2">{project.title}</h3>
                <div className="text-sm text-data-blue mb-3">{project.technologies}</div>
                <p className="text-gray-600">{project.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="bg-data-navy hover:bg-data-navy/90">
              <Link to="/data">Explore Data Projects</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
