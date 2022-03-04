import React from 'react';

export const GifGridItem = ({id, title, url}) => {

    // console.log({ id, title, url })
    return (
        <div className="card animate__animated animate__bounce"> {/*"class es palabra reservada de JS, debe usarse className"*/}
            <img src={ url } alt={ title } title={ title }/>
            <p> { title } </p>
        </div>
    )
}
export default GifGridItem;
