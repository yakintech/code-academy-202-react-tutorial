import React, { useContext } from 'react'
import PrivatePages from './lessons/antdAdminPanel/PrivatePages'
import PublicPages from './lessons/antdAdminPanel/PublicPages'
import { LoginContext } from './lessons/antdAdminPanel/LoginContext'

function App2() {

    const { loginStatus } = useContext(LoginContext);

    return (<>
        {
            loginStatus == true ? <PrivatePages /> : <PublicPages />
        }
    </>)
}

export default App2