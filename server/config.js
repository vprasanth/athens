'use strict';

var config = module.exports,
    PRODUCTION = process.env.NODE_ENV === 'production',
    databaseCreds = require('./etc/database.json');


config.mongo = {
    'url' : databaseCreds.url
};

config.express = {
    port: process.env.EXPRESS_PORT || 3000,
    ip: "127.0.0.1"
};

if (PRODUCTION) {
    // use different mongodb in production
}

