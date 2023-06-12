export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const query = new URLSearchParams();
  query.set("", params.productId);

  return (
    <div className="flex min-h-screen flex-col p-8">
      <p>Hola soy el producto: {query}</p>
    </div>
  );
}
