export const personal = {
  name: "Vaibhav Reddy Bommidi",
  title: "Data Engineer",
  phone: "+1 (901) 501-6805",
  email: "bommidivaibhav2921@gmail.com",
  location: "United States",
  summary:
    "Data Engineer with 4+ years of experience building batch and real-time data pipelines across banking, healthcare, and financial services domains using Spark, Databricks, Kafka, and cloud-based data platforms. Experienced in developing scalable ETL/ELT pipelines, lakehouse architectures, and streaming solutions using Azure Databricks, AWS Glue, BigQuery and Airflow. Strong track record of enabling advanced analytics and BI reporting solutions in production environments while ensuring security, governance, and compliance.",
};

export const skills = [
  { category: "Programming", items: ["Python", "SQL", "PySpark", "Scala", "Shell Scripting"] },
  { category: "Cloud Platforms", items: ["Microsoft Azure", "AWS", "GCP"] },
  {
    category: "Azure",
    items: ["Azure Data Factory (ADF)", "Azure Data Lake Storage (ADLS)", "Azure Databricks", "Azure Synapse Analytics", "Azure SQL", "Event Hubs"],
  },
  { category: "AWS", items: ["S3", "Glue", "EMR", "Redshift", "Kinesis", "Lambda", "Athena", "IAM", "CloudWatch"] },
  { category: "GCP", items: ["BigQuery", "Dataflow", "Pub/Sub", "Cloud Storage"] },
  { category: "Big Data & Streaming", items: ["Apache Spark", "Kafka", "Spark Streaming", "Hadoop (HDFS, YARN)", "Hive"] },
  { category: "Data Warehouses", items: ["Snowflake", "Azure Synapse", "Amazon Redshift", "BigQuery"] },
  { category: "ETL & Orchestration", items: ["Azure Data Factory", "Apache Airflow", "AWS Glue", "Apache NiFi"] },
  { category: "DevOps & DataOps", items: ["Git", "Jenkins", "GitHub Actions", "Azure DevOps", "Terraform (basic)", "Docker"] },
  { category: "Analytics & BI", items: ["Power BI", "Tableau", "Looker"] },
  { category: "Methodologies", items: ["Agile (Scrum)", "SDLC", "CI/CD", "Data Governance", "Data Quality Frameworks"] },
];

export const experience = [
  {
    title: "AWS Data Engineer",
    company: "DuPont",
    location: "Wilmington, Delaware, USA",
    period: "Apr 2025 – Present",
    environment: "AWS S3, EMR, Redshift, Delta Lake, Spark SQL and Databricks",
    description:
      "DuPont is a global science and technology company serving industries including electronics, aerospace, healthcare, and transportation. Developed and maintained scalable ETL/ELT pipelines using AWS Glue, PySpark, and Python, and built event-driven workflows using AWS Lambda.",
    bullets: [
      "Developed batch and near real-time ETL pipelines using PySpark, AWS Glue, Airflow, and Kafka to process manufacturing and operational data for enterprise reporting and analytics.",
      "Designed AWS-based data lake solutions using S3, Redshift, and EMR for centralized storage and analytics of structured and semi-structured enterprise data.",
      "Built and optimized Spark SQL and Databricks workloads for large-scale analytics and enterprise reporting.",
      "Built Kafka-based streaming pipelines integrated with AWS Lambda to support near real-time monitoring and operational analytics.",
      "Automated ETL deployments and workflow scheduling using Airflow, Jenkins, Git, and Docker, improving pipeline reliability and reducing manual effort.",
      "Worked with Amazon RDS, Redshift, and DynamoDB for data storage, transformation, and reporting requirements.",
      "Collaborated with Agile teams at DuPont to deliver secure AWS data platforms leveraging IAM, KMS, CloudWatch, Jupyter, Looker, and Apache NiFi for enterprise analytics, governance, and reporting solutions.",
    ],
  },
  {
    title: "Azure Data Engineer",
    company: "Truist Bank",
    location: "Tennessee, USA",
    period: "May 2024 – Mar 2025",
    environment: "Azure Data Factory, Azure Databricks, Azure Data Lake, Kafka, Event Hubs",
    description: "",
    bullets: [
      "Developed Azure Data Factory pipelines ingesting 10+ TB/day of banking transaction and customer data into ADLS and Synapse for downstream analytics and reporting.",
      "Built PySpark ETL pipelines on Azure Databricks processing over 200M daily financial transaction records for fraud monitoring and regulatory reporting.",
      "Designed and implemented Medallion (Bronze–Silver–Gold) lakehouse architecture in Databricks, improving accessibility for analytics and BI teams.",
      "Implemented real-time streaming pipelines using Kafka and Azure Event Hubs, reducing end-to-end data latency from hours to under 5 minutes.",
      "Optimized Delta Lake tables using Z-ordering, auto-compaction, and partition tuning, improving query response time for analytics workloads.",
      "Developed reusable metadata-driven ETL framework in PySpark, reducing onboarding effort for new data pipelines.",
      "Implemented end-to-end data quality, monitoring, and observability framework using Azure Monitor and Log Analytics, improving monitoring and reducing recurring production issues.",
    ],
  },
  {
    title: "GCP Data Engineer",
    company: "LPL Financial",
    location: "Hyderabad, India",
    period: "Nov 2022 – Nov 2023",
    environment: "BigQuery, Cloud Dataflow, Pub/Sub, Airflow, Cloud Storage",
    description: "",
    bullets: [
      "Designed batch and streaming pipelines using Cloud Dataflow and Pub/Sub to process multi-million financial transactions daily.",
      "Built BigQuery warehouse models using clustering and partitioning, reducing query costs and saving approximately $15K per month.",
      "Developed data pipelines supporting fraud detection and customer risk analysis workflows using BigQuery and Dataflow.",
      "Implemented Airflow-driven CI/CD orchestration, reducing manual deployment effort by 50%.",
      "Implemented IAM-based access controls and data governance policies for secure access to financial datasets.",
    ],
  },
  {
    title: "Data Engineer",
    company: "Apollo Hospitals",
    location: "Hyderabad, India",
    period: "Jun 2021 – Oct 2022",
    environment: "Apache Spark, Hive, Kafka, Azure Data Lake, Jenkins, Power BI",
    description: "",
    bullets: [
      "Developed Spark and Hive ETL pipelines migrating 5+ TB clinical data from Oracle and SQL Server into Azure Data Lake.",
      "Built Kafka + Spark Streaming pipelines enabling near real-time ingestion and reducing refresh latency by 60%.",
      "Implemented Delta Lake optimizations in Databricks, improving pipeline stability and reducing recurring ETL failures in production environments.",
      "Automated CI/CD workflows using Jenkins and Azure DevOps, shortening release cycles by 40%.",
      "Delivered automated Power BI reporting solutions supporting operational and clinical reporting teams.",
    ],
  },
];

export const certifications = [
  { name: "AWS Certified Solutions Architect – Associate", code: "SAA-C03", icon: "aws" },
  { name: "Google Cloud Certified Professional Data Engineer", code: "GCP", icon: "gcp" },
  { name: "Microsoft Certified: Azure Data Fundamentals", code: "DP-900", icon: "azure" },
  { name: "Microsoft Certified: Data Engineer Associate", code: "DP-203", icon: "azure" },
];

export const education = [
  {
    degree: "Master's in Management Information Systems",
    school: "University of Memphis",
    location: "Tennessee, USA",
  },
];
