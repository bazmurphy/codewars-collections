import React from "react";
import Kata from "./Kata";

const Collection = (props) => {

    const [open, setOpen] = React.useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div className="collection-container">
                <div className="collection-info-sub-container">
                <button className="collection-toggle-button" onClick={toggle}>{open ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i> }</button>
                    <div className="collection-title-sub-container">
                        <img className="collection-title-image" src="collection.png" alt="collection logo" />
                        <div className="collection-title-label">Collection:</div>
                        <a className="collection-title" href={props.collectionUrl} target="_blank" rel="noreferrer">{props.collectionTitle}</a>
                    </div>
                    <div className="collection-total-sub-container">
                        <div className="collection-total-label">Total Kata in Collection:</div>
                        <div className="collection-total">{props.collectionTotal}</div>
                    </div>
                </div>
            {open && 
                props.collectionKatas.map((element,index) => {
                    return (
                        <Kata
                            key={index}
                            collectionNumber={element.kataCollectionNumber}
                            collectionTotal={props.collectionTotal}
                            kataId={element.kataId}
                            kataComplete={element.kataComplete}
                        />
                    )
                })
            }
        </div>
    );
}

export default Collection;