import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/harshninave04")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="bg-gray-400 text-3xl text-black font-bold p-10 flex justify-center items-center">
        Github followers: {data.followers}
      </div>
      <div className="bg-gray-400 text-3xl text-black font-bold p-1 flex justify-center items-center">
        Github following: {data.following}
      </div>
    </>
  );
}

export default Github;
