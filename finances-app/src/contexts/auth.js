import React, {createContext, useState} from "react";
import api from "../services/api";
import {useNavigation} from '@react-navigation/native';

export const AuthContext = createContext({});


function AuthProvider({children}){
    const [user, setUser] = useState({
        nome: 'Felipe Teste'
    });


    async function signUp(name, email, password) {
        try {
            const response = await api.post('/')
        } catch (error) {
            console.log("ERRO AO CONECTAR: ", err)
        }
    }

    return (
        <AuthContext.Provider value={{user, signUp}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;