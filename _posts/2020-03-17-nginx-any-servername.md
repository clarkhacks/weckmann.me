---
layout: post
title: Jekyll Nginx Server
desc: We're gonna learn how to set up a production environment that mimix the Jekyll development server. This will handle 404 errors, 500 errors, and cache control.
tags:
    - Nginx
    - Jekyll
    - Production Server
    - Development Server
    - Server Cache Control
---

Here's how to mimic the Jekyll Development Server with Nginx for a production environment.
<!-- more -->

Create a new `sites-available` block (make sure to remove the `default` file, it's already listening on port 80).

```bash
$ cd /etc/nginx/sites-available/
$ sudo nano MYSITE
```
Copy and paste the following:

```bash
server {
  listen 80;
  server_name mysite.example.com;
  root /YOUR-JEKYLL-SITE-PATH/_site;

# Cache controle
  expires 30s;
  add_header Cache-Control public;
  add_header ETag "";

# Error Pages
  error_page 404 /404.html;
  error_page 500 /500.html;

# Your static assets that won't need the cache reloaded.
  location  ~ ^/assets/ {
    expires max;
  }

  location ~ /\. {
    return 404;
    access_log off;
    log_not_found off;
  }

# Favicon handler
  location = /favicon.ico {
    try_files /favicon.ico =204;
    access_log off;
    log_not_found off;
  }

# 404 handler
  location / {
    try_files $uri $uri.html $uri/ =404;
  }
}
```

Save this file with `ctrl+x` then `Y` and enter. Now we have to link our new configuration file to the `sites-enabled` directory and restart Nginx.

```bash
$ sudo ln -s /etc/nginx/sites-available/MYSITE /etc/nginx/sites-enabled/
$ sudo service nginx restart
```

<a target="_blank"  href="https://www.amazon.com/gp/product/B07TC2BK1X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07TC2BK1X&linkCode=as2&tag=weckmann-20&linkId=58a9ccecbd171fa564e28591902ecfe8"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07TC2BK1X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=weckmann-20" ></a>

You're all set!

The best way to host this is on a Raspberry Pi! It's great for beginners! Check out my post on Changing your [Raspberry Pi username](/change-pi-username:200426)!