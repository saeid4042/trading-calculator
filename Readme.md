# Running Project Locally

Run this commant on command prompt (terminal)

```shell
npm run start
```

your project will be available on http://localhost:3000/trading-calculator

# Reading Inputs from URL

You can prefill the inputs using query parameters. Here is are valid query parameters:

- `asset`
- `risk`
- `amount`
- `entryPrice`
- `exitPrice`
- `stopLoss`
- `lev`
- `dollar`

Your URL should look like this:

https://saeid4042.github.io/trading-calculator?asset=100&risk=200&amount=300&entryPrice=400&exitPrice=500&stopLoss=600&lev=700&dollar=800


# Updating Formulas

in file `src/constants.ts` you can update the formulas in `metrics` variable

# Deploy Project

Run this commant on command prompt (terminal)

```shell
npm run deploy
```

After few minutes, the project is ready to use on https://saeid4042.github.io/trading-calculator

List of deployments are available [here](https://github.com/saeid4042/trading-calculator/deployments)