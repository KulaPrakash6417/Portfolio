import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "WanderLust",
      description:
        "Full-stack rental application with JWT authentication, MongoDB integration, and file upload functionality.",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Express"],
      github: "https://github.com/KulaPrakash6417/Wander-Lust",
      live: null,
    },
    {
      title: "Expense Tracker",
      description:
        "Visual finance logging application with advanced filtering, categorization, and analytics dashboard.",
      technologies: ["React", "Chart.js", "Local Storage", "CSS3"],
      github: "https://github.com/KulaPrakash6417/ExpenseTracker",
      live: null,
    },
    {
      title: "Instagram Real vs Fake Predictor",
      description:
        "Machine learning model using SVM algorithm to classify authentic vs fake Instagram accounts.",
      technologies: ["Python", "SVM", "Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/KulaPrakash6417/Instagram_Profile_Predictor",
      live: null,
    },
    {
      title: "StudySphere",
      description:
        "Comprehensive online learning platform with course management, progress tracking, and interactive features.",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "OAuth"],
      github: "https://github.com/KulaPrakash6417/StudySphere_mvc",
      live: null,
    },
    {
      title: "ComplexOne",
      description:
        "Shopping mall website with booking system, product catalog, and modern user interface design.",
      technologies: [
        "ReactJS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
      ],
      github: "https://github.com/KulaPrakash6417/ShoppingMallC",
      live: null,
    },
    {
      title: "Customer Churn Predictions",
      description: "Performed end-to-end exploratory data analysis and insights generation on an e-commerce dataset to identify customer behavior patterns, sales trends, and business-driven recommendations.",
      technologies: [
        "Python",
        "Jupyter Notebook / Google Colab",
        "Pandas",
        "NumPy",
        "Matplotlib & Swaborn (data & statistical visualizations)",
        "Exploratory Data Analysis (EDA)",
        "Data Cleaning & Feature Engineering",
        ],
      github: "https://github.com/KulaPrakash6417/Customer-Churn-Prediction",
      live: null,
    },
    {
      title: "Genome Classification & Sequence Analysis",
      description:
        "Built a bioinformatics pipeline to preprocess genomic FASTA sequences, extract biological features, and classify genetic data using machine learning models.",
      technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "Machine Learning (Classification models)",
        "Jupyter Notebook / Python scripts",
      ],
      github: "https://github.com/KulaPrakash6417/GenomeClassification_SeqAnalysis",
      live: null,
    },
    {
      title: "Containerized Node.js Application",
      description:
        "Developed and deployed a Node.js web application using Docker, demonstrating containerization, environment isolation, and cloud-ready deployment practices",
      technologies: [
        "Node.js",
        "Express.js",
        "Docker",
        "REST APis",
        "Linux-based container environment",
      ],
      github: "https://github.com/KulaPrakash6417/Containerized_Node.jsApp",
      live: null,
    },
    {
      title: "Spatial Data Processing System",
      description:
        "Implemented geospatial data processing and visualization workflows to analyze location-based datasets for real-world spatial applications",
      technologies: [
        "Python",
        "Geo-spatial data formats",
        "Spatial analysis algorithms",
        "Data visualization",
        "Mapping techniques",
      ],
      github: "https://github.com/KulaPrakash6417/Spatial-Data_Analysis",
      live: null,
    },
    {
      title: "Parallel Graph Processing",
      description:
        "Designed and implemented parallel graph algorithms using CUDA and MPI to achieve high-performance computation on large-scale graph datasets",
      technologies: [
        "C",
        "CUDA (GPU Processing)",
        "MPI (Message Passing Interface)",
        "Parallel Computing",
        "Graph Algorithms",
        "Performance Benchmarking",
        "CPU & GPU acceleration testing",
      ],
      github: "https://github.com/KulaPrakash6417/Desicion-Tree-Parallelism",
      live: null,
    },
    {
      title: "Neural Machine Translation using GNNs",
      description: "Built a Graph Neural Network-based Neural Machine Translation system by modeling sentences as graphs and evaluating multilingual translation performance",
      technologies: [
        "Python",
        "PyTorch",
        "Deep Learning",
        "Graph Neural Networks (GNNs)",
        "Neural Machine Translation (NMT)",
        "Natural Language Processing (NLP)"
      ],
      github: "https://github.com/KulaPrakash6417/ENG-to-DEU-translation",
      live: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A collection of projects showcasing my skills in web development,
              machine learning, and problem-solving.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="magnetic"
              >
                <Card className="glass glow-accent h-full group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gradient">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                        {project.live && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            asChild
                          >
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-gradient-primary text-white rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
