import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState([]);
    const [id, setId] = useState(null);
    useEffect(() => {
      setId(localStorage.getItem("id"));
      setTitle(localStorage.getItem("title"));
      setPrice(localStorage.getItem("price"));
      setImg(localStorage.getItem("img"));
    }, []);
    const updateData = () => {
      axios
        .update(`https://62d7f2f49c8b5185c77f9814.mockapi.io/Card${id}`, {
          title,
          price,
          img
        })
        .then((res) => {
          console.log(res);
          navigate("/Home");
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    return (
      <div>
         <table>
         <tr><td>  <input
         class="inptic"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input></td></tr>
       <tr><td>  <input
       class="inptic"
          placeholder="Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input></td></tr>
       
       <tr><td><button class="ticr" onClick={updateData}>Update</button></td></tr>
       </table>
       </div>

    );
  }

export default Update