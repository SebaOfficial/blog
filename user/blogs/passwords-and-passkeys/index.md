---
title: Passwords Best Practices
description: Learn how to use passwords, how to store and secure them.
summary: 🔒 Learn about passwords
published: '2024-01-07T16:25:40.000+01:00'
updated: '2024-01-07T16:25:40.000+01:00'
cover: ./cover.jpg
coverCaption: Photo by <a href="https://unsplash.com/@towfiqu999999">Towfiqu barbhuiya</a> on <a href="https://unsplash.com/photos/a-golden-padlock-sitting-on-top-of-a-keyboard-FnA5pAzqhMM">Unsplash</a>
coverStyle: 'IN'
tags:
  - [ password, security, privacy ]
---

<script lang="ts">
  import PasswordCrack from '$custom/PasswordCrack.svelte';
</script>

## Introduction
A password is a string of characters used to verify the identity of a user during the authentication process.
Passwords are typically used in tandem with a username; they are designed to be known only to the user and allow that user to gain access to a device, application or website.
Passwords can vary in length and can contain letters, numbers and special characters.

## How to create a secure password
Passwords, when carefully created and protected, increase safe and secure interactions online and in the workplace and can prevent password cracking.
To maximize the strength and efficacy of passwords, organizations often establish password policies.
These policies are designed to help users create strong passwords and adopt best practices for managing login credentials.
According to the traditional advice, a strong password has:

* **Minumum 12 Characters**;
* **Both uppercase and lowercase letters**;
* **At least one number**;
* **At least one special character**.

### What you shouldn't include
* **Dictionary Word** or Combination of them;
* **Easily guessed elements**, such as names of children, pet names and birthdays;
* **Obvious Substitutions**, such as *H3llo* or *H0use*


## Use password managers
One of the best advices I always give is to store your password with a password manager like [bitwarden](https://bitwarden.com/) and use passwords generators you trust to generate them for you, because:
> If you can remember a password, a computer can remember it too.

Bitwardern offers a [password generator](https://bitwarden.com/password-generator/) but if you're a linux user you could use `pwgen`, here's an example to generate a password with 16 characters:
```bash
pwgen 16 1
```

## Test your password
Here's how you can test the effectiveness of your password:

<PasswordCrack />
