export interface ExceptionResponse {
    message: string;
    status: number;
    timestamp: string; // LocalDateTime será recebido como string (ISO format)
}
