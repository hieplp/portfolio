import { profile } from "@/content/profile";

export default function Owner() {
  return (
    <p>
      © <span data-owner>{profile.name}</span> / {profile.role} /{" "}
      {profile.location}
    </p>
  );
}