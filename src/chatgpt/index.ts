import {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from 'openai';

const fetchChatGPT = (
  prompt: string = 'こんにちは',
  rolePrompt: string = '',
) => {
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  const param: CreateChatCompletionRequest = {
    model: 'gpt-3.5-turbo',
    messages: [
      {role: 'system', content: rolePrompt},
      {role: 'user', content: prompt},
    ],
  };

  const headers = {
    Authorization: `Bearer ${process.env.OPENAI_APIKEY}`,
  };
  const res = UrlFetchApp.fetch(apiUrl, {
    method: 'post',
    payload: JSON.stringify(param),
    contentType: 'application/json',
    headers,
  });
  const resBody: CreateChatCompletionResponse = JSON.parse(
    res.getContentText(),
  );

  return resBody;
};

export default fetchChatGPT;
