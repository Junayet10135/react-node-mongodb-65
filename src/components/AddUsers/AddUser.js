import React from 'react';

const AddUser = () => {

    const handleSubmit =event =>{
        event.preventDefault();

        const name = event.target.name.value;
        const email =event.target.email.value;

        const user = {name, email};

        //send data to the server

        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('user added successfully!');
                event.target.reset();
            })
    }
    return (
        <div>
            <h2>add user</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='name' required />
                <br />
                <input type="email" name="email" id="2" placeholder='email' required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;