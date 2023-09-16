# API for file/folder upload to dropbox. 

This is a simple Node.js application that allows users to upload files to dropbox using the Dropbox API by <a href="github.com/darksuei">your's truly</a>. Users are required to add the files they want to upload to the root directory of the project and create a `.env` file containing their access token and the name of the file they want to upload [ view the .env.example or view the config below].

## Prerequisites

Before running this application, you need the following:

1. Node.js installed on your machine. You can download Node.js from the official website: https://nodejs.org/

2. A Dropbox account and a Dropbox app with sufficient permissions to upload files. You can create a new app or use an existing one by visiting the Dropbox App Console: https://www.dropbox.com/developers/apps

## Installation

1. Clone this repository.

2. Open a terminal and navigate to the project's root directory.

3. Install the project dependencies by running the following command:

```bash
npm install 
```

## Configuration

1. In the root directory of the project, create a `.env` file.

2. Open the `.env` file and add your Dropbox access token and the name of the file you want to upload, like this:

```plaintext
ACCESS_TOKEN = ADD_YOUR_DROPBOX_ACCESS_TOKEN_HERE
FILE_TO_UPLOAD = your_file.extension
```

Replace `ADD_YOUR_DROPBOX_ACCESS_TOKEN_HERE` with your Dropbox app access token and `your_file.extension` with the name of the file you want to upload (e.g., `passport.jpg`).

Note: To upload a folder use `FOLDER_TO_UPLOAD` instead.
## Usage

After configuring the `.env` file with your access token and file name, you can now upload the file to Dropbox. Run the following command in the project's root directory:

```bash
node index.js
```

The `index.js` script will read the file specified in the `.env` file and upload it to the root directory of your Dropbox account.

## Errors 

If there are any issues with the file upload process, the application will display appropriate error messages. Common errors might include invalid access tokens, missing files, or insufficient permissions.


That's it! If you encounter any issues or have questions, feel free to contact me <a href="mailto:folarinraphael@outlook.com">here</a>.

Enjoy!!!!
