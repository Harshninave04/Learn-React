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
      <img src={data.avatar_url} alt="" width={300} className="rounded-lg mx-auto m-10" />

      <div className="text-3xl text-black font-bold p-1 flex justify-center items-center">
        Github followers: {data.followers}
      </div>

      <div className=" text-3xl text-black font-bold p-1 flex justify-center items-center mb-8">
        Github following: {data.following}
      </div>
    </>
  );
}

export default Github;
