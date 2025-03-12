"use client";

import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { joinWaitlist } from "../actions/waitlist";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface WaitlistFormProps {
  onSuccess: (count: number) => void;
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [state, formAction] = useFormState(joinWaitlist, null);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (state?.success || state?.success === false) {
      setIsLoading(false);
    }
  }, [state]);

  useEffect(() => {
    if (state?.success) {
      toast.success("You have been added to the waitlist!", {});
      if (state.count) {
        onSuccess(state.count);
      }
      setEmail("");
    } else if (state?.success === false) {
      toast.error(state.message);
    }
  }, [state, toast, onSuccess]);

  return (
    <motion.form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        formAction(formData);
      }}
      className="w-full space-y-4 mb-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 overflow-hidden rounded-xl bg-white/5 p-1 ring-1 ring-white/10 focus-within:ring-2 focus-within:ring-blue-500">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="email-error"
            className="w-full border-0 bg-transparent text-white placeholder:text-gray-400 focus:ring-0 focus:border-transparent focus-visible:border-transparent focus:outline-none active:ring-0 active:outline-none focus-visible:ring-0 focus-visible:outline-none active:border-transparent focus-visible:ring-offset-0"
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium px-6 py-6 rounded-xl transition-all duration-300 ease-in-out focus:outline-none min-w-[180px]"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span>Get Early Access</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          )}
        </Button>
      </div>
      <p className="text-gray-400 text-xs text-center sm:text-left">
        Join the HireLens AI waitlist for exclusive early access. No credit card
        required.
      </p>
    </motion.form>
  );
}
