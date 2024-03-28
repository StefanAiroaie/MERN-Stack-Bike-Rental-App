export const getCounter = () => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/counter`).then((response) =>
    response.json()
  );
};

export const getBikes = () => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/bikes`).then((response) =>
    response.json()
  );
};

export const postBike = (newBike) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/bikes`, {
    method: "POST",
    body: newBike,
  }).then((response) => response.json());
};

export const postReservation = (newReservation) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/reservations`, {
    method: "POST",
    body: newReservation,
  }).then((response) => response.json());
};

export const getBookings = () => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/reservations`).then(
    (response) => response.json()
  );
};

export const deleteBikeDB = (id) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/bikes/${id}`, {
    method: "DELETE",
  });
};

export const deleteBookingDB = (id) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/reservations/${id}`, {
    method: "DELETE",
  });
};

export const editBikeDB = (id, patchData) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/bikes/${id}`, {
    method: "PATCH",
    body: patchData,
  });
};

export const editReservationDB = (id, patchData) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/reservations/${id}`, {
    method: "PATCH",
    body: patchData,
  });
};
