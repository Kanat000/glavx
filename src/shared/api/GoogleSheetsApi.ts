import axios from "axios";

export const saveOrder = (data: FormData) => {
  axios.post(
    "https://script.google.com/macros/s/AKfycbwlQ-LJD7iQuzplDn_CpNjuOMiCGeoSFUc8CiXJ1uAyoZEzjU6l5i25rUWlBaoJqE08pw/exec",
    data
  );
};
