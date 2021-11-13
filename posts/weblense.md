---
title: "WebLense"
date: "2017-12-11"
---

There is a cascade of URL-To-Image APIs out there. Most of them are pricey, overly-complicated, non-opensource and you don’t have control of the image files. WebLense takes care of this. WebLense is a self-hosted Url-To-Image API.

## How To Use WebLense

_Updated on January 30th, 2018_

Using WebLense is incredibly simple.

[!["Remix](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/clarkhacks/WebLense)

or

[![](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/clarkhacks/WebLense)

or

```
git clone https://github.com/clarkhacks/WebLense.git
cd WebLense
npm install && npm start
```

## API

Use `Lense` endpoint for API calls.

| `GET` | Required | Function |
| --- | --- | --- |
| url | Yes | URL To Capture |
| width | No | End Width |
| height | No | End Height |
| delay | No | Delay Screenshot |
| json | No | Return Json |

## Examples

**Web**

```
https://projectid.herokuapp.com/lense?url=https://clarkhacks.com/blog&width=1920&height=720
```

**jQuery**

```
$.get('https://projectid.glitch.me/lense',
{ url: 'https://clarkhacks.com' },
function(data) {
    ...

```

## Out of Space?

Glitch Projects are allowed 128mb of space. The WebLense app takes up ~40mb with captured images taking up the rest.

**Options**

- Clear `sites` Folder
- Host WebLense somewhere else.
