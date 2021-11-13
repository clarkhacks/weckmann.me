---
title: "Jekyll Short Url"
date: "2017-11-01"
---

Jekyll Short Url uses Goo.gl as a backend and a small Script on your 404 page.

**PLEASE NOTE THAT GOOGLE HAS SHUT DOWN GOO.GL**

## How To

Place this in your 404 page.

```html
<script>
if (window.location.href.indexOf("sh") > -1) {
var shortCode = document.location.href.substring( document.location.href.lastIndexOf( '/' ) );
window.location.href = "https://goo.gl" + shortCode;
    }
</script>
```

To use Jekyll Short Url simply navigate toyourblog.com/sh/shorturl.

**Example:** https://clarkhacks.com/sh/48KCGo
