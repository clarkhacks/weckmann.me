---
title: Node Gmail API
img: /assets/images/old/post/covers/gmail-api.png
desc: Create your own Gmail API with Express and Node.
tags:
  - javascript
  - node
  - gmail
  - api
  - express
layout: post
---

We will be building a simple Gmail API for easy notification use. Please note this is not the most secure method.

<!-- more -->
### Requirements
* Node Js
* Small Linux Server
* _Throw Away_ Gmail Account

_Check Out My Example_ [Node Notify](https://apis.clarkhacks.com/cgi/gui)
## Gmail Account

__DO NOT__ Use your daily Gmail Account. Create a _Throw Away_ as we will need to enable __less secure apps__.

#### [Create a New Gmail Account](https://accounts.google.com/SignUp).

When creating your account note your password.

If you will not be responding to inbound emails you can enable a _Vacation_ Response.

	1. In the top right, click Settings.
	2. Scroll down to the "Vacation responder" section.
	3. Select Vacation responder on.
	4. Fill in the date range, subject, and message.
	5. Under your message, check the box if you only want your contacts to see your vacation reply.
	6. At the bottom of the page, click Save Changes.

	~ Google Support

#### Less Secure Apps
Click the link below.

[Enable Less Secure Apps](https://www.google.com/settings/security/lesssecureapps).

### Copy The Template
```bash
>$ git clone https://github.com/clarkhacks/Gmail-API
>$ cd Gmail-API
>$ npm install
```

You now have a blank `app.js`, completed code (for example/copy-paste), and `node_modules` installed.

### The Code
Add your details to `credentials.json`. This file will not be open to the public however, this is why our code is less secure.

```json
// ./credentials.json

{
  "user": "user@gmail.com", // your email
  "pass": "AbCdEf!"			// your password
}
```

Include your variables.
```javascript
// ./app.js

var
  express = require('express'),
  app = express(),
  credentials = require('./credentials.json'); // email & pass
```

Set up routes.

```javascript
// ./app.js

app.get('/send', function(req, res) {
// ...
});
```

Send email from `localhost/send`

```javascript
// ./app.js > In 'send' route.

var send = require('gmail-send')({
  user: credentials.user,          // credentials.json - email
  pass: credentials.pass,          // credentials.json - password
  to: "name@domain.tld",           // Send To Email
  subject: "Hello!",               // Subject
  text: "Sent from my Gmail API!", // Message
})({});

return res.send("To: " + sendTo + "<br>" + "Subject: " + subject + "<br>" + sendWhat);
```

Using queries to get email, subject, and message.

```javascript
// ./app.js > In 'send' route.

  var sendTo = req.query.sendTo,
    subject = req.query.subject,
    sendWhat = req.query.sendWhat;
  if (sendTo && sendWhat && sendWhat) {
  	var send = require('gmail-send')({
  	  user: credentials.user,
  	  pass: credentials.pass,
  	  to: sendTo,
  	  subject: subject,
  	  text: sendWhat,
  	})({});

  	return res.send("To: " + sendTo + "<br>" + "Subject: " + subject + "<br>" + sendWhat);
  }
   else {
    return res.send('No Email Specified.');
  }
```

### In Use

In your browser visit `http://localhost/send?sendTo=user@domain.tld&subject=Hello&sendWhat=Greetings%21`.

You should get a response that looks like this:
```text
To: user@domain.tld
Subject: Hello
Greetings!
```

## What Can I Do With This?

I have a service like this one running (I have secured it with json web tokens) that I use to notify my phone when `x` happens.

You could use this on the front-end by sending requests with javascript. I recommend securing the API itself.

Sending a text message to your phone can be costly (depending how often you do it). One way around this is with email! Send an email to YouNumber@smsgateway.tld and your phone should receive a text message.

Here are some of the SMS Gateway:
```text
Verizon		number@vtext.com
ATT		number@txt.att.net
Cricket		number@sms.mycricket.
T-Mobile	number@@tmomail.net

For more just Google :)
```
