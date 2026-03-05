type InputFieldProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  register: any;
  validation?: object;
};

export default function Input({
  label,
  type,
  name,
  placeholder,
  register,
  validation,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <label className="block font-bold text-sm lg:text-lg" htmlFor={name}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="border border-black/20 dark:border-white/20 rounded-md w-full p-2 text-xs lg:text-sm outline-none focus:border-teal-400
  focus:ring-1
  focus:ring-teal-400"
        type={type}
        {...register(name, validation)}
      />
    </div>
  );
}
