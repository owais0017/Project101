import React, { useState } from "react";
import MenuItem from "../menu-item.component";
import './directory.style.scss';

function Directory() {
  const [sections,setSections] = useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      Linkurl:'hats'
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      Linkurl: ''
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      Linkurl: ''
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      Linkurl: ''
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      Linkurl: ''
    }
  ]);
  return (
    <div className="directory-menu">
      {sections.map(({id, ...someOtherProps}) => (
        <MenuItem key={id} {...someOtherProps} />
      ))}
    </div>
  );
}
export default Directory;