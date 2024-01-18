import { createSlice } from "@reduxjs/toolkit";

const Sections = [
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
      Linkurl: 'jackets'
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      Linkurl: 'sneakers'
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      Linkurl: 'womens'
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      Linkurl: 'mens'
    }
  ];
  
  

  const directorySlice = createSlice({
    name: "sections",
    initialState:Sections,
    reducers:(state,action)=>{
          return {...state}
    }
  })
  export default directorySlice.reducer;