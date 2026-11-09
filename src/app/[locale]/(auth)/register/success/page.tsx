import { RegisterSuccess } from "@/features/auth/components/register-success";

type RegisterSuccessPageProps = {
    searchParams: Promise<{
        role?: string;
    }>;
};

export default async function RegisterSuccessPage({
    searchParams,
}: RegisterSuccessPageProps) {
    const { role } = await searchParams;

    const accountType =
        role === "supplier"
            ? "supplier"
            : "trader";

    return (
        <RegisterSuccess accountType={accountType} />
    );
}