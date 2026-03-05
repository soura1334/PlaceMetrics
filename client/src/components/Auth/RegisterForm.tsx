import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";
import Input from "./Input";
import Error from "./Error";

interface RegisterInput {
  fullName: string;
  collegeName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<RegisterInput>({ mode: "onChange" });

  const password = watch("password");

  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    const {confirmPassword, ...submitData} = data

    console.log(submitData);
    reset();  
};

  return (
    <form
      className="flex flex-col text-black dark:text-white bg-gray-500/20 dark:bg-white/5 backdrop-blur-2xl w-fit lg:w-auto lg:max-w-md mx-auto border border-black/20 dark:border-white/20 rounded-xl p-5 lg:p-8 my-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Full Name"
        type="text"
        name="fullName"
        placeholder="Enter your name"
        register={register}
        validation={{
          required: true,
        }}
      />
      <Input
        label="College Name"
        type="text"
        name="collegeName"
        placeholder="Enter your college name"
        register={register}
        validation={{
          required: true,
        }}
      />
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
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        register={register}
        validation={{
          required: "Please confirm your password",
          validate: (value: string) =>
            value === password || "Passwords do not match",
        }}
      />
      {errors.confirmPassword && (
        <Error message={errors.confirmPassword.message} />
      )}
      <button
        disabled={!isValid}
        className="my-5 py-2 px-3 lg:px-4 w-fit lg:text-md text-sm self-center rounded-lg transition bg-teal-400 text-black hover:bg-teal-300 disabled:bg-black/15 dark:disabled:bg-white/15 disabled:text-black/50 dark:disabled:text-teal-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Create Account
      </button>
      <div className="border-t border-black/20 dark:border-white/20 text-xs lg:text-sm text-center my-5 py-5">
        <span className="text-black/50 dark:text-white/50">
          Already have an account?{" "}
        </span>
        <Link className="text-teal-400" to="/login">
          Sign In
        </Link>
      </div>
    </form>
  );
}
