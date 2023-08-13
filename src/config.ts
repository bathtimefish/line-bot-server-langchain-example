import * as line from '@line/bot-sdk';

const lineClientConfig: line.ClientConfig = {
  channelAccessToken: '[CHANNEL ACCESS TOKEN]',
  channelSecret: '[CHANNEL SECRET]',
};

const config = {
  lineClientConfig,
  baseUrl: '[SERVER BASE URL]',
  certFilePath: {
    key: '../cert/privkey.pem',
    cert: '../cert/fullchain.pem',
  }
};

export default config;
