# SimpleFit 
## <i>Workouts, they should be just that simple.</i>

## Topics
- [Project Setup and Installations](#project-setup-and-installations)
___
## Project Setup and Installations
### Clone Project and Open VSCode
1. Start by copying the clone link for this repository, which could be found at https://github.com/lndnbrr/simplefit-client :
![clone view](../simplefit-client/public/images/CLONEVIEW.png)
2. Navigate through your local machine, select the desired location for this cloned repo and perform a git clone command followed by the copied clone link.
3. Open VSCode through that cloned repository.

### Firebase and .env File Setup
1. On Firebase, create a project to set up Google authentication and set up the project as a web application in the project settings.
2. On VSCode, Rename the `.env.sample` file to `.env` file 
3. Replace contents in .env file by copying and pasing the following so that the `.env` file will have the proper configuration:
```
NEXT_PUBLIC_FIREBASE_API_KEY="SAMPLEAPIKEYHERE"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="SAMPLEAUTHDOMAINHERE"
NEXT_PUBLIC_FIREBASE_DATABASE_URL="http://localhost:8000"
NEXT_PUBLIC_FIREBASE_APP_ID="SAMPLEAPPIDHERE"
```
4. On Firebase, navigate through your project settings and locate the API Key, Auth Domain, and App ID. On VSCode, copy and paste those into their proper configs in the `.env` file. Your `.env` file is now ready.

### Node.JS Installations on VSCode
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short.
2. Next, run `npm run prepare`. This command sets up husky to track eslint errors on commit that will make your deploy fail on Netlify.
3. Run `npx eslint . --ext .js,.jsx`.
4. To start your application, run `npm run dev`.
5. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Setup and Installations

References:
- [Initial setup template for application structure](https://github.com/Repped-School/NextJS-with-Firebase-Auth-App-Router)
- [React Bootstrap for component structuring](https://react-bootstrap.netlify.app/)
