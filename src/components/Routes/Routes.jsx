import React from 'react'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { path } from './Pathname'
import { About, Contact, Home, Portfolio, Skills } from '../pages/index'

export const routers = createBrowserRouter(
	createRoutesFromElements(
		<Route path={path.home} element={<Layout />}>
			<Route index element={<Home />} />
			<Route path={path.skills} element={<Skills />} />
			<Route path={path.portfolio} element={<Portfolio />} />
			<Route path={path.about} element={<About />} />
			<Route path={path.contact} element={<Contact />} />
			<Route path={path.notFound} element={<h1>error</h1>} />
		</Route>
	)
)
