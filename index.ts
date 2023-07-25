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

if(process.env.FILE_TO_UPLOAD){
  uploadFile(process.env.FILE_TO_UPLOAD,uploadPath);
}

if(process.env.FOLDER_TO_UPLOAD){
  const files: string [] | undefined = getFilesInFolder(process.env.FOLDER_TO_UPLOAD)
  for(let file of files){
    const uploadFolderPath = `/upload/${process.env.FOLDER_TO_UPLOAD}/${file}`
    uploadFile(file,uploadFolderPath)
  }
}


function getFilesInFolder(folderPath: string | undefined): string[] {
  const files: string[] = [];

  const items = fs.readdirSync(folderPath);

  for (const item of items) {
    const itemPath = path.join(folderPath, item);
    const stats = fs.statSync(itemPath);

    if (stats.isFile()) {
      files.push(itemPath);
    }
  }
  return files;
}

function uploadFile(filename: string|undefined, filepath: string|undefined){
  fs.readFile(path.join(__dirname, filename), 'utf8', (err: never, contents: any) => {
    if (err) {
      console.error(err);
    }
  
    // This uploads the specified file to a folder called apiuploads of your dropbox
    dbx.filesUpload({ path: filepath, contents })
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
}