export interface AuthenticationTokenResponse {
    success: boolean;
    expires_at: string
    request_token: string;
}