---
title: Jekyll Short Url
desc: Easy to use Short Url Script for Jekyll Blogs!
tags:
  - javascript
  - short url
  - jekyll
  - google
layout: post
---

Jekyll Short Url uses Goo.gl as a backend and a small Script on your 404 page.

<!-- more -->

__PLEASE NOTE THAT GOOGLE HAS SHUT DOWN GOO.GL__

## How To

Place this in your 404 page.

```mark-up
<script>
if (window.location.href.indexOf("sh") > -1) {
var shortCode = document.location.href.substring( document.location.href.lastIndexOf( '/' ) );
window.location.href = "https://goo.gl" + shortCode;
    }
</script>
```
To use Jekyll Short Url simply navigate toyourblog.com/sh/shorturl.

__Example:__ https://clarkhacks.com/sh/48KCGo
