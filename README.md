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
  - [Modify data](#modify-data)
    - [Add an entry to the data file](#add-an-entry-to-the-data-file)
    - [Remove an entry from the data file](#remove-an-entry-from-the-data-file)
  - [Generate a monthly report](#generate-a-monthly-report)
  - [Generate an invoice](#generate-an-invoice)
    - [An example invoice](#an-example-invoice)

# Prerequisites

- Set the `USER_ID` property in the `.env.` files to the ID of your Firebase user.
- Install a JavaScript runtime, such as [Node](https://nodejs.org/en), or [Bun](https://bun.sh). I personally prefer Bun, so the guides throughout the project will be using `bun run` instead of `node run`, but the choice is yours.

# Actions to choose from

## Modify data

### Add an entry to the data file

To add a custom entry to the `data.json` file, run

```bash
bun run add-entry
```

or invoke the data modification script like so

```bash
./scripts/modifyData.sh add-entry
```

### Remove an entry from the data file

To remove an entry (the last one), simply run

```bash
bun run remove-entry
```

or invoke the data modification script with the `remove-entry` keyword.

```bash
./scripts/modifyData.sh remove-entry
```

## Generate a monthly report

To get a report of hours worked for all companies during a given month for a company, run

```bash
bun run report <company-name> <month> <year>
```

Pass the `--no-save` flag to skip saving the report to the output folder.

Feel free to use other runners, such as `npm`, or invoke the script directly with `NODE_ENVIRONMENT=production ./scripts/report.sh`.

To run the script in a development environment, use `bun run dev-report <company-name> <month> <year>`.

## Generate an invoice

### An example invoice

To generate an example invoice, run

```bash
bun run main create-example-invoice
```
