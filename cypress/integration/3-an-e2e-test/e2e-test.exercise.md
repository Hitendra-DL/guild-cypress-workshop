# E2E test

You'll put everything you've learnt together to test a full end-to-end flow: logging in.

This is an example of what e2e tests are made for. You'll make our test add credentials to the `username` and `password` fields, and click submit.

You'll then make an assertion to determine whether the correcty behaviour has occurred.

You won't need to learn any new Cypress tools to complete this exercise

## Exercise

Using the pre-defined `e2e-test.spec.ts` file

1. Sign in with Valid credentials and check for success
2. Attempt to Sign in with invalid credentials and check you have not been signed in

### Bonus

You'll need to learn about the [intercept](https://docs.cypress.io/api/commands/intercept) command to achieve the bonus tasks.
The [network_requests](../examples/network_requests.spec.js) example shows this in action.

1. Intercept the network request to ensure that we're sending the correct data
2. Intercept the network response to ensure that we're getting the correct data back from the server
