export const fetchData = async () => {
  console.log("api fetchData")

  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
