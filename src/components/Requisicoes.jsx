import Avatar from '@mui/material/Avatar';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useEffect } from 'react';


function Requisicoes({ data,
    setData,
    editingId,
    editData,
    setEditingValor,
    setEditingTipo,
    setEditingProduto,
    editingValor,
    editingTipo,
    editingProduto,
    updateData,
    deleteData,
    fetchDataReq
}) {

    useEffect(() => {
        fetchDataReq();
      }, [])

    return (
        <div className='requisicoes'>
            {data.map((item) => (
                <div key={item.id}>
                    {editingId === item.id ? (
                        <div className='requisicoes-container'>
                            <div className='requisicoes-container-um'>
                                <Avatar />
                                <p>{item.nome}</p>
                            </div>
                            <div className='requisicoes-container-dois'>
                                <label htmlFor='produto'>Produto:</label>
                                <input
                                    name='produto'
                                    type="text"
                                    value={editingProduto}
                                    onChange={(e) => setEditingProduto(e.target.value)}
                                    className="input-field"
                                />
                                <br></br>
                                <label htmlFor='valor'>Valor:</label>
                                <input
                                    name='valor'
                                    type="text"
                                    value={editingValor}
                                    onChange={(e) => setEditingValor(e.target.value)}
                                    className="input-field"
                                />
                                <br></br>
                                <label htmlFor='tipo'>Tipo:</label>
                                <select
                                    name='tipo'
                                    onChange={(e) => setEditingTipo(e.target.value)}
                                >
                                    <option value="Escritório">Escritório</option>
                                    <option value="Transporte"> Transporte</option>
                                    <option value="Alimentação">Alimentação</option>
                                </select>
                                <p>{item.status}</p>

                            </div>
                            <div>
                                <button onClick={() => updateData(item.id)}>Atualizar Publicação</button>
                            </div>

                        </div>
                    ) : (
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
                                <button onClick={() => editData(item.id, item.produto, item.valor, item.tipo)}>
                                    <FaEdit /></button>
                                <button onClick={
                                    () => { if (window.confirm('Você tem certeza que quer deletar?')) { deleteData(item.id) } }
                                }><FaTrash /></button>
                            </div>
                        </div>
                    )

                    }
                </div>
            )
            )}


        </div>
    )
}


export default Requisicoes;