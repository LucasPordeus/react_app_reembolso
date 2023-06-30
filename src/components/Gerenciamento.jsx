import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from 'react';


function Gerenciamento({ data, aprovarData, recusarData, fetchDataGer }) {

    useEffect(() => {
        fetchDataGer();
    }, [aprovarData, recusarData])

    return (
        <div className='requisicoes'>
            {data.map((item) => (
                <div key={item.id}>
                    <div className='requisicoes-container'>
                        <div className='requisicoes-container-um'>
                            <Avatar />
                            <p>{item.nome}</p>
                        </div>
                        <div className='requisicoes-container-dois'>
                            <p>Produto: {item.produto}</p>
                            <p>Valor: {item.valor}</p>
                            <p>Tipo: {item.tipo}</p>
                            <p>{item.status}</p>
                        </div>
                        <div className='requisicoes-container-tres'>
                            <button 
                            style={{backgroundColor: '#5767aa',color: 'white'}}
                            onClick={() => { if (window.confirm('Você tem certeza que quer APROVAR a solicitação?')) 
                            { aprovarData(item.id, item.produto, item.valor, item.tipo) } }}>
                                Aprovar
                            </button>
                            <button 
                            style={{backgroundColor:'white',color: 'orangered',borderColor: 'orangered'}}
                            onClick={() => { if (window.confirm('Você tem certeza que quer RECUSAR a solicitação?')) 
                            { recusarData(item.id, item.produto, item.valor, item.tipo) } }}>
                                Recusar
                            </button>

                        </div>
                    </div>

                </div>
            ))

            }


        </div>
    )
}

export default Gerenciamento;

