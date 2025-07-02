import * as React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const ForgotPasswordForm = ({ onBackToLogin, onSuccess }) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      // TODO: Implement forgot password logic
      console.log("Forgot password data:", data);
      setIsSubmitted(true);
      onSuccess?.();
    } catch (error) {
      console.error("Forgot password error:", error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="space-y-4 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900">Check your email</h3>
        <p className="text-sm text-gray-600">
          We've sent a password reset link to {form.watch("email")}. Please check your
          inbox and follow the instructions to reset your password.
        </p>
        <Button
          type="button"
          onClick={onBackToLogin}
          className="mt-4 w-full bg-green-600 hover:bg-green-700"
        >
          Back to login
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Reset your password</h3>
          <p className="text-sm text-gray-600">
            Enter your email address and we'll send you a link to reset your password.
          </p>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Send reset link
          </Button>
          
          <div className="text-center text-sm">
            <button
              type="button"
              onClick={onBackToLogin}
              className="font-medium text-green-600 hover:text-green-500"
            >
              Back to login
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default ForgotPasswordForm;
