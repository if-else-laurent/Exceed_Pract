import React from 'react'

const Message = (props) => {
    const {messageData} = props;

    const messageList = messageData.map(parametr => {
        return(
            <div>
                Message from: <b> {parametr.author} </b> <br/>
                {parametr.message} <br/>
            </div>
        )
    })
    return (
        <div>
            {messageList}
        </div>
    )
}

export default Message;
