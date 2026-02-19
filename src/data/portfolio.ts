import { Project, Credential, Skill } from '@/types';


export const projects: Project[] = [
  {
    id: 'agnos-dashboard',
    title: 'Real-Time Patient Dashboard',
    description: 'Next.js patient dashboard with real-time data synchronization, role-based access control, and Supabase integration.',
    shortOutcome: 'Real-time data sync with role-based UI and CRUD operations',
    category: 'healthcare',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Real-Time', 'RLS'],
    links: {
      live: 'https://agnos-frontend-assignment-three.vercel.app/',
      github: 'https://github.com/SwRQ9/AGNOS-FRONTEND-ASSIGNMENT',
    },
    details: {
  overview:
    "A real-time patient dashboard built with Next.js and TypeScript. It supports two experiences (Patient vs Staff), live updates powered by Supabase Realtime, and secure data access enforced with Supabase Row-Level Security (RLS).",
  problem:
    "Dashboards that track patient-related data often need two things at the same time: (1) live updates without constant refresh and (2) strict access control so different users see the right data. A typical CRUD app isn’t enough without real-time sync + proper authorization rules.",
  solution:
    "Implemented a role-aware UI (Patient vs Staff) with modular components and typed data flow. Integrated Supabase for database, auth, and Realtime subscriptions, and enforced access control using RLS policies. Built CRUD flows with responsive UI and clear feedback states.",
  keyFeatures: [
    "Realtime updates via Supabase subscriptions (no refresh needed)",
    "Role-based UI (Patient vs Staff views)",
    "CRUD flows with optimistic UI and validation-friendly UX",
    "Supabase Row-Level Security (RLS) policies to restrict access",
    "Responsive layout + reusable components for scalability",
  ],
  techStack: ["Next.js (App Router)", "TypeScript", "Supabase (Auth/DB/Realtime)", "Tailwind CSS"],
  architecture:
    "UI is split into feature-based components (tables/forms/cards) with client-side state for responsiveness. Data operations go through a small set of typed utilities/hooks. Supabase handles Auth + DB + Realtime, with RLS enforcing authorization at the data layer.",
  securityPerformance:
    "Authorization is enforced at the database layer using Supabase RLS policies. The UI is role-aware and avoids exposing actions a user can’t perform. Performance is kept smooth using lightweight components, controlled re-renders, and lean API usage.",
  screenshots: [
  "/projects/agnos/01-overview.png",
  "/projects/agnos/02-patient.png",
  "/projects/agnos/03-staff.png",
  "/projects/agnos/04-create.png",
  "/projects/agnos/05-mobile.png",
  ],
},

  },
  {
    id: 'laravel-crm',
    title: 'Laravel CRM Web Application',
    description: 'Enterprise CRM system with role-based access control, activity tracking, and admin dashboard.',
    shortOutcome: 'Secure CRUD with RBAC, activity tracking, and optimized dashboard',
    category: 'enterprise',
    tags: ['Laravel', 'MySQL', 'RBAC', 'Admin Dashboard', 'PHP'],
    links: {
      github: 'https://github.com/SwRQ9/laravel-crm/tree/crm-daily-activity',
    },
    details: {
  overview:
    "A Laravel-based CRM web application developed during my internship at Mimar.Tech. The system manages daily activities, user roles, and administrative workflows through a secure role-based access control (RBAC) structure and structured data validation.",
  problem:
    "The organization required a structured internal system to manage user activities, enforce different access levels, and maintain clean operational workflows. Manual tracking and loosely structured systems introduced inconsistencies and security risks.",
  solution:
    "Built and customized a Laravel CRM workflow using MVC architecture. Implemented secure CRUD operations with validation rules, role-based access control for different user types, and an administrative dashboard to monitor and manage daily activities efficiently.",
  keyFeatures: [
    "Role-Based Access Control (RBAC) for multi-level user permissions",
    "Secure CRUD operations with server-side validation",
    "Admin dashboard for activity monitoring and management",
    "Structured MVC architecture for maintainability",
    "Optimized database queries for efficient data handling",
  ],
  techStack: ["Laravel", "PHP", "MySQL", "Blade Templates", "RBAC Implementation"],
  architecture:
    "The application follows Laravel's MVC structure with clear separation between controllers, models, and views. Authorization logic is handled through role and permission layers, ensuring controlled access to routes and resources. Database relationships are structured to maintain data integrity across activity records and user roles.",
  securityPerformance:
    "Access to system features is restricted through RBAC policies enforced at both route and controller levels. Server-side validation ensures data integrity, while query optimization and relational indexing improve dashboard responsiveness under active usage.",
  screenshots: [],
},

  },
  {
    id: 'public-reporting',
    title: 'Public Reporting System',
    description: 'Interactive geospatial reporting system with Leaflet.js map integration and admin moderation.',
    shortOutcome: 'Full reporting workflow with map-based filtering and moderation',
    category: 'civic-tech',
    tags: ['PHP', 'MySQL', 'Leaflet.js', 'Geospatial', 'Maps'],
    links: {
      live: "/projects/prs/VideoDemo.webm",
      github: 'https://github.com/SwRQ9/Public-Reporting-System',
    },
    details: {
  overview:
    "A full-stack public reporting platform that allows users to submit location-based reports, visualize them on an interactive map, and manage them through an administrative workflow system.",
  problem:
    "Organizations handling public feedback or incident reports often struggle with scattered submissions, lack of structured validation, and limited geographic visualization. A centralized system was needed to collect, filter, moderate, and manage reports efficiently while maintaining data integrity.",
  solution:
    "Built a PHP and MySQL-based reporting system with structured submission workflows, interactive map visualization using Leaflet.js, and an administrative panel for reviewing and managing reports. Implemented validation rules and filtering mechanisms to ensure clean and searchable datasets.",
  keyFeatures: [
    "Location-based report submission with structured form validation",
    "Interactive map visualization using Leaflet.js",
    "Dynamic filtering and search capabilities",
    "Administrative moderation and report management system",
    "Optimized database queries for large dataset handling",
  ],
  techStack: [
    "PHP",
    "MySQL",
    "Leaflet.js",
    "JavaScript",
    "REST-style backend endpoints",
  ],
  architecture:
    "The system follows a layered architecture separating frontend UI logic, backend request handling, and database operations. Reports are stored in a relational MySQL structure and retrieved dynamically for map rendering and filtered queries. The interactive map layer synchronizes with backend data endpoints to reflect updated reports in real time.",
  securityPerformance:
    "Server-side validation ensures data integrity before storage. Administrative access is restricted to authorized users, preventing unauthorized modifications. Database indexing and optimized queries maintain responsive filtering and map rendering even as the dataset grows.",
  screenshots: [
  "/projects/prs/07-admin-statistics.png",
  "/projects/prs/01-landing.png",
  "/projects/prs/02-report-form.png",
  "/projects/prs/03-filtering.png",
  "/projects/prs/04-announcements.png",
  "/projects/prs/05-admin-dashboard.png",
  "/projects/prs/06-admin-ticket-update.png",
  ],
},

  },
  {
    id: '3d-satellite',
    title: '3D Satellite Animation & Virtual Tour',
    description: 'CesiumJS-powered 3D scene with camera transitions, JSON streaming, and synchronized animations.',
    shortOutcome: 'Advanced 3D rendering with synchronized animations and camera transitions',
    category: 'visualization',
    tags: ['CesiumJS', 'PHP', 'MySQL', 'WebGL', '3D', 'Geospatial'],
    links: {},
    details: {
  overview:
    "An interactive 3D satellite visualization and virtual tour platform built using CesiumJS. The system renders dynamic geospatial data in a real-time 3D environment with cinematic camera transitions and synchronized scene updates.",
  problem:
    "Traditional 2D dashboards and static maps often fail to represent spatial data effectively, especially when real-world positioning and movement need to be visualized dynamically. The challenge was to create an immersive, interactive environment capable of rendering large-scale geospatial data smoothly in the browser.",
  solution:
    "Developed a browser-based 3D visualization system using CesiumJS to render satellite-style terrain and dynamic objects. Implemented camera transition controls, animated scene navigation, and real-time JSON data streaming to synchronize data updates with the 3D environment.",
  keyFeatures: [
    "Interactive 3D globe rendering using CesiumJS",
    "Cinematic camera transitions and scene navigation controls",
    "Dynamic object rendering from streamed JSON data",
    "Real-time synchronization between backend data and 3D scene",
    "Modular frontend structure for scalable feature expansion",
  ],
  techStack: [
    "CesiumJS",
    "JavaScript",
    "PHP",
    "MySQL",
    "REST APIs",
  ],
  architecture:
    "The frontend leverages CesiumJS for WebGL-based 3D rendering and scene management. Backend endpoints provide structured JSON data for dynamic object updates. The system separates rendering logic, camera control modules, and data synchronization layers to maintain performance and extensibility.",
  securityPerformance:
    "Data is delivered via controlled backend endpoints to ensure only authorized or structured datasets are exposed. Scene updates are optimized to avoid unnecessary re-renders, maintaining smooth animation performance within the WebGL rendering pipeline.",
  screenshots: [
    "/projects/3dAnimation/04-starting-animation.png",
    "/projects/3dAnimation/01-enable-animation.png",
    "/projects/3dAnimation/02-map.png",
    "/projects/3dAnimation/03-initializing.png",
    "/projects/3dAnimation/05-mid-animation.png",
  ],
},

  },
];

