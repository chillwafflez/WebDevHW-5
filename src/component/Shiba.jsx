import React from "react";

const Shiba = () => {
  const [shibas, setShibas] = React.useState([]);

  React.useEffect(() => {

    fetch(
      `https://shibe.online/api/shibes?count=15&urls=true&httpsUrls=true`
    )
      .then((res) => res.json())
      .then((json) => {
        setShibas(json);
      });
  }, []);

  return (
    <div class>
      <h1 className="shibaHeader">Here are some Shibas!</h1>
      <div className="imageFlexContainer">
        {shibas?.map((item) => (
          <div>
            <p>Woof!</p>
            <a href={`${item}`} target="tab"><img
              width="200"
              src={`${item}`}
            /></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shiba;
