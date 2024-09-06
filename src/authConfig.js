// src/authConfig.js

export const msalConfig = {
    auth: {
      clientId: process.env.CLIENT_ID, // Replace with your app's Client ID
      authority: process.env.AUTHORITY_URL, // Replace with your Tenant ID
      redirectUri: process.env.REDIRECT_URL, // The redirect URI you set in the Azure portal
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  export const loginRequest = {
    scopes: ["User.Read"] // Add scopes you need for access tokens here
  };
  