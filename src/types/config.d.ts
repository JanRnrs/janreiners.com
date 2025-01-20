interface LanguageSkill {
  language: string;
  skillLevel: string;
}

interface Experience {
  Company: string;
  Position: string;
  Date: string;
  Location: string;
  summary: string;
  Description: string[];
  Skills: string[];
}

interface Education {
  School: string;
  Degree: string;
  Field: string;
  Grade: string;
  Date: string;
  Location: string;
}

interface Config {
  cv: {
    skillsList: string;
    Languages: LanguageSkill[];
    Experience: Experience[];
    Education: Education[];
  };
}

declare module '@/config.json' {
  const value: Config;
  export default value;
}