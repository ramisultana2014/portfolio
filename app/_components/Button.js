"use client";
import { useFormStatus } from "react-dom";
function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className="flex items-center gap-2 text-lg border border-primary-300 px-2 py-4 font-medium rounded-md transition-all disabled:cursor-not-allowed disabled:bg-blue-500 disabled:text-white"
      disabled={pending}
    >
      <img
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        height="24"
        width="24"
      />
      <span>{pending ? "One Moment" : "Google Account"}</span>
    </button>
  );
}

export default Button;
