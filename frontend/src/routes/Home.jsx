import Nav from "../components/Nav";
import { useAppState } from "../context";
import logo from "../../public/bikings.png";

const Home = () => {
  const { counter } = useAppState();
  return (
    <>
      <Nav />
      <main className="flex gap-3">
        <img src={logo} alt="spaceship" />
        <section className="p-6 flex flex-col gap-6 justify-center items-center">
          <div className="p-3 ring-2 ring-blue-500">
            <h2>Current Bookings: {counter[1]}</h2>
          </div>
          <div className="p-3 ring-2 ring-blue-500">
            <h2>Available bikes: {counter[2]}</h2>
          </div>
          <div className="p-3 ring-2 ring-blue-500">
            <h2>Total Bikes: {counter[0]}</h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
