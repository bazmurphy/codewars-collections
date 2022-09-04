import React from "react";

const Kata = (props) => {

    const [kataState, setKataState] = React.useState(null);

    React.useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(`https://www.codewars.com/api/v1/code-challenges/${props.kataId}`);
            const data = await response.json();
            setKataState(data);
        };

        fetchData();

    }, [props.kataId]);

    // console.log(kataState);
    
    return (
        <div className="kata-container">
            <div className="kata-sub-container">
                <div className="collection-number">{props.collectionNumber} / {props.collectionTotal}</div>
                <div className="kata-level">{kataState ? Math.abs(kataState.rank.id) : null} kyu</div>
                <a className="kata-title-and-link" href={`https://www.codewars.com/kata/${props.kataId}`} target="_blank" rel="noreferrer">{kataState ? kataState.name : null}</a>
                {props.kataComplete ? <img className="kata-complete-image" src="./complete.png" alt="js logo green" /> : <img className="kata-complete" src="./incomplete.png" alt="js logo white"/>}
                {props.kataComplete ? <div className="kata-complete-status-true">Completed</div> : <div className="kata-complete-status-false">Uncompleted</div>}
                <a className="kata-my-link" href={props.kataComplete ? (`https://github.com/bazmurphy/codewars/blob/main/${kataState ? Math.abs(kataState.rank.id) : null}kyu/${props.kataId}.js`) : null} target="_blank" rel="noreferrer">My solution on GitHub</a>
                <div className="kata-id">ID: {props.kataId}</div>
            </div>
        </div>
    );
}

export default Kata;
