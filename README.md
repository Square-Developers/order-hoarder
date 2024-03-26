# Order Hoarder
Check out the live demo [here](https://order-hoarder.fly.dev/)

## What is this?
This is an example app that is intended to help unblock / inspire / guide you on how to integrate with the Square App Marketplace (AppM). The AppM has QA requirements that are needed to be fulfilled before your application can be hosted on the AppM.

While we have many APIs and your app could integrate with any number of them, we certainly could not build a demo app to demonstrate how to pass QA for many combinations of APIs that exist. However we can get you started with the two APIs that are absolutely required: [OAuth](https://developer.squareup.com/docs/oauth-api/overview) and [Locations](https://developer.squareup.com/docs/locations-api)


## How we recommend you use this sample application
1. Clone this repo to have the code on hand.
1. Open the [live demo](https://order-hoarder.fly.dev/) and start playing around with it. There are lots of little notes and steps to explain what is happening in the app. There are also call-outs to specific file names, which you can open in your local codebase to read more about how the app work.
### FYI
1. You do not need to create an Order Hoarder account with a valid email address
1. You will need a Square account when you do the authorization flow in Order Hoarder

If you would like a more hands on approach, we have instructions below for running the app locally

## Steps for using the live demo
1. Click `Sign up` and fill in the fields to create a new Order Hoarder Account
1. After signing up you will arrive on the dashboard. Click on `Settings` and then click `Connect`
1. Go through the Square Authorization steps and `Accept` the permissions requested from Order Hoarder
    - notice that if you click `Deny`, Order Hoarder handles that gracefully and informs the user
1. After successfully granting permissions to Order Hoarder, return to the dashboard and notice you can `select locations` from the dropdown. If your square account has any orders in it, the money values will reflect that. Otherwise it will be $0
1. From here you can either `Deauthorize` Order Hoarder from your Square account on the settings page, or remove the integration from inside your Square account. A webhook will run that then updates Order Hoarder to reflect that deauthorization.


## Run the app locally

If you would prefer to have a more hands-on experience with the app, you can follow the steps below to get started.

### Install the needed dependencies
```bash
npm i
```
### Update environment variables
Copy the file `.env.example` to `.env`

```bash
cp .env.example .env
```

```js
// you can run this command in a node repl to get a good value for the `REACT_AES_KEY` field
crypto.randomBytes(32).toString('hex').substr(0,32)

// you can run this command as well to create a good value for the `JWT_SIGNING_SECRET`
crypto.randomBytes(32).toString('hex');
```

The sqlite file is in an empty clean state with the Schema already pushed to it from prisma, so you can just run the app

### Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## FAQs

#### How do I test webhooks with square sandbox `localhost`?
- In order to test webhooks from Square, you will need to set up [ngrok](https://ngrok.com/), and expose your `localhost:3000` server so that it has a publicly available ip address. You will then need to set up a webhook in your developer account that is subscribed to the `revoke_access` endpoint. More instructions on webhooks can be found [here](https://developer.squareup.com/docs/webhooks/overview)

- The webhook subscription URL you provide in Square should look like `https://{YOUR_NGROK_DOMAIN}/api/webhooks/revoked_access`

#### Refresh Token Strategy
In the file `pages/api/square/cron_refresh` we defined an endpoint that can be invoked to go and refresh any access tokens that are older than 7 days. This endpoint is invoked once a week by a CRON job.


#### Clearing and resetting your local sqlite DB

```
$ rm prisma/dev-qa.db
npx prisma generate --schema prisma/schema-sqlite.prisma
npx prisma db push --schema prisma/schema-sqlite.prisma
```

#### Running into issues?
If you are running into problems with the live demo, please reach out on our [discord](https://discord.gg/squaredev)

