import React, { useState } from "react";
import Card from "./../Card"
import axios from "axios";
const Categories = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyC4OTUWrnfvkOWv1Sgerr6JG-7WkbZeCtU' + '&maxResults=10')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }
    return (
        <>
            <div className="row1">
                <h2>Найти книгу</h2>
                <div className="search">
                    <input className="serbar" type="text" placeholder="Enter your book name"
                        value={search} onChange={e => setSearch(e.target.value)}
                        onKeyDown={searchBook} />
                    <button><i class="fas fa-search"></i> </button>
                </div>
            </div>
            <div className="container">
                {
                    <Card book={bookData} />
                }

            </div>
        </>


    );
}

export default Categories;