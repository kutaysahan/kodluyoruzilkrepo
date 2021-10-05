import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useFormik } from 'formik';
import { useBmi } from '../context/BmiContext';
import Validations from './Validations';
import styles from './styles.module.css';
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const ClearButton = styled.button `
        display: inline-block;
        color: white;
        background-color: #C7324D;
        font-size: 1em;
        margin : 1em;
        padding : 0.5em 1em;
        border: 1px solid #DA1D3F;
        border-radius:3px;

        &:hover {
            background-color: #D53F2A;
        }
    `;

    const CalculateButton = styled.button`

        display: inline-block;
        color: white;
        background-color: #1BAAE2;
        font-size: 1em;
        margin : 1em;
        padding : 0.5em 1em;
        border: 1px solid #0C5A79;
        border-radius:3px;
        
        &:hover {
            background-color: #78A4B5;
        }
    `;

function Form() {

    const [submitted, setSubmmited] = useState(false);

    const { bmi, setBmi, bmiResult, setBmiResult } = useBmi();

    const calculateResult = useCallback(() => {

        if (bmi < 18.5) {
            setBmiResult('Zayıf')
        } else if (bmi > 18.5 && bmi < 24.9) {
            setBmiResult('Normal');
        } else if (bmi > 25 && bmi < 29.9) {
            setBmiResult('Kilolu');
        } else if (bmi > 30 && bmi < 34.9) {
            setBmiResult('Şişman');
        } else {
            setBmiResult('Aşırı Şişman');
        }
    }, [bmi, setBmiResult]);

    useEffect(() => {
        calculateResult();
    }, [calculateResult]);


    const renderResultList = () => {
        return (
            <div className="col-12 align-self-center mt-3">
                <ul className="list-group">
                    <li className="list-group-item">Vücut Kitle Endeksiniz (BMI): {bmi} kilogram/metre²</li>

                    {
                        bmi > 0 ? showResult() : ''
                    }

                    {
                        <NavLink to='/Diet' className="list-group-item list-group-item-action" aria-current="true" style={{ color: 'blue' }}>
                            Size özel önerilen diyet programı için tıklayın.
                        </NavLink>
                    }

                </ul>
            </div>
        )
    };

    const showResult = () => {
        if (bmiResult === 'Normal') {
            return (
                <li className='list-group-item list-group-item-success'> Kilo durumunuz: {bmiResult} </li>
            )
        } else {
            return (
                <li className='list-group-item list-group-item-danger'> Kilo durumunuz: {bmiResult} </li>
            )
        }
    };

    const { handleSubmit, handleChange, values, errors, touched, setFieldValue } = useFormik({
        
        initialValues: {
            weight: localStorage.getItem('weight'),
            height: localStorage.getItem('height'),
        },

        onSubmit: values => {
            setBmi((values.weight / ((values.height / 100) * (values.height / 100))).toFixed(1));
            setSubmmited(true);
        },

        validationSchema: Validations

    });

    useEffect(() => {
        localStorage.setItem('weight',values.weight);
        localStorage.setItem('height',values.height);
    },[values]);

    const resetAll = () => {
        setSubmmited(false);
        setBmi(0);
        setBmiResult('');
        setFieldValue('height','');
        setFieldValue('weight','');
    }

    return (

        <div className="container">
            <div className="row">

                <div className="col-12 mt-3">
                    <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center border rounded bg-light">
                        <h1 className="display-5">BMI Hesaplama</h1>

                        <div className="mb-3">
                            <label htmlFor="height" className="form-label">Boyunuz:</label>
                            <input type="number" value={values.height} className="form-control shadow-none" id="height" name="height" onChange={handleChange} placeholder='Boy (cm)' style={{ width: '400px' }} />

                            {
                                errors.height && touched.height && (<div className={styles.error}> {errors.height} </div>)
                            }

                        </div>

                        <div className="mb-3">
                            <label htmlFor="weight" className="form-label">Kilonuz:</label>
                            <input type="number" value={values.weight} className="form-control shadow-none" id="weight" name="weight" onChange={handleChange} placeholder='Kilo (kg)' style={{ width: '400px' }}
                            />

                            {
                                errors.weight && touched.weight && (<div className={styles.error}> {errors.weight} </div>)
                            }
                        </div>
                        <div className="mb-3">
                            <CalculateButton type="submit"> Hesapla </CalculateButton>
                            <ClearButton type="reset" onClick={() => resetAll()}> Temizle </ClearButton>
                        </div>
                    </form>
                </div>

                {
                    submitted === true ? renderResultList() : ''
                }


            </div>
        </div>

    )
}

export default Form;
