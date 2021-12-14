# Qrvoter
- Make polls, share it, receive answers.
- This is a home project of mine, and not a real product.
- Any suggestion regarding the "product", or code is appreciated :)

## Planned features
- As an **organizer** you can
    - create / manage different types of polls
    - invite people to fill out your polls
    - create printable QR codes to invite people to your polls (let's say you are an event organizer, and you want to receive answers real-time)
    - manage poll answers received from your invitees, create reports, etc.
    - create company / organizer profile which can be set to visible in the top of the polls.
- As an **invitee** you can
    - fill out forms received by an **organizer**

## Technical note
This is a `ReactJS` project with a `NodeJS` backend, and `MySQL` database. I'm planning to introduce `MongoDB` at some point, I'm not familiar with it yet unfortunately.

## Project setup
Currently you won't be able to set up the project properly.
The project is using a `mysql` database. I will have to create migration scripts in backend for the existing tables in order to make the app work. This is a WIP. :) 
1. Clone the repository
2. Enter the `backend` folder, run `npm install`
3. (... run data migration script - WIP)
4. Start backend with `npm start`
5. Enter the `frontend` folder, run `npm install`
6. Start the watcher with `npm run watch`