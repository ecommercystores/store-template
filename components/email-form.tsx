"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const dataSchema = {
  email: z.string().min(1, "required"),
};

const formSchema = z.object(dataSchema);
export const EmailForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
    },
  });
  const [loading, setLoading] = useState(false);
  async function onSubmit(data: z.infer<typeof formSchema>) {
    setLoading(true);

    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter");
      setLoading(false);
    }, 2000);
  }

  return (
    <div className="flex flex-col items-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="group flex items-end gap-x-4 ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">
                    Subscribe to our newsletter for regular updates about
                    Offers, Coupons & more
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Your Email Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} className="max-w-sm">
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Subscribe"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
