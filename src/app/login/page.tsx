'use client'

import { client } from "@/lib/client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

export interface FormValueInterface {
  email: string
  password: string
  role: string
}

export default function LoginPage() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValueInterface>()
  const [error, setError] = useState<string | null>(null)
  const submitHandler: SubmitHandler<FormValueInterface> = async (formData) => {
    const { email, password } = formData
    try {

      const res = await client.post('login', { email, password })
      if (res.status === 200) {
        alert("Login successful")
        localStorage.setItem("loggedin", "true")
        router.push('/')
        reset()
      }

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error("Axios Error:", err.response?.data); // Log error response
        setError(err.response?.data?.message || "Login failed");
        alert("User not exist");
      } else if (err instanceof Error) {
        console.error("Other Error:", err.message);
        setError(err.message);
      } else {
        setError("An unknown error occurred");
        console.error("Other Error:", error);

      }
    }


  }
  return (
    <main className='mt-[10%] p-16 text-white border border-amber-700 shadow-2xl rounded-xl w-1/3 justify-self-center items-center'>
      <form onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-8"
      >
        <h1 className="text-center text-xl font-semibold space-y-4">Login</h1>
        <div>
          <input type="email"
            {...register("email", { required: "Email is required" })}
            className="appearance-none outline-none w-full border border-blue-400 p-4 rounded-xl"
            placeholder="Enter your email address"
          />
          {errors.email && <p className="text-xs text-red-600 px-4 py-2">{errors.email.message}</p>}
        </div>
        <div>
          <input type="password"
            {...register("password", { required: "Password is required" })}
            className="appearance-none outline-none w-full border border-blue-400 p-4 rounded-xl"
            placeholder="Enter your password"
          />
          {errors.email && <p className="text-xs text-red-600 px-4 py-2">{errors.email.message}</p>}
        </div>
        <button type="submit" className="cursor-pointer bg-amber-100 rounded-xl py-3 mx-20 font-semibold text-blue-400">Login</button>
      </form>
    </main>
  )
}
