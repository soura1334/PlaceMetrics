type Props = {
  message: string | undefined;
};

export default function Error({ message }: Props) {
  return <p className="mb-4 text-xs lg:text-md text-red-400/80">{message}</p>;
}
