import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";

export const SigninCard = () => {

  const navigate = useNavigate();
     
  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });

  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign in to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3">
          {/* Email Input */}
          <Input
            required
            placeholder="Email"
            disabled={false}
            value={signinForm.email}
            type="email"
            onChange={(e) => setSigninForm({ ...signinForm, email: e.target.value })}
          />

          {/* Password Input with Show/Hide Button */}
          <div className="relative">
            <Input
              required
              placeholder="Password"
              disabled={false}
              value={signinForm.password}
              type={showPassword ? "text" : "password"} // Toggle between text and password
              onChange={(e) => setSigninForm({ ...signinForm, password: e.target.value })}
            />
            {/* button for hide and show password */}
            <button
              type="button"
              onClick={togglePassword}
              aria-label="Toggle password visibility"
              className="absolute inset-y-0 right-3 pr-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          <Button className="w-full" disabled={false} size="lg" type="submit">
            Continue
          </Button>
        </form>

        <Separator className="my-4" />

        <p className="text-center text-xm text-muted-foreground">
          Don't have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline"
          onClick={() => navigate("/auth/signup")}
          >Sign up</span>
        </p>
      </CardContent>
    </Card>
  );
};
