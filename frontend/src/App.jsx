import "./App.css";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddBike from "./components/AddBike";
import EditBike from "./components/EditBike";
import AddReservation from "./components/AddReservation";
import Home from "./routes/Home";
import BikeDetail from "./routes/BikeDetail";
import Reservations from "./routes/Reservations";
import BikeGallery from "./routes/BikesGallery";
import ReservationDetail from "./routes/ReservationDetail";
import { useAppState } from "./context";
import EditReservation from "./components/EditReservation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/bikes",
    element: <BikeGallery />,
  },
  {
    path: "/bikes/:id",
    element: <BikeDetail />,
  },
  {
    path: "/addbike",
    element: <AddBike />,
  },
  { path: "/bikes/:id/edit", element: <EditBike /> },
  { path: "/reservations/:id/edit", element: <EditReservation /> },

  { path: "/addreservation", element: <AddReservation /> },

  {
    path: "/reservations",
    element: <Reservations />,
  },
  {
    path: "/reservations/:id",
    element: <ReservationDetail />,
  },
]);

function App() {
  const { updateBikes, updateBookings, updateCounter } = useAppState();
  useEffect(() => {
    updateBikes();
    updateBookings();
    updateCounter();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
