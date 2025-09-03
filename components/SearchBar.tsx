"use client";

import { Fragment, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Combobox, Transition, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import type { SearchProductProps, Props } from "../types";

export default function SearchBar({ items, onFilter }: Props) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<SearchProductProps | null>(null);

  // autocomplete suggestions (max 5)
  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return items.slice(0, 5);
    return items
      .filter((i) => i.title.toLowerCase().includes(value))
      .slice(0, 5);
  }, [items, query]);

  // if value(query) exists => display all items(max 30) that include query; else display all items
  const handleChange = (val: string) => {
    setQuery(val);
    const value = val.trim().toLowerCase();
    const next = value
      ? items.filter((i) => i.title.toLowerCase().includes(value)).slice(0, 30)
      : items;
    onFilter(next);
  };

  return (
    <Combobox value={selected ?? undefined} onChange={setSelected}>
      <div className="relative">
        <div className="flex items-center w-full bg-card border border-border rounded-2xl shadow-sm px-4 py-2">
          <Search className="w-5 h-5 text-muted-foreground mr-2" />
          <ComboboxInput
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search products..."
            className="flex-1 bg-transparent outline-none text-sm text-card-foreground placeholder:text-muted-foreground"
          />
        </div>


        {filtered.length > 0 && (
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ComboboxOptions className="absolute z-10 mt-2 max-h-72 w-full overflow-auto rounded-xl border border-border bg-popover p-1 shadow-lg focus:outline-none">
              {filtered.map((item) => (
                <ComboboxOption
                  key={item.id}
                  value={item}
                  className={({ active }) =>
                    `cursor-pointer select-none rounded-lg px-3 py-2 text-sm ${active ? "bg-accent text-accent-foreground" : "text-popover-foreground"
                    }`
                  }
                  onClick={() => {
                    setQuery(item.title);
                    onFilter([item]);
                  }}
                >
                  {item.title}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        )}

      </div>
    </Combobox>
  );
}
