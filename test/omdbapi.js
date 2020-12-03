import {expect} from 'chai';
import Omdbapi from '../Infra/api/interfaces/omdbapi';


describe('OmdbAPI tests', () => {

    it('1. Should return result includes specific omdbID', (done) => {
        let omdbapi = new Omdbapi('&i=tt12345678')
        let req = omdbapi.add_params_to_url(true)
        try {
            req.end((err, res) => {
                if (res.statusCode === 200) {
                    const list = res.body;
                    for (const item in list) {
                        if (item.includes("imdbID")) {
                            expect(list[item]).to.be.equal("tt12345678");
                            done()
                        }
                    }
                } else {
                    console.log(res.statusCode)
                }
            });
        } catch (e) {
            console.log(e)
        }
    });

    it('2. Should return year not exist', (done) => {
        let omdbapi = new Omdbapi(undefined, '&y=2022')
        let req = omdbapi.add_params_to_url(true)
        try {
            req.end((err, res) => {
                const list = res.body;
                for (const item in list) {
                    if (item.includes("Error")) {
                        expect(item).to.be.contain('year not exist')
                        done()
                    }
                }
            });
        } catch (e) {
            console.log(e)
        }

    });

    it('3. Should return error code not equal to 200 after sending invalid apikey', (done) => {
        let omdbapi = new Omdbapi(undefined, '55')
        let req = omdbapi.add_params_to_url(true)
        try {
            req.end((err, res) => {
                if (res.statusCode !== 200) {
                    let obj = JSON.parse(JSON.stringify(res.body))
                    expect(res.statusCode).to.be.not.equal(200);
                    expect(obj.Error).to.be.include('Invalid API key!')
                    done()
                }
            });
        } catch (e) {
            console.log(e)
        }

    });

    it('4. Should return all movies with title includes prom', (done) => {
        let omdbapi = new Omdbapi(undefined, undefined, '&s=prom')
        let req = omdbapi.add_params_to_url(true)
        try {
            req.end((err, res) => {
                if (res.statusCode === 200) {
                    let obj = JSON.parse(JSON.stringify(res.body))
                    expect(obj.Search[obj.Search.length - 1].Title).to.be.include('Prom')
                    done()
                } else {
                    expect.fail(`error code != 200 (${res.statusCode})`)
                }
            });
        } catch (e) {
            console.log(e)
        }

    });

    it('5. Should return all movies with title includes prom AND Year 1980', (done) => {
        let omdbapi = new Omdbapi(undefined, '&y=1980', '&s=prom')
        let req = omdbapi.add_params_to_url(true)
        try {
            req.end((err, res) => {
                if (res.statusCode === 200) {
                    let obj = JSON.parse(JSON.stringify(res.body))
                    for (let i = 0; i < obj.Search.length; i++) {
                        expect(obj.Search[i].Title).to.be.include('Prom')
                        expect(obj.Search[i].Year).to.be.equal('1980')
                    }
                    done()
                } else {
                    expect.fail(`error code != 200 (${res.statusCode})`)
                }
            });
        } catch (e) {
            console.log(e)
        }

    });

    it('6. Should return error code not equal to 200 after not sending apikey', (done) => {
        let omdbapi = new Omdbapi(undefined, '&y=1980')
        let req = omdbapi.add_params_to_url(false)
        try {
            req.end((err, res) => {
                if (res.statusCode !== 200) {
                    let obj = JSON.parse(JSON.stringify(res.body))
                    expect(res.statusCode).to.be.not.equal(200);
                    expect(obj.Error).to.be.include('No API key provided.')
                    done()
                }
            });
        } catch (e) {
            console.log(e)
        }

    });

});