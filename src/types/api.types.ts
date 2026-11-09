export type PaginatedResponse<T> = { data: T[]; pagination: { page: number; pageSize: number; totalItems: number; totalPages: number } };
export type ApiResponse<T> = { success: boolean; message: string; data: T };
