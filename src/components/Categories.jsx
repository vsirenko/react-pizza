import React, {useState} from 'react';

const Categories = ({ items }) => {

    const [activeItem, setActiveItem] = useState(0)
    const onSelectItem = (key) => {
        setActiveItem(key)
    }

    return (
        <div className="categories">
            <ul>
                {items && items.map((name, key) => (
                    <li
                        onClick={() => onSelectItem(key)}
                        key={key}
                        className={`${activeItem === key ? 'active' : '' }`}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Categories;
