export const queryKeys = {
 products: { all: ["products"] as const, list: (filters: object) => ["products", "list", filters] as const, detail: (id: string) => ["products", "detail", id] as const },
 orders: { all: ["orders"] as const, detail: (id: string) => ["orders", "detail", id] as const }
};
