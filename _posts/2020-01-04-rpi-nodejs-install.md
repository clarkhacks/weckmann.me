---
title: Install NodeJs on Raspberry Pi
desc: Let's cover how to install NodeJs on the Raspberry Pi.
layout: post
tags:
    - NodeJs
    - RPI
    - Raspberry Pi
    - Install NodeJs
---
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. NodeJs is an increasingly popular language for developers across the board. Let's cover how to install NodeJs on the Raspberry Pi.
<!-- more -->

To start off we need to add the NodeJs repository to your Pi's list. Run this command:

```bash
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
```
This will enable the repository. Once it's enabled you can install NodeJs and NPM with this command.

```bash
$ sudo apt install nodejs
```
This will take awhile to install, once it's done test it with this command:

```bash
$ node -v
```

To check NPM run this:

```bash
$ npm -v
```