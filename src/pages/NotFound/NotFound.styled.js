import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NotFoundWrapper = styled.div`
  background-image: url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-color: transparent;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NotFoundText = styled.p`
  margin: 0;
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const NotFoundLink = styled(Link)`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  border: 2px solid white;
  padding: 10px;
  background-color: white;
  text-decoration: none;
  border-radius: 8px;
  color: black;
`;
