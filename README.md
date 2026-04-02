# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Deployment

## Setting up Deployment Secrets

1. Ensure the required Google Cloud APIs are enabled:
    - Cloud Run  (run.googleapis.com)
    - Artifact Registry (artifactregistry.googleapis.com)
2. Follow [this guide](https://github.com/google-github-actions/auth#setting-up-workload-identity-federation) to create and configure Workload Identity Federation for GitHub 
3. Ensure the required IAM permissions are granted (NOTE: You should always follow the principle of least privilege when assigning IAM roles)
    - Cloud Run
        - roles/run.admin
        - roles/iam.serviceAccountUser (to act as the Cloud Run runtime service account)
    - Artifact Registry
        - roles/artifactregistry.admin (project or repository level)
4. Create GitHub secrets for `WIF_PROVIDER` and `WIF_SERVICE_ACCOUNT` (in `Setting -> Secrets and Variables -> Actions` of your Github Project)
5. Change the values for the `GAR_LOCATION`, `SERVICE` and `REGION` environment variables in the `.github/workflows/google-cloudrun-docker.yml` file

## Setting up DNS Records

In order to setup the DNS records for this project I followed [this](https://docs.cloud.google.com/run/docs/mapping-custom-domains#map) guide in google's docs.

Make sure to setup both a `www.` mapping as well as a `base` mapping so people can search either `example.com` or `www.example.com`