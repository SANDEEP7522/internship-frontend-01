import { useState, useEffect } from "react";
import { SignupCard } from "./SignupCard";
import { useSignup } from "@/hooks/auth/UseSignup";
import { useNavigate } from "react-router-dom";

export const SignupContainer = () => {

 const navigate = useNavigate();

  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const [validationError, setValidationError] = useState(null);

  const { isPending, isSuccess, error, signupMutation } = useSignup();

  const onSignupFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", signupForm);

    // Basic validation
    if (
      !signupForm.email ||
      !signupForm.password ||
      !signupForm.confirmPassword ||
      !signupForm.username
    ) {
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
   
     // call signup mutation here (help to create new user)
     await signupMutation({
      email: signupForm.email,
      password: signupForm.password,
      username: signupForm.username,
    });


  };

  useEffect(() => {
    if (isSuccess) {
        setTimeout(() => {
          navigate("/auth/signin");
        }, 3000);
    }
  }, [isSuccess, navigate]);

  return (
    <SignupCard
      error={error}
      isPending={isPending}
      isSuccess={isSuccess}
      signupForm={signupForm}
      setSignupForm={setSignupForm}
      validationError={validationError}
      onSignupFormSubmit={onSignupFormSubmit}
    />
  );
};
