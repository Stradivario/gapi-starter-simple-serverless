# @Gapi Starter Serverless simple
##### @Graphql


This is basic example serverless project related with [GAPI](https://github.com/Stradivario/gapi)
to check advanced example project go to [advanced-example](https://github.com/Stradivario/gapi-starter-serverless-sequelize)



#### To start developing clone repository

```bash
git clone https://github.com/Stradivario/gapi-starter-serverless
```

#### Install @gapi/cli utility globally


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



