import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { getUserById, updateUser } from '../services/api';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: '',
    crm: '',
    email: '',
    birthDate: '',
    isAdmin: false,
    matricula: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserById(id);
      setUser(userData);
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(id, user);
    navigate('/admin');
  };

  return (
    <div>
      <Header />
      <main className="container my-4">
        <h2>Editar Usuário</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome Completo</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>CRM</label>
            <input
              type="text"
              className="form-control"
              name="crm"
              value={user.crm}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Data de Nascimento</label>
            <input
              type="date"
              className="form-control"
              name="birthDate"
              value={user.birthDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Administrador</label>
            <input
              type="checkbox"
              className="form-check-input"
              name="isAdmin"
              checked={user.isAdmin}
              onChange={() => setUser({ ...user, isAdmin: !user.isAdmin })}
            />
          </div>
          {user.isAdmin && (
            <div className="form-group">
              <label>Matrícula</label>
              <input
                type="text"
                className="form-control"
                name="matricula"
                value={user.matricula}
                onChange={handleChange}
              />
            </div>
          )}
          <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default EditUser;
