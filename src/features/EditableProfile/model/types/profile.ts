export interface Profile {
    _id?: string;
    text?: string;
    email?: string,
    inst?: string;
    photo?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
