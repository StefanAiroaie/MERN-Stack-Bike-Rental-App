import { useRef, useMemo } from "react";
import { useAppState } from "../context";
import Nav from "./Nav";
import { useParams, useNavigate } from "react-router-dom";

const EditReservation = () => {
  const { editReservation, bookings, updateBookings } = useAppState();
  const navigate = useNavigate();
  const formRef = useRef();

  const formatDateString = (datestring) => datestring.substring(0, 10);

  const { id } = useParams();

  const existingReservationData = useMemo(
    () => bookings?.find((booking) => booking._id === id),
    [id, bookings]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    await editReservation(id, formData);
    formRef.current.reset();
    await updateBookings();
    navigate("/reservations");
  };

  if (!existingReservationData) {
    return <div>Loading ...</div>;
  }

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
            defaultValue={
              formatDateString(existingReservationData.startDate) || ""
            }
          />
        </label>
        <label>
          <p>End Date</p>
          <input
            type="date"
            required={true}
            name="endDate"
            placeholder="End Date of Booking"
            defaultValue={
              formatDateString(existingReservationData.endDate) || ""
            }
          />
        </label>
        <select name="ship" className="text-black">
          <option
            type="text"
            key={existingReservationData?.ship._id}
            value={existingReservationData?.ship._id}
          >
            {existingReservationData?.ship.name}
          </option>
        </select>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Edit Reservation
        </button>
      </form>
    </>
  );
};

export default EditReservation;
