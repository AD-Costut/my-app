export const deleteDailyMenuItems = (token, selectedCardsPK) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(selectedCardsPK),
    mode: "cors",
  };

  fetch(`https://localhost:7239/api/DailyMenu/delete`, requestOptions)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 404) {
        throw new Error("Resource not found");
      } else if (response.status === 500) {
        throw new Error("Internal server error");
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    })
    .then((data) => {
      window.location.reload();
    })
    .catch((error) => {
      console.error("Fetch error:", error.message);
    });
};
