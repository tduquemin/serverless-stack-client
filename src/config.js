const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-bucket-tduquemin",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://n1k1jv7sib.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_hqd9VzV0w",
      APP_CLIENT_ID: "7iuc2ohhmeo9md7dom08si6ubp",
      IDENTITY_POOL_ID: "us-east-1:3b15eaf8-60e9-401a-bbb3-3d76ec713c26",
    },
  };
  
  export default config;