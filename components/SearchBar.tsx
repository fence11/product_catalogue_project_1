"use client";

import { useState } from "react";
import { Search } from "lucide-react";

// add actual functionality

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Query:", query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center w-full bg-card border border-border rounded-2xl shadow-sm px-4 py-2"
    >
      <Search className="w-5 h-5 text-muted-foreground mr-2" />
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 bg-transparent outline-none text-sm text-card-foreground placeholder:text-muted-foreground"
      />
    </form>
  );
}
