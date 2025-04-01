/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useLocation, useNavigate } from "react-router";
import FormInput from "@/components/Reuseable/Input";
import { useRegisterMutation } from "@/redux/services/auth/auth";


// ✅ Zod Schema ডিফাইন করা


const formSchema = z.object({
  name: z.string().min(4, "Name must be at least 4 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.string().min(3, "Role must be at least 3 characters"),
  phone: z.string(),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
});


 




const Register = () => {
  const location = useLocation(); // ✅ React Router থেকে location আনতে হবে
  const from = location.state?.pathname || "/";
  const navigate = useNavigate();
  console.log({ location });

  // ✅ ফর্ম সেটআপ করা
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "",
      phone: "",
      address: "",
      city: "",
    },
  });
  const [register] =
  useRegisterMutation();

 
  // ✅ onSubmit ফাংশন 
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("Submitting Data:", data);
    try {
      const response = await register(data).unwrap(); // Use .unwrap() to catch errors
      console.log("Server Response:", response);
      if(response){
    navigate('/login')
        
      }
      form.reset();
    } catch (error) {
      console.error("Registration Failed:", error);
    }
  };


  return (
    <div className="mx-auto max-w-lg space-y-5 ">
      <p className="text-3xl font-semibold border-b py-3">Registration</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">


        <FormInput name="name" label="Name" placeholder="Enter your name" />
       <FormInput  name="email" label="Email" placeholder="Enter your email" type="email" />
       <FormInput  name="password" label="Password" placeholder="Enter your password" type="password" />
       <FormInput name="role" label="Role" placeholder="Enter your role" />
       <FormInput name="phone" label="Phone" placeholder="+1234567890" type="tel" />
       <FormInput name="address" label="Address" placeholder="123 Main Street" />
       <FormInput name="city" label="City" placeholder="New York" />


          <Button type="submit">Sigin Up</Button>
        </form>
      </Form>
    </div>
  );
};

export default Register;