export const credentials: Credential[] = [
  {
    company: 'Laravel CRM (Internship – Mimar.Tech)',
    description: 'Developed a Laravel-based CRM workflow with secure CRUD, validation, and role-based access control (RBAC), plus an admin dashboard for daily activity tracking.',
    tech: 'Laravel, MySQL, Vue.js',
  },
  {
    company: 'Real-Time Dashboard System',
    description: 'Built a real-time monitoring UI with instant updates using Supabase realtime, clean state management, and scalable component architecture.',
    tech: 'Next.js, TypeScript, Supabase',
  },
  {
    company: 'Geospatial & 3D Visualization',
    description: 'Implemented interactive mapping and 3D visualization (Leaflet + CesiumJS) with dynamic filtering, camera transitions, and data-driven scene updates.',
    tech: 'Leaflet.js, CesiumJS, PHP, MySQL',
  },
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    skills: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Vue.js', 'Bootstrap', 'cesiumJS', 'Leaflet.js'],
  },
  {
    category: 'Backend',
    skills: ['Laravel', 'PHP', 'REST APIs', 'Node.js'],
  },
  {
    category: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'Supabase'],
  },
  {
    category: 'Specialization',
    skills: ['Real-time Systems', 'RBAC Implementation', 'Dashboards', 'Geospatial Apps', 'Performance Optimization'],
  },
];

export const services = [
  {
    title: 'Laravel CRM & Admin Systems',
    description: 'Secure Laravel-based CRM platforms with RBAC, structured workflows, and scalable admin dashboards.',
  },
  {
    title: 'Real-Time Dashboards',
    description: 'Production-ready dashboards with live data sync, Supabase integration, and responsive UI architecture.',
  },
  {
    title: 'Custom Web Applications',
    description: 'Full-stack web systems built with clean architecture, maintainable code, and performance-first design.',
  },
  {
    title: 'API Integration & Development',
    description: 'RESTful API design and seamless third-party integrations with secure backend logic.',
  },
  {
    title: 'Geospatial Web Systems',
    description: 'Interactive mapping and 3D visualization platforms powered by Leaflet.js and CesiumJS.',
  },
];

