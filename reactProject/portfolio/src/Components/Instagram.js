import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ImageList, ImageListItem, TextField} from '@mui/material';
import {pex} from "../token.js"


function Instagram(){

      const [pictures, setPictures]=useState([]);
      const [instaTopic, setInstaTopic] = useState("cats")

      const fetchpictures=async()=>{
        const token = pex.t
        const url = `https://api.pexels.com/v1/search?query=${instaTopic}&per_page=20`

        const response = await axios.get(url, {
          headers: {
            'Authorization': token
            }
          })
          .then(res => {
            for (let i = 0; i < res.data.photos.length; i++) {
                setPictures(prevState => [...prevState, res.data.photos[i].src.small]);
            }

          })
        }

      useEffect(() => {
      	fetchpictures();
      }, [])


      const handleSubmit = (evt) => {
        setPictures([])
        evt.preventDefault();
        fetchpictures();
    }


  return (

    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
      minHeight:"100vh",
      minWidth:"100vw",
      backgroundColor: "#fafafa"
    }}>
        <form onSubmit={handleSubmit}>
            <TextField
            defaultValue={instaTopic}
            onChange={e => setInstaTopic(e.target.value)}
            id="outlined-basic"
            label="Search pictures"
            size="small"
            variant="outlined"
            />
        </form>
        <div style={{ display:"flex", justifyContent:"center"}} >
            <ImageList sx={{ width: 700, height: 650}} cols={3} rowHeight={164}>
                {pictures.map((item, i) => (
                    <ImageListItem key={i}>
                        <img
                          src={`${item}?w=164&h=164&fit=crop&auto=format`}
                          srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt={instaTopic.concat(' ', i)}
                          loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    </div>
  )
};







export default Instagram;
