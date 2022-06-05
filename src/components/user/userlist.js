import React from "react";
import Card from "../UI/card";
import classes from './userlist.module.css';

const Userlist = props =>{
    return (
        <Card className={classes.users}>
        <ul>
            {props.users.map(user => <li key={user.id}>{user.name} ({user.age} year old)</li>)}
        </ul>
        </Card>
    );
};

export default Userlist;