
import { RouterProvider } from "react-router-dom"

import { routers } from "./components/Routes/Routes"

import './App.scss'

function App() {
	return (
		<>
			<RouterProvider router={routers} />
		</>

	)
}

export default App
