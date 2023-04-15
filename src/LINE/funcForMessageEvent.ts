import * as LINE from '@line/bot-sdk';
import lineClient from './Client';
import {DoPostResponseType} from './doPost';
import fetchChatGPT from '../chatgpt';
import unescapeUnicode from '../common/utils/unescapeUnicode';

const funcForMessageEvent = (event: LINE.MessageEvent): DoPostResponseType => {
  if (event.message.type !== 'text') {
    return Promise.resolve(null);
  }
  const rolePrompt = unescapeUnicode(process.env.CHATGPT_ROLE_PROMPT);
  const text = fetchChatGPT(event.message.text, rolePrompt).choices[0].message
    .content;
  return lineClient.replyMessage(event.replyToken, {
    type: 'text',
    text,
  });
};

export default funcForMessageEvent;
