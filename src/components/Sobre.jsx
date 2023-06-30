function Sobre() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '60vw',
            margin: '50px auto'
        }}>
            <h1 style={{ fontSize: '40px', textAlign: 'center' }}>Sobre o Aplicativo</h1>
            <p>Aplicativo desenvolvido pelo aluno Lucas Gabriel, tem como funcionalidade
                ajudar na gestão financeira de empresas de pequeno e médio porte, aplicativo simples com boa usabilidade
                pensado para suprir a necessidade organizacional financeira das empresas.
            </p>
            <br></br>
            <h2>Instruções:</h2>
            <h3>Formulário</h3>
            <p>Na página REEMBOLSO você deve preencher o formulário com as informações
                do produto que você deseja realizar o reembolso.
            </p>
            <br></br>
            <h3>Minhas Solicitações:</h3>
            <p>Na página REQUISIÇÕES será exibido todas as solicitações de reembolso feitas por você
                contendo todas as informações preenchidas, junto com o STATUS, podendo ser APROVADO, RECUSADO, TRIAGEM
            </p>
            <br></br>
            <h3>Gerenciamento</h3>
            <p>Na página GERENCIAMENTO será exibido todas as solicitações de reembolso feitas por todos os usuarios da
                plataforma, se você for um GERENTE, poderá APROVAR ou RECUSAR as solicitações em TRIAGEM.
            </p>

        </div>
    )
}

export default Sobre;