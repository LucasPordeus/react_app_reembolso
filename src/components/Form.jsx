function Form({
    produto,
    setProduto,
    valor,
    setValor,
    tipo,
    setTipo,
    createData,
    

}) {
    
    return (
        <div className='formulario'>
            <form>
                <div className='formulario-areas'>
                    <label htmlFor='produto'>Produto:</label>
                    <input
                        type='text'
                        name='produto'
                        value={produto}
                        onChange={(e) => setProduto(e.target.value)}
                        placeholder='Escreva o produto a ser reembolsado'
                    />
                </div>
                <div className='formulario-areas'>
                    <label htmlFor='valor'>Valor:</label>
                    <input
                        type='text'
                        name='valor'
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        placeholder='Escreva o valor do produto'
                    />
                </div>
                <div className='formulario-areas'>
                    <label htmlFor='gasto'>Tipo de gasto:</label>
                    <select
                        name='gasto'
                        onChange={(e) => setTipo(e.target.value)}
                    >
                        <option value="Escritório">Escritório</option>
                        <option value="Transporte"> Transporte</option>
                        <option value="Alimentação">Alimentação</option>
                    </select>

                </div>
                <div className='formulario-areas-botoes'>
                    <button
                        className='btn-enviar'
                        onClick={createData}
                    >
                        ENVIAR
                    </button>
                    <button
                        className='btn-limpar'
                        onClick={()=> {
                            setProduto('')
                            setValor('')
                            setTipo('')
                        }}
                    >
                        LIMPAR
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;