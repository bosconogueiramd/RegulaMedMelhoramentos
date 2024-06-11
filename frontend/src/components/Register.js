import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { registerUser } from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    crm: '',
    birthDate: '',
    isAdmin: false,
    matricula: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, crm, birthDate, isAdmin, matricula, email, password } = formData;
    const newUser = { fullName, crm, birthDate, isAdmin, email, password };
    if (isAdmin) {
      newUser.matricula = matricula;
    }
    const response = await registerUser(newUser);
    if (response.message === 'Usuário registrado com sucesso') {
      navigate('/'); // Redirecionar para a página de login
    }
  };

  return (
    <div>
      <Header />
      <main className="container my-4">
        <div className="register-form">
          <h2>Cadastro de Usuário</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Nome Completo: </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="crm">CRM: </label>
              <input
                type="text"
                id="crm"
                name="crm"
                value={formData.crm}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthDate">Data de Nascimento: </label>
              <input
                type="text"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="form-control"
                placeholder="DD/MM/AAAA"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail: </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha: </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                id="isAdmin"
                name="isAdmin"
                checked={formData.isAdmin}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="isAdmin">Cadastrar como Administrador</label>
            </div>
            {formData.isAdmin && (
              <div className="form-group">
                <label htmlFor="matricula">Matrícula</label>
                <input
                  type="text"
                  id="matricula"
                  name="matricula"
                  value={formData.matricula}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            )}
            <button type="submit" className="btn btn-primary">Registrar</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
