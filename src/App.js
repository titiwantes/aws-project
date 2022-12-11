import {Amplify} from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      <div className="App">
        <h2>APP</h2>
      </div>
    </Authenticator>

  );
}

export default withAuthenticator(App);
