import { handleSubmit } from "@/actions/serveraction";

type Product = {
  product: string;
  price: string;
  catigorey: string;
  id?: number;
};

export default async function Product() {
  const fetchProduct = await fetch(
    "https://6512b2e2b8c6ce52b3960859.mockapi.io/products/products",
    { cache: "no-cache", next: { tags: ["pro"] } }
  );
  const data: Product[] = await fetchProduct.json();

  return (
    <section>
      <h1 className="font-bold text-center text-4xl"> ADD Products </h1>
      <form
        action={handleSubmit}
        className="max-w-3xl mx-auto flex flex-col justify-center space-y-3"
      >
        <input
          name="product"
          type="text"
          className="border border-gray-300 p-2 rounded-md outline-none text-black text-center placeholder:text-center placeholder:text-gray-400"
          placeholder="Prodcut"
        />
        <input
          name="catigorey"
          type="text"
          className="border border-gray-300 p-2 rounded-md outline-none text-black text-center placeholder:text-center placeholder:text-gray-400"
          placeholder="Catigorey"
        />
        <input
          name="price"
          type="text"
          className="border border-gray-300 p-2 rounded-md outline-none text-black text-center placeholder:text-center placeholder:text-gray-400"
          placeholder="Price"
        />
        <button
          type="submit"
          className="bg-yellow-500 rounded-md text-lg py-3 hover:bg-opacity-90 duration-300"
        >
          ADD Prodcut
        </button>
      </form>

      <div className="grid grid-cols-3 gap-5 mt-10">
        {data.map((pro) => (
          <div
            key={pro.id}
            className="border p-3 rounded-md  shadow-inner shadow-yellow-400"
          >
            <h1>Prodcut : {pro.product}</h1>
            <h1>Catigorey : {pro.catigorey}</h1>
            <h1>Price : {pro.price}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}
