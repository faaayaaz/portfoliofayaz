
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend
} from "recharts";
import { useState, useEffect } from "react";
import { DataAdminControls } from "@/components/admin/DataAdminControls";
import { Link2 } from "lucide-react";
import { ImageUpload } from "@/components/common/ImageUpload";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Data() {
  const [isAdmin, setIsAdmin] = useState(false);

  const barData = [
    { name: 'Jan', value: 12 },
    { name: 'Feb', value: 19 },
    { name: 'Mar', value: 25 },
    { name: 'Apr', value: 18 },
    { name: 'May', value: 29 },
    { name: 'Jun', value: 34 },
  ];

  const lineData = [
    { name: 'Week 1', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Week 2', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Week 3', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Week 4', uv: 2780, pv: 3908, amt: 2000 },
  ];

  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const dataProjects = [
    {
      id: 1,
      title: "E-commerce Customer Analysis",
      category: "Data Analysis",
      description: "Analyzed customer behavior data to optimize user journey and increase conversions by 24%. Used Python and Pandas to clean and process over 1 million transaction records, identifying key patterns in customer behavior.",
      tools: "Python, Pandas, SQL, Matplotlib",
      year: "2023",
      image: "/placeholder.svg",
      url: "https://example.com/ecommerce-analysis",
      urlMask: "View Analysis"
    },
    {
      id: 2,
      title: "Fashion Inventory Prediction Model",
      category: "Machine Learning",
      description: "Built a prediction model for fashion inventory management with 92% accuracy. Used time series analysis to forecast demand for different product categories based on historical sales data, seasonal trends, and external factors.",
      tools: "R, Time Series Analysis, Python, scikit-learn",
      year: "2022",
      image: "/placeholder.svg",
      url: "https://example.com/inventory-prediction",
      urlMask: "View Model"
    },
    {
      id: 3,
      title: "Market Research Dashboard",
      category: "Data Visualization",
      description: "Created an interactive dashboard to visualize market research data for a major fashion brand. The dashboard helped executives track market trends, competitor analysis, and consumer preferences in real-time.",
      tools: "Tableau, SQL, Python, D3.js",
      year: "2023",
      image: "/placeholder.svg",
      url: "https://example.com/market-dashboard",
      urlMask: "View Dashboard"
    },
    {
      id: 4,
      title: "Social Media Sentiment Analysis",
      category: "NLP",
      description: "Performed sentiment analysis on social media data to gauge public perception of fashion brands. Used natural language processing techniques to analyze thousands of comments and posts, providing actionable insights to marketing teams.",
      tools: "Python, NLTK, spaCy, TensorFlow",
      year: "2021",
      image: "/placeholder.svg",
      url: "https://example.com/sentiment-analysis",
      urlMask: "View Analysis"
    },
    {
      id: 5,
      title: "Retail Store Performance Analysis",
      category: "Data Analysis",
      description: "Analyzed performance metrics across 50+ retail locations to identify key factors affecting sales. Created a scoring model that helped optimize store layouts and product placement, resulting in a 15% increase in revenue.",
      tools: "Python, SQL, Power BI, Excel",
      year: "2022",
      image: "/placeholder.svg",
      url: "https://example.com/retail-performance",
      urlMask: "View Report"
    }
  ];

  const [profile, setProfile] = useState({
    name: "Fayaz Mohamed",
    role: "Data Analyst",
    img: "public/lovable-uploads/c2bb14be-8935-4258-a0cf-e45281db002f.png",
    about: "Experienced Data Analyst with a passion for deriving actionable insights from complex data."
  });
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [skills, setSkills] = useState({
    languages: [
      "Python (Pandas, NumPy, scikit-learn)",
      "R (tidyverse, ggplot2)",
      "SQL (PostgreSQL, MySQL)",
      "JavaScript (D3.js, Chart.js)"
    ],
    methods: [
      "Statistical Analysis",
      "Machine Learning",
      "Time Series Analysis",
      "Natural Language Processing"
    ],
    tools: [
      "Tableau",
      "Power BI",
      "Matplotlib & Seaborn",
      "D3.js"
    ]
  });
  const [showSkillsEdit, setShowSkillsEdit] = useState(false);
  const [languagesInput, setLanguagesInput] = useState(skills.languages.join("\n"));
  const [methodsInput, setMethodsInput] = useState(skills.methods.join("\n"));
  const [toolsInput, setToolsInput] = useState(skills.tools.join("\n"));
  const [profileImage, setProfileImage] = useState(profile.img);

  const { toast } = useToast();

  useEffect(() => {
    const checkAdmin = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsAdmin(isLoggedIn);
    };

    checkAdmin();
    window.addEventListener("storage", checkAdmin);
    
    return () => {
      window.removeEventListener("storage", checkAdmin);
    };
  }, []);

  const handleProjectUpdate = (updatedProject: any) => {
    const updatedProjects = dataProjects.map(project => 
      project.id === updatedProject.id ? updatedProject : project
    );
    console.log("Project updated:", updatedProject);
  };

  const handleProfileEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile({
      ...profile,
      name: (e.target as any).name.value,
      role: (e.target as any).role.value,
      img: profileImage,
      about: (e.target as any).about.value,
    });
    setShowProfileEdit(false);
    toast({
      title: "Profile Updated",
      description: "Your profile info has been updated."
    });
  };

  const handleSkillsEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setSkills({
      languages: languagesInput.split("\n").filter(l => l.trim() !== ""),
      methods: methodsInput.split("\n").filter(m => m.trim() !== ""),
      tools: toolsInput.split("\n").filter(t => t.trim() !== "")
    });
    setShowSkillsEdit(false);
    toast({
      title: "Skills Updated",
      description: "Your skills info has been updated."
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        <section className="relative h-[50vh] bg-data-lightblue/30">
          <div className="absolute inset-0 overflow-hidden bg-data-navy/10">
            <div className="h-full w-full bg-grid-pattern opacity-30"></div>
          </div>
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-serif font-bold mb-4"
              >
                Data Analysis Projects
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg max-w-2xl mx-auto"
              >
                Exploring complex datasets to extract meaningful insights
                using Python, SQL, R, and visualization tools.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-between items-center mb-8">
            <div className="flex items-center gap-6">
              <img
                src={profile.img}
                alt="Profile"
                className="rounded-full w-32 h-32 object-cover border-4 border-data-navy shadow"
              />
              <div>
                <h2 className="text-2xl font-serif font-bold">{profile.name}</h2>
                <p className="mb-1 text-lg text-data-blue">{profile.role}</p>
                <p className="text-gray-700 max-w-md">{profile.about}</p>
              </div>
            </div>
            <div>
              {isAdmin && (
                <Button onClick={() => setShowProfileEdit(true)} variant="outline">
                  Edit Profile
                </Button>
              )}
              <Dialog open={showProfileEdit} onOpenChange={setShowProfileEdit}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleProfileEdit} className="space-y-4">
                    <div>
                      <label className="block mb-1 font-medium">Name</label>
                      <Input name="name" defaultValue={profile.name} />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Role</label>
                      <Input name="role" defaultValue={profile.role} />
                    </div>
                    <ImageUpload value={profileImage} onChange={setProfileImage} label="Profile Image"/>
                    <div>
                      <label className="block mb-1 font-medium">About You</label>
                      <Input name="about" defaultValue={profile.about} />
                    </div>
                    <div className="flex justify-end">
                      <Button type="submit">Save Changes</Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-serif mb-8 text-center"
              >
                Data Analysis Toolkit
              </motion.h2>
              {isAdmin && (
                <Button onClick={() => setShowSkillsEdit(true)} variant="outline">
                  Edit Skills
                </Button>
              )}
              <Dialog open={showSkillsEdit} onOpenChange={setShowSkillsEdit}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Skills & Toolkit</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSkillsEdit} className="space-y-4">
                    <div>
                      <label className="block mb-1 font-medium">Programming Languages</label>
                      <textarea
                        value={languagesInput}
                        onChange={e => setLanguagesInput(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded"
                        rows={4}
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Analysis Methods</label>
                      <textarea
                        value={methodsInput}
                        onChange={e => setMethodsInput(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded"
                        rows={4}
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Visualization Tools</label>
                      <textarea
                        value={toolsInput}
                        onChange={e => setToolsInput(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded"
                        rows={4}
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button type="submit">Save Changes</Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-serif mb-4 text-data-navy">Programming Languages</h3>
                <ul className="space-y-3">
                  {skills.languages.map((lang, idx) => (
                    <li className="flex items-center" key={idx}>
                      <div className="mr-3 h-2 w-2 bg-data-blue rounded-full"></div>
                      <span>{lang}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-serif mb-4 text-data-teal">Analysis Methods</h3>
                <ul className="space-y-3">
                  {skills.methods.map((m, idx) => (
                    <li className="flex items-center" key={idx}>
                      <div className="mr-3 h-2 w-2 bg-data-teal rounded-full"></div>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-serif mb-4 text-data-slate">Visualization Tools</h3>
                <ul className="space-y-3">
                  {skills.tools.map((t, idx) => (
                    <li className="flex items-center" key={idx}>
                      <div className="mr-3 h-2 w-2 bg-data-slate rounded-full"></div>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif mb-6 text-center"
            >
              Data Visualization Showcase
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              Examples of data visualization techniques used in various projects
              to communicate complex information effectively.
            </motion.p>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif mb-12 text-center"
            >
              Featured Data Projects
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="data-card overflow-visible relative"
                >
                  {isAdmin && (
                    <DataAdminControls 
                      project={project}
                      onUpdate={handleProjectUpdate}
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-serif text-data-navy">{project.title}</h3>
                      <span className="text-xs uppercase tracking-wider bg-data-lightblue/30 text-data-navy px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="flex flex-wrap items-center justify-between mt-6">
                      <div className="text-sm text-data-slate">
                        <span className="font-medium">Tools:</span> {project.tools}
                      </div>
                      <div className="flex items-center gap-2">
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-data-blue hover:text-data-blue/80"
                          >
                            <Link2 className="h-4 w-4" />
                            {project.urlMask || 'View Project'}
                          </a>
                        )}
                        <div className="text-sm text-data-slate">
                          <span className="font-medium">Year:</span> {project.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
