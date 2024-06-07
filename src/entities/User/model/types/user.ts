export interface User {
    id: string;
    username: string;
}

export interface AuthResponse {
    accessToken: string,
    refreshToken: string,
    user: User
}

export interface UserSchema {
    isLoading?: boolean;
    error?: string;
    authData?: User;
    _inited: boolean;
}