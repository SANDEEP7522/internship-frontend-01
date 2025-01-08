import { useState } from "react";
import { SignupCard } from "./SignupCard";

export const SignupContainer = () => {
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const [validationError, setValidationError] = useState(null);

  const onSignupFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", signupForm);

    // Basic validation
    if (!signupForm.email || !signupForm.password || !signupForm.confirmPassword || !signupForm.username) {
      setValidationError({ message: "All fields are required" });
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      setValidationError({ message: "Passwords do not match" });
      return;
    }

    // Submit logic here
    console.log("Form is valid. Proceeding with signup...");
    setValidationError(null); // Clear error if form is valid
  };

  return (
    <SignupCard
      signupForm={signupForm}
      setSignupForm={setSignupForm}
      validationError={validationError}
      onSignupFormSubmit={onSignupFormSubmit}
    />
  );
};
