import React from "react";
import { Home, OrderApprove, OrderCreation, ViewOrders } from "../pages/index";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderDetails from "../pages/OrderDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/order-approve",
		element: <OrderApprove />,
	},
	{
		path: "/order-creation",
		element: <OrderCreation />,
	},
	{
		path: "/view-orders",
		element: <ViewOrders />,
	},
	{
		path: "/order-details/:id",
		element: <OrderDetails />,
	},
]);

function Router() {
	return <RouterProvider router={router} />;
}

export default Router;
