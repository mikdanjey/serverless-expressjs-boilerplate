## serverless-expressjs-boilerplate

### Usage
```GET https://<endpoint>/api/v1/verify?token=<token>```
Pass the API gateway hosted endpoint '/api/v1/verify' one query parameter named 'token'.  


* npm install -g serverless
* serverless config credentials --provider aws --key <key> --secret <secret-key>
* serverless create -t aws-nodejs
* serverless deploy


* serverless logs -f hello -t
* serverless invoke local -f hello
