import './App.css'
import Navbar from './components/Navbar';
import Form from './components/Form';
import Requisicoes from './components/Requisicoes';
import Gerenciamento from './components/Gerenciamento';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Sobre from './components/Sobre';

function App() {

  const [data, setData] = useState([]);
  const [produto, setProduto] = useState('');
  const [nome, setNome] = useState('Lucas');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('Escritório');
  const [status, setStatus] = useState('Triagem');
  const [editingId, setEditingId] = useState(null);
  const [editingNome, setEditingNome] = useState('');
  const [editingProduto, setEditingProduto] = useState('')
  const [editingValor, setEditingValor] = useState('');
  const [editingTipo, setEditingTipo] = useState('');
  const [editingStatus, setEditingStatus] = useState('');

 

  const editData = (id, tipo, valor, produto) => {
    setEditingId(id);
    setEditingProduto(produto);
    setEditingValor(valor);
    setEditingTipo(tipo);
  };

  const fetchDataGer = async () => {
    try {
      const response = await fetch('http://localhost:3001/reembolso?status=Triagem');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };


  const fetchDataReq = async () => {
    try {
      const response = await fetch('http://localhost:3001/reembolso?nome=Lucas');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const createData = async () => {
    try {
      const response = await fetch('http://localhost:3001/reembolso', {
        method: 'POST',
        body: JSON.stringify({
          nome,
          produto,
          valor,
          tipo,
          status
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      setData([...posts, data]);
      setProduto('');
      setValor('');
      setTipo('')
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  const updateData = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/reembolso/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id,
          nome,
          produto: editingProduto,
          valor: editingValor,
          tipo: editingTipo,
          status
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const resposta = await response.json();
      const updatedData = data.map((item) => (item.id === id ? resposta : item));
      setData(updatedData);
      setEditingId(null);
      setEditingProduto('');
      setEditingTipo('');
      setEditingValor('')
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const deleteData = async (id) => {
    try {
      await fetch(`http://localhost:3001/reembolso/${id}`, {
        method: 'DELETE',
      });
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const aprovarData = async (id, produto, valor, tipo) => {
    try {
      const response = await fetch(`http://localhost:3001/reembolso/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id,
          nome,
          produto,
          valor,
          tipo,
          status: "Aprovado"
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const resposta = await response.json();
      const updatedData = data.map((item) => (item.id === id ? resposta : item));
      setData(updatedData);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const recusarData = async (id, produto, valor, tipo) => {
    try {
      const response = await fetch(`http://localhost:3001/reembolso/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id,
          nome,
          produto,
          valor,
          tipo,
          status: "Recusado"
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const resposta = await response.json();
      const updatedData = data.map((item) => (item.id === id ? resposta : item));
      setData(updatedData);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };


  return (
    <Router>

      <Navbar />

      <Routes>
      <Route path="/" element={
      <Form 
      valor={valor}
        setValor={setValor}
        produto={produto}
        setProduto={setProduto}
        tipo={tipo}
        setTipo={setTipo}
        createData={createData}/>} />
      <Route path="/requisicoes" element={
        <Requisicoes
        fetchDataReq={fetchDataReq}
        setData={setData}
        data={data}
        editingId={editingId}
        editData={editData}
        setEditingValor={setEditingValor}
        setEditingTipo={setEditingTipo}
        setEditingProduto={setEditingProduto}
        editingProduto={editingProduto}
        editingValor={editingValor}
        editingTipo={editingTipo}
        updateData={updateData}
        deleteData={deleteData}
      />
      } />
      <Route path="/gerenciamento" element={
        <Gerenciamento
        data={data}
        aprovarData={aprovarData}
        recusarData={recusarData}
        fetchDataGer={fetchDataGer}
      />

      } />
      <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
    
  )
}

export default App
