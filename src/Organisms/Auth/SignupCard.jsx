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

export const SignupCard = () => {
  const [signupForm, setSignupForm] = useState({
    email:"",
    password:"",
    confirmPassword:"",
    username:"",
  });

  return (
    <Card className="h-full w-full ">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Sign up to access your account </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3" >
          <Input
            required
            placeholder='Email'
            onChange={(e) =>setSignupForm({ ...signupForm, email: e.target.value })}
            value={signupForm.email}
            type='email'
            disabled={false}
          />
           <Input
            required
            placeholder='Password'
            onChange={(e) =>setSignupForm({ ...signupForm, password: e.target.value })}
            value={signupForm.password}
            type='password'
            disabled={false}
          /> 
          <Input
          required
          placeholder='Confirm Password'
          onChange={(e) =>setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
          value={signupForm.confirmPassword}
          type='password'
          disabled={false}
         />
          <Input
          required
          placeholder='Username'
          onChange={(e) =>setSignupForm({ ...signupForm, username: e.target.value })}
          value={signupForm.username}
          type='text'
          disabled={false}
         />
         
         <Button
         disabled={false}
         size='lg'
         type= 'submit'
         className= 'w-full'
         >Continue</Button>
        </form>
        
        <Separator className='my-4' />

        <p className="text-xm text-muted-foreground " >
          Alerady have an account? <span
          className="underline underline-offset-4 hover:text-primary"
          >Sign In</span>
        </p>

      </CardContent>
    </Card>
  );
};
