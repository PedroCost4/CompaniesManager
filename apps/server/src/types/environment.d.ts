export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      ACCESS_TOKEN_SECRET: string;
    }
  }
}
