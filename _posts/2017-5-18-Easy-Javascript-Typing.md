---
title: Easy Javascript Typing!
img: /assets/images/old/post/easytype.png
desc: Using EasyType.Js to create a super simple typing effect with just 4 steps.
tags:
  - javascript
  - typing effect
  - typing
  - easytypingjs
layout: post
---

# EasyType.js

What is EasyType.Js??? Well it is a super simple way to create a typing effect! EasyType.js (minified) is only **0.293kB**.

<!-- more -->

## How To

**Step 1**

Add The CDN or [download](https://cdn.clarkhacks.com/easytype.min.js) EasyType.js

```mark-up
<script src="https://cdn.clarkhacks.com/easytype.min.js"></script>
```

**Step 2**

Define what will be typed.

```javascript
var easyText = ['Apples', 'Pineapples', 'Peaches'];
```

**Step 3**

Tell EasyType what element to target.

```javascript
var easyTarget = document.getElementById('EasyTypeJs');
```

**Step 4**

Start EasyType with the easyTyper Function.

```javascript
easyTyper();
```

## Example
<a id="example"></a>

See the Pen [EasyType.Js](https://codepen.io/clarkhacks/pen/xdaqge/) by Clark Weckmann ([@clarkhacks](https://codepen.io/clarkhacks)) on [CodePen](https://codepen.io).


<script src="https://production-assets.codepen.io/assets/embed/ei.js">
</script>
