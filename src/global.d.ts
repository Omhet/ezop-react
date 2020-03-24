export {};

interface ServerData {
  curcnpt_id: string;
}

declare global {
  interface Window {
    SERVER_DATA: ServerData;
  }
}
