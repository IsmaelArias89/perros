import * as dotenv from 'dotenv';
import * as fs from 'fs';

const ENV_FILE = '.env';

export class PropertyService {
  private static envConfig: { [key: string]: string };

  public static get(key: string): string {
    if (!PropertyService.envConfig) {
      PropertyService.envConfig = fs.existsSync(ENV_FILE)
        ? dotenv.parse(fs.readFileSync(ENV_FILE))
        : {};
    }
    return process.env[key] || PropertyService.envConfig[key];
  }
}
