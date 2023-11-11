---
title: Create a Telegram Echo Bot
description: Create a Telegram bot that replies to every message you send.
summary: 🤖 Create a Telegram Echo Bot
published: '2023-11-07T12:00:00.000+01:00'
updated: '2023-11-07T12:00:00.000+01:00'
cover: ./cover.jpg
coverCaption: Photo by <a href="https://unsplash.com/@rubaitulazad">Nitish Meena</a> on <a href="https://unsplash.com/photos/a-blue-and-white-square-button-with-a-paper-airplane-on-it-u4F54GIZWGI">Unsplash</a>
coverStyle: 'IN'
series_tag: "FirstBot"
series_title: "Create A PHP Telegram Bot"
tag:
  - [ Telegram, Bot, Automation, TelegramSDK ]
---

<script lang="ts">
  import NestedFolder from '$custom/NestedFolder.svelte';
  import type { Folder } from '$lib/types/folder';

  let webhookDirectory: Folder.Item = {
    name: 'MyBot',
    files: [
      {
        name: 'src',
        files: [
            {
                name: 'public',
                files: [
                  { name: 'index.php', icon: 'i-vscode-icons-file-type-php' },
                ]
            },
            { name: 'bootstrap.php', icon: 'i-vscode-icons-file-type-php' },
            { name: 'envirorment.php', icon: 'i-vscode-icons-file-type-php' }
        ]
      },
      {
        name: 'vendor',
        files: []
      },
      { name: 'composer.json', icon: 'i-vscode-icons-file-type-json' },
      { name: 'composer.lock', icon: 'i-vscode-icons-file-type-json' }
    ]
  };
</script>

# Introduction
This article is part of the [FirstBot](/?tags-Series=PHPBot) serie.
We recommend reading the [introcution chapter](/create-your-first-bot) before continuing.

```bash
composer require telegramsdk/botapi
```

# Telegram Updates
Before writing the code we have to mention that there are 2 methods to get updates from our Telegram bot.

