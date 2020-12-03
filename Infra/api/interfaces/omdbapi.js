import supertest from 'supertest';
import Endpoint from '../endpoint';


export default class Omdbapi extends Endpoint {
    constructor(id, year, search, plot, endpoint, url_prefix, apikey) {
        super(endpoint, url_prefix, apikey);
        this.id = id;
        this.year = year;
        this.search = search;
        this.plot = plot;
    }

    add_params_to_url(isApiKey) {
        let separator = "/?";
        let attribute;
        let paramList = [this.id, this.year, this.search, this.plot];
        const request = supertest(super.get_endpoint());
        try {
            if (isApiKey) {
                separator += (`${this.apikey}`)
                for (attribute in paramList) {
                    if (paramList[attribute]) {
                        separator += (`${paramList[attribute]}`);
                    }
                }
            } else {
                for (attribute in paramList) {
                    if (paramList[attribute]) {
                        separator += (`${paramList[attribute]}`);
                    }
                }
            }
            return request.get(separator);
        } catch (error) {
            console.log(error);
        }
    };

};
