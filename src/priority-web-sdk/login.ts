import {login} from '../priority-web-sdk';

export const loginWebSdk = async () => {
    const response = await login({
        url: ``,
        tabulaini: '',
        language: 1,
        appname: 'APP001',
        appid: "APP001",
        appkey: '',
        profile: {company: ''},
        devicename: '',
        username: '',
        password: ''
    });

    return response;
}

