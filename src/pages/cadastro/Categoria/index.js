import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return (
      <PageDefault>
        <h1>Cadastro de Categorias</h1>

        <Link to="/">
          Voltar para Página Inicial
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;