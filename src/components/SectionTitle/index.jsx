import React from "react";
import './styles.scss';

const SectionTitle = ({title, icon}) => {
    return (
        <div className="title">
            <h2 className="section__title">{title}</h2>
            {icon}
        </div>
    )
}

export default SectionTitle;