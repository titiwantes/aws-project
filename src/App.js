import {Amplify} from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
