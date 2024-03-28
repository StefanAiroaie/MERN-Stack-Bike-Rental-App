import { useRef, useEffect, useState } from "react";
import { useAppState } from "../context";
import Nav from "./Nav";
import { useParams, useNavigate } from "react-router-dom";

const EditBike = () => {
  const { editBike, bikes, updateBikes } = useAppState();
  const formRef = useRef();
  const [existingBikeData, setExistingBikeData] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const editSpecificBike = bikes.find((bike) => bike._id === id);
    if (editSpecificBike) {
      setExistingBikeData(editSpecificBike);
    }
  }, [id, ships]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    await editBike(id, formData);
    await updateBikes();
    formRef.current.reset();
    navigate("/bikes");
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
          <p>Name of Spaceship</p>
          <input
            type="text"
            required={true}
            name="name"
            placeholder="Name of Spaceship"
            defaultValue={existingBikeData.name || ""}
          />
        </label>
        <label>
          <p>Date of Production</p>
          <input
            type="number"
            required={true}
            name="baujahr"
            placeholder="Date of Production"
            defaultValue={existingBikeData.baujahr || ""}
          />
        </label>
        <label>
          <p>Serial Number</p>
          <input
            type="text"
            required={true}
            name="serialNumber"
            placeholder="Serial Number of Ship"
            defaultValue={existingBikeData.serialNumber || ""}
          />
        </label>
        <label>
          <p>Image URL</p>
          <input
            type="text"
            required={true}
            name="imageUrl"
            placeholder="Image URL"
            defaultValue={existingBikeData.imageUrl || ""}
          />
        </label>
        <label>
          <p>Material</p>
          <input
            type="text"
            required={true}
            name="material"
            placeholder="Material of Ship"
            defaultValue={existingBikeData.material || ""}
          />
        </label>
        <label>
          <p>Type of Bike</p>
          <input
            type="text"
            required={true}
            name="shipType"
            placeholder="Type of Ship"
            defaultValue={existingBikeData.shipType || ""}
          />
        </label>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Edit Bike
        </button>
      </form>
    </>
  );
};

export default EditBike;
