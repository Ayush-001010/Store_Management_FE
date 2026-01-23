export default interface UserDetailsType {
  ID?: number;
  userName?: string;
  userEmail?: string;
  userRole?: "user" | "shopuser" | "shopowner" | "admin";
  userProfileImage?: string;
  isActive?: boolean;
  createdAt?: Date;
  lastLogInTime?: Date | null;
  userAbout?: string | null;
  userGender?: "male" | "female" | "other";
  isSignIn: boolean;
}
