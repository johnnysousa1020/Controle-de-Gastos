import React from 'react';

function Filter({ setFilter }){
    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }

    return(
        <div>
            <h3>Filtrar por Categoria:</h3>
            <select onChange={handleFilterChange}>
                <option value="Todos">Todos</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Transporte">Transporte</option>
                <option value="Lazer">Lazer</option>
                <option value="Outros">Outros</option>
            </select>
        </div>
    )
}

export default Filter;