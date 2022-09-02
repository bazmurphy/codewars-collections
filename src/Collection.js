import React from "react";
import Kata from "./Kata";

const Collection = (props) => {
    return (
        <div className="collection-container">
            <div className="collection-info">
                <div className="collection-info-sub-container-one">
                    <img className="collection-title-image" src="collection.png" alt="collection logo" />
                    <div className="collection-title-label">Collection:</div>
                    <a className="collection-title" href={props.collectionUrl} target="_blank" rel="noreferrer">{props.collectionTitle}</a>
                </div>
                <div className="collection-info-sub-container-two">
                    <div className="collection-total-label">Total Kata in Collection:</div>
                    <div className="collection-total">{props.collectionTotal}</div>
                </div>
            </div>

            {props.collectionKatas.map((element,index) => {
                return (
                    <Kata
                        key={index}
                        collectionNumber={element.kataCollectionNumber}
                        collectionTotal={props.collectionTotal}
                        kataId={element.kataId}
                        kataComplete={element.kataComplete}
                    />
                )
            })}
        </div>
    );
}

export default Collection;