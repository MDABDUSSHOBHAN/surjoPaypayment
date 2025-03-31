import { IProduct, ProductCard } from "./components/Shared/ProductCard";
import Skeleton from "./components/Skeleton/Skeleton";
import { useGetProductsQuery } from "./redux/services/product/product";

function App() {
  const { isLoading, data } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const products: IProduct[] = data?.data || [];
  return (
    <div className="mx-auto">
      <div className="text-center py-40 space-y-10  inset-0 bg-cover bg-center text-white bg-[url('https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] grayscale-[30%]">
        <h1 className="text-9xl font-bold drop-shadow-lg shadow-black">
          <span className="text-lime-500">Shurjo</span> Pay
        </h1>
        <h3 className="text-6xl font-bold  drop-shadow-md">
          Payment Method Integration
        </h3>
      </div>

      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="mx-auto px-4 py-16">
          <h2 className="sr-only">Products</h2>
          <div className="columns-1 md:columns-2 gap-5 divide-x">
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
