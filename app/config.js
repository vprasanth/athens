var config = module.exports,
    PRODUCTION = process.env.NODE_ENV === 'production';

config.express = {
    port: process.env.EXPRESS_PORT || 3000,
    ip: "127.0.0.1"
};

config.mongo = {
    'localUrl' : 'localhost:27017/test',
    'url' : 'mongodb://<user>:<password>@ds051160.mongolab.com:51160/sos-pv'
};

if (PRODUCTION) {
    // use different mongodb in production
}

