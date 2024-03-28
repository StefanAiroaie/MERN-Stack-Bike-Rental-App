import { createContext, useContext, useState } from "react";
import {
  getBikes,
  getCounter,
  postBike,
  postReservation,
  deleteBikeDB,
  deleteBookingDB,
  getBookings,
  editBikeDB,
  editReservationDB,
} from "./api";

const StateContext = createContext({
  bikes: [],
  bookings: [],
});

export const useAppState = () => useContext(StateContext);

export const AppStateProvider = ({ children }) => {
  const [bikes, setBikes] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [counter, setCounter] = useState([]);

  const updateCounter = async () => {
    try {
      const counter = await getCounter();
      setCounter(counter);
    } catch (err) {
      console.error(err);
    }
  };

  const updateBikes = async () => {
    try {
      const bikes = await getBikes();
      setBikes(bikes);
    } catch (err) {
      console.error(err);
    }
  };

  const updateBookings = async () => {
    try {
      const bookings = await getBookings();
      setBookings(bookings);
    } catch (err) {
      console.error(err);
    }
  };

  const addReservation = async (reservationData) => {
    try {
      await postReservation(reservationData);
      updateBookings();
    } catch (err) {
      console.error(err);
    }
  };

  const addBike = async (bikeData) => {
    try {
      await postBike(bikeData);
      updateBikes();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteBooking = async (id) => {
    try {
      await deleteBookingDB(id);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteBike = async (id) => {
    try {
      await deleteBikeDB(id);
    } catch (err) {
      console.error(err);
    }
  };

  const editBike = async (id, patchData) => {
    try {
      await editBikeDB(id, patchData);
      await updateBikes();
    } catch (err) {
      console.error(err);
    }
  };

  const editReservation = async (id, patchData) => {
    try {
      await editReservationDB(id, patchData);
      await updateBookings();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StateContext.Provider
      value={{
        bikes,
        updateBikes,
        updateBookings,
        addBike,
        addReservation,
        deleteBike,
        deleteBooking,
        bookings,
        editBikeDB,
        editBike,
        editReservation,
        counter,
        updateCounter,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
