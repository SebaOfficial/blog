---
title: Create a Telegram Echo Bot
description: Create a Telegram bot that replies to every message you send.
summary: 🤖 Create a Telegram Echo Bot
published: '2023-11-07T12:00:00.000+01:00'
updated: '2023-12-12T11:00:00.000+01:00'
cover: ./cover.jpg
coverCaption: Photo by <a href="https://unsplash.com/@rubaitulazad">Nitish Meena</a> on <a href="https://unsplash.com/photos/a-blue-and-white-square-button-with-a-paper-airplane-on-it-u4F54GIZWGI">Unsplash</a>
coverStyle: 'IN'
series_tag: "FirstBot"
series_title: "Create A PHP Telegram Bot"
tags:
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
            { name: 'environment.php', icon: 'i-vscode-icons-file-type-php' }
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

## Introduction
This article is part of the [FirstBot](/?tags-Series=PHPBot) series.
We recommend reading the [introcution chapter](/create-your-first-bot) before continuing.

```bash
composer require telegramsdk/botapi
```

## Telegram Updates
Before writing the code we have to mention that there are 2 methods to get updates from our Telegram bot.

1. [getUpdates](https://core.telegram.org/bots/api#getupdates) : used for long polling , usefull if you don't have a public ip or an https url.
2. [setWebhook](https://core.telegram.org/bots/api#setwebhook) : more efficient way for recinving incoming updates, you need to have a public ip address with an https url.

In this article we'll look into both ways of creating a Telegram Bot.

## Start Coding

### Get Updates
Here's a simple example on how to get updates from Telegram and reply to them with the same message they sent.

```php
/// showLineNumber
/// title: bot.php
<?php

require_once  "vendor/autoload.php";

use TelegramSDK\BotAPI\Exception\TelegramException;
use TelegramSDK\BotAPI\Telegram\{Bot, Update};


define("GREEN_COLOR", "\033[0;32m");
define("RED_COLOR", "\033[0;31m");
define("DEFAULT_COLOR", "\033[0m");


$bot = new Bot("YOUR_BOT_TOKEN", Update::UPDATES_FROM_GET_UPDATES);

if(!$bot->isValidToken(true)) {
    echo RED_COLOR . "Invalid bot token.\n" . DEFAULT_COLOR;
    exit(1);
}

echo GREEN_COLOR . "Bot Started!\n" . DEFAULT_COLOR;

for ( ; ; sleep(5)) {

    $updates = $bot->updates(isset($updates) ? $updates->getLastUpdateId() : null);

    foreach($updates->result as $update){
        if(isset($update->message)){
            $chat = $update->getChat();

            try {

                $res = $bot->copyMessage([
                    "chat_id" => $chat->id,
                    "from_chat_id" => $chat->id,
                    "message_id" => $update->getMessage()->message_id
                ]);

                echo GREEN_COLOR . "Replied to " . $chat->id . "\n" . DEFAULT_COLOR;

            } catch (TelegramException $e) {
                echo RED_COLOR . "Coulnd't reply to " . $chat->id . ": " . $e->getResponseBody()->description . "\n" . DEFAULT_COLOR;
            }

        }
    }
}
```

#### What Am I Doing?
If you already worked with [TelegramSDK](https://github.com/TelegramSDK/BotAPI) you might already know what I've just written, but I still reccommend having a look at the [official documentation](https://botapi.racca.me/) for more information.

##### Include the Library
```php
require_once  "vendor/autoload.php";
```
This line includes the autoloader file from the Composer dependency manager.
It's used to autoload classes and functions from the third-party libraries, ensuring that you don't need to manually include each file.

##### Use Statements
```php
use TelegramSDK\BotAPI\Exception\TelegramException;
use TelegramSDK\BotAPI\Telegram\{Bot, Update};
```
These use statements import specific classes from `telgramsdk/botapi`.
This allows you to use these classes in the code without specifying the full namespace each time.

##### Define Constants for Console Colors
```php
define("GREEN_COLOR", "\033[0;32m");
define("RED_COLOR", "\033[0;31m");
define("DEFAULT_COLOR", "\033[0m");
```
These lines define constants for ANSI escape codes, which are used to colorize the console output. `GREEN_COLOR` sets the text color to green, `RED_COLOR` to red, and `DEFAULT_COLOR` resets the color to the default.

##### Initialize the Telegram Bot
```php
$bot = new Bot("YOUR_BOT_TOKEN", Update::UPDATES_FROM_GET_UPDATES);
```
An instance of the Bot class is created with the Telegram bot token and the update method (`UPDATES_FROM_GET_UPDATES`) specified. The `Update::UPDATES_FROM_GET_UPDATES` constant indicates that updates should be fetched using the `getUpdates` method.

##### Check Token Validity
```php
if (!$bot->isValidToken(true)) {
    echo RED_COLOR . "Invalid bot token.\n" . DEFAULT_COLOR;
    exit(1);
}
```
It checks if the bot token is valid. If not, it prints an error message in red and exits the script.

##### Infinite Loop for Handling Updates
```php
for (; ; sleep(5)) {
    // Code for handling updates
}
```
An infinite loop that fetches updates every 5 seconds.

##### Handle Updates
```php
$updates = $bot->updates(isset($updates) ? $updates->getLastUpdateId() : null);
```
Fetches updates using the `getUpdates` method. If `$updates` is set, it fetches updates starting from the last processed update.

```php
foreach ($updates->result as $update) {
    // Code for processing each update
}
```
Loops through each update in the result array.

###### Process Message Updates
```php
if (isset($update->message)) {
    // Code for processing message updates
}
```
Checks if the update is a message.

```php
$res = $bot->copyMessage([
    "chat_id" => $chat->id,
    "from_chat_id" => $chat->id,
    "message_id" => $update->getMessage()->message_id
]);
```
Copies the received message and sends it back to the same chat.

###### Handle Exceptions
```php
} catch (TelegramException $e) {
    // Code for handling exceptions
}
```
Catches any exceptions that may occur during the message copy process and prints an error message.

#### Start the Bot
That's it, now you can start the bot with
```bash
php bot.php
```
Send to it a message and see it replying!




### Set Webhook
Setting a [webhook](https://core.telegram.org/bots/api#setwebhook) with Telegram is bit more complicated than working with [getUpdates](https://core.telegram.org/bots/api#getupdates) as it requires an HTTPS url.
In this article will assume that you already have it.

#### Directory Structure
Here's an example of directory structure you might follow:
<div class="p4 border-1 shadow-xl rounded-xl border-black dark:border-white overflow-auto">
  <NestedFolder folderData={webhookDirectory} />
</div>


#### Environment
Let's start with `environment.php`, a file that will hamdle common tasks such as creating a new instance of the bot.

```php
/// showLineNumber
/// title: src/environment.php
<?php

require_once __DIR__ . "/../vendor/autoload.php";

use TelegramSDK\BotAPI\Telegram\{Bot, Update};

$bot = new Bot("YOUR_BOT_TOKEN", Update::UPDATES_FROM_WEBHOOK);

$update = $bot->updates(); // Getting the updates
```
As you can see, getting updates from the webhook is much easier than doing it with `getUpdates`.


#### Bootstrap
The `bootstrap.php` file simply sets the webhook to the specified url.

```php
/// showLineNumber
/// title: src/bootstrap.php
<?php

require_once __DIR__ . "/environment.php";

$bot->setWebhook([
    "url" => "https://example.com", // Remember to use https
    "drop_pending_updates" => true // Drop any pending updates
]);
```
See [setWebhook](https://core.telegram.org/bots/api#setwebhook) for more information.


#### Public file
The `src/public/` directory will be the one exposed to your web server and it will contain only one file, `index.php`
```php
/// showLineNumber
/// title: src/public/index.php
<?php

require_once __DIR__ . "/../environment.php"; // require the environment

if(isset($update->update_id)) { // Check if there is an update

    if(isset($update->message)) { // Check if a message was sent
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

#### Start the bot
Once you have those files you just need to bootstrap your bot:
```bash
php src/bootstrap.php
```
And start your HTTPS web server.



## Enjoy
You now have a full functioning bot that replies to every message sent by the users.



If you have any question please leave a comment below and I'll be happy to reply.
