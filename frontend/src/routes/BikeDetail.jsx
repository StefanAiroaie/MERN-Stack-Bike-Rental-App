import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useAppState } from "../context";
import { useParams, useNavigate } from "react-router-dom";

const BikeDetail = () => {
  const { bikes, deleteBike, updateBikes, updateCounter } = useAppState();
  const navigate = useNavigate();

  const { id } = useParams();

  const detailBike = bikes.filter((bike) => {
    return bike._id === id;
  });

  const handleDelete = async () => {
    await deleteBike(detailBike[0]?._id);
    await updateBikes();
    await updateCounter();
    navigate("/bikes");
  };

  return (
    <>
      <Nav />
      <main>
        <img
          src={detailBike[0]?.imageUrl}
          alt={detailBike[0]?.name}
          className="aspect-video h-40 w-full object-cover object-center"
        />
        <div className="text-white mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {detailBike[0]?.name}
            </h2>
            <p>Serial Number: {detailBike[0]?.serialNumber}</p>

            <p className="mt-4 text-white">
              Bike Type: {detailBike[0]?.type}
            </p>
            <p className="mt-1 text-sm text-white">
              Construction year: {detailBike[0]?.baujahr}
            </p>
            <p className="mt-1 text-sm text-white">
              Material: {detailBike[0]?.material}
            </p>
          </div>

          <img
            src={detailBike[0]?.imageUrl}
            alt={detailBike[0]?.name}
            className="aspect-video h-full w-full object-cover object-center"
          />
          <Link to={`/ships/${id}/edit`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit Bike
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete Bike
          </button>
        </div>
      </main>
    </>
  );
};

export default BikeDetail;
