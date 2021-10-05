import React from 'react';
import { useBmi } from '../context/BmiContext';

import styles from './styles.module.css';

function Diet() {

    const { bmi, bmiResult } = useBmi();

    return (
        <div>
            <div className="card border-0">
                <div className="card-body">

                    Vücut Kitle Endeksiniz (BMI): {bmi > 0 ? `${bmi} kilogram/metre² ` : <span className={styles.error}> Henüz bir değer hesaplanmadı. </span>}  <br />
                    BMI sonucunuza göre kilo durumunuz: <span className={bmiResult !== 'Normal' ? `${styles.error}` : `${styles.success}`}> {bmi !== 0 ? bmiResult : 'Henüz bir değer hesaplanmadı.'}</span> <br />

                    {
                        bmiResult === 'Normal' ? <span>Kilo değeriniz normaldir.Bir diyet programına ihtiyacınız yoktur.</span> : <span>Kilo durumunuza göre size özel hazırlanmış olan diyet programını aşağıdan görüntüleyebilirsiniz.</span>
                    }

                </div>
            </div>

            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                            <span className={bmiResult === 'Zayıf' && bmi > 0 ? `${styles.success}` : ''}> Diyet Programı #1 {bmiResult === 'Zayıf' && bmi > 0 ? '(Önerilen)' : ''} </span>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse ${bmi > 0 && bmiResult === 'Zayıf' ? `show` : ''}`} aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <h1 className="display-6 text-danger" style={{ fontSize: '24px' }}>Kilo durumu {`zayıf`.toLocaleUpperCase('tr-TR')} için diyet programı:</h1>
                            <p className={styles.justify}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae modi quas fugiat dolor ipsum tempora repellat delectus debitis obcaecati sequi, nisi exercitationem ducimus excepturi labore eveniet enim dolorum optio commodi iusto! Molestias, pariatur accusantium fugit provident tempore quasi. Dolores deleniti esse, id magni voluptates minima ad beatae vel excepturi?</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <span className={bmiResult === 'Kilolu' ? `${styles.success}` : ''}> Diyet Programı #2 {bmiResult === 'Kilolu' ? '(Önerilen)' : ''} </span>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className={`accordion-collapse collapse ${bmiResult === 'Kilolu' ? `show` : ''}`} aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <h1 className="display-6 text-danger" style={{ fontSize: '24px' }}>Kilo durumu {`kilolu`.toLocaleUpperCase('tr-TR')} için diyet programı:</h1>
                            <p className={styles.justify}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae modi quas fugiat dolor ipsum tempora repellat delectus debitis obcaecati sequi, nisi exercitationem ducimus excepturi labore eveniet enim dolorum optio commodi iusto! Molestias, pariatur accusantium fugit provident tempore quasi. Dolores deleniti esse, id magni voluptates minima ad beatae vel excepturi?</p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <span className={bmiResult === 'Şişman' ? `${styles.success}` : ''}> Diyet Programı #3 {bmiResult === 'Şişman' ? '(Önerilen)' : ''} </span>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className={`accordion-collapse collapse ${bmiResult === 'Şişman' ? `show` : ''}`} aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            <h1 className="display-6 text-danger" style={{ fontSize: '24px' }}>Kilo durumu {`şişman`.toLocaleUpperCase('tr-TR')} için diyet programı:</h1>
                            <p className={styles.justify}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae modi quas fugiat dolor ipsum tempora repellat delectus debitis obcaecati sequi, nisi exercitationem ducimus excepturi labore eveniet enim dolorum optio commodi iusto! Molestias, pariatur accusantium fugit provident tempore quasi. Dolores deleniti esse, id magni voluptates minima ad beatae vel excepturi?</p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                            <span className={bmiResult === 'Aşırı Şişman' ? `${styles.success}` : ''}> Diyet Programı #4 {bmiResult === 'Aşırı Şişman' ? '(Önerilen)' : ''} </span>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className={`accordion-collapse collapse ${bmiResult === 'Aşırı Şişman' ? `show` : ''}`} aria-labelledby="panelsStayOpen-headingFour">
                        <div className="accordion-body">
                            <h1 className="display-6 text-danger" style={{ fontSize: '24px' }}>Kilo durumu {`aşırı şişman`.toLocaleUpperCase('tr-TR')} için diyet programı:</h1>
                            <p className={styles.justify}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae modi quas fugiat dolor ipsum tempora repellat delectus debitis obcaecati sequi, nisi exercitationem ducimus excepturi labore eveniet enim dolorum optio commodi iusto! Molestias, pariatur accusantium fugit provident tempore quasi. Dolores deleniti esse, id magni voluptates minima ad beatae vel excepturi?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Diet;
