import React from 'react';
import "./styles/para.scss"

const Para = () => {
  return (
    <div className={"main_div"}>

      <div className={"para"}>
        <h1>Indian Cuisine</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s.</p>
      </div>

      <div className={"para"}>
        <h1>American Cuisine</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard.</p>
      </div>

      <div className={"para"}>
        <h1>Chinese Cuisine</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s.</p>
      </div>

    </div>
  );
};

export default Para;