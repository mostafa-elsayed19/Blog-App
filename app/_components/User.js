import Image from "next/image";
import { useAuth } from "../_context/AuthContext";

function User() {
  const { user, logout } = useAuth();

  if (!user) return null;

  console.log(user);

  return (
    <div className="flex items-center gap-4">
      <Image
        className="rounded-full"
        src={user.photoURL}
        alt={user.displayName}
        width={32}
        height={32}
      />
      <div className="flex flex-col items-start">
        <span>{user.displayName}</span>
        <button
          onClick={logout}
          className="text-sm text-lightText hover:text-gray-900"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default User;
