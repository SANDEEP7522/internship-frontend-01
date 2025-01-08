import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export const SignupCard = () => {
  const navigate = useNavigate();

  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Sign up to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3">
          <Input
            required
            placeholder="Email"
            onChange={(e) =>
              setSignupForm({ ...signupForm, email: e.target.value })
            }
            value={signupForm.email}
            type="email"
            disabled={false}
          />

          {/* Password Input with Show/Hide Button */}
          <div className="relative">
            <Input
              required
              placeholder="Password"
              onChange={(e) =>
                setSignupForm({ ...signupForm, password: e.target.value })
              }
              value={signupForm.password}
              type={showPassword ? "text" : "password"}
              disabled={false}
            />
            <button
              type="button"
              onClick={togglePassword}
              aria-label="Toggle password visibility"
              className="absolute inset-y-0 right-3 pr-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          {/* Confirm Password Input with Show/Hide Button */}
          <div className="relative">
            <Input
              required
              placeholder="Confirm Password"
              onChange={(e) =>
                setSignupForm({
                  ...signupForm,
                  confirmPassword: e.target.value,
                })
              }
              value={signupForm.confirmPassword}
              type={showConfirmPassword ? "text" : "password"}
              disabled={false}
            />
            <button
              type="button"
              onClick={toggleConfirmPassword}
              aria-label="Toggle confirm password visibility"
              className="absolute inset-y-0 right-3 pr-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}
            </button>
          </div>

          <Input
            required
            placeholder="Username"
            onChange={(e) =>
              setSignupForm({ ...signupForm, username: e.target.value })
            }
            value={signupForm.username}
            type="text"
            disabled={false}
          />

          <Button disabled={false} size="lg" type="submit" className="w-full">
            Continue
          </Button>
        </form>

        <Separator className="my-4" />

        <p className="text-xm text-muted-foreground">
          Already have an account?{" "}
          <span
            className="text-sky-600 hover:underline cursor-pointer"
            onClick={() => navigate("/auth/signin")}
          >
            Sign In
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
