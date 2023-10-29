### Description 

This is a simple Discord bot that will respond to messages. 
It responds to:
- mentions
- Direct Messages (DMs)
- all other messages in channels that bot has access to

### Installation

1. `bun install`
1. copy `env-sample` to `.env` and fill with proper keys - see below

### New bot creation

1. Go to Developer Portal: https://discord.com/developers/applications/
2. Click "New Application" and create a new application
3. Once created, copy Application ID to .env
4. Go to "Bot" tab and click "Reset Token"
5. Copy newly generated token to .env
6. Uncheck "Public Bot"
7. Go to "oAuth2" -> "URL Generator" and select permissions:
- bot
  - General
    - Read Messages/View Channels
  - Text Permissions
    - Send Messages
    - Send Messages in Threads
    - Embed Links
    - Attach Files
    - Add Reactions
8. Copy generated URL and paste it in your browser - add bot to your server

### Usage

1. `bun start`
