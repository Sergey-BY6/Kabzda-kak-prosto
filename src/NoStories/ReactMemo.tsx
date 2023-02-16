import React, { useState } from "react"


const NewMessageCounter = (props: { count: number }) => {
    return (
        <div>
            {props.count}
        </div>
    )
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log("USERS")
    return (
        <div>
            {props.users.map((el, index) => <div key={index}>{el}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log("Example")
    const [counter, setCounter] = useState(0)
    const [users, setUser] = useState(["Dimych", "Valera", "Artem", "Katya"])

    const addUser = () => {
        const newUser = [...users, "Sveta" + new Date().getTime()]
        // users.push("Sveta" + new Date().getTime())
        setUser(newUser)
    }

    return (
        <>
            <button onClick={()=> setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
        </>
    )
}