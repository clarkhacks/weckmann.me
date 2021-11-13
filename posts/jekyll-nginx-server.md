---
title: "Jekyll Nginx Server"
date: "2020-03-17"
---

Here’s how to mimic the Jekyll Development Server with Nginx for a production environment.

Create a new `sites-available` block (make sure to remove the `default` file, it’s already listening on port 80).

```
$ cd /etc/nginx/sites-available/
$ sudo nano MYSITE
```

Copy and paste the following:

```
server {
  listen 80
  server_name mysite.example.com
  root /YOUR-JEKYLL-SITE-PATH/_site

# Cache controle
  expires 30s
  add_header Cache-Control public
  add_header ETag ""

# Error Pages
  error_page 404 /404.html
  error_page 500 /500.html

# Your static assets that won't need the cache reloaded.
  location  ~ ^/assets/ {
    expires max
  }

  location ~ /. {
    return 404
    access_log off
    log_not_found off
  }

# Favicon handler
  location = /favicon.ico {
    try_files /favicon.ico =204
    access_log off
    log_not_found off
  }

# 404 handler
  location / {
    try_files $uri $uri.html $uri/ =404
  }
}
```

Save this file with `ctrl+x` then `Y` and enter. Now we have to link our new configuration file to the `sites-enabled` directory and restart Nginx.

```
$ sudo ln -s /etc/nginx/sites-available/MYSITE /etc/nginx/sites-enabled/
$ sudo service nginx restart
```

You’re all set!
