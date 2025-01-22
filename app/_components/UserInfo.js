import { signOutAction } from "../_lib/actions";
import { auth } from "../_lib/auth";

export default async function UserInfo() {
  const session = await auth();
  //console.log(typeof session.user.image);
  return (
    <li className="flex items-center gap-1 relative cursor-pointer group ">
      <img
        src={session?.user?.image}
        alt="picture for user"
        referrerPolicy="no-reffer"
        className="object-cover rounded-full w-6 aspect-square"
        //placeholder="blur"
        //quality={70}
      />
      <span>{session?.user?.name}</span>
      <form
        action={signOutAction}
        className="hidden absolute rounded px-2 py-1 text-black top-6 left-1/4 group-hover:block bg-accent-50 hover:text-blue-500"
      >
        <button>sign out!</button>
      </form>
    </li>
  );
}
