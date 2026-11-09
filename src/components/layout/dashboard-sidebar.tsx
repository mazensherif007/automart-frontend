"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, BarChart3, Settings, FileSpreadsheet, ShieldCheck } from "lucide-react";

const menus = {
 trader: [["Dashboard","dashboard",LayoutDashboard],["Products","products",Package],["Inventory","inventory",FileSpreadsheet],["Orders","orders",ShoppingCart],["Suppliers","suppliers",Users],["Reports","reports",BarChart3],["Settings","settings",Settings]],
 supplier: [["Dashboard","dashboard",LayoutDashboard],["Products","products",Package],["Orders","orders",ShoppingCart],["Imports","imports",FileSpreadsheet],["Reports","reports",BarChart3],["Settings","settings",Settings]],
 admin: [["Dashboard","dashboard",LayoutDashboard],["Traders","traders",Users],["Suppliers","suppliers",Users],["Verification","verification",ShieldCheck],["Products","products",Package],["Reports","reports",BarChart3],["Settings","settings",Settings]]
} as const;

export function DashboardSidebar() {
 const pathname = usePathname();
 const parts = pathname.split("/").filter(Boolean);
 const locale = parts[0] || "en";
 const role = (parts[1] || "trader") as keyof typeof menus;
 const items = menus[role] || menus.trader;
 return <aside className="fixed inset-y-0 start-0 z-30 hidden w-72 border-e-2 bg-secondary text-white lg:block">
   <div className="border-b border-white/20 p-6"><div className="text-2xl font-black tracking-tight">AUTOMART</div><div className="text-xs text-white/60">{role.toUpperCase()} PORTAL</div></div>
   <nav className="space-y-2 p-4">{items.map(([label,href,Icon]) => {
    const url=`/${locale}/${role}/${href}`; const active=pathname===url;
    return <Link key={href} href={url} className={`flex items-center gap-3 rounded-md border-2 px-3 py-3 font-semibold ${active ? "border-black bg-primary text-black automart-shadow-sm" : "border-transparent hover:bg-white/10"}`}><Icon size={19}/>{label}</Link>
   })}</nav>
 </aside>;
}
