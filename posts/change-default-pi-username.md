---
title: "Change Default Pi Username"
date: "2020-04-26"
---

If you’re using Raspbian your default username is `pi`. In this article, I will teach you how to change this username, the password, and remap the home directory. To do this you must first log in as the `root` user. By default, the `root` user has no password enabled. Log in as the `pi` user and enter this command.

```
$ sudo passwd root
```

You should choose a safe and secure password for this user. After you change the `pi` username to your desired username I recommend disabling the root password. Make sure password login for root is enabled by editing the `sshd_config` file.

```
$ sudo nano /etc/ssh/sshd_config
```

Find `PermitRootLogin without-password` it could say something similar. Change this value to `PermitRootLogin yes`.

You can now logout of the `pi` user by entering this command.

```
$ logout
```

If this command fails to work use the `exit` command.

Login as the `root` user now with the password you created.

We need to modify the name of the `pi` user now. Run this command. Replace `newuser` with your desired username.

```
usermod -l newuser pi
```

We need to modify the home directory now to match the new username. Again replace `newuser` with your desired username.

```
usermod -m -d /home/newuser newuser
```

You can now logout of the `root` user and log back in as the username you just created. The password for your username is still the default username for `pi`, “raspberry”. If you wish to change this enter this command.

```
passwd
```

Now enter “raspberry” as the `Current Password` and then your desired password for `New Password` and confirm.

If you wish to lock the `root` user password for security reasons you can enter the following.

```
sudo passwd -l root 
```

You’re all set! Enjoy your new username.
