# Priority K6 and SDK task

## Instructions and Hints

1. **Automation Performance Suite:**
   - Create an automation performance suite to test the given scenario using **k6** and the **Priority Web SDK**.
   - It is up to you to design and implement a method to perform load testing effectively.
   - Suggest and implement a strategy for reporting the results of the load tests.

2. **No SDK Installation Required**
   - The Priority Web SDK is already included in this project. Simply import it as shown in the example above.
   - You do need to install all other dependenices

3. **Running the Project**
   - Install dependencies and execute the project using the following command:
     ```bash
     npm run test
     ```

4. **Documentation Reference**
   - Avoid relying on ChatGPT for assistance with web sdk, You can if you want, but it will just confuse you.
   - Use the provided [documentation](https://prioritysoftware.github.io/api/) for guidance. It might not be perfectly clear but contains all the necessary information.

## Documentation

- [Priority Web SDK Documentation](https://prioritysoftware.github.io/api/)

## Task

- **Description of the Flow:**
  Implement the following flow using the Priority Web SDK:

  1. **Login to the SDK:**
     Use the `loginWebSdk()` function to authenticate with the system. You will be provided with all the credentials.

  2. **Start the Main Form:**
     - Initialize a form for `CINVOICES` using `sdk.formStart("CINVOICES")`.
     - Add a new row to the form
     - Update the `CUSTNAME` field with the value `'C001'`
     - Save the row using `form.saveRow(0)`.

  3. **Start the Subform:**
     - Open the subform `CINVOICEITEMS`

  4. **Add Rows to the Subform:**
     - **Row 1:** Set fields as follows:
       - `PARTNAME`: `'P001'`
       - `PRICE`: `'15'`
       - `TQUANT`: `'3'`

     - **Row 2:** Set fields as follows:
       - `PARTNAME`: `'P002'`
       - `PRICE`: `'15'`
       - `TQUANT`: `'3'`

     - **Row 3:** Set fields as follows:
       - `PARTNAME`: `'P002'`
       - `PRICE`: `'6'`
       - `TQUANT`: `'1'`

       Save the row with `subform.saveRow(1)` to return to parent form

  5. **End the Form:**
     Finalize the form using `form.endForm()`.

---

Good luck!

