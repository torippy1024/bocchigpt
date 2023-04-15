declare namespace NodeJS {
  interface ProcessEnv {
    readonly LINE_CHANNEL_ACCESS_TOKEN: string;
    readonly OPENAI_APIKEY: string;
    readonly CHATGPT_ROLE_PROMPT: string;
  }
}
