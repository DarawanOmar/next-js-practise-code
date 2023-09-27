import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-grad">Hi Home Page</h1> <br />
      <Link href="/users">Users</Link>
    </>
  );
}
