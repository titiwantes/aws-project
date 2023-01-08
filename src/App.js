import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Toaster} from 'react-hot-toast';

function App({ user, signOut }) {
  return (
    <Authenticator>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home signOut={signOut} user={user} />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </Authenticator>
  );
}

export default withAuthenticator(App, {
  includeGreetings: true,
});
