var AWS = require('aws-sdk');
//create a object which executes APIGateway.
const apigClientFactory = require('aws-api-gateway-client').default;
//get credentials of AWS sercvices
const apiExe = AWS.config.credentials.get(function (err) {
    if (!err) {
        //get required parameters from credentials and set required configurations
        const apigClient = apigClientFactory.newClient({
            accessKey: AWS.config.credentials.accessKeyId,
            secretKey: AWS.config.credentials.secretAccessKey,
            sessionToken: AWS.config.credentials.sessionToken,
            region: 'us-west-2',
            invokeUrl: 'https://mhwanvjeyl.execute-api.us-west-2.amazonaws.com/prod'
        });
        const params = {
        };
        //set HTTP configurations
        const pathTemplate = '/list';
        const method = 'GET';
        const additionalParams = {
            queryParams: {
            }
        };

        const body = {};
        
        apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
            .then(function (result) {
                console.log(result.data);
            })
            .catch(function (result) {
                console.log(result);
            });
    } else {
        console.log(err);
    }
});

module.exports = apiExe;