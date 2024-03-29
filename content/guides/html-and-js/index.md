---
title: Getting Started - HTML and JS
tags: ["HTML5", "CSS", "JS", "GetStarted"]
description: "A quick implementation guide to use MojoAuth for Passwordless using HTML and JS."
---

# Get Started - HTML and JS

To communicate with MojoAuth you will need some details about the application. These details are required for setup and initiate the implementation of Passwordless Login.

## Getting Credentials

### Register at MojoAuth

Here you just need to follow three simple steps:

- Login to [MojoAuth](https://mojoauth.com/signin) and the below screen appear:

<div id="mojoauth-preview "style="text-align:center">
  <img src="../../assets/common-images/login.png" alt="MojoAuth" />
</div>
<br/>

- Create your Fist Project by adding your **Website URL** and **Project Name** as displyed in the below screen:

<div style="text-align:center">
  <img src="../../assets/common-images/project.png" alt="Create MojoAuth Project" />
</div>
<br/>

- Get your API Credentials, The API key and API Secret are used to interact with MojoAuth's APIs.

<div style="text-align:center">
  <img src="../../assets/common-images/dashboard.png" alt="MojoAuth Dashboad" />
</div>
<br/>

- Swtich webauthn on from the settings tab on the dashboard. Then choose the type of Authenticator you want to select for webAuthn.

<div style="text-align:center">
  <img src="../../assets/common-images/webauthn-config.png" alt="webauthn config" />
</div>
<br/>

## Integrate MojoAuth

To start Integrating MojoAuth in your web app, add MojoAuth javascript SDK in the head of your webpage and follow the mentioned steps:

```js
<script
  src="https://cdn.mojoauth.com/js/mojoauth.min.js"
  type="text/javascript"
></script>
```

1. Create MojoAuth instance with your apikey

```js
const mojoauth = new MojoAuth("<<APIKEY>>")
```

2. Add the following div on your web page where you want the MojoAuth passwordless login form to be rendered

```js
<div id="mojoauth-passwordless-form"></div>
```

> MojoAuth passwordless login form will be rendered in the above div on your web page

3. Add the MojoAuth passwordless login using **Magic Link** with the following method. The response would be handled in .then() function.

```js
mojoauth.signInWithMagicLink().then(response => console.log(response))
```

**or**

4. Add the MojoAuth passwordless login using **Email OTP** with the following method. The response would be handled in .then() function.

```js
mojoauth.signInWithEmailOTP().then(response => console.log(response))
```

5. After you have been logged in, enable WebAuthn form will be rendered.

<div style="text-align:center">
  <img src="../../assets/common-images/webauthn.png" alt="Company" />
</div>
<br/>

You can enable webauthn here or you can skip it to log in to your web application. After enabling webauthn, the prompt to enter your Security Key/Fingerprint will appear. As soon as you enter your key/fingerprint, your device will be registered and you will be logged in.

The next time you log in, you will directly be prompted to enter the key/fingerprint. After verifying you will be logged in.

## Example

```js
<!DOCTYPE html>
  <head>
   <script    src="https://cdn.mojoauth.com/js/mojoauth.min.js">
   </script>
  </head>
  <body>
     <h2>MojoAuth Demo </h2>
     <div id="mojoauth-passwordless-form"></div>
      <script>
        const mojoauth = new MojoAuth("<<APIKEY>>");
        // Use signInWithEmailOTP() for authentication using Email OTP
        mojoauth.signInWithMagicLink().then(response => console.log(response));
      </script>

  </body>
</html>
```

## Mojouth Passwordless Login Flow

After completing the above steps the following will be the flow of passwordless login in your web application.

### MojoAuth Login Interface

- User will enter their email address and if they have enabled webauthn they will be asked to verify their security key/fingerprint

<div style="text-align:center">
  <img src="../../assets/common-images/company.png" alt="Company" />
</div>
<br/>

- After successfully verifying their security key/fingerprint, they will be logged into their web application.

- Alternatively, they can opt to receive a link to login to their email address. On clicking the magic link user will be successfully verified and logged into the web application.

<div style="text-align:center">
  <img src="../../assets/common-images/magic-link.png" alt="Magic Link" />
</div>
<br/>

## Enabling WebAuthn for logged-in user

- If the user skips enabling webauthn for the first time, 'Enable webauthn' function can be used to trigger webauthn registration once they have logged in

```js
mojoauth.enableWebauthn(payload.oauth.access_token)
```

- Access token would be available in the payload after successful login.

## Keep Reading

[How to handle MojoAuth token?](/resources/jwt-token/)
