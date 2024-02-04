import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Show.css";

const Show = () => {
  const [quote, setQuote] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/quotes/${params.id}`)
      .then((res) => setQuote(res.data.quote));
  }, [params.id]);

  async function deleteHandle(id) {
    await axios.delete(`http://localhost:5000/quotes/${id}`);
    navigate("/");
  }

  function editHandle(id) {
    navigate(`/quotes/${id}/edit`);
  }

  return (
    <>
      <div className="card">
        <div className="card-header"><img src={quote.photo} /></div>
        <div className="card-body">
          <p>{quote.text}</p>
          <p>- {quote.author}</p>
        </div>
      </div>
      <button
      id="delete-btn"
        onClick={() => deleteHandle(quote._id)}
        style={{ fontSize: "1.5rem", margin: "10px" }}
      >
        Delete
      </button>
      <button 
      id="edit-btn"
        onClick={() => editHandle(quote._id)}
        style={{ fontSize: "1.5rem", margin: "10px" }}
      >
        Edit
      </button>
    </>
  );
};

export default Show;
