import fetch, { Response } from 'node-fetch';

export const fetchHtml = async (url: string): Promise<Response> => {
  return await fetch(url);
};
