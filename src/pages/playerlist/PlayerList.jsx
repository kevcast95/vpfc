/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import NavBar from '../../NavBar';
import styles from './PlayerList.module.css';
import { getPatients } from '../../connection/firebase';

function PlayerList({ patientList }) {
  const dispatch = useDispatch();
  useEffect(() => {
    getPatients(dispatch);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className={styles.container}>
        <table className={styles.table}>
          <tr>
            <th>NOMBRE COMPLETO</th>
            {' '}
            <th>EDAD</th>
            {' '}
            <th>C.C</th>
            {' '}
            <th>CORREO</th>
            {' '}
            <th>CELULAR</th>
            {' '}
            <th>PESO</th>
          </tr>
          {
            patientList.map((patient) => (
              <tr key={`tr-elemt${patient.idDoc}`}>
                <td>
                  {' '}
                  <Link className={styles.link} to={`/${patient.idDoc}/PlayerView`}>{patient.nameP}</Link>
                </td>
                <td>
                  <Link className={styles.link} to={`/${patient.idDoc}/PlayerView`}>{patient.age}</Link>
                </td>
                <td>
                  <Link className={styles.link} to={`/${patient.idDoc}/PlayerView`}>{patient.idDoc}</Link>
                </td>
                <td>
                  <Link className={styles.link} to={`/${patient.idDoc}/PlayerView`}>{patient.email}</Link>
                </td>
                <td>
                  <Link className={styles.link} to={`/${patient.idDoc}/PlayerView`}>{patient.tel}</Link>
                </td>
                <td>
                  <Link className={styles.link} to={`/${patient.idDoc}/PlayerView`}>{patient.weight}</Link>
                </td>
              </tr>
            ))
        }
        </table>
        {patientList.length <= 0 && <h1 className={styles.no_players}>Aun no existen registro de jugadores</h1>}
      </main>
    </>

  );
}
function mapStateToProps({ patients }) {
  return {
    patientList: patients.patientList,
  };
}

export default connect(mapStateToProps)(PlayerList);
