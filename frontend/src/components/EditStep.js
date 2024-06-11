import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStepById, updateStepContent } from '../services/api';

const EditStep = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState({
    stepNumber: '',
    title: '',
    content: '',
    imageUrl: ''
  });

  useEffect(() => {
    const fetchStep = async () => {
      const stepData = await getStepById(id);
      setStep(stepData);
    };
    fetchStep();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStep({
      ...step,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStepContent(id, step);
    navigate('/admin');
  };

  return (
    <div className="container my-4">
      <h2>Editar Passo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="stepNumber">Número do Passo</label>
          <input
            type="text"
            id="stepNumber"
            name="stepNumber"
            value={step.stepNumber}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={step.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Conteúdo</label>
          <textarea
            id="content"
            name="content"
            value={step.content}
            onChange={handleChange}
            className="form-control"
            rows="5"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">URL da Imagem</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={step.imageUrl}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Salvar</button>
      </form>
    </div>
  );
};

export default EditStep;
