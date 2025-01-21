import { sleep } from 'k6';
import { Options } from 'k6/options';
import * as sdk from "./priority-web-sdk";
import { loginWebSdk } from './priority-web-sdk/login';


export let options:Options = {
  vus: 1,
  duration: '10s'
};

export default async () => {
  await test();
  sleep(1);
};

const test = async () => {
  await loginWebSdk(); // login to priority

  const form = await sdk.formStart("CUSTOMERS");
  console.log(form);
}
