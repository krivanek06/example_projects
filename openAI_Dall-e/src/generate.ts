import { AxiosResponse } from 'axios';
import { createReadStream, writeFileSync } from 'fs';
import fetch from 'node-fetch';
import { Configuration, ImagesResponse, OpenAIApi } from 'openai';
import { API } from './api_key';

class CustomOpenAI {
  private openai: OpenAIApi;

  constructor(apiKey: string) {
    const configuration = new Configuration({
      apiKey: apiKey,
    });

    // init sdk
    this.openai = new OpenAIApi(configuration);
  }

  /**
   * Creates an OpenAI generated image by the input text
   *
   * @param text by which the image will be generated
   */
  async createImage(text: string): Promise<void> {
    const result: AxiosResponse<ImagesResponse, any> =
      await this.openai.createImage({
        prompt: text,
        n: 2,
        size: '512x512',
      });

    // get result from url & save
    const urls = this.getUrlsFromResult(result);
    await this.fetchAndSaveImagesToDisk(urls);
  }

  /**
   * Creates image variations based on the source image defined in sourceLocation
   *
   * @param sourceLocation location of the source image
   */
  async createImageVariations(sourceLocation: string) {
    const file = createReadStream(sourceLocation);
    const result = await this.openai.createImageVariation(file, 1, '512x512');

    // get result from url & save
    const urls = this.getUrlsFromResult(result);
    await this.fetchAndSaveImagesToDisk(urls);
  }

  private async fetchAndSaveImagesToDisk(imageUrls: string[]): Promise<void> {
    for await (const url of imageUrls) {
      const imageResults = await fetch(url);
      const imageBlobs = await imageResults.blob();
      const buffer = Buffer.from(await imageBlobs.arrayBuffer());

      // save into disk
      writeFileSync(`./img/${new Date().getTime()}.png`, buffer);
    }
  }

  private getUrlsFromResult(
    result: AxiosResponse<ImagesResponse, any>,
  ): string[] {
    return result.data.data
      .map((d) => {
        // console.log(d); // <- object only has prop url
        return d.url;
      })
      .filter((d): d is string => !!d);
  }
}

const customOpenAI = new CustomOpenAI(API);
const prompt = 'Robot waving inside the house to kids outside of the house';

// customOpenAI.createImage(prompt);
customOpenAI.createImageVariations('img/634.png');
