export interface UserProfileData {
    fullName: string;
    rank: string;
    personalId: string;
    role: string;
    unit: string;
    subUnit: string;
    email: string;
    phone: string;
    voip: string;
    status: 'online' | 'offline';
    avatarUrl?: string;
}
