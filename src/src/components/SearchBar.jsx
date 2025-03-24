import { Input } from "@/components/ui/input";

export default function SearchBar({ search, setSearch }) {
  return (
    <Input
      placeholder="Search for an image..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-1/3 p-3 text-black"
    />
  );
}
