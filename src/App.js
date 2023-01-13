import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Home from "./src/pages/Home";
import { Toaster } from "react-hot-toast";

function App({ user, signOut }) {
  return (
    <Authenticator>
      <Toaster />
      <Home user={user} signOut={signOut} />
    </Authenticator>
  );
}

export default withAuthenticator(App, {
  includeGreetings: true,
});
