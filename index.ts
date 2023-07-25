export {}
const { Dropbox } = require('dropbox');
const fs = require('fs')
const path = require('path')
require('dotenv').config();

const dbx = new Dropbox({ accessToken: process.env.ACCESS_TOKEN });
const uploadPath = `/upload/${process.env.FILE_TO_UPLOAD}`

//Get the current account info
dbx.usersGetCurrentAccount()
    .then((response: any) => {
    // console.log(response.result);
    if(response.result.account_id){
      console.log("Dropbox connection successful!");
    }
})
    .catch((error: any) => {
    console.error(error);
});

//Upload the file
fs.readFile(path.join(__dirname, process.env.FILE_TO_UPLOAD), 'utf8', (err: never, contents: any) => {
  if (err) {
    console.error(err);
  }

  // This uploads the specified file to a folder called apiuploads of your dropbox
  dbx.filesUpload({ path: uploadPath, contents })
    .then((response: any) => {
      console.log("File uploaded successfully!")
      console.log(response);
    })
    .catch((error: any) => {
      if (error.response && error.response.status === 400) {
        console.error('Bad request. Check your Dropbox API parameters:', error);
      } else if (error.response && error.response.status === 409) {
        console.error('File already exists at the destination path:', error);
      } else {
        console.error('Error uploading the file:', error);
      }
})
});