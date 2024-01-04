import NormalCounter from "./components/NormalCounter";
import OptimisticCounter from "./components/OptimisticCounter";

export default async function page() {
  const fetchLikes = await fetch("http://localhost:3000/api/likes", {
    cache: "no-cache",
    next: { tags: ["like"] },
  });
  const { likes } = await fetchLikes.json();

  return (
    <div>
      <NormalCounter likes={likes} />
      <OptimisticCounter likes={likes}/>
    </div>
  );
}
