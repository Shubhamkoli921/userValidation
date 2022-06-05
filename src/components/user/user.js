import React ,{useState} from "react";
import Card from "../UI/card";
import classes from './Adduser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/errormodal";

const Adduser = (props) =>{
    const [enteredUsername , setenteredUsername]= useState('');
    const [enteredage , setenteredage]= useState('');
    const [errostate,seterrorstate]=useState('');
    const Adduserhandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredage.trim().length===0){
            seterrorstate({
                title:"invalid input",
                message:"plz enter a valid name and age (non-empty values)."
            });
        }
        if(+enteredage<1){
            seterrorstate({
                title:"invalid age",
                message:"plz enter a valid age (age > 0)."
            });
        }
        props.onAdduser(enteredUsername,enteredage);
        setenteredUsername('');
        setenteredage('');
    };

    const usernamechangehandler = (event)=>{
        setenteredUsername(event.target.value);
        
    };

    const agechangehandler = (event)=>{
        setenteredage(event.target.value);

    }

    const errorhandler= (event)=>{
        seterrorstate(null);
    };
    return (
        <div>
        {errostate && <ErrorModal title={errostate.title} message={errostate.message} onConfirm={errorhandler}/>}
        <Card className={classes.input}>
        <form onSubmit={Adduserhandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernamechangehandler}/>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" value={enteredage} onChange={agechangehandler}/>
            <Button type="submit">Add User</Button>
        </form>
        
        </Card>
        </div>
    );
};

export default Adduser;