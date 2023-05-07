import React from "react";

const Anime = (props) => {
  const [animes, setAnimes] = React.useState([]);

  React.useEffect(() => {
    //get title from props that was sent from Search.jsx
    var title = props.searched;

    fetch(
      `https://api.jikan.moe/v4/anime?q=${title}&sfw`
    )
      .then((res) => res.json())
      .then((json) => {
        setAnimes(json.data);
      });
  }, [props.searched]);


  return (
    <div className="imageFlexContainer">
      {animes?.map((item) => (
        <div>
          <p>{item.title}</p>
          <a href={`${item.url}`} target="tab"><img
            width="200"
            src={`${item.images.jpg.image_url}`}
          /></a>
        </div>
      ))}
    </div>
  );
};

export default Anime;
