<div align="center">
   <img src="https://raw.githubusercontent.com/PetrCala/work-tracker/master/assets/images/s-sympulse.png"
      width="64" height="64" alt="Sympulse Icon" style="border-radius: 15%!important;">
    <h1>
      Work Tracker
    </h1>
</div>

This repository serves for me to track the number of hours worked through a React Native app.

# Table of contents

- [Table of contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Actions to choose from](#actions-to-choose-from)

# Prerequisites

- Set the `USER_ID` property in the `.env.` files to the ID of your Firebase user.
- Install a JavaScript runtime, such as [Node](https://nodejs.org/en), or [Bun](https://bun.sh). I personally prefer Bun, so the guides throughout the project will be using `bun run` instead of `node run`, but the choice is yours.

# Actions to choose from

There is a number of actions you can perform using either `bun run` or `npm run`. These are listed in `package.json`, but for clarity, I also add them here.

_Note: Each action is invoked either through a shell script (`scripts` folder), or the `_dev/main.ts` file. For further details on any single action, refer to these files._

Here is a list of available actions:

- **_Add entry_**:
  - **Overview**: Add a custom hours worked entry to the `data.json` file.
  - **Invocation**: `bun run add-entry`
- **_Remove entry_**:
  - **Overview**: Remove the last custom hours worked entry from the `data.json` file.
  - **Invocation**: `bun run remove-entry`
- **_Backup_**:
  - **Overview**: Backup a data file to Google Drive.
  - **Invocation**: `bun run backup <backup-file-name> <google-drive-folder-path>`
  - **Note**: For the first argument, select just the name of the file inside the `data` folder. For the second argument, provide the full path to the folder inside your google drive.
- **_Report_**:
  - **Overview**: Generate a report of hours worked for a given company during a given month of a year.
  - **Invocation**: `bun run report <company-name> <month> <year>`
  - **Note**: You can pass the `--no-save` flag to skip saving the report to the output folder.
  - **Alternatives**: To run the script in a development environment, use `bun run dev-report <company-name> <month> <year>`.
- **_Invoice_**:
  - **Overview**: Generate an example invoice in the `output/invoices` folder.
  - **Invoication**: `bun run main create-example-invoice`
