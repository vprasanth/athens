'use strict';

var config = module.exports,
    PRODUCTION = process.env.NODE_ENV === 'production',
    fs = require('fs'),
    path = require('path'),
    obj;

fs.readFile(path.join(__dirname + '/etc/database.json'),{encoding: "utf8"}, function(err, data){
    if (err) throw err;

    try {
        obj = JSON.parse(data);
    } catch(e) {
        console.log(e);
    }
    //@TODO Probably a way better way to do this, but don't care atm
    if (obj !== undefined) {
        console.log('Loaded database settings!');
        config.mongo = {
            'url' : obj.url
        };
    }

});

config.express = {
    port: process.env.EXPRESS_PORT || 3000,
    ip: "127.0.0.1"
};

if (PRODUCTION) {
    // use different mongodb in production
}

