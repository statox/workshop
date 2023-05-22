# P5 + svelte

Just a boilerplate.

- `npm install`
- `npm run dev`

For Github pages publication:

- Update the `REPO_NAME` variable in [svelte.config.js](./svelte.config.js)
- Generate a [fine-grained token](https://github.com/settings/tokens?type=beta)
    - Expiration: Be smart
    - Repository access: Only selected repositories
    - Repository permissions:
        - Read access to metadata
        - Read and Write access to actions, code, codespaces, commit statuses, deployments and pages 
- Add a new access token in the repository secrets
    - name `ACCESS_TOKEN`
