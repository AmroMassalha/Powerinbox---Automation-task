import config from '../endpoint/config.json'

export default class Endpoint{
    constructor() {
        this.endpoint = config.endpoint;
        this.url_prefix = config.url_prefix;
        this.apikey = config.apikey;
    };

    get_endpoint() {
        return this.url_prefix+this.endpoint
    };
}
