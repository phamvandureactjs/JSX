import React from 'react';
export default function HelloWorld() {
    let name = 'Cee';
    const user ={
        firstName: 'Marper',
        lastName : 'Perez'
    };

    const formatName = (user) =>{
        return user.firstName + ' ' + user.lastName;
    };
 return (
    <div>
        <div>Xin chào : {name} và {formatName(user)}</div>
        <div>Rất vui được gặp bạn</div>
    </div>
 
 );
}
