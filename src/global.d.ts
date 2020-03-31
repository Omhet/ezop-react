export {};

interface Ontology {
  title: string;
  author: string;
  env: string;
  text: string;
  isDraft: boolean;
}

interface ServerData {
  curcnpt_id: string;
  ontology: Ontology;
  templates: string[];
}

declare global {
  interface Window {
    serverData: ServerData;
  }
}
