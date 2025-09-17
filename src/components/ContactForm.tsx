"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import LoadingSpinner from "./LoadingSpinner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50),
  email: z
    .string()
    .min(2, { message: "Enter a valid email address" })
    .email({ message: "Enter a valid email address" }),
  message: z
    .string()
    .min(1, { message: "Message must not be empty" })
    .max(200, { message: "Message must not be longer than 200 characters" }),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      to_name: "Luke",
      message: values.message,
    };

    emailjs
      .send(SERVICE_ID!, TEMPLATE_ID!, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log(response);
        toast.success("Success! I'll get back to you as soon as possible!");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Oops! Something went wrong, please try again later.");
        setLoading(false);
      });

    form.reset();
  }

  return (
    <div className="w-full px-2 sm:px-20 rounded py-6 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="text-white">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-white">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="text-white">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="I'd love to hear from you!"
                    className="resize-none min-h-28"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full cursor-pointer"
          >
            {loading ? <LoadingSpinner /> : "Send"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
