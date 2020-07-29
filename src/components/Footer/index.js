import React from 'react';
import { FooterBase } from './styles';
import Stigma from '../../assets/Stigma.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://berserk.fandom.com/pt-br/wiki/P%C3%A1gina_principal">
        <img className="Stigma" src={Stigma} alt="Berserkflix Marca" />
      </a>
      <p>
        Todos se deixam levar pela correnteza daquilo chamado destino ou coisa parecida, para no final desaparecerem do mundo, desperdiçando suas vidas, sem ao menos descobrirem o signigico de suas existências...
      </p>
    </FooterBase>
  );
}

export default Footer;
