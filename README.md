# Athens
Codename for SOS, a Q/A site for post-secondary students, catered around their program of study. 

### Requirements
+ [nodejs](http://nodejs.org/)
+ npm
+ bower
+ mongodb user account

### Installation
+ `git clone git@github.com:Zappeion/athens.git`
+ `cd athens`
+ `npm install`
+ `bower install`

### Config
Add your mongodb credentials in to `app/etc/database.json`
**DO NOT COMMIT CHANGES FOR THIS FILE** It should **only** be used as a template.
```json
{
  "url" : ["mongodb://<user>:<password>@ds051160.mongolab.com:51160/sos-pv"]
}
```
### Running
+ `node app/server.js`
+ visit localhost:3000 on your browser!!


