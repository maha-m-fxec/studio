export type Role = 'student' | 'instructor' | 'admin';

export interface UserProfile {
  uid: string;
  email: string | null;
  name: string | null;
  photoURL: string | null;
  role: Role;
}
