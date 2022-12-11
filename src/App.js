import {Amplify} from "aws-amplify";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const awsconfig ={
  "aws_project_region": "eu-west-3",
  "aws_cognito_identity_pool_id": "eu-west-3:a1da4d4d-6986-43d9-89b8-7a3679174a18",
  "aws_cognito_region": "eu-west-3",
  "aws_user_pools_id": "eu-west-3_peC9NnSxf",
  "aws_user_pools_web_client_id": "5omk6namfjlnpuf6jvnuj76g1a",
  "oauth": {},
  "aws_cognito_username_attributes": [
      "EMAIL"
  ],
  "aws_cognito_social_providers": [],
  "aws_cognito_signup_attributes": [
      "EMAIL"
  ],
  "aws_cognito_mfa_configuration": "OFF",
  "aws_cognito_mfa_types": [
      "SMS"
  ],
  "aws_cognito_password_protection_settings": {
      "passwordPolicyMinLength": 8,
      "passwordPolicyCharacters": []
  },
  "aws_cognito_verification_mechanisms": [
      "EMAIL"
  ]
};
Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </Authenticator>

  );
}

export default withAuthenticator(App);
