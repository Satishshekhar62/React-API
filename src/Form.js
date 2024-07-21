import react from 'react'

function Form()
{
    return(
        <div>
            <label>Enter GitHub User NAme :</label>
            <input placeholder='Username'/>
            <br />
            <button>Fetch Repos</button>
        </div>
    )
}

export default Form;