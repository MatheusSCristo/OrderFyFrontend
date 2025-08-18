import type { ExceptionResponse } from "../types/error";

export function getExceptionMessageFromError(e: unknown): string {
    const err = e as { response?: { data?: ExceptionResponse } };
    const exception: ExceptionResponse | undefined = err?.response?.data;
    return exception?.message || "Erro ao criar conta. Tente novamente mais tarde.";
}
