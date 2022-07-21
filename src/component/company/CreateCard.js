import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from './nav'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Update from "./Update";
import Nav from "../Home/nav"
import { Link } from 'react-router-dom';
function CreateCard() {
    const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState([]);


  const postData = () => {
    axios
      .post(`https://62d7f2f49c8b5185c77f9814.mockapi.io/Card`, {
        title,
        price,
        img,
      })
      .then((res) => {
        setImg(res.data)
        console.log(res.data);
        navigate("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
};
 


  return (
    <div>
      <Nav></Nav>
      {/* <button> التواصل<Link to="/Getcon"></Link></button> */}
     <table>
      <tr>
       <td> <input
       class="inptic"
        placeholder="title"
        onChange={(e) => {
            setTitle(e.target.value);
        }}
      ></input></td></tr>
      <tr><td> <input
                class="inptic"
        placeholder="Price"
        onChange={(e) => {
            setPrice(e.target.value);
        }}
      ></input></td></tr>
          <tr><td> <input class="ticr" type="file" onChange={onImageChange}/></td></tr>
          <tr><td><button class="ticr" onClick={postData}>Create</button></td></tr><br/>
          </table>
        <Update></Update>
        </div>

  )
}

export default CreateCard