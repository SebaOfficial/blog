---
title: Create Your First Telegram Bot
description: Create your first telegram bot in a few steps in PHP using telegramsdk/botapi
summary: 🤖 Create your first Telegram Bot using PHP in just a few steps
published: '2023-11-06T12:00:00.000+01:00'
updated: '2023-12-12T11:00:00.000+01:00'
cover: ./cover.jpg
coverCaption: Photo by <a href="https://unsplash.com/@rubaitulazad">Nitish Meena</a> on <a href="https://unsplash.com/photos/a-blue-and-white-square-button-with-a-paper-airplane-on-it-u4F54GIZWGI">Unsplash</a>
coverStyle: 'IN'
series_tag: "FirstBot"
series_title: "Create A PHP Telegram Bot"
tag:
  - [ Telegram, Bot, Automation, TelegramSDK ]
---

<script lang="ts">
  import VideoPlayer from '$lib/components/video.svelte';
</script>

# Introduction
Telegram bots are special accounts that serve as an interface for code running on a server, allowing for a variety of functionalities within the Telegram platform. They can be used to automate tasks, provide information, interact with users, and even replace entire websites.

In this article, we'll explore how to build a PHP Telegram bot using the [Telegram Bot Api](https://core.telegram.org/bots/api) and [TelegramSDK](https://botapi.racca.me). We'll walk through the process of setting up the bot, configuring it, and testing it.

## Prerequisites
Before we begin, ensure that you have the following:
* PHP installed on your machine. If not, you can download it from the official [PHP website](https://www.php.net/download).
* Composer, a dependency manager for PHP. If you don't have it, you can download it from the official Composer website.

# Setup your Bot on Telegram
The first step is to create a Bot to which users will chat with.
Go to [@botfather](https://t.me/BotFather), start it and type `/newbot`

<VideoPlayer
  autoplay={true}
  loop={true}
  style="max-height: 700px !important;"
  title="BotFather Tutorial"
  mp4="/create-your-first-bot/botfather.mp4"
/>


# Start Coding

## Setup Local Envirorment
Before actually writing the bot's logic we need to install the lirary we're going to use:
```bash
composer require telegramsdk/botapi
```
[telegramsdk/botapi](https://github.com/TelegramSDK/BotAPI) is a light weight library that lets us access the [Telegram API](https://core.telegram.org) easly and freely.

## Write the Logic
It's time for the fun part!

All you need to do is create a new file named `bot.php` (*or whatever you like*) and write this code:
```php
/// showLineNumber
/// diff
/// title: bot.php
<?php
require_once "vendor/autoload.php";

use TelegramSDK\BotAPI\Telegram\Bot;

$bot = new Bot("YOUR_BOT_TOKEN");

$bot->sendMessage([
    "chat_id" => YOUR_CHAT_ID,
    "text" => "My First Telegram bot!"
]);
```

:::info How can I get my CHAT_ID?
Just send a message to [@userinfobot](https://t.me/userinfobot) and replace `YOUR_CHAT_ID` with the id the bot provided.
:::


### 🤔 What Am I Doing?
If this is your first approach to Telegram or to [telegramsdk/botapi](https://github.com/TelegramSDK/BotAPI), you may wonder:
> What am I Doing?

Otherwise you can skip this explanation.

Let's have a look a the code you've just written:

#### Instancing a new Bot
In this lines we're importing the library from the `vendor/` directory and instancing a new Bot object.
```php
/// showLineNumber
/// title: bot.php
/// hlLines: 2-6
<?php
require_once "vendor/autoload.php";

use TelegramSDK\BotAPI\Telegram\Bot;

$bot = new Bot("YOUR_BOT_TOKEN");
```
:::info Replace the Token!
Please remember to replace `YOUR_BOT_TOKEN` with the actual bot token that [@botfather](https://t.me/botfather) sent you.

See "[Setup your Bot on Telegram](#setup-your-bot-on-telegram)" if you don't know how to do it.
:::

#### Sending a Message
The lines are an API call to the Telegram `sendMessage` method.

This call will send a message to the specified user saying "My First Telegram bot!"

```php
/// showLineNumber
/// title: bot.php
/// hlLines: 8-11
<?php
require_once "vendor/autoload.php";

use TelegramSDK\BotAPI\Telegram\Bot;

$bot = new Bot("YOUR_BOT_TOKEN");

$bot->sendMessage([
   "chat_id" => YOUR_CHAT_ID,
   "text" => "My First Telegram bot!"
]);
```
Please remember to replace `YOUR_CHAT_ID` with your actual id.

If you don't know how to get your char id start, [@userinfobot](https://t.me/userinfobot) and get your id.

## Test the bot
Testing the bot is super easy, you just need to start the file!
```bash
php bot.php
```
:::info Start the Bot

If you don't **start the bot you created**, the program won't be able to send you the message.
:::


## Enjoy
That's it! You now have a fully working telegram bot.
[Or do you?](/create-an-echo-bot)

Make sure to check out the [next post](/create-an-echo-bot) of the series.

If you have any question please leave a comment below and I'll be happy to reply.