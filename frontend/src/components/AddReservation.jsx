import { useRef, useState } from "react";
import { useAppState } from "../context";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

const AddReservation = () => {
  const { addReservation, bikes, updateBookings, updateCounter } =
    useAppState();
  const navigate = useNavigate();
  const formRef = useRef();

  let [selectedBike, setSelectedBike] = useState("⬇️ Select a Bike ⬇️");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    await addReservation(formData);
    formRef.current.reset();
    await updateBookings();
    await updateCounter();
    navigate("/reservations");
  };

  let handleBikeChange = (e) => {
    setSelectedBike(e.target.value);
  };



  return (
    <>
      <Nav />
      <form
        className="text-black flex flex-col p-3 gap-2 justify-items-center items-center"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <label>
          <p>Start Date</p>
          <input
            type="date"
            required={true}
            name="startDate"
            placeholder="Start Date of Booking"
          />
        </label>
        <label>
          <p>End Date</p>
          <input
            type="date"
            required={true}
            name="endDate"
            placeholder="End Date of Booking"
          />
        </label>
        <select name="bike" className="text-black" onChange={handleBikeChange}>
          <option value="⬇️ Select a bike ⬇️"> -- Select a bike-- </option>
          {bikes.map((selectedBike) => (
            <option type="text" key={selectedBike._id} value={selectedBike._id}>
              {selectedBike.name}
            </option>
          ))}
        </select>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Reservation
        </button>
      </form>
    </>
  );
};

export default AddReservation;
