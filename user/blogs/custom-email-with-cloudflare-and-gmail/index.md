---
title: Create a Custom Email address with Gmail and Cloudflare
description: Create a custom email address using gmail and cloudflare for free
summary: 📩 Create a custom email address in 10 minutes
published: '2023-12-03T15:58:03.000+01:00'
updated: '2023-12-03T15:58:03.000+01:00'
cover: ./cover.jpg
coverCaption: Photo by <a href="https://unsplash.com/@solenfeyissa">Solen Feyissa</a> on <a href="https://unsplash.com/photos/windows-7-logo-on-black-background-M7zS8puGg18">Unsplash</a>
coverStyle: 'IN'
tags:
  - [ Email, Gmail, Clodflare ]
---

<script lang="ts">
  import AndThen from '$custom/AndThen.svelte';
  import NotEmail from '$custom/NotEmail.svelte';
</script>

# Create a Custom Email Address for Free
In the digital age, having a custom email address not only adds a professional touch to your communication but also enhances brand identity.
In this tutorial, we'll walk you through the process of setting up a custom email address using Cloudflare Email Routing and Gmail SMTP.
By the end of this guide, you'll be able to send and receive emails using your own domain, all while leveraging the power and reliability of Gmail.

## Prerequisites
Before we dive into the steps, make sure you have the following prerequisites in place:

* An active Gmail account.
* A domain registered with Cloudflare.
* Access to your domain's DNS settings on Cloudflare.

# Setup Your Google Account

## Enable 2 Factor Authentification
If you already have enabled two factor authentification you can safely skip this step.

1. Open your [Google Account](https://myaccount.google.com/);
2. Select "Security" in the navigation panel;
3. Under “Signing in to Google,” select" 2-Step Verification", then "Get started";
4. Follow the on-screen steps.

## Create an App Password
An app password is a 16-digit passcode that gives a less secure app or device permission to access your Google Account.

1. Open the [App Passwords console](https://myaccount.google.com/apppasswords) on your Google account;
2. Type a name for your applicatiom *i.e. "My Custom Email"*
3. Safely store the 16-digit passcode, you'll need this later.

# Enable Cloudflare's Email Routing
Emails that are routed through Cloudflare to your preferred email inbox, benefit from enhanced security, spam filtering, and improved deliverability.
Cloudflare Email Routing acts as a protective layer for your email infrastructure, shielding it from potential threats and optimizing the overall email experience.

1. Go to the **[Cloudflare Dashboard](https://dash.cloudflare.com)** and select your domain;
2. Go to **Email** <AndThen /> **Email Routing** <AndThen text="then select" /> **Get Started**;
3. Enter the custom email address in **Custom Address** (*i.e. <NotEmail email="cool-email@example.com" />*);
4. Enter the email address you want your emails to be forwarded to in **Destination Address** (*i.e. <NotEmail email="my-personal-email@gmail.com" />*);
5. Select **Create and Continue** <AndThen /> follow the instruction sent to your gmail address.
6. Go to the **DNS** section of the dashboard and add a new TXT record with the following content:
  ```txt
  "v=spf1 include:_spf.mx.cloudflare.net include:_spf.google.com ~all"
  ```

# Add Your Cloudflare-Routed Email to Gmail
Once did all the previous we can finally add the custom address to gmail.

1. Go to your [Gmail Account](https://gmail.com/) <AndThen text="then click on" /> **Settings** <AndThen text="then select" /> **Accounts**;
2. Select **Add another email address** under **Send Mail As**;
3. Fill the form with the name of the email and the Cloudflare-routed email (*i.e. <NotEmail email="cool-email@example.com" />*) <AndThen /> untick "**Treat as an alias**";
4. Fill the next form with the following information:<br>
    **SMTP Server**: smtp.gmail.com<br>
    **Port**: 587<br>
    **Username**: your gmail address (*i.e. <NotEmail email="my-personal-email@gmail.com" />*)<br>
    **Password**: [the app password](#create-an-app-password)
5. Leave **TLS** enabled <AndThen /> click **Add Account**
6. Confirm the email address with the code Google's sent you to your gmail account.

# Enjoy
You now have a fully working email that is routed through Cloudflare to receive emails and uses Google's SMTP server to send them.

Whenever you send a new email via GMail, make sure to switch the sender accordingly to your preferences.
