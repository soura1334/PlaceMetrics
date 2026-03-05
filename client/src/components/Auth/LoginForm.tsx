import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";
import Input from "./Input";
import Error from "./Error";

interface LoginInput {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<LoginInput>({ mode: "onChange" });

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className="flex flex-col text-black dark:text-white bg-gray-500/20 dark:bg-white/5 backdrop-blur-2xl w-fit lg:w-auto lg:max-w-md mx-auto border border-black/20 dark:border-white/20 rounded-xl p-5 lg:p-8 my-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        register={register}
        validation={{
          required: true,
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Enter a valid email",
          },
        }}
      />
      {errors.email && <Error message={errors.email.message} />}
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        register={register}
        validation={{
          required: true,
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        }}
      />
      {errors.password && <Error message={errors.password.message} />}
      <Link to="" className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">Forgot Password?</Link>
      <button
        disabled={!isValid}
        className="my-5 py-2 px-3 lg:px-4 w-fit lg:text-md text-sm self-center rounded-lg transition bg-teal-400 text-black hover:bg-teal-300 disabled:bg-black/15 dark:disabled:bg-white/15 disabled:text-black/50 dark:disabled:text-teal-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Sign In
      </button>
      <div className="border-t border-black/20 dark:border-white/20 text-xs lg:text-md text-center my-5 py-5">
        <span className="text-black/50 dark:text-white/50">Don't have an account? </span>
        <Link className="text-teal-400" to="/">Register here</Link>
      </div>
    </form>
  );
}
