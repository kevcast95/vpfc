import React, { useState } from "react";
import NavBar from "../../NavBar"
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {  useParams } from 'react-router-dom'
import { addTherapy } from "../../connection/firebase"
import styles from "./ClinicHistory.module.css"

function Physiotherapy({ userName }){
    const [localTherapy, setLocalTherapy] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const { id } = params

    const sendTherapy = () => {
        addTherapy({...localTherapy, therapist: userName.name, idDoc: id},navigate)
    }
    return(
        <>
        <header>
            <NavBar/>
        </header>
        <main className={styles.container}>  
        <h1 className={styles.title}>FISIOTERAPIA</h1>
        <h2 className={styles.title2}>FORMATO DE EVALUACIÓN DE LESIONES VFC</h2>
        <form className={styles.containerForm}>
            <div className={styles.rows}>
                <div className={styles.field}>
                    <label for="inDate">Fecha de ingreso: </label>
                    <input 
                        type="date" 
                        name="inDate" 
                        required 
                        onChange={({target})=>setLocalTherapy(
                            {...localTherapy, [target.name]: target.value}
                        )}
                    />
                </div>
                <div className={styles.field}>
                    <label for="outDate">Fecha de egreso: </label>
                    <input 
                        type="date" 
                        name="outDate" required 
                        onChange={({target})=>setLocalTherapy(
                            {...localTherapy, [target.name]: target.value}
                        )}
                    />
                </div>
                <div className={styles.field}>
                    <label for="injuryDate">Fecha de lesión: </label>
                    <input 
                        type="date" 
                        name="injuryDate" 
                        required 
                        onChange={({target})=>setLocalTherapy(
                            {...localTherapy, [target.name]: target.value}
                        )}
                    />
                </div>
            </div>
            <div className={styles.rows}>
                <div className={styles.radio}>
                    <label for="injuryBool">Reporte de lesión: </label>
                    <div>
                        <input 
                            type="radio" 
                            name="injuryBool" 
                            value="Si" 
                            onChange={({target})=>setLocalTherapy(
                                {...localTherapy, [target.name]: target.value}
                            )}
                        />
                         Si
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="injuryBool" 
                            value="No" 
                            onChange={({target})=>setLocalTherapy(
                                {...localTherapy, [target.name]: target.value}
                            )}
                        /> 
                        No
                    </div>
                </div>
               
                <div className={styles.radio}>
                    <label for="orthesisBool"> Uso de Ortesis: </label>
                    <div>
                        <input 
                            type="radio" 
                            name="orthesisBool" 
                            value="Si" 
                            onChange={({target})=>setLocalTherapy(
                                {...localTherapy, [target.name]: target.value}
                            )}
                        /> 
                        Si
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="orthesisBool" 
                            value="No" 
                            onChange={({target})=>setLocalTherapy(
                                {...localTherapy, [target.name]: target.value}
                            )}
                        /> 
                        No
                    </div>
                </div>
                <div className={styles.field}>
                    <label for="orthesis">¿Cuál ortesis? </label>
                    <input 
                        type="text"
                        name="orthesis" 
                        onChange={({target})=>setLocalTherapy(
                            {...localTherapy, [target.name]: target.value}
                        )}
                    />
                </div>


            </div>
            <div className={styles.rows}>

                <div className={styles.textBox}>
                    <label for="diagnosis"> Diagnostico medico: </label>
                    <textarea 
                        name="diagnosis" 
                        cols="30" rows="3"
                        onChange={({target})=>setLocalTherapy(
                            {...localTherapy, [target.name]: target.value}
                        )}
                    />
                </div>
                <div className={styles.textBox}>
                    <label for="record"> Antecedentes: </label>
                    <textarea 
                        name="record" 
                        cols="30" rows="3" 
                        onChange={({target})=>setLocalTherapy(
                            {...localTherapy, [target.name]: target.value}
                        )}
                    />
                </div>
            </div>
            <div className={styles.rows}>
                <div className={styles.field}>
                    <label for="fc">Signos vitales: </label>
                    <input type="text" placeholder="FC:" name="fc" />
                    <label for="fr"></label>
                    <input type="text" placeholder="FR:" name="fr" />
                    <label for="ta"></label>
                    <input type="text" placeholder="TA:" name="ta" />
                </div>
                <div className={styles.field}>
                    <label for="talla">Antropometría: </label>
                    <input type="text" placeholder="Talla:" name="talla" />
                    <label for="peso"></label>
                    <input type="text" placeholder="Peso:" name="pesa" />
                    <label for="imc"></label>
                    <input type="text" placeholder="IMC:" name="ta" />
                </div>
                <div className={styles.field}>
                    <label for="prueba">Flexibilidad (MMSS): </label>
                    <input type="text" placeholder="Prueba" name="prueba" />
                    <label for="derecha"></label>
                    <input type="text" placeholder="Derecha:" name="derecha" />
                    <label for="izquierda"></label>
                    <input type="text" placeholder="Izquierda:" name="izquierda" />
                </div>
                <div className={styles.field}>
                    <label for="prueba">Flexibilidad (MMII): </label>
                    <input type="text" placeholder="Prueba" name="prueba" />
                    <label for="derecha"></label>
                    <input type="text" placeholder="Derecha:" name="derecha" />
                    <label for="izquierda"></label>
                    <input type="text" placeholder="Izquierda:" name="izquierda" />
                </div>
            </div>
                <div className={styles.rows}>
                    <div className={styles.radio}>
                        <label for="pain"> Dolor: </label>
                        <div>
                            <input type="radio" name="pain" value="si" /> Si
                        </div>
                        <div>
                            <input type="radio" name="pain" value="no" /> No
                        </div>
                    </div>
                    <div className={styles.field}>
                        <label for="painScale">Escala de dolor (1 - 10)</label>
                        <input type="number" name="painScale" min="1" max="10" />
                    </div>
                    <div className={styles.radio}>
                        <label for="edema"> Edema: </label>
                        <div>
                            <input type="radio" name="edema" value="si" /> Si
                        </div>
                        <div>
                            <input type="radio" name="edema" value="no" /> No
                        </div>
                    </div>
                    <div className={styles.field}>
                        <label for="place">Lugar</label>
                        <input type="text" name="place" />
                    </div>

                    <div className={styles.radio}>
                        <label for="fovea"> Fóvea </label>
                        <div>
                            <input type="radio" name="fovea" value="si" /> Si
                        </div>
                        <div>
                            <input type="radio" name="edema" value="no" /> No
                        </div>
                    </div>
                    <div className={styles.field}>
                        <label for="sexo">Perímetro: </label>
                        <select>
                            <option selected disabled value="X" name="sexo">Seleccione una Opción</option>
                            <option value="izquierdo" name="fovea">Izquierdo</option>
                            <option value="derecho" name="fovea">Derecho</option>
                        </select>
                    </div>

                </div>
                <div className={styles.rows}>
                    <div className={styles.textBox}>
                        <label for="goniometria"> Goniometría: </label>
                        <textarea name="goniometria" cols="30" rows="3"></textarea>
                    </div>
                    <div className={styles.textBox}>
                        <label for="marcha"> Marcha: </label>
                        <textarea name="marcha" cols="30" rows="3"></textarea>
                    </div>
                </div>
                <div className={styles.rows}>
                    <div className={styles.field}>
                        <label for="semestre1">Partidos Primer Semestre:</label>
                        <input type="number" name="semestre1" />
                    </div>
                    <div className={styles.field}>
                        <label for="goles1">Goles Primer Semestre:</label>
                        <input type="number" name="goles1" />
                    </div>
                    <div className={styles.field}>
                        <label for="amarillas1">Tarjetas Amarillas:</label>
                        <input type="number" name="amarillas1" />
                    </div>
                    <div className={styles.field}>
                        <label for="rojas1">Tarjetas Rojas:</label>
                        <input type="number" name="rojas1" />
                    </div>
                </div>
                <div className={styles.rows}>
                    <div className={styles.field}>
                        <label for="semestre2">Partidos Segundo Semestre:</label>
                        <input type="number" name="semestre2" />
                    </div>
                    <div className={styles.field}>
                        <label for="goles2">Goles Segundo Semestre:</label>
                        <input type="number" name="goles2" />
                    </div>
                    <div className={styles.field}>
                        <label for="amarillas2">Tarjetas Amarillas:</label>
                        <input type="number" name="amarillas2" />
                    </div>
                    <div className={styles.field}>
                        <label for="rojas2">Tarjetas Rojas:</label>
                        <input type="number" name="rojas2" />
                    </div>
                </div>
                <div className={styles.rows}>
                    <div className={styles.field}>
                        <label for="testyoyo">TEST YOYO: </label>
                        <select>
                            <option selected disabled value="X" name="testyoyo">Seleccione una Opción</option>
                            <option value="elite" name="testyoyo">ELITE (16,5 +)</option>
                            <option value="excelente" name="testyoyo">EXCELENTE (15,6 - 16,4)</option>
                            <option value="buena" name="testyoyo">BUENO (14,8 - 15,5)</option>
                            <option value="media" name="testyoyo">MEDIO (14,1 - 14,7)</option>
                            <option value="malo" name="testyoyo">MALO (13,9 -)</option>
                        </select>
                    </div>
                    <div className={styles.field}>
                        <label for="testcooper">TEST COOPER: </label>
                        <select>
                            <option selected disabled value="X" name="testcooper">Seleccione una Opción</option>
                            <option value="excelente" name="testcooper">EXCELENTE (2.800 mts +)</option>
                            <option value="bueno" name="testcooper">BUENO (2.400 - 2799 mts)</option>
                            <option value="regular" name="testcooper">REGULAR (2.200 - 2399 mts)</option>
                            <option value="malo" name="testcooper">MALO (2.199 mts -)</option>
                        </select>
                    </div>
                    <div className={styles.field}>
                        <label for="testabdominal">TEST ABDOMINAL (1 Min): </label>
                        <select>
                            <option selected disabled value="X" name="testabdominal">Seleccione una Opción</option>
                            <option value="excelente" name="testabdominal">EXCELENTE (44 +)</option>
                            <option value="bueno" name="testabdominal">BUENO (34 - 43)</option>
                            <option value="regular" name="testabdominal">REGULAR (25 - 33)</option>
                            <option value="malo" name="testabdominal">MALO (24 -)</option>
                        </select>
                    </div>
                </div>
                <div className={styles.rows}>
                    <div className={styles.field}>
                        <label for="testvelocidad">TEST VELOCIDAD (40 mt): </label>
                        <select>
                            <option selected disabled value="X" name="testvelocidad">Seleccione una Opción</option>
                            <option value="excelente" name="testvelocidad">EXCELENTE (4.5 seg)</option>
                            <option value="buena" name="testvelocidad">BUENO (4.4 - 5,1 seg)</option>
                            <option value="regular" name="testvelocidad">REGULAR (5.2 - 5.9 seg)</option>
                            <option value="malo" name="testvelocidad">MALO (6.0 seg +)</option>
                        </select>
                    </div>
                    <div className={styles.field}>
                        <label for="testsaltos">TEST SALTOS (Vertical): </label>
                        <select>
                            <option selected disabled value="X" name="testsaltos">Seleccione una Opción</option>
                            <option value="muyalto" name="testsaltos">MUY ALTO (10.1 mts +)</option>
                            <option value="alto" name="testsaltos">ALTO (8.5 - 10 mts)</option>
                            <option value="moderado" name="testsaltos">MODERADO (7.0 - 8.4 mts)</option>
                            <option value="bajo" name="testsaltos">BAJO (6.0 - 6.9 mts)</option>
                            <option value="muybajo" name="testsaltos">MUY BAJO (5,9 mts -) </option>

                        </select>
                    </div>
                    <div className={styles.field}>
                        <label for="testflexibilidad">TEST FLEXIBILIDAD (Piernas) : </label>
                        <select>
                            <option selected disabled value="X" name="testflexibilidad">Seleccione una Opción</option>
                            <option value="excelente" name="testflexibilidad">EXCELENTE (38,16 cem + )</option>
                            <option value="bueno" name="testflexibilidad">BUENO (31.08 - 38.15 cem)</option>
                            <option value="aceptable" name="testflexibilidad">ACEPTABLE (24.00 - 31.07 cem)</option>
                            <option value="deficiente" name="testflexibilidad">DEFICIENTE (16.22 - 23.99 cem)</option>
                            <option value="critico" name="testflexibilidad">CRITICO (16,21 cem -)</option>
                        </select>
                    </div>
                </div>
        </form>
        <button type="button" 
            className={styles.send_history}
            onClick={()=>sendTherapy()}
        >
            Enviar
        </button>
    </main>
    </>
    )
   
}
function mapStateToProps({ patients }) {
    return {
        userName: patients.userName
    }
}

export default connect(mapStateToProps)(Physiotherapy)