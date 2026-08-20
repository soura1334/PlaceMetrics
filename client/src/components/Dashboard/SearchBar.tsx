import { Search } from "lucide-react";

type SearchProps = {
    classStyle?: boolean;
}

export default function SearchBar({classStyle}: SearchProps) {
  return (
    <div className={`relative flex grow ${classStyle ? "max-w-xs" : ""} items-center text-sm gap-3 border rounded-md`}>
      <Search className="absolute left-2 w-4 h-4" />
      <input
        className="h-full w-full py-2 pl-8"
        placeholder="Search companies..."
      />
    </div>
  );
}
