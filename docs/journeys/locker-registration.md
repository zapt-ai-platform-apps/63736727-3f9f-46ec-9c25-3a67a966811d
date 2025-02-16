# Locker Registration Journey

This document provides detailed, step-by-step instructions to register your locker.

## Steps

1. Open the application landing page.
2. Locate the locker registration form in the center of the page. The form includes the following fields:
   - Full Name
   - Email Address
   - Locker Number
   - Additional Notes (optional)
3. Enter your actual details into each field.
4. Click the "Register Locker" button. The button will disable and display a “Submitting…” message to prevent multiple clicks.
5. The form data is then sent via an API request (using the fetch API) to the Google Sheets endpoint.
6. You will see a success message on successful submission. If an error occurs, an error message is displayed and the error is logged to both the browser console and Sentry.
7. Verify that the entered details have been added to the Google Sheet.

## Important Information

- Use your actual details (no dummy or placeholder information).
- The form prevents duplicate submissions by disabling the button while processing.
- All errors are logged for debugging purposes.
- For any further help, please contact the support team.