import {Amplify} from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import Home from "./pages/Home";
Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      <Home />
    </Authenticator>

  );
}

export default withAuthenticator(App);
