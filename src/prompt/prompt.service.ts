import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class PromptService {
  async getPromptResponse(prompt) {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB1MdWNMy_M3lhFf7ibj-6J7f5GeK0U2NI` ,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
    );
    return {
      message: response.data.candidates[0].content.parts[0].text,
    };
  }
}
