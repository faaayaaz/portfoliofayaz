export interface Profile {
    name: string;
    description: string;
    location: string;
    image: string;
  }
  
  export interface Skills {
    languages: string[];
    methods: string[];
    tools: string[];
  }
  
  export interface Projects {
    id: string;
    title: string;
    description: string;
    image?: string;
  }
  