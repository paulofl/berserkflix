import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    margin-bottom: 50px;
    flex: 1;
    .Stigma {
      height: 120px
    }
    p {
      font-size: 13px;
    }
  }
`;
