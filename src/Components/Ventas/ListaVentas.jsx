
/*
Por: Andrés Roca
github: @andresrokp
basado en: material-ui dashboard
*/

import React, { Fragment } from 'react'
import { BotonModal } from './MenuScheme/BotonModal';

export const ListaVentas = ( props ) => {
    
    return (
        <Fragment>
            <div className="col-lg-12">
                <div className="card mb-0">
                    <div className="card-header">
                        <h3 className="h4 mb-0 text-center">Listado total de Ventas</h3>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table mb-0 table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Fecha</th>
                                        <th>Encargado</th>
                                        <th>Cliente</th>
                                        <th>Valor</th>
                                        <th>Estado</th>
                                        <th> . </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.totalList.map((elem)=>(
                                        <tr key={elem.id}>
                                            <th scope="row">{elem.id}</th>
                                            <td>{elem.fecha}</td>
                                            <td>{elem.encargado}</td>
                                            <td>{elem.nomCliente}</td>
                                            <td>{elem.valor}</td>
                                            <td>{elem.estado}</td>
                                            <td> <BotonModal btnName={'Editar'} btnNumber={2} curElem={elem} propsLP={props}/></td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <th className="border-bottom-0" scope="row"></th>
                                        <td className="border-bottom-0"></td>
                                        <td className="border-bottom-0"></td>
                                        <td className="border-bottom-0"></td>
                                        <td className="border-bottom-0"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
