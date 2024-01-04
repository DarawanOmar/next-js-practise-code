import type { Metadata } from "next";
import { getAllUsers, getAllUsers2 } from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const usersData2: Promise<User2[]> = getAllUsers2();

  const users = await usersData;
  const users2 = await usersData2;
  console.log(users2);

  const content = (
    <section>
      <h2>
        <Link href="/" className="underline">
          Back to Home
        </Link>
      </h2>
      <br />
      <div className="grid grid-cols-5 gap-3">
        {users2.map((user) => {
          return (
            <>
              <p key={user.id} className="  bg-zinc-800  rounded-md p-2 ">
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </p>
              <br />
            </>
          );
        })}
      </div>
    </section>
  );

  return content;
}
