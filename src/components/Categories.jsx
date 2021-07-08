import React from 'react';

const Categories = ({ items }) => {
    return (
        <div className="categories">
            <ul>
                {items.map((name, key) => (
                    <li onClick={ } key={`${name}_${key}`} className="active">{name}</li>
                ))}
            </ul>
        </div>
    );
};
// https://youtu.be/SZma4oQN8SY?t=5004
export default Categories;
