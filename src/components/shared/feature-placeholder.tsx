import { Construction } from "lucide-react";
export function FeaturePlaceholder({ title, role }: { title: string; role: string }) {
    return <section><div className="mb-8"><p className="text-sm font-bold uppercase text-foreground/60">{role} portal</p><h1 className="text-4xl font-black">{title}</h1></div>
        <div className="grid min-h-80 place-items-center rounded-lg border-2 bg-card p-8 text-center automart-shadow"><div><Construction className="mx-auto mb-4" size={48} /><h2 className="text-xl font-black">Ready for API integration</h2><p className="mt-2 max-w-md text-foreground/60">This executable route is prepared. Add the feature table, form and API hooks inside src/features.</p></div></div></section>;
}
