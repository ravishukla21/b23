import React from 'react'




export default function User({user,isDarkTheme}) {

    return (
        <div data-testid="user" style={{color:isDarkTheme?"white":"black"}} >
            <h2 >{user.name}</h2>
            <input data-testid="level" type="range" style={{accentColor:isDarkTheme?"yellow":"blue"}} />
        </div>
    )
}

