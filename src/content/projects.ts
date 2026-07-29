import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'medi-insurance',
    title: 'MediInsurance',
    description: 'Full-stack ML web app predicting medical insurance costs',
    longDescription: 'MediInsurance is a full-stack Machine Learning web application designed to predict medical insurance costs. It features an end-to-end data pipeline including ingestion, cleaning, outlier handling, encoding, and scaling, feeding into a Linear Regression model evaluated with metrics like MAE, MSE, RMSE, and R². The backend is built with FastAPI and SQLAlchemy with JWT authentication and RBAC, paired with a React and Vite dashboard containing advanced visualizations built using Recharts.',
    technologies: ['Python', 'FastAPI', 'React', 'Vite', 'SQLAlchemy', 'Scikit-learn', 'Recharts', 'JWT'],
    github: 'https://github.com/Harsh-145/Yadav_Harsh_Baljeetsingh.MediInsurance',
    date: '2026-07',
    category: 'Machine Learning, Full-Stack',
    status: 'completed',
    featured: true,
  },
  {
    slug: 'crop-yield-prediction',
    title: 'Crop Yield Prediction',
    description: 'ML model predicting crop yield with R² of 0.8, deployed with interactive Gradio interface',
    longDescription: 'An interactive machine learning model built with Python and Scikit-learn to predict crop yield effectively with an R² score of 0.8. The model is deployed with an interactive interface using Gradio for ease of access.',
    technologies: ['Python', 'Scikit-learn', 'Linear Regression', 'Gradio', 'Pandas', 'NumPy'],
    date: '2026-01',
    category: 'Machine Learning',
    status: 'completed',
  },
  {
    slug: 'hostel-management',
    title: 'Hostel Management System',
    description: 'Java-based hostel management application',
    longDescription: 'A robust hostel management application developed natively using Java to streamline administrative activities and management tasks.',
    technologies: ['Java'],
    github: 'https://github.com/Harsh-145/profexphostelmanagement2',
    date: '2026-05',
    category: 'Software Development',
    status: 'completed',
  },
  {
    slug: 'web-project',
    title: 'Web Project',
    description: 'Full-stack web application with MySQL database, user auth',
    longDescription: 'A custom full-stack web application implementing secure user authentication and data management using a robust PHP and MySQL backend.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/Harsh-145/Project',
    date: '2026-05',
    category: 'Full-Stack',
    status: 'completed',
  }
];
