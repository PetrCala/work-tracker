<div align="center">
   <img src="https://raw.githubusercontent.com/PetrCala/work-tracker/master/assets/images/s-sympulse.png" 
      width="64" height="64" alt="Sympulse Icon" style="border-radius: 15%!important;">
    <h1>
      Work Tracker
    </h1>
</div>

This repository serves for me to track the number of hours worked through a React Native app.

# Generate a monthly report

To get a report of hours worked for all companies during a given month, run

```bash
bun run report <month> <year>
```

Pass the `--no-save` flag to skip saving the report to the output folder.

Feel free to use other runners, such as `npm`, or invoke the script directly with `./scripts/report.sh`.

# Generate an invoice

## An example invoice

To generate an example invoice, run

```bash
bun run main create-example-invoice
```
