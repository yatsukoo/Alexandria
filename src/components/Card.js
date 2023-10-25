
import React, { useState } from "react";
import Modal from "./Modal";
const Card = ({ book }) => {
    const [show,setShow] = useState(false);
    const [bookItem,setItem]= useState();
    return (
        <>
            {

                book.map((item) => {
                    let thumbnail = item?.volumeInfo?.imageLinks && item?.volumeInfo?.imageLinks?.smallThumbnail;
                    // const pdfUrl = item.accessInfo.pdf.webReaderLink;
                    // const openPdfInNewTab = (url) => {
                    //     window.open(url, '_blank');
                    // };
                    if (thumbnail != undefined) {
                        return (
                            <>
                                <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                    <img src={thumbnail} alt="" />
                                    <div className="bottom">
                                        <h3 className="title">{item.volumeInfo.title}</h3>
                                    </div>
                                </div>
                                <Modal show = {show} item = {bookItem} onClose = {()=>setShow(false)}/>
                            </>
                        )
                    }
                    
                })

            }

        </>
    );
}
export default Card;