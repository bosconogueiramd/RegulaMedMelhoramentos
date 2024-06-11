import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { getUsers, deleteUser, getStepsContent } from '../services/api';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [steps, setSteps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
    fetchSteps();
  }, []);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response);
  };

  const fetchSteps = async () => {
    const response = await getStepsContent();
    setSteps(response);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  const handleEditUser = (id) => {
    navigate(`/edit-user/${id}`);
  };

  const handleEditStep = (id) => {
    navigate(`/edit-step/${id}`);
  };

  return (
    <div>
      <Header />
      <main className="container my-4">
        <h2>Gestão Administrativa</h2>
        <h3>Usuários</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CRM</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.fullName}</td>
                <td>{user.crm}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEditUser(user._id)} className="btn btn-warning">Editar</button>
                  <button onClick={() => handleDelete(user._id)} className="btn btn-danger">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Passos</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Número do Passo</th>
              <th>Título</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {steps.map(step => (
              <tr key={step._id}>
                <td>{step.stepNumber}</td>
                <td>{step.title}</td>
                <td>
                  <button onClick={() => handleEditStep(step._id)} className="btn btn-warning">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
