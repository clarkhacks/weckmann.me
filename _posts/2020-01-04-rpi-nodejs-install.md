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

Get your Raspberry Pi today over on Amazon!

<a target="_blank"  href="https://www.amazon.com/gp/product/B07TC2BK1X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07TC2BK1X&linkCode=as2&tag=weckmann-20&linkId=58a9ccecbd171fa564e28591902ecfe8"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07TC2BK1X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=weckmann-20" ></a>