# Dropbox File/Folder Upload API with Node.js

This is a simple open-source Node.js application that allows users to upload files to Dropbox using the Dropbox API by <a href="github.com/Suei43">your's truly</a>. Users are required to add the files they want to upload to the root directory of the project and create a `.env` file containing their access token and the name of the file they want to upload.

## Prerequisites

Before running this application, you need the following:

1. Node.js installed on your machine. You can download Node.js from the official website: https://nodejs.org/

2. A Dropbox account and a Dropbox app with sufficient permissions to upload files. You can create a new app or use an existing one by visiting the Dropbox App Console: https://www.dropbox.com/developers/apps

## Installation

1. Clone this repository or download the source code to your local machine.

2. Open a terminal or command prompt and navigate to the project's root directory.

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

## Usage

After configuring the `.env` file with your access token and file name, you can now upload the file to Dropbox. Run the following command in the project's root directory:

```bash
node index.js
```

The `index.js` script will read the file specified in the `.env` file and upload it to the root directory of your Dropbox account.

## Error Handling

If there are any issues with the file upload process, the application will display appropriate error messages. Common errors might include invalid access tokens, missing files, or insufficient permissions.

## Contributing

This is an open-source project, and contributions from the community are welcome! If you find any issues or have ideas for improvements, feel free to open an issue or submit a pull request. For guidelines on contributing, please refer to the CONTRIBUTING.md file. Please note, this project is licensed under the <a href="https://opensource.org/license/mit/">MIT</a> license.

## Notes

- Keep your `.env` file containing the access token private and never share it publicly or include it in version control systems.
- Ensure that the file you want to upload is in the root directory of the project, or adjust the file path in the `.env` file accordingly.
- Ensure you have enabled 'files.content.write' in your dropbox settings to avoid missing scope errors.

That's it! If you encounter any issues or have questions, feel free to contact me <a href="mailto:folarinraphael@outlook.com">here</a>.

Enjoy!!!!
