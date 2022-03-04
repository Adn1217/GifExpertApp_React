import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories, setInsertedValue }) => {

    const [inputValue, setInputValue] = useState('');
    // var submitButtonEnabled = 'disabled';
    // inputButton.disabled = true;
    // console.log(cats)
    const handleInput = (e) => {
        
        var inputButton = document.getElementById('inputButton');

        if( inputValue == "" ){

            alert('Ingrese categoría');

        }else{
            setInsertedValue( inputValue ) 
            setInputValue('');
            inputButton.disabled = true;
            setCategories((categories) => categories.concat(inputValue)); // No requiere recibir cats.
            // console.log({cats});
        }
    }

    const handleInputChange = (e) => {

        var inputButton = document.getElementById('inputButton');

        if( e.target.value != null ){
            inputButton.disabled = false;

        }

        if( e.target.value.trim() == "" ){

            inputButton.disabled = true;
        }
        
        setInputValue(e.target.value.trim());
        // setInsertedValue(e.target.value.trim());
        // console.log(e.target.value, e.target.value.length, e.target.value == "");
    }

    return (
    <>
        <h2>Add Category</h2>
        <input 
            type="text"
            name="inputCategory"
            value= { inputValue }
            onChange={ handleInputChange }
            placeholder="Ingrese nueva categoría"
        />
        <div onClick={ handleInput }> {/* Permite que el botón inicie deshabilitado.-->  */}
            <button 
                id="inputButton" 
                onClick={ handleInput } 
                // disabled={ submitButtonEnabled }
                disabled
                >Agregar por Componente</button>
        </div>
    </>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    // cats: PropTypes.array.isRequired
}
export default AddCategory;
