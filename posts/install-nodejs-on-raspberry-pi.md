---
title: "Install NodeJs on Raspberry Pi"
date: "2020-01-04"
---

Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine. NodeJs is an increasingly popular language for developers across the board. Let’s cover how to install NodeJs on the Raspberry Pi.

To start off we need to add the NodeJs repository to your Pi’s list. Run this command:

```
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
```

This will enable the repository. Once it’s enabled you can install NodeJs and NPM with this command.

```
$ sudo apt install nodejs
```

This will take awhile to install, once it’s done test it with this command:

```
$ node -v
```

To check NPM run this:

```
$ npm -v
```
