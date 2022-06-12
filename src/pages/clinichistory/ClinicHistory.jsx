import React, { useState } from "react";
import styles from "./ClinicHistory.module.css"
import NavBar from "../../NavBar"
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {  useParams } from 'react-router-dom'
import { addClinicalHistory } from "../../connection/firebase"


function ClinicHistory({ patientList,userName }){
    const [clinicHistoryLocal, setClinicHistoryLocal] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const { id } = params
    const currentPatient = patientList?.filter((patient => patient.idDoc === id))
    const historyPatient = currentPatient[0]
    const sendClinicalHistory = () => {
        addClinicalHistory({...clinicHistoryLocal, doctor: userName.name, idDoc: id},navigate)
    }

    return(
        <>
            <header>
                <NavBar/>  
            </header>
            <main className={styles.container}>
                <h1 className={styles.title}>Historia Clínica</h1>
                <h2 style={{marginLeft: "20px"}}>
                    <b>Paciente: </b> {historyPatient.nameP}
                </h2>
                <form className={styles.containerForm}>
                    
                    {/* Datos personales */}
                    <div className={styles.rows}>
                        <div className={styles.field}>
                            <label for="cc">N° Identificación: </label>
                            <input type="number" name="cc" value={historyPatient.idDoc} disabled/>
                        </div>
                        <div className={styles.field}>
                            <label for="sexo">Sexo: </label>
                            <select name="sex" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}>
                                <option selected disabled value="X" name="sexo">Seleccione una Opción</option>
                                <option value="M" name="sexo">Maculino</option>
                                <option value="F" name="sexo">Fememino</option>
                            </select>
                            
                        </div>
                        <div className={styles.field}>
                            <label for="number">Numero: </label>
                            <input type="number"  name="number" value={historyPatient.tel} disabled/> 
                        </div>
                        <div className={styles.field}>
                            <label for="direccion">Dirección: </label>
                            <input type="text" name="direccion" value={historyPatient.address} disabled/>
                        </div>
                    </div>
                    <div className={styles.rowTextbox}>
                        <div className={styles.textBox}>
                            <label for="consulta"> <h4>Motivo de consulta: </h4> </label>
                            <textarea name="consultation" cols="30" rows="5" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}></textarea>
                        </div>
                        <div className={styles.textBox}>
                            <label for="lesion"> <h4>Descripción de la lesión: </h4> </label>
                            <textarea name="injury" cols="30" rows="5" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}></textarea>
                        </div>
                        <div className={styles.textBox}>
                            <label for="enfermedad"> <h4>Enfermedad actual (Descripción): </h4> </label>
                            <textarea name="illness" cols="30" rows="5" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}></textarea>
                        </div>
                    </div>
                    <div className={styles.rows}>
                        <div className={styles.field}>
                            <label for="medicamento">Está tomando algún medicamento: </label>
                            <input type="text" placeholder="¿Cuál?"  name="medicine" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}/>
                        </div>
                        <div className={styles.field}>
                            <label for="alergia">Alergias a medicamentos: </label>
                            <input type="text" placeholder="¿Cuales?" name="allergy" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}/>
                        </div>
                        <div className={styles.field}>
                            <label for="tipoSangre">Grupo sanguíneo: </label>
                            <select name="bloodType" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}>
                                <option selected disabled value="X" name="tipoSangre">Seleccione una Opción</option>
                                <option value="o-" name="tipoSangre">O-</option>
                                <option value="o+" name="tipoSangre">O+</option>
                                <option value="a-" name="tipoSangre">A-</option>
                                <option value="a+" name="tipoSangre">A+</option>
                                <option value="b-" name="tipoSangre">B-</option>
                                <option value="b+" name="tipoSangre">B+</option>
                                <option value="ab-" name="tipoSangre">AB-</option>
                                <option value="ab+" name="tipoSangre">AB+</option>
                            </select>   
                        </div>
                        <div className={styles.radio}>
                        <label for="tranfusion">¿Has hecho alguna transfusión?</label>
                            <div>
                                <input type="radio" name="tranfusion" value="Si" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})} /> Si
                            </div>
                            <div>
                                <input type="radio" name="tranfusion" value="No" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})} /> No
                            </div>
                        </div>
                    </div>
                    <div className={styles.rows}>
                        <div className={styles.field}>
                            <label for="inconveniente">¿Has tenido alguna reacción a la transfusión?</label>
                            <input type="text" placeholder="¿Cuál?" name="tranfusionReaction" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}/>
                        </div>                    
                        <div className={styles.radio}>
                        <label for="cirugia">¿Has tenido alguna cirugía? </label>
                        <div>
                            <input type="radio" name="surgeryBool"  value="Si" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}/> Si
                        </div>
                        <div>
                            <input type="radio" name="surgeryBool" value="No" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}/> No
                        </div>
                        </div>
                        <div className={styles.textBox}>
                            <textarea name="surgery" cols="30" rows="5" placeholder="¿Cuál? ¿Cuándo?" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}></textarea>          
                        </div>
                        
                        <div className={styles.field}>
                            <label for="doctor">Doctor responsable:</label>
                            <input type="text" name="doctor" value={userName.name} onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}/>
                        </div>      
                    </div>
                    <div className={styles.rows}>
                        <div className={styles.check}>
                            <h3>Antecedentes Personales Patologicos</h3>
                            <label for="cardio">Cardiovasculares</label>
                            <input type="checkbox" value="cardio"/>
                            <label for="pulmonar">Pulmonares</label>
                            <input type="checkbox" value="pulmonar" />
                            <label for="pulmonar">Digestivos</label>
                            <input type="checkbox" value="pulmonar" /> 
                            <label for="pulmonar">Diabetes</label> 
                            <input type="checkbox" value="pulmonar" /> <br />
                            <label for="pulmonar">Renales</label>
                            <input type="checkbox" value="pulmonar" />
                            <label for="pulmonar">Quirúrgicos</label>
                            <input type="checkbox" value="pulmonar" />
                            <label for="pulmonar">Transfusiones</label>
                            <input type="checkbox" value="pulmonar" />
                        </div>
                        <div className={styles.textBox}>
                            <textarea name="medicamentos_APP" cols="30" rows="5" placeholder="Medicamentos:" ></textarea>          
                        </div>
                        <div className={styles.textBox}>
                            <textarea name="especifique_APP" cols="30" rows="5" placeholder="Especifique:" ></textarea>          
                        </div>
                    </div>
                    <div className={styles.rows}>
                        <div className={styles.check}>
                            <h3>Antecedentes Personales No Patologicos</h3>
                            <label for="alcohol">Alcoholismo</label>
                            <input type="checkbox" value="alcohol"/>
                            <label for="tabaquismo">Tabaquismo</label>
                            <input type="checkbox" value="tabaquismo" />
                            <label for="inmunizaciones">Inmunizaciones</label>
                            <input type="checkbox" value="inmunizaciones" />
                        </div>
                        <div className={styles.textBox}>
                            <textarea name="tipos_drogas" cols="30" rows="5" placeholder="¿Cuales Drogas?" ></textarea>          
                        </div>
                        <div className={styles.textBox}>
                            <textarea name="otras_enfermedades" cols="30" rows="5" placeholder="Otros:" ></textarea>          
                        </div>
                    </div>
                    <h3 className={styles.antecedentesF}>Antecedentes Familiares</h3>
                    <div className={styles.rows}>
                        <div className={styles.radio}>
                            <label for="viveP"> Padre: Vive </label>
                            <div>
                                <input type="radio" name="viveP"  value="Si" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}/> Si
                            </div>
                            <div>
                                <input type="radio" name="viveP" value="No" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}/> No
                            </div>
                        </div>
                        <div className={styles.textBox}>
                            <textarea name="enfermedadesP" cols="20" rows="5" placeholder="Enfermedades que padece:" ></textarea>          
                        </div>
                        <div className={styles.radio}>
                            <label for="viveM"> Madre: Vive </label>
                            <div>
                                <input type="radio" name="viveM"  value="Si" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}/> Si
                            </div>
                            <div>
                                <input type="radio" name="viveM" value="No" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}/> No
                            </div>
                        </div>
                        <div className={styles.textBox}>
                            <textarea name="enfermedadesM" cols="20" rows="5" placeholder="Enfermedades que padece:" ></textarea>          
                        </div>
                    </div>
                    <div className={styles.rows}>
                        <div className={styles.radio}>
                            <label for="viveH"> Hermanos: Vive </label>
                            <div>
                                <input type="radio" name="viveH"  value="Si" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}/> Si
                            </div>
                            <div>
                                <input type="radio" name="viveH" value="No" onChange={({target})=>setClinicHistoryLocal({...clinicHistoryLocal, [target.name]: target.value})}/> No
                            </div>
                        </div>
                        <div className={styles.field}>
                            <label for="numerohermanos">Cuantos? </label>
                            <input type="number"  name="numerohermanos" /> 
                        </div>
                        <div className={styles.textBox}>
                            <textarea name="enfermedadesH" cols="20" rows="5" placeholder="Enfermedades que padece:" ></textarea>          
                        </div>
                    </div>
                    <div className={styles.rows}>
                        <div className={styles.files}>
                            <label for="ecografia"><b>ECOGRAFIAS</b></label>
                            <input type="file" name="ecografia"/>
                        </div>
                        <div className={styles.files}>
                            <label for="radiografia"><b>RADIOGRAFIAS</b></label>
                            <input type="file" name="radiografia"/>
                        </div>
                        <div className={styles.files}>
                            <label for="resonancia"><b>RESONANCIAS</b></label>
                            <input type="file" name="resonancia"/>
                        </div>
                        <div className={styles.files}>
                            <label for="ecocardiogramas"><b>ECOCARDIOGRAMAS</b></label>
                            <input type="file" name="ecocardiogramas"/>
                        </div>
                    </div>
                    <div className={styles.rows}>
                        <div className={styles.files}>
                            <label for="electrocardiograma"> <b>ELECTROCARDIOGRAMA</b></label>
                            <input type="file" name="electrocardiograma"/>
                        </div>
                        <div className={styles.files}>
                            <label for="examenesLab"><b>EXAMENES DE LABORATORIO</b></label>
                            <input type="file" name="examenesLab"/>
                        </div>
                        <div className={styles.files}>
                            <label for="cuadroHematico"><b>CUADRO HEMATICO</b></label>
                            <input type="file" name="cuadroHematico"/>
                        </div>
                        <div className={styles.files}>
                            <label for="parcialOrina"><b>PARCIAL DE ORINA</b></label>
                            <input type="file" name="parcialOrina"/>
                        </div>

                    </div>
                </form>
                <button type="button" className={styles.send_history} onClick={()=>sendClinicalHistory()}>
                    Enviar
                </button>
            </main>
        </>
        
    )
}

function mapStateToProps({ patients }) {
    return {
        patientList: patients.patientList,
        userName: patients.userName
    }
}

export default connect(mapStateToProps)(ClinicHistory)