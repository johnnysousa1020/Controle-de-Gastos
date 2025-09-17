import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }){
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !amount || !category) return;

        const newExpense = {
            id: Date.now(),
            name,
            amount,
            category,
        };

        onAddExpense(newExpense);
        setName('')
        setAmount('')
        setCategory('')
    }

    return(
        <form onSubmit={handleSubmit} className='expense-form'>
           <input 
           type="text" 
           placeholder='Nome do gasto'
           value={name}
           onChange={(e) => setName(e.target.value)}
           />
           <input 
           type="number" 
           placeholder='Valor'
           value={amount}
           onChange={(e) => setAmount(e.target.value)}
           />
           <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione a categoria</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Transporte">Transporte</option>
            <option value="Lazer">Lazer</option>
            <option value="Outros">Outros</option>
           </select>
           <button type='submit'>Adicionar Gasto</button>
        </form>
    )
}

export default ExpenseForm