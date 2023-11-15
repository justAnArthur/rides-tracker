import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./pages/_layout.jsx"
import { ProtectedLayout } from "./auth.client.jsx";

const pages = import.meta.glob("./pages/**/*.jsx", { eager: true })

const routes = []
for (const path of Object.keys(pages)) {
	const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1]

	if (!fileName || fileName.startsWith("_"))
		continue

	const normalizedPathName = fileName.includes("$")
		? fileName.replace("$", ":")
		: fileName.replace(/\/index/, "")

	routes.push({
		path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
		Element: pages[path].default,
		loader: pages[path]?.loader,
		action: pages[path]?.action,
		asPublic: pages[path]?.asPublic,
		ErrorBoundary: pages[path]?.ErrorBoundary,
	})
}

const router = createBrowserRouter(
	routes.map(({ Element, ErrorBoundary, asPublic, ...rest }) => ({
		...rest,
		element: asPublic
			? <Element/>
			: <ProtectedLayout>
				<Element/>
			</ProtectedLayout>,
		...(ErrorBoundary && { errorElement: <ErrorBoundary/> }),
	}))
)

export default function App() {
	return <Layout>
		<RouterProvider router={router}/>
	</Layout>
}