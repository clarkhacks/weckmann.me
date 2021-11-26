---
title: What is ReadMeJS?
date: 2021-11-25
---
 ## ReadMeJS
Recently, I was working on a simple interface for markdown notes on Codepen. I wanted an easy way to show some documentation. Rather than finishing my project by just adding a paragraph or two, I  built this.

## Built with Bulma, Showdown, and Love
Bulma is responsible for the styling while Showdown converts your README markdown to HTML.

## How to use it!

Add this `<script>` and `<div>` to your HTML.
```html
<div id="readme"></div>
<script src="https://cdn.jsdelivr.net/gh/clarkhacks/readmejs/readme.min.js"></script>
```
Configure ReadMeJS like so:
```javascript
readme("clarkhacks", "readmejs");
// readme(username, repository, filename);
```

## Example
<div id="readme"></div>
<script src="https://cdn.jsdelivr.net/gh/clarkhacks/readmejs/readme.min.js"></script>
<script>readme("clarkhacks", "readmejs");</script>