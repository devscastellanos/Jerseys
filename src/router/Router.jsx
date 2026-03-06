import { useRouter }  from "../hooks/useRouter";
import HomePage       from "../pages/HomePage";
import ProductPage    from "../pages/ProductPage";

export default function Router() {
  const { route, navigate } = useRouter();

  if (route.page === "product") {
    return <ProductPage slug={route.slug} navigate={navigate} />;
  }

  return <HomePage navigate={navigate} />;
}
