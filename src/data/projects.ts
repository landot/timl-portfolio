
export interface IProject {
    name: string;
    skills: string[];
    imgSrc: string;
    projectUrl: string;
    codeUrl: string;
}

export const ProjectData: IProject[] = [
    {
        name: 'Kanban Webapp',
        skills: ['HTML', 'CSS', 'React', 'Redux'],
        imgSrc: '/assets/images/thumbnail-project-1-large.webp',
        projectUrl: 'https://timothyl-portfolio-kanban.netlify.app/',
        codeUrl: 'https://github.com/landot/kanban-webapp',
    },
    {
        name: 'E-Commerce Page',
        skills: ['HTML', 'CSS', 'React'],
        imgSrc: '/assets/images/thumbnail-project-1-large.webp',
        projectUrl: 'https://timothyl-portfolio-e-commerce.netlify.app/',
        codeUrl: 'https://github.com/landot/e-commerce-page',
    },
    {
        name: 'Multi-Step Form',
        skills: ['HTML', 'CSS', 'React'],
        imgSrc: '/assets/images/thumbnail-project-1-large.webp',
        projectUrl: 'https://timothyl-portfolio-multi-step-form.netlify.app/',
        codeUrl: 'https://github.com/landot/multi-step-form-app',
    },
    {
        name: 'Time Tracking Dashboard',
        skills: ['HTML', 'CSS', 'React'],
        imgSrc: '/assets/images/thumbnail-project-1-large.webp',
        projectUrl: 'https://timothyl-portfolio-time-tracking-dash.netlify.app/',
        codeUrl: 'https://github.com/landot/time-tracking-dashboard',
    },
    {
        name: 'Crowdfund Page',
        skills: ['HTML', 'CSS', 'React'],
        imgSrc: '/assets/images/thumbnail-project-1-large.webp',
        projectUrl: 'https://timothyl-portfolio-crowdfund.netlify.app/',
        codeUrl: 'https://github.com/landot/crowdfund-project',
    },
    {
        name: 'Dictionary App',
        skills: ['HTML', 'CSS', 'React', 'API', 'React-Router'],
        imgSrc: '/assets/images/thumbnail-project-1-large.webp',
        projectUrl: 'https://timothyl-portfolio-dictionary-app.netlify.app/snow',
        codeUrl: 'https://github.com/landot/dictionary-app',
    },
]