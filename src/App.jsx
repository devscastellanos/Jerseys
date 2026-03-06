import Navbar        from "./components/layout/Navbar";
import Router        from "./router/Router";
import { globalCss } from "./styles/globals";
import { useRouter } from "./hooks/useRouter";

export default function App() {
  const { navigate } = useRouter();

  return (
    <>
      <style>{globalCss}</style>
      <Navbar navigate={navigate} />
      <Router />
    </>
  );
}
