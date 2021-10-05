import {createContext,useContext,useState,useEffect} from 'react';

const BmiContext = createContext();

export const BmiProvider = ({children}) => {
    
    const [bmi, setBmi] = useState(parseInt(localStorage.getItem('bmi')));
    const [bmiResult, setBmiResult] = useState(localStorage.getItem('bmiResult'));

    useEffect(() => {
        localStorage.setItem('bmi',bmi);
        localStorage.setItem('bmiResult',bmiResult);
    },[bmi,bmiResult]);

    const values = {
        bmi,
        setBmi,
        bmiResult,
        setBmiResult
    }

    return <BmiContext.Provider value={values}> {children} </BmiContext.Provider>
}

export const useBmi = () => useContext(BmiContext);

