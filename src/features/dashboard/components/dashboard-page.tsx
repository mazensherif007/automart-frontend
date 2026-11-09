import { DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react";
const data = [
 { label: "Revenue", value: "EGP 128,450", delta: "+12.4%", icon: DollarSign },
 { label: "Orders", value: "284", delta: "+8.2%", icon: ShoppingCart },
 { label: "Products", value: "1,248", delta: "+2.1%", icon: Package },
 { label: "Conversion", value: "18.6%", delta: "+4.7%", icon: TrendingUp }
];
export function DashboardPage({ role }: { role: string }) {
 return <section><div className="mb-8"><p className="text-sm font-bold uppercase text-foreground/60">{role} portal</p><h1 className="text-4xl font-black">Dashboard overview</h1><p className="mt-2 text-foreground/60">Monitor operations, inventory and commercial performance.</p></div>
 <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{data.map(({label,value,delta,icon:Icon}) => <article key={label} className="rounded-lg border-2 bg-card p-5 automart-shadow"><div className="flex items-start justify-between"><div><p className="font-bold text-foreground/60">{label}</p><p className="mt-3 text-3xl font-black">{value}</p></div><div className="rounded-md border-2 bg-primary p-2 text-black"><Icon size={20}/></div></div><p className="mt-4 text-sm font-bold text-green-700">{delta} this month</p></article>)}</div>
 <div className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]"><div className="min-h-80 rounded-lg border-2 bg-card p-6 automart-shadow"><h2 className="text-xl font-black">Performance</h2><div className="mt-8 flex h-52 items-end gap-4">{[45,70,52,86,66,92,78].map((h,i)=><div key={i} className="flex-1 rounded-t bg-secondary dark:bg-primary" style={{height:`${h}%`}} />)}</div></div><div className="rounded-lg border-2 bg-card p-6 automart-shadow"><h2 className="text-xl font-black">Quick actions</h2><div className="mt-4 grid gap-3">{["Add product","Review orders","Create report","Manage team"].map(x=><button key={x} className="rounded-md border-2 bg-background p-3 text-start font-bold hover:bg-primary hover:text-black">{x}</button>)}</div></div></div></section>;
}
