import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useAppState } from "../context";
import { useParams, useNavigate } from "react-router-dom";

const ReservationDetail = () => {
  const { bookings, deleteBooking, updateBookings, updateCounter } =
    useAppState();
  const navigate = useNavigate();

  const { id } = useParams();

  const detailBooking = bookings.filter((booking) => {
    return booking._id === id;
  });

  const handleDelete = async () => {
    await deleteBooking(detailBooking[0]?._id);
    await updateBookings();
    await updateCounter();
    navigate("/reservations");
  };

  return (
    <>
      <Nav />
      <main>
        <img
          src={detailBooking[0]?.bike.imageUrl}
          alt={detailBooking[0]?.bike.name}
          className="aspect-video h-40 w-full object-cover object-center"
        />
        <div className="text-white mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {detailBooking[0]?.bike.name}
            </h2>
            <div>
              <p>
                Start Date:{" "}
                {new Date(detailBooking[0]?.startDate).toLocaleDateString("de")}
              </p>
              <p>
                End Date:{" "}
                {new Date(detailBooking[0]?.endDate).toLocaleDateString("de")}
              </p>
            </div>
            <p>Serial Number: {detailBooking[0]?.bike.serialNumber}</p>

        
          </div>
          <div className="flex flex-col gap-3">
            <Link to={`/reservations/${id}/edit`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit Booking
              </button>
            </Link>
            <Link onClick={handleDelete}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Delete Booking
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ReservationDetail;
