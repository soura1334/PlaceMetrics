type HeadingProps = {
  text: string;
};

export default function TableHeading({ text }: HeadingProps) {
  return <th className="border-b px-4 py-3 text-left">{text}</th>;
}
