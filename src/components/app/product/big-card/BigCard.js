import React from "react";
import "./style.scss";

const BigCard = () => {
  return (
    <div className="big-card">
      <div className="product-img">
        <video
          src="https://static.e-stradivarius.net/5/photos3/2023/V/0/1/p/1601/135/010/01/1601135010_1_1_1.mp4?t=1669204075875"
          poster="https://static.e-stradivarius.net/5/photos3/2023/V/0/1/p/1601/135/010/01/1601135010_1_1_1.jpg?t=1669204075875"
        >
          <img
            src="https://static.e-stradivarius.net/5/photos3/2023/V/0/1/p/1601/135/010/01/1601135010_1_1_1.jpg?t=1669204075875"
            alt="Saç örgülü balıkçı yaka crop kazak"
          />
        </video>
        {/* <img
          src="https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37049069_99.jpg?ts=1665653587346&imwidth=502&imdensity=2"
          alt="Çiçek işlemeli bluz"
        /> */}
      </div>
    </div>
  );
};

export default BigCard;
