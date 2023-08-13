import { LLMChain } from 'langchain/chains';
import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';

const template = `
あなたは優秀な家庭料理の研究家です。忙しい主婦のために簡単においしくできる料理を研究し、情報配信しています。
「今日作りたい料理」に対して、購入すべき材料のリストをすべて示してください。
---
今日作りたい料理: {cooking}
`;

export const getMessageFromAI = async (message: string): Promise<string> => {
  process.env.OPENAI_API_KEY = '[YOUR OPENAI API KEY]';
  console.log("getMessageFromAI", message);
  const llm = new OpenAI({ temperature: 0.9 });
  const prompt = new PromptTemplate({
    template,
    inputVariables: ["cooking"],
  });
  const chain = new LLMChain({llm: llm, prompt, verbose: true});
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const result = await chain.call({ cooking: message });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const res: string = result["text"].toString();
  return res;
};
