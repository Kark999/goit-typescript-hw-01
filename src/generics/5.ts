export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type Description = Record<UserRole, string>;

export const RoleDescription: Description = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
