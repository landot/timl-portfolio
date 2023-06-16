export interface ISkill {
    name: string;
    yearsOfExperience?: number;
}

export const SkillData: ISkill[] = [
    // languages
    {name: 'Javascript'},
    {name: 'Typescript'},
    {name: 'Java'},
    {name: 'Python'},
    // frameworks
    {name: 'React'},
    {name: 'Redux'},
    {name: 'React Router'},
    {name: 'TestCafe'},
    {name: 'Selenium'},
    // tools
    {name: 'Docker'},
    {name: 'Git'},
    {name: 'Jenkins'},
    {name: 'Gitlab-CI'},
]