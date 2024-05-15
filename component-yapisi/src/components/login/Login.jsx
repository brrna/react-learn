import React from "react";

//export kullanımıyla user dizisi dışarıya importa açılır
export const users = [
    {
        username: "jane",
        password: "1"
    },
    {
        username: "joe",
        password: "2"
    }
]

function Login() {
    return (
        <>
            <div>
                <p>Kullanıcı Adınız</p>
                <input type="text" />
            </div>

            <div>
                <p>Şifreniz</p>
                <input type="text" />
            </div>

            <div>
                <button>Giriş Yap</button>
            </div>
        </>
    )
}

//componenti olduğu gibi dışarıya import etmek için export  default kullanılır 
export default Login