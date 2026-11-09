"use client";
import { Bell, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
export function DashboardHeader() {
 const { resolvedTheme, setTheme } = useTheme();
 return <header className="sticky top-0 z-20 flex h-16 items-center justify-end gap-3 border-b-2 bg-card px-4 lg:px-8">
  <button aria-label="Toggle theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="rounded-md border-2 p-2 automart-shadow-sm">{resolvedTheme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}</button>
  <button aria-label="Notifications" className="rounded-md border-2 p-2 automart-shadow-sm"><Bell size={18}/></button>
  <div className="grid size-9 place-items-center rounded-full bg-primary font-black text-black">MS</div>
 </header>;
}
