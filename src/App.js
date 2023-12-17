import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Proekty from "./pages/Proekty";
import Partneram from "./pages/Partneram";
import Blog from "./pages/Blog";
import Layout from "./components/Layout";
import Mramor from "./pages/Mramor";
import {
  Podokonniki,
  Design,
  KaminyPortaly,
  LestnicyStupeni,
  OblicovkaFasadov,
  PlitkaBruschatka,
  StolyStoleshnicy,
} from "./pages/IzdeliyaIzMramora";
import IzdeliyaIzMramora from "./pages/IzdeliyaIzMramora";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
	const router = createBrowserRouter([
		// {
		//   path: "/test",
		//   element: <Layout />,
		//   children: [
		//
		//         {
		//           path: "/izdeliya-iz-mramora/tela-vrashcheniya",
		//           element: <TelaVrashcheniya />,
		//         },
		//         {
		//           path: "/izdeliya-iz-mramora/design",
		//           element: <Design />,
		//         },
		//         {
		//           path: "/izdeliya-iz-mramora/kaminy-portaly",
		//           element: <KaminyPortaly />,
		//         },
		//         {
		//           path: "/izdeliya-iz-mramora/lestnicy-stupeni",
		//           element: <LestnicyStupeni />,
		//         },
		//         {
		//           path: "/izdeliya-iz-mramora/oblicovka-fasadov",
		//           element: <OblicovkaFasadov />,
		//         },
		//         {
		//           path: "/izdeliya-iz-mramora/plitka-bruschatka",
		//           element: <PlitkaBruschatka />,
		//         },
		//         {
		//           path: "/izdeliya-iz-mramora/stoly-stoleshnicy",
		//           element: <StolyStoleshnicy />,
		//         }
		//   ]
		// },
		{
		path: "/",
		element: <Home />,
		},
		{
		path: "/contacts",
		element: <Contacts />,
		},
		{
		path: "/about",
		element: <About />,
		},
		{
		path: "/proekty",
		element: <Proekty />,
		},
		{
		path: "/partneram",
		element: <Partneram />,
		},
		// {
		//   path: "/blog",
		//   element: <Blog />,
		// },
		{
		path: "/mramor",
		element: <Mramor />,
		},
		{
		path: "/izdeliya-iz-mramora",
		element: <IzdeliyaIzMramora />,
		},
		{
		path: "/izdeliya-iz-mramora/podokonniki",
		element: <Podokonniki />,
		},
		{
		path: "/izdeliya-iz-mramora/design",
		element: <Design />,
		},
		{
		path: "/izdeliya-iz-mramora/kaminy-portaly",
		element: <KaminyPortaly />,
		},
		{
		path: "/izdeliya-iz-mramora/lestnicy-stupeni",
		element: <LestnicyStupeni />,
		},
		{
		path: "/izdeliya-iz-mramora/oblicovka-fasadov",
		element: <OblicovkaFasadov />,
		},
		{
		path: "/izdeliya-iz-mramora/plitka-bruschatka",
		element: <PlitkaBruschatka />,
		},
		{
		path: "/izdeliya-iz-mramora/stoly-stoleshnicy",
		element: <StolyStoleshnicy />,
		},
	]);

  	return <RouterProvider router={router} />;
};

export default App;
