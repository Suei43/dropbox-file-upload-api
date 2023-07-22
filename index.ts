export {}
var fs = require('fs');
const { Dropbox, Error, files } = require('dropbox');
const request = require('request')
require('dotenv').config();
const token = process.env.ACCESS_TOKEN;
const drop = new Dropbox({ accessToken: token });
var filename = 'smiley.jpeg';
var content = fs.readFileSync(filename);
// fs.readFile(process.env.FILE_TO_UPLOAD, 'utf-8', (err, data) => {
//     if (err)
//         console.error(err);
//     drop.filesUpload({ path: process.env.FILE_TO_UPLOAD, data })
//         .then((response) => {
//         console.log(response);
//         console.log("Upload Successful");
//     })
//         .catch((uploadErr) => {
//         console.log(uploadErr);
//     });
// });
let options = {
    method: "POST",
    url: 'https://content.dropboxapi.com/2/files/upload',
    headers: {
      "Content-Type": "application/octet-stream",
      "Authorization": "Bearer " + token,
      "Dropbox-API-Arg": "{\"path\": \"/dropbox/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
    },
    body:content
};

request(options,function(err: any, res: any, body: any){
console.log("Err : " + err);
console.log("res : " + res);
console.log("body : " + body);    
})

