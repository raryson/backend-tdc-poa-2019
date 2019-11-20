const { Verifier } = require('@pact-foundation/pact');

let opts = {
    providerBaseUrl: 'http://localhost:3000',
    pactBrokerUrl: 'https://raryson.pact.dius.com.au',
    pactBrokerUsername: process.env.PACT_USERNAME,
    pactBrokerPassword: process.env.PACT_PASSWORD,
    provider: 'tdc-provider',
    publishVerificationResult: true,
    providerVersion: "1",
    providerStatesSetupUrl: 'http://localhost:3000/provider-state'
};

new Verifier().verifyProvider(opts).then(function () {
    console.log("Pacts successfully verified!");
});