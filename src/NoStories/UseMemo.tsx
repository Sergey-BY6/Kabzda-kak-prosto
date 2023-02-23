import React, {useMemo, useState} from 'react'


export const ExamplteUseMemo1 = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    // const OnChangeHandlerA = (e: ChangeEvent<HTMLInputElement>) => {
    //     setA(+e.currentTarget.value)
    // }
    // const OnChangeHandlerB = (e: ChangeEvent<HTMLInputElement>) => {
    //     setB(+e.currentTarget.value)
    // }

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            {/*<input value={a} onChange={OnChangeHandlerA}/>*/}
            {/*<input value={b} onChange={OnChangeHandlerB}/>*/}
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>

        </>
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

export const HelpsToReactMemo = () => {
    console.log("Example")
    const [counter, setCounter] = useState(0)
    const [users, setUser] = useState(["Dimych", "Valera", "Artem", "Katya"])

const newArray = useMemo(()=> {
    const newArray2 = users.filter( u => u.toLowerCase().indexOf("a") > -1)
    return newArray2
}, [users])



    const addUser = () => {
        const newUser = [...users, "Sveta" + new Date().getTime()]
        setUser(newUser)
    }


    return (
        <>
            <button onClick={()=> setCounter(counter + 1)}>+</button>
            <button onClick={()=> addUser()}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}