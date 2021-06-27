import React from 'react'
import {Card,CardContent,Typography} from '@material-ui/core';
function Message({message,username}) {
    let isUser = username === message.username;
    console.log(username);
    console.log(message.username);
    return (
        <div >
            <Card  >
                <CardContent className={isUser?"message_user":"message_guest"}>
                    <Typography
                    color="white"
                    variant="h5"
                    component="h2">
                    {message.username} : {message.message}
                        </Typography>
                </CardContent>
            </Card>
        </div>

       
    )
}

export default Message
