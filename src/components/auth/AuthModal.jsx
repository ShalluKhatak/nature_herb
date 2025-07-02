import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

const AuthModal = ({ open, onOpenChange, defaultTab = "login" }) => {
  const [activeTab, setActiveTab] = React.useState(defaultTab);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-green-800">
            Welcome to NatureHurb
          </DialogTitle>
        </DialogHeader>
        
        <Tabs 
          defaultValue={defaultTab} 
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="mt-6">
            <LoginForm onForgotPassword={() => setActiveTab("forgot-password")} />
          </TabsContent>
          
          <TabsContent value="signup" className="mt-6">
            <SignupForm onSuccess={() => setActiveTab("login")} />
          </TabsContent>
          
          <TabsContent value="forgot-password" className="mt-6">
            <ForgotPasswordForm onBackToLogin={() => setActiveTab("login")} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

export default AuthModal;