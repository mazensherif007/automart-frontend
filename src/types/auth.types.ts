export type UserRole = "TRADER" | "SUPPLIER" | "ADMIN" | "REVIEWER" | "STAFF";
export type CurrentUser = { id: string; name: string; email: string; role: UserRole };
