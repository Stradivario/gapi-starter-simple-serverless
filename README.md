# @Gapi Starter Serverless simple
##### @Graphql


This is basic example serverless project related with [GAPI](https://github.com/Stradivario/gapi)
to check advanced example project go to [advanced-example](https://github.com/Stradivario/gapi-starter-serverless-sequelize)



#### To start developing clone repository

```bash
git clone https://github.com/Stradivario/gapi-starter-serverless
```

#### Install @gapi/cli utility and serverless globally


```bash
npm i -g @gapi/cli serverless
```


#### Set AWS key and secret

```bash
serverless config credentials --provider aws --key AKIAIK7OLXM4EHJSSXCA --secret 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
```

To obtain key and secret https://console.aws.amazon.com/iam/home?#/security_credentials

#### Start the application
```bash
gapi start
```


#### Build application

```bash
gapi build
```

Application will be builded inside `dist` folder


#### Build and Deploy to AWS Serverless

Staging

```bash
gapi build && serverless deploy
```

Production

```bash
gapi build && serverless deploy --stage prod
```



To check current application inside of working lambda 

#### Staging [Click here](https://cbjrjdznf2.execute-api.us-east-2.amazonaws.com/staging/graphql?query=query%20%7B%0A%20%20findApp(id%3A%201)%20%7B%0A%20%20%20%20id%0A%20%20%7D%0A%7D&fbclid=IwAR2I6VDE2xqoe-AfonW55UbfpW19XCwVTWjsdYcCVXogXfzN94W4LfSNB6g)

#### Prod [Click here](https://luhf6hv7og.execute-api.us-east-2.amazonaws.com/prod/graphql?query=query%20%7B%0A%20%20findApp(id%3A%201)%20%7B%0A%20%20%20%20id%0A%20%20%7D%0A%7D&fbclid=IwAR2I6VDE2xqoe-AfonW55UbfpW19XCwVTWjsdYcCVXogXfzN94W4LfSNB6g)

