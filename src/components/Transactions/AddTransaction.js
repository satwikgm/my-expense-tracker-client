import axios from 'axios';
import React, { useState , useEffect } from 'react'

const AddTransaction = () => {

    const [text , setText] = useState('')
    const [amount , setAmount] = useState(0)
    const [expenses, setExpenses] = useState([]);

    const [balance , setBalance] = useState(0)

    // useEffect(() => {
    //     fetch("http://localhost:5000/" , {
    //         method: "GET",
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data ,"Userdata");
    //             setExpenses(data.data)
    //         })
    // },[] );

    useEffect(() => {
        fetchExpenses()
    })

    useEffect(() => {
        calculateBalance()
    },[expenses])

    const fetchExpenses = async () => {
        axios.get('http://localhost:5000/')
        .then((res) => {
            console.log(res.data); 
            setExpenses(res.data.data)
        })
    };

    const addExpense = async () => {
        try {
            await axios.post('http://localhost:5000/' , {text,amount})
        } catch (err) {
            console.log(err.message);
        }
    }

    const deleteExpense = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/${id}`)
            fetchExpenses()
        } catch (err) {
            console.log(err.message);
        }
    }

    const calculateBalance = () => {
        const total = expenses.reduce((total, expense) => total + expense.amount, 0);
        setBalance(total)
    }

    return (
        <div>
            <div className='Balance'>
                <h4>*********************************************</h4>
                <h2>Your Balance</h2>
                <h2>₹ {balance}</h2>
                <h4>*********************************************</h4>
            </div>
            <form>
                <label>Description</label>
                <br />
                <input type='text' placeholder='text' value={text} onChange={(e) => setText(e.target.value)}/>
                <br />
                <label>Amount</label>
                <br />
                <input type='number' placeholder='amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <br /> <br />
                <button type='button' onClick={addExpense}>Submit</button>
            </form>
            <h4>*********************************************</h4>
            
            <h3>History</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <table>
                    <tbody>
                    {expenses.map((i) => {
                        return (
                        <tr key={i._id}>
                            <td>{i.text}</td>
                            <td>{i.amount}</td>
                            <td><button onClick={() => deleteExpense(i._id)}>delete this</button></td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AddTransaction
