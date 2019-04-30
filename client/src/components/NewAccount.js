import React from "react";

const NewAccount = () => {
  return (
    <div className="new-account-block">
      <p>Want to build your own MYtinerary?</p>

      <a id="login" className="new-account-item" href="/login">
        Log In
      </a>
      <a id="signup" className="new-account-item" href="/signup">
        Create Account
      </a>
    </div>
  );
};

export default NewAccount;
