import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleSignUp = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, observer => {
            // const userEmail = observer?.email || user?.email;
            // const loggedUser = { email: userEmail }
            console.log("observer", observer);
            setUser(observer);
            setLoading(false);
            // if(observer){
            //     axiosPublic.post('/jwt',loggedUser, {withCredentials: true})
            //     .then(res =>{
            //         console.log(res.data);
            //     })
            // }
            // else{
            //     axiosPublic.post('/logOut', loggedUser, {withCredentials: true})
            //     .then(res =>{
            //         console.log(res.data);
            //     })
            // }
        });
        return () => {
            unSubscribe();
        }
    }, []);


    const authInfo = {
        user,
        loading,
        createUser,
        googleSignUp,
        signIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;