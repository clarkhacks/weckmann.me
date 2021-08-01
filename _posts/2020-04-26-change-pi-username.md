---
title: Change Default Pi Username
desc: How to change the default username from pi to something more tasteful using the cli.
layout: post
tags:
    - Raspberry Pi
    - RPI
    - Root
    - Username
    - Default Username
---

If you're using Raspbian your default username is `pi`. In this article, I will teach you how to change this username, the password, and remap the home directory.
<!-- more -->
To do this you must first log in as the `root` user. By default, the `root` user has no password enabled. Log in as the `pi` user and enter this command.

```bash
$ sudo passwd root
```
You should choose a safe and secure password for this user. After you change the `pi` username to your desired username I recommend disabling the root password. Make sure password login for root is enabled by editing the `sshd_config` file.

```bash
$ sudo nano /etc/ssh/sshd_config
```

Find `PermitRootLogin without-password` it could say something similar. Change this value to `PermitRootLogin yes`.

You can now logout of the `pi` user by entering this command.

```bash
$ logout
```

If this command fails to work use the `exit` command.

Login as the `root` user now with the password you created.

We need to modify the name of the `pi` user now. Run this command. Replace `newuser` with your desired username.

```bash
usermod -l newuser pi
```

We need to modify the home directory now to match the new username. Again replace `newuser` with your desired username.

```bash
usermod -m -d /home/newuser newuser
```

You can now logout of the `root` user and log back in as the username you just created. The password for your username is still the default username for `pi`, "raspberry". If you wish to change this enter this command.

```bash
passwd
```

Now enter "raspberry" as the `Current Password` and then your desired password for `New Password` and confirm.

If you wish to lock the `root` user password for security reasons you can enter the following.

```bash
sudo passwd -l root 
```

You're all set! Enjoy your new username.

Get your Raspberry Pi today over on Amazon!

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=weckmann-20&marketplace=amazon&amp;region=US&placement=B08R87H4RR&asins=B08R87H4RR&linkId=b817bda5e52a60ee41533adfdd379bee&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>