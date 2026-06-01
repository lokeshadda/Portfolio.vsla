import { ProjectItem } from "../types";

export const projects: ProjectItem[] = [
  {
    title: "AI Incident Resolution",
    category: "Analytics",
    accent: "emerald",
    githubUrl: "https://github.com/lokeshadda/ai-incident-resolution",
    tech: [
      "Python",
      "FastAPI",
      "LangGraph",
      "RAG",
      "ChromaDB",
      "PostgreSQL",
      "Streamlit",
    ],
    description: [
      "Multi-agent AI system that diagnoses PostgreSQL connection failures using RAG over runbooks and past incidents.",
      "Five specialized agents collaborate with a human approval gate before remediation steps are revealed.",
    ],
  },
  {
    title: "Solar Energy Consumption Analysis",
    category: "Machine Learning",
    accent: "amber",
    githubUrl:
      "https://github.com/lokeshadda/solar-energy-consumption-analysis",
    tech: [
      "Python",
      "Scikit-learn",
      "SMOTE",
      "GridSearchCV",
      "Pandas",
      "EDA",
    ],
    description: [
      "Machine learning project analyzing solar energy consumption and related sustainability patterns using Python and Scikit-learn.",
      "Built an end-to-end pipeline with preprocessing, EDA, SMOTE, and GridSearchCV for model tuning.",
    ],
  },
  {
    title: "Water Potability Prediction",
    category: "Machine Learning",
    accent: "cyan",
    githubUrl: "https://github.com/lokeshadda/water-potability-prediction",
    tech: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "SVM",
      "MLP",
      "Feature Scaling",
    ],
    description: [
      "Predicts whether water is potable from chemical and physical quality features—relevant to public health and environmental monitoring.",
      "Handled missing values, scaling, and model comparison across multiple classifiers.",
    ],
  },
  {
    title: "Smart Energy Monitoring Platform",
    category: "Big Data",
    accent: "violet",
    githubUrl:
      "https://github.com/lokeshadda/smart-energy-monitoring-platform",
    tech: [
      "Apache Spark",
      "Structured Streaming",
      "Apache Airflow",
      "Docker",
      "Redis",
      "Redpanda",
    ],
    description: [
      "Real-time platform that simulates smart-meter readings, streams events, and flags abnormal household energy consumption.",
      "Uses Spark Structured Streaming, Redis, and Redpanda with Docker and Airflow orchestration.",
    ],
  },
  {
    title: "Human Resources Analytics Dashboard",
    category: "Dashboard",
    accent: "blue",
    tech: [
      "Tableau",
      "Calculated Fields",
      "Parameters",
      "Filters",
      "Dashboard Actions",
    ],
    description: [
      "Interactive Tableau dashboard over 5,000+ employee records to surface attrition drivers, retention trends, and workforce patterns.",
      "Used parameters, calculated fields, and actions for self-serve HR and leadership analysis.",
    ],
  },
  {
    title: "Executive Sales Intelligence Dashboard",
    category: "Dashboard",
    accent: "blue",
    githubUrl: "https://github.com/lokeshadda/Executive-Sales-Intelligence-Dashboard",
    tech: ["Power BI", "DAX", "Power Query", "Excel", "Data Modeling"],
    description: [
      "Power BI executive dashboard for sales performance, profitability trends, product effectiveness, and shipment operations.",
      "Includes KPI monitoring, trend analysis, product scorecards, and geographic insights with interactive visuals.",
    ],
  },
];
