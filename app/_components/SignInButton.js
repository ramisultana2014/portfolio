import { signInAction } from "../_lib/actions";
import Button from "./Button";

function SignInButton() {
  return (
    <form action={signInAction} className=" text-balance">
      <Button />
    </form>
  );
}

export default SignInButton;
