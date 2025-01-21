import { sleep } from 'k6';
import { Options } from 'k6/options';
import * as sdk from "./priority-web-sdk";
import { loginWebSdk } from './priority-web-sdk/login';

/*
  Priority web sdk documentation: https://prioritysoftware.github.io/api/

  Instructions and hints:
    1. You don't need to install priority web sdk. its is already inside this project. just import it like the example above.
    2. To run the project, install and then run k6 using npm run test
    3. ChatGPT will confuse you. Refer to the documentation. It is not very clear but has everything you need.

    Good luck!
*/
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
