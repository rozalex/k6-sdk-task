import {login} from '../priority-web-sdk';

export const loginWebSdk = async () => {
    const response = await login({
        url: ``,
        tabulaini: '',
        language: 1,
        appname: '',
        appid: "",
        appkey: '',
        profile: {company: ''},
        devicename: '',
        username: '',
        password: ''
    });

    return response;
}