1. [getUpdates](https://core.telegram.org/bots/api#getupdates) : used for long polling , usefull if you don't have a public ip or an https url.
2. [setWebhook](https://core.telegram.org/bots/api#setwebhook) : more efficient way for recinving incoming updates, you need to have a public ip address with an https url.

In this article we'll look into both ways of creating a Telegram Bot.

# 🧑‍💻 Start Coding

## Get Updates
Here's a simple example on how to get updates from Telegram and reply to them with the same message they sent.

```php
/// showLineNumber
/// title: bot.php
<?php
define("PRODUCTION", false);
require_once "vendor/autoload.php";

define("GREEN_TEXT", "\033[0;32m");
define("RED_TEXT", "\033[0;31m");
define("DEFAULT_TEXT", "\033[0m");

use TelegramSDK\BotAPI\Telegram\Bot;
$bot = new Bot("YOUR_BOT_TOKEN", Bot::UPDATES_FROM_GET_UPDATES);

echo GREEN_TEXT . "Bot Started!\n" . DEFAULT_TEXT;

while(true){
    $updates = $bot->updates(true, $updates->lastUpdateID ?? null);

    foreach($updates->result as $update){
        if(isset($update->message)){
            $res = $bot->copyMessage([
                "chat_id" => $update->chat->id,
                "from_chat_id" => $update->chat->id,
                "message_id" => $update->message->message_id
            ]);

            if($res->body->ok){
                echo GREEN_TEXT . "Replied to " . $update->chat->id . "\n" . DEFAULT_TEXT;
            } else{
                echo RED_TEXT . "Coulnd't reply to " . $update->chat->id . ": " . $res->body->error . "\n" . DEFAULT_TEXT;
            }
        }
    }

    sleep(5);
}
```

### 🤔 What Am I Doing?
If you already worked with [TelegramSDK](https://github.com/TelegramSDK/BotAPI) you might already know what I've just written, but I still reccommend having a look at the [official documentation](https://botapi.racca.me/docs/examples/echo-bot) where this example is explained.

#### Definitions
[TelegramSDK](https://botapi.racca.me) uses the `PRODUCTION` as the method to show errors.
Here's how it works:
* `false`: set `PRODUCTION` to `false` to throw exceptions whenever there is an API error;
* `true`: set `PRODUCTION` to `true` to suppress exceptions and throw warnings instead.

The other definitions are useful in our program to output the result of every API call.
```php
/// showLineNumber
/// title: bot.php
/// hlLines: 2,5-7
<?php
define("PRODUCTION", false);
require_once "vendor/autoload.php";

define("GREEN_TEXT", "\033[0;32m");
define("RED_TEXT", "\033[0;31m");
define("DEFAULT_TEXT", "\033[0m");
```

#### Instancing a new Bot
In this lines we're importing the library from the `vendor/` directory and instancing a new Bot object.
```php
/// showLineNumber
/// title: bot.php
/// hlLines: 3,9-10
<?php
define("PRODUCTION", false);
require_once "vendor/autoload.php";

define("GREEN_TEXT", "\033[0;32m");
define("RED_TEXT", "\033[0;31m");
define("DEFAULT_TEXT", "\033[0m");

use TelegramSDK\BotAPI\Telegram\Bot;
$bot = new Bot("YOUR_BOT_TOKEN", Bot::UPDATES_FROM_GET_UPDATES);
```
:::info Replace the Token!
Please remember to replace `YOUR_BOT_TOKEN` with the actual bot token that [@botfather](https://t.me/botfather) sent you.

See "[Setup your Bot on Telegram](/create-your-first-bot#setup-your-bot-on-telegram)" if you don't know how to do it.
:::

#### Getting the updates
* `while(1)` is used to to continuously [poll]((https://en.wikipedia.org/wiki/Push_technology#Long_polling)) the Telegram server for new updates.
* `sleep(5)` creates an interval from each request to aviod getting timed out.
* `$bot->updates()` is one of the few built-in functions of the [Bot](https://botapi.racca.me/docs/usage/general) class.
    See [Default Updates](https://botapi.racca.me/docs/usage/updates#default-updates) for the first parameter.
    The second parameter sets the last update to get only the most recent ones.

```php
/// showLineNumber
/// title: bot.php
/// hlLines: 14-15,17-18
<?php
define("PRODUCTION", false);
require_once "vendor/autoload.php";

define("GREEN_TEXT", "\033[0;32m");
define("RED_TEXT", "\033[0;31m");
define("DEFAULT_TEXT", "\033[0m");

use TelegramSDK\BotAPI\Telegram\Bot;
$bot = new Bot("YOUR_BOT_TOKEN", Bot::UPDATES_FROM_GET_UPDATES);

echo GREEN_TEXT . "Bot Started!\n" . DEFAULT_TEXT;

while(true){
    $updates = $bot->updates(true, $updates->lastUpdateID ?? null);
    ...
    sleep(5);
}
```
#### Replying to the user
Once we have received the update we can finally reply to the user with the same message they sent by just copying it with [copyMessage](https://core.telegram.org/bots/api#copymessage).

* `foreach($updates->result as $update)` loops through the updates
* `if(isset($update->message))` check if a message was sent. See the [update](https://core.telegram.org/bots/api#update) object.
* `$bot->copyMessage()` copies the message and sends it to the user that sent the update (`$update->chat->id`).
* `if($res->body->ok)` checks if the message was sent successfully.

```php
/// showLineNumber
/// title: bot.php
/// hlLines: 17-31
<?php
define("PRODUCTION", false);
require_once "vendor/autoload.php";

define("GREEN_TEXT", "\033[0;32m");
define("RED_TEXT", "\033[0;31m");
define("DEFAULT_TEXT", "\033[0m");

use TelegramSDK\BotAPI\Telegram\Bot;
$bot = new Bot("YOUR_BOT_TOKEN", Bot::UPDATES_FROM_GET_UPDATES);

echo GREEN_TEXT . "Bot Started!\n" . DEFAULT_TEXT;

while(true){
    $updates = $bot->updates(true, $updates->lastUpdateID ?? null);

    foreach($updates->result as $update){
        if(isset($update->message)){
            $res = $bot->copyMessage([
                "chat_id" => $update->chat->id,
                "from_chat_id" => $update->chat->id,
                "message_id" => $update->message->message_id
            ]);

            if($res->body->ok){
                echo GREEN_TEXT . "Replied to " . $update->chat->id . "\n" . DEFAULT_TEXT;
            } else{
                echo RED_TEXT . "Coulnd't reply to " . $update->chat->id . ": " . $res->body->error . "\n" . DEFAULT_TEXT;
            }
        }
    }

    sleep(5);
}
```

### Start the Bot
That's it, now you can start the bot with
```bash
php bot.php
```
Send to it a message and see it replying!


## Set Webhook
Setting a [webhook](https://core.telegram.org/bots/api#setwebhook) with Telegram is bit more complicated than working with [getUpdates](https://core.telegram.org/bots/api#getupdates) as it requires an HTTPS url.
In this article will assume that you already have it.

### Directory Structure
Here's an example of directory structure you might follow:
<div class="p4 border-1 shadow-xl rounded-xl border-black dark:border-white overflow-auto">
  <NestedFolder folderData={webhookDirectory} />
</div>


### Envirorment
Let's start with `envirorment.php`, a file that will hamdle common tasks such as creating a new instance of the bot.

```php
/// showLineNumber
/// title: src/envirorment.php
<?php

define("PRODUCTION", false);

require_once __DIR__ . "/../vendor/autoload.php";

use TelegramSDK\BotAPI\Telegram\Bot;

$bot = new Bot("YOUR_BOT_TOKEN", Bot::UPDATES_FROM_WEBHOOK);

$update = $bot->updates(true); // Getting the updates
```
As you can see, getting updates from the webhook is much easier than doing it with `getUpdates`.


### Bootstrap
The `bootstrap.php` file simply sets the webhook to the specified url.

```php
/// showLineNumber
/// title: src/bootstrap.php
<?php

require_once __DIR__ . "/envirorment.php";

$bot->setWebhook([
    "url" => "https://example.com", // Remember to use https
    "drop_pending_updates" => true,
]);
```
See [setWebhook](https://core.telegram.org/bots/api#setwebhook) for more information.


### Public file
The `src/public/` directory will be the one exposed to your web server and it will contain only one file, `index.php`
```php
/// showLineNumber
/// title: src/public/index.php
<?php

require_once __DIR__ . "/../envirorment.php";

if(isset($update->update_id)){ // Check if there is an update

    if(isset($update->message)){ // Check if a message was sent
        $bot->copyMessage([ // Copy the message
            "chat_id" => $update->chat->id,
            "from_chat_id" => $update->chat->id,
            "message_id" => $update->message->message_id
        ]);
    }

} else{
    echo "No updates from telegram where found.\n";
}
```

### Start the bot
Once you have those files you just need to bootstrap your bot:
```bash
php src/bootstrap.php
```



# Enjoy
You now have a full functioning bot that replies to every message sent by the users.



If you have any question please leave a comment below and I'll be happy to reply.