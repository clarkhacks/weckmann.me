---
title: "Steal Your Consenting Friend's Gmail Password"
date: "2018-01-08"
---

Do you have a consenting friend who you just happen to need their password? Look no more, here is a complete set up.

### How did I do it?

If you just want the code hop over to [Glitch]("https://glitch.com/edit/#!/google-phishing"). Please note this code is for educational purposes only.

I started off with building the form. The form is designed to look _identical_ to a google login form.

!["login]("/assets/images/posts/2018-phishing-form.png")

Set the query parameter `email` equal to a users email. For example:

`google-phishing.glitch.me/?email=admin1@gmail.com`

Some Javascript handles the post request to the Node server.

Navigate to [https://google-phishing.glitch.me/get\_log]("https://google-phishing.glitch.me/get_log") to see the collected passwords.

Why do people fall for this? Most of us see the Google logo and feel safe. A domain like accounts-google-sign-in-appspot-com.glitch.me/… at a glace looks official. Naturally, we want to login to access our data.

Whatever you do with this, I hold no liability.
