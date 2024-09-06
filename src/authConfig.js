// src/authConfig.js

export const msalConfig = {
    auth: {
      clientId: "c295c344-53f1-46eb-b822-5668017f77ab", // Replace with your app's Client ID
      authority: "https://login.microsoftonline.com/07d01194-b034-4ebf-b001-b65182a8fa39", // Replace with your Tenant ID
      redirectUri: "https://localhost:3000", // The redirect URI you set in the Azure portal
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  export const loginRequest = {
    scopes: ["User.Read"] // Add scopes you need for access tokens here
  };
  