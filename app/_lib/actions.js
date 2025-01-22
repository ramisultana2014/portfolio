"use server";

import { signIn, signOut } from "./auth";

// this signIn what we export from auth.js inside handlers
export async function signInAction() {
  await signIn("google", { redirectTo: "/homePage" });
}
//redirectTo when success it will take us to protect route which is /account
// here we just write google because we have just one provider, if we have many like facebook , github we loop over them
// http://localhost:3000/api/auth/providers this will help us knowing our providers

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
