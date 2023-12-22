import javascriptLogo from "../assets/images/Skills/javascript.png";
import typescriptLogo from "../assets/images/Skills/typescript.png";
import reactLogo from "../assets/images/Skills/react.png";
import reduxLogo from "../assets/images/Skills/redux.png";
import sassLogo from "../assets/images/Skills/sass.png";
import bootstrapLogo from "../assets/images/Skills/bootstrap.png";
import jestLogo from "../assets/images/Skills/jest.png";
import nodejsLogo from "../assets/images/Skills/nodejs.png";
import mongodbLogo from "../assets/images/Skills/mongodb.png";

import gitLogo from "../assets/images/Skills/git.png";
import figmaLogo from "../assets/images/Skills/figma.png";
import linuxLogo from "../assets/images/Skills/linux.png";
import windowsLogo from "../assets/images/Skills/windows.png";

export type SkillType = {
    id?: string,
    name: string,
    logo: string
}

export const technologies: SkillType[] = [
    {
        id: "Tech01",
        name: "JavaScript",
        logo: javascriptLogo
    },
    {
        id: "Tech02",
        name: "TypeScript",
        logo: typescriptLogo
    },
    {
        id: "Tech03",
        name: "React",
        logo: reactLogo
    },
    {
        id: "Tech04",
        name: "Redux",
        logo: reduxLogo
    },
    {
        id: "Tech05",
        name: "Sass",
        logo: sassLogo
    },
    {
        id: "Tech06",
        name: "Bootstrap",
        logo: bootstrapLogo
    },
    {
        id: "Tech07",
        name: "Jest",
        logo: jestLogo
    },
    {
        id: "Tech08",
        name: "Node.JS",
        logo: nodejsLogo
    },
    {
        id: "Tech09",
        name: "MongoDB",
        logo: mongodbLogo
    },
];

export const tools: SkillType[] = [
    {
        id: "Tool01",
        name: "Git",
        logo: gitLogo
    },
    {
        id: "Tool02",
        name: "Figma",
        logo: figmaLogo
    },
    {
        id: "Tool03",
        name: "Linux",
        logo: linuxLogo
    },
    {
        id: "Tool04",
        name: "Windows",
        logo: windowsLogo
    }
];