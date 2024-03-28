import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useAppState } from "../context";

const BikesGallery = () => {
  const bikesState = useAppState();
  return (
    <>
      <Nav />

      {bikesState ? (
        <main className="flex flex-col gap-6 bg-black p-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Our fine selection of Bikes to be rented:
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {bikesState.bikes.map((bike) => (
              <Link key={bike._id} to={`${bike._id}`}>
                <div className="group relative">
                  <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-video group-hover:opacity-75 ">
                    <img
                      src={bike.imageUrl}
                      alt={bike.name}
                      className="aspect-video h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-white">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {bike.name}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-white">
                      {bike.shipType}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link to={"/addbike"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add New Bike
            </button>
          </Link>
        </main>
      ) : (
        <div>
          <p>... wait we are loading the bikes</p>
          <iframe
            src="https://giphy.com/embed/IVfgh1u2eCkqiyHxwd"
            width="480"
            height="230"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default BikesGallery;
