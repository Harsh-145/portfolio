import type { Experience } from '@/types';

export const experience: Experience[] = [
  {
    role: 'Jr. Data Analytics Intern',
    company: 'HN Techno',
    startDate: 'Jul 2026',
    endDate: 'Present', // Assumption as of July 2026
    highlights: [
      'Built and deployed MediInsurance, a full-stack ML web app predicting medical insurance costs',
      'Engineered end-to-end data pipeline (ingestion, cleaning, outlier handling, encoding, scaling) feeding a Linear Regression model, evaluated with MAE, MSE, RMSE, R²',
      'Developed FastAPI + SQLAlchemy backend with JWT auth and RBAC',
      'Built React (Vite) analytics dashboard with Recharts (BMI-vs-charges scatter, charge-distribution histogram, day-wise activity charts)'
    ]
  }
];
