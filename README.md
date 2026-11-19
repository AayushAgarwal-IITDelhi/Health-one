# HealthOne — Railway deployment

A static, fictional-patient health dashboard. No backend database, Python, `requirements.txt`, or API keys are required.

## Deploy

1. Put **all files** from this folder in the **root** of your GitHub repository (not inside an extra nested folder).
2. Commit and push to GitHub.
3. In Railway, connect your GitHub repository and deploy. `package.json` supplies `npm start` and `railway.json` defines the health check.
4. Under Railway **Settings → Networking**, generate a public domain.
5. Open that domain. The default route `/` serves `index.html`.

If an old Railway service has an overridden build or start command, remove the override and redeploy. The app listens on `0.0.0.0` and Railway's assigned `PORT`.

## Test locally

Install Node.js 20+; run `npm start` and visit http://localhost:3000. You can use `PORT=8080 npm start` to choose a different port.

## Limitations

- Demonstration only: all patient data and thresholds are fictional; not medical advice.
- New entries and checkmarks are saved only in the current browser's `localStorage`. No cross-device sync, logins, or cloud persistence.
- Clearing browser data or changing devices removes locally entered data. Avoid entering real protected health information in this demo.
- Emergency actions are simulated: buttons do not call emergency services or notify contacts.
- Medication timing conversions are illustrations, not prescribing instructions.
