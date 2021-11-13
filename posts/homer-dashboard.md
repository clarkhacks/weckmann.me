---
title: "Homer Dashboard"
date: "2021-11-10"
---

Self-hosting is becoming more and more popular, with that comes hosting for fun not just for function. I cannot begin to count the number of projects I've spun up just to play with. This doesn't mean you have to keep them forever though. It does mean, however, that organization is a must!

I've used bookmarks, notes, and default dashboards to keep track of my day-to-day services, as well as my random projects. With the dashboard becoming more popular I've tried a lot of pre-built ones like DashMachine, Flame, Dashy, and so many more! I finally landed on one that I will be keeping for awhile - Homer.

Special thanks to [WalkxCode](https://github.com/walkxcode) on GitHub ([u/Walker\_21390](https://www.reddit.com/user/Walker_21390/) on Reddit[](https://www.reddit.com/r/selfhosted/comments/q9e82c/yes_this_is_homer_yes_i_spent_2_hours_customizing/)) for their amazing Homer theme, without this I wouldn't have chosen Homer as my day-to-day dashbaord.

With that out of the way, let's get started!

To begin let's install homer with Docker.

```
docker run -d \
  -p 8080:8080 \
  -v </your/local/assets/>:/www/assets \
  --restart=always \
  b4bz/homer:latest
```

**Don't forget to configure the port and set your volume.**

Homer has a configuration file located at `./assets/config.yml` . This is where we'll be configuring Homer. If you navigate to `http://localhost:8080` you'll see your Homer Dashboard.

The dashboard game is all about how functional and how _fancy_ your dashboard is. [WalkxCode](https://github.com/walkxcode) made this incredibly easy for us. They have the easy to follow instruction over on Github. Check out their write-up [here](https://github.com/WalkxCode/Homer-Theme).

![](/assets/images/preview-1024x581.png)

Credit: https://github.com/WalkxCode/Homer-Theme
