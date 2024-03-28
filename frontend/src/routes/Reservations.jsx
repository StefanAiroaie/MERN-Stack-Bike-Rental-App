import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useAppState } from "../context";

const Reservations = () => {
  const { bookings } = useAppState();
  return (
    <>
      <Nav />
      <main className="bg-black p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Your current Bookings
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {bookings.map((booking) => (
            <Link key={booking.bike?._id} to={`${booking?._id}`}>
              <div className="group relative">
                <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-video group-hover:opacity-75 ">
                  <img
                    src={booking.bike?.imageUrl}
                    alt={booking.bike?.name}
                    className="aspect-video h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-white">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {booking.bike?.name}
                    </h3>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Start:
                      {new Date(booking?.startDate).toLocaleDateString("de")}
                    </p>
                    <p className="text-sm font-medium text-white">
                      End:
                      {new Date(booking?.endDate).toLocaleDateString("de")}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link to={"/addreservation"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New Reservation
          </button>
        </Link>
      </main>
    </>
  );
};

export default Reservations;
