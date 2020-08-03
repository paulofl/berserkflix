import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Vídeo Padrão',
    url: 'https://www.youtube.com/watch?v=c5OayaAwDnI',
    categoria: 'Music',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeos</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Vídeo cadastrado com sucesso!!');

        const categoriaId = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.url,
          url: values.url,
          categoriaId,
        })
          .then(() => {
            // eslint-disable-next-line no-console
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });

        history.push('/');
      }}
      >
        <FormField
          label="Titulo do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
      </form>

      <Button>Cadastrar</Button>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
