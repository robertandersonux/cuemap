# Building CueMap for Android

Prereqs: Android Studio (includes the SDK and a JDK), Node 20+.

## Run on a device or emulator
```
npm install
npm run cap:sync     # builds the web app and copies it into android/
npm run cap:open     # opens the project in Android Studio, then press Run
```

## Release build for Play Console (AAB)
1. In Android Studio: **Build > Generate Signed App Bundle / APK > Android App Bundle**.
2. Create a new keystore. **Back it up outside the repo (password manager + a second copy).**
   Losing it means you cannot update the app. Never commit it.
3. Choose the `release` variant. Output: `android/app/release/app-release.aab`.
4. Before every new upload, raise `versionCode` in `android/app/build.gradle` (it must increase each time).

Opt in to **Play App Signing** when Play Console offers it. Google then holds the final signing key and yours becomes an upload key, which can be reset if lost.

App ID: `com.builtnotborn.cuemap` (permanent once published).
