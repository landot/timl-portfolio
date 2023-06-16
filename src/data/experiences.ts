export interface IExperience {
    role: string;
    company: string;
    description: string[];
    startDate: string;
    endDate: string;
}

export const ExperienceData: IExperience[] = [
    {
        role: 'Senior Quality Assurance Automation Engineer',
        company: 'Indeed (Remote - Seattle, WA)',
        description: [
            'Collaborated with three engineering teams (mix of frontend and backend projects) as the automation lead to support 100% automated test coverage for business-critical test cases for new and existing features',
            'Educated peers as a subject matter expert in TestCafe through code review, training sessions, workshops, and fielding support questions in an internal TestCafe slack channel',
            'Championed team-owned quality by providing developers with the necessary tools, documentation, and training to encourage them to write their own automated tests',
            'Utilized automated tests as a source of truth for user-facing functionality during 3 complex code migrations, effectively preventing regressions and ensuring the accuracy of test cases',
            'Owned an internal node project that contained E2E test helpers for test account creation, logging, and authentication which were utilized in over 30 projects by Cypress, Playwright, and TestCafe suites'
        ],
        startDate: 'Jan 2022',
        endDate: 'Apr 2023'
    },
    {
        role: 'Quality Assurance Automation Engineer II',
        company: 'Indeed (Hybrid - Seattle, WA)',
        description: [
            'Oversaw a large-scale migration effort to shift from a Selenium-based mono repo of tests to smaller in-repo Testcafe test suites, delegating tickets to contractors for test creation',
            'Implemented automated tests in Selenium + Pytest (2018-20) and Testcafe (2020-22) to cover business-critical test cases',
            'Participated in automated test code reviews for developers and other QA engineers',
            'Mentored entry-level Quality Assurance Engineers interested in learning about test automation through pair programming and training sessions, providing them with hands-on experience'
        ],
        startDate: 'Oct 2018',
        endDate: 'Jan 2022'
    },
    {
        role: 'Quality Assurance Engineer I-II',
        company: 'Indeed (In-Person - Seattle, WA)',
        description: [
            'Embedded on an engineering team to maintain high levels of quality through manual testing, automated testing, and supervising releases to production',
            'Implemented automated regression tests using Selenium and Pytest to verify business-critical user functionality. Functionality covered all business-critical functionality within a frontend project',
            'Participated in automated test code reviews with QA peers to improve test design and performance'
        ],
        startDate: 'Aug 2016',
        endDate: 'Sep 2018'
    },
]