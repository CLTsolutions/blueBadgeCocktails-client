import React from 'react'

const TrendCard = ({name, id}) => {
    return (
        <div>
            <ul key={id}>
                <li>{name}</li>
            </ul>
        </div>
    );
};
export default TrendCard;




