import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./pages/_layout.jsx"
import { ProtectedLayout } from "./auth.client.jsx";

const pages = import.meta.glob("./pages/**/*.jsx", { eager: true })

const routes = []
for (const path of Object.keys(pages)) {
	const normalizedPathName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1]

	const fileName = normalizedPathName?.split("/").pop()

	if (!fileName || fileName.startsWith("_"))
		continue

	if (fileName[0] === '[' && fileName[fileName.length - 1] === ']' && pages[path]?.pathParams) {
		const params = fileName.slice(1, -1).split(",").map(param => param.trim())

		if (!params || !Array.isArray(params) || params.length === 0)
			continue

		for (const param of params) {
			const Element = pages[path].default

			routes.push({
				path: `/${normalizedPathName.split("/").slice(0, -1).join("/").toLowerCase()}/${param}`,
				Element: () => <Element {...{ param }}/>,
				...pages[path]
			})
		}
		continue
	}

	routes.push({
		path: fileName === "index"
			? `/${normalizedPathName.split("/").slice(0, -1).join("/")}`
			: `/${normalizedPathName.toLowerCase()}`,
		Element: pages[path].default,
		...pages[path]
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
2

export default function App() {
	return <Layout>
		<RouterProvider router={router}/>
	</Layout>
}