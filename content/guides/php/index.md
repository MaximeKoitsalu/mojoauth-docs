---
title: Getting Started - PHP
tags: ["HTML5", "CSS", "PHP", "GetStarted"]
description: "A quick implementation guide to use MojoAuth for Passwordless using PHP."
---

# Get Started - PHP

To communicate with MojoAuth you will need some details about the application. These details are required for setup and initiate the implementation of Passwordless Login.

## Getting Credentials

### Register at MojoAuth

Here you just need to follow three simple steps:

- Login to [MojoAuth](https://mojoauth.com/signin) and the below screen appear:

<div style="text-align:center">
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

## Integrate MojoAuth

To start Integrating MojoAuth in your web app, add MojoAuth javascript sdk in the head of your webpage and follow below mentioned steps:

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

- User will enter their email address to receive a link to login to their email address.

<div style="text-align:center">
  <img src="../../assets/common-images/company.png" alt="Company" />
</div>
<br/>

- On clicking the magic link user will be successfully logged into the web application.

<div style="text-align:center">
  <img src="../../assets/common-images/magic-link.png" alt="Magic Link" />
</div>
<br/>

## MojoAuth Token

After successful authentication, MojoAuth provides a JWT Token. You can use this token for your further implementation. MojoAuth also provides the way you can verify the authenticity of this token using MojoAuth PHP SDK.

## Validate your user

To add the sdk in your PHP project you can download or pull the mojoauth php-sdk from the [github repo](https://github.com/MojoAuth/mojoauth-php), and configure it using your MojoAuth APIKEY.

### Configure Project

```PHP
<?php

require_once(__DIR__."mojoAuthAPI.php");

// mojoauth apikey replace at "MOJOAUTH_APIKEY"
$mojoAuth = new mojoAuthAPI("MOJOAUTH_APIKEY");
```

### Verify JWT Token

Use the MojoAuth `verifyToken()` Method to verify the MojoAuth JWT token.

```PHP

//Step 1 Get Public Key / Certificate from MojoAuth Server

$result = $mojoAuth->getPublicKey();
$publicKey = json_decode($result);

//Step 2 Pass JWT token and publickey to verify user
$userProfileData = $mojoAuth->getUserProfileData($access_token, $publicKey->data)

```

## Keep Reading

[How to handle MojoAuth token?](/resources/jwt-token/)
