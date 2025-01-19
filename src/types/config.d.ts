interface Skill {
  German: string;
  English: string;
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
  Date: string;
  Location: string;
}

interface Config {
  cv: {
    skillsList: string;
    Languages: Skill[];
    Experience: Experience[];
    Education: Education[];
  };
}

declare module '@/config.json' {
  const value: Config;
  export default value;
}