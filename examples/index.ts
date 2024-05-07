import { TuyaContext } from '../src';
// const { TuyaContext } = require('../lib/index');
// import { TuyaContext } from '@tuya/tuya-connector-nodejs';

/**
 * api env entrypoint
 *
 * 'https://openapi.tuyacn.com',  // 亚洲 AY
 * 'https://openapi.tuyaus.com',  // 美区 US
 * 'https://openapi.tuyaeu.com',  // 欧洲 EU
 * 'https://openapi.tuyain.com',  // 印度 IN
 */

const context = new TuyaContext({
  baseUrl: 'https://openapi.tuyacn.com',
  accessKey: '5eqja875jhmehqdjs7mq',
  secretKey: 'f1bd14633e5c4c8d9f4b069fbe30ee0a',
});

const main = async () => {
  // auto init token
  // await context.client.init();
  const page_size = 100;
  let last_row_key = "";
  // const res  = await context.assets.childAssets({
  //   asset_id: '-1',
  //   page_size,
  //   last_row_key,
  // });
  // all api request you can use:
  const res = await context.request({
    path: `/v1.0/iot-02/assets/-1/sub-assets`,
    method: 'GET',
    query: {
      page_size,
      last_row_key,
      key1: '支持中文',
      key2: [{name: 'support'}, {age: 'array'}, {name: 'object'}],
}
  });
  if(!res.success) {
    new Error();
  }
  console.log(res);
};

main().catch(err => {
  console.log(err);
});
