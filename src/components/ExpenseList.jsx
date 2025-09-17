import React from 'react';

function ExpenseList({ expenses, onDelete }){
    return(
        <div>
            <h2>Lista de Gatos</h2>
            {expenses.length === 0 ? (
                <p>Nenhum gasto adicionado.</p>
            ) : (
                <ul>
                    {expenses.map((expense) => (
                        <li key={expense.id}>
                            {expense.name} - R$
                            {Number(expense.amount).toFixed(2)} -
                            ({expense.category})
                            <button onClick={() => onDelete(expense.id)}
                                style={{
                                    marginLeft: '10px',
                                    marginTop: '10px',
                                    backgroundColor: 'red',
                                    color: 'white',
                                    border: 'none',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    width: '80px',
                                }}
                            >
                                Excluir
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ExpenseList