import { ExperienceItem } from "../types";

export const experiences: ExperienceItem[] = [
  {
    title: "Graduate Assistant",
    company: "State of the Region, University of South Florida",
    duration: "Feb 2025 – May 2026",
    points: [
      "Automated large-scale public API data extraction using Python and developed Azure-based ETL pipelines with MySQL for ingestion, transformation, and validation of economic and labor datasets.",
      "Developed Tableau-based interactive dashboards to present data governance reporting on regional trends and quality metrics for policymakers, improving accessibility of analytics insights by 60%.",
      "Conducted panel data analysis using R across multi-year regional economic datasets, applying fixed and random effects models to identify statistically significant trends and support evidence-based reporting.",
    ],
  },
  {
    title: "Assistant Manager",
    company: "Genpact | Client: Citi",
    duration: "Aug 2023 – Jul 2024",
    points: [
      "Built Power BI and Excel dashboards for KPI reporting and performance tracking; wrote SQL queries to support validation, issue analysis, and cross-system reporting.",
      "Managed end-to-end data concern remediation lifecycle including issue intake, root-cause analysis, stakeholder coordination, escalation tracking, and SLA adherence; reduced issue resolution time by 35%.",
      "Maintained and enhanced metadata repositories in Collibra and OFM, including business definitions, data lineage, and source-to-target mappings to improve data discoverability and audit readiness.",
      "Assisted in data classification and sensitivity assessments, categorizing data assets by business impact and regulatory sensitivity to support data privacy compliance.",
    ],
  },
  {
    title: "Business Analyst",
    company: "Genpact | Client: ING Bank",
    duration: "Jun 2021 – Jul 2023",
    points: [
      "Generated and presented regular data governance reports to business stakeholders, translating quality metrics into actionable insights and enabling a 20% improvement in governance compliance adherence.",
      "Designed and implemented 50+ CDE metrics and data quality rules using SQL and IBM InfoSphere/Informatica IGC, establishing a measurement framework supporting governance and regulatory compliance.",
      "Gathered and documented business and functional requirements (BRDs/FRDs) for data quality initiatives and system changes, translating stakeholder needs into actionable specifications for technical teams.",
      "Conducted A/B testing and validation on data quality rules to reduce false positives by 30% and improve rule effectiveness; applied statistical rigor to data quality improvements.",
    ],
  },
];
