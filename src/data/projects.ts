
export interface IProject {
    name: string;
    skills: string[];
    imgSrc: string;
    projectUrl: string;
    codeUrl: string;
}

export const ProjectData: IProject[] = [
    {
        name: 'Kanban Webapp With Firebase Authentication and Storage',
        skills: ['Firebase', 'Auth', 'API', 'React', 'Redux'],
        imgSrc: '/assets/images/Kanban-Experimental.webp',
        projectUrl: 'https://timothyl-portfolio-kanban.netlify.app?continueAsGuest=true',
        codeUrl: 'https://github.com/landot/kanban-webapp',
    },
    {
        name: 'Invoice Webapp',
        skills: ['React', 'Redux', 'RTL', 'Playwright', 'React-Router'],
        imgSrc: '/assets/images/Invoice-Webapp.webp',
        projectUrl: 'https://timothyl-portfolio-invoice-webapp.netlify.app/',
        codeUrl: 'https://github.com/landot/invoice-app',
    },
    {
        name: 'Multi-Step Form',
        skills: ['HTML', 'CSS', 'React'],
        imgSrc: '/assets/images/Multi-Step-Form.webp',
        projectUrl: 'https://timothyl-portfolio-multi-step-form.netlify.app/',
        codeUrl: 'https://github.com/landot/multi-step-form-app',
    },
    {
        name: 'Dictionary App',
        skills: ['HTML', 'CSS', 'React', 'API', 'React-Router'],
        imgSrc: '/assets/images/Dictionary-App.webp',
        projectUrl: 'https://timothyl-portfolio-dictionary-app.netlify.app/snow',
        codeUrl: 'https://github.com/landot/dictionary-app',
    },
    {
        name: 'Crowdfund Page',
        skills: ['HTML', 'CSS', 'React'],
        imgSrc: '/assets/images/Crowdfund-Project.webp',
        projectUrl: 'https://timothyl-portfolio-crowdfund.netlify.app/',
        codeUrl: 'https://github.com/landot/crowdfund-project',
    },
    {
        name: 'E-Commerce Page',
        skills: ['HTML', 'CSS', 'React'],
        imgSrc: '/assets/images/E-commerce-product-page.webp',
        projectUrl: 'https://timothyl-portfolio-e-commerce.netlify.app/',
        codeUrl: 'https://github.com/landot/e-commerce-page',
    },
    {
        name: 'Time Tracking Dashboard',
        skills: ['HTML', 'CSS', 'React'],
        imgSrc: '/assets/images/Time-Tracking-Dashboard.webp',
        projectUrl: 'https://timothyl-portfolio-time-tracking-dash.netlify.app/',
        codeUrl: 'https://github.com/landot/time-tracking-dashboard',
    }
]