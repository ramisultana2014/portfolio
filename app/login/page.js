import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
};
export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-2xl font-semibold">Sign in By</h2>
      <SignInButton />
    </div>
  );
}
