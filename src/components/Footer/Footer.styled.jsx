import styled from '@emotion/styled';

export const Box = styled.footer`
  border-top: 1px solid ${p => `${p.theme.colors.secondary}`};
  height: 60px;
  text-align: center;
  padding: 20px;
`;

export const Text = styled.p``;

export const Link = styled.a`
  color: ${p => `${p.theme.colors.secondary}`};
  margin-left: 5px;
`;
