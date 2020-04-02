import React, { Component } from 'react';
import { FaGitAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newRepositorio: '',
    repositories: [],
    loading: false,
  };

  handleInputChange = (e) => {
    this.setState({ newRepositorio: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepositorio, repositories } = this.state;

    const response = await api.get(`/repos/${newRepositorio}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepositorio: '',
      loading: false,
    });
  };

  render() {
    const { newRepositorio, loading } = this.state;

    return (
      <Container>
        <h1>
          <FaGitAlt />
          Repositórios Github
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositorio"
            value={newRepositorio}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
