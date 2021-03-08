import React, { useState } from "react";
import { createContext } from "react";
import axios from 'axios';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setLogin] = useState(false);
    const [id, setId] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const addProfileData = (id, name, email) => {
      setId(id);
      setName(name);
      setEmail(email);
    }

    const getUserFavourites = async() => {
        const res = axios.post("/api/getUserFavourites", { email: email })
        const fav = res.data;
        return fav
    }
    
    const saveExercise = (exerciseId) => {
        console.log("userId: " + id)
        console.log("exerciseId: " + exerciseId)
        axios.post('/api/addToFav', {exerciseId: exerciseId, userId: id})
    }

    const deleteExercise = async (exerciseId) => {
        try {
            await axios.delete("/api/deleteUserFavourite", {data: { userId: id, exerciseId: exerciseId} })
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    return(
        <LoginContext.Provider value={{
            isLoggedIn,
            setLogin,
            id,
            name,
            email,
            addProfileData,
            saveExercise,
            deleteExercise,
            getUserFavourites
        }}>
            {children}
        </LoginContext.Provider>
    );
  };