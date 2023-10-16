# Setup Steps

Refer: `https://blog.logrocket.com/how-to-build-component-library-react-typescript/`

# Publish Package

1. Generate auth token in the Github

- User -> Setting -> Developer settings -> Personal access tokens -> Tokens (classic) -> Generate new token
- At the New personal access token, select write:packages
- After generate, copy the token

2. Setup configuration

Update global .nrpmrc

```
  //npm.pkg.github.com/:_authToken=<token>
```

Update local .npmrc

```
  @NAMESPACE:registry=https://npm.pkg.github.com
```

Update package.json

```
  "name": "@NAMESPACE/<repo-name>",
  "publishConfig": {
    "NAMESPACE:registry": "https://npm.pkg.github.com"
  },
```

`Ex: NAMESPACE = anhthi-deep-dive`

3. Login to Github via CLI

```
  npm login --scope=@NAMESPACE --auth-type=legacy --registry=https://npm.pkg.github.com
```

4. Publish the package

```
  npm publish
```

Refer: `https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry`
