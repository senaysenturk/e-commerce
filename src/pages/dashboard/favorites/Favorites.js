import React from "react";
import "./style.scss";
import SmallCard from "../../../components/app/product/small-card/SmallCard";

const Favorites = () => {
  const favorites = [
    "https://static.e-stradivarius.net/5/photos3/2022/I/0/1/p/5900/472/430/5900472430_1_1_2.jpg?t=1669736376209",
    "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37049069_99.jpg?ts=1665653587346&imwidth=502&imdensity=2",
    "https://static.e-stradivarius.net/5/photos3/2022/I/0/1/p/5900/472/145/5900472145_1_1_1.jpg?t=1669725139036&impolicy=stradivarius-itxmediumhigh&imwidth=390&imformat=chrome&imdensity=1.25",
    "https://static.e-stradivarius.net/5/photos3/2022/I/0/1/p/6064/640/551/6064640551_1_1_1.jpg?t=1669728889360&impolicy=stradivarius-itxmediumhigh&imwidth=390&imformat=chrome&imdensity=1.25",
    "https://static.e-stradivarius.net/5/photos3/2022/I/0/1/p/6070/760/429/6070760429_1_1_1.jpg?t=1669727841002&impolicy=stradivarius-itxmediumhigh&imwidth=390&imformat=chrome&imdensity=1.25",
    "https://static.e-stradivarius.net/5/photos3/2022/I/0/1/p/6202/267/001/6202267001_1_1_2.jpg?t=1669732582176",
  ];
  return (
    <div className="favorites">
      <div className="row">
        <div className="row-header">
          <h2>Favorites</h2>
        </div>
        <div className="row">
          {/* {favorites.map((product, index) => (
            // <SmallCard path={product} index />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
