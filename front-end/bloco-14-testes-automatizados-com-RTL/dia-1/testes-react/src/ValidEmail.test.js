import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';
import App from './App';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } isSent={ true } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando se a mensagem que valida o email aparece apenas quando o email é enviado', () => {
  render(<App />);
  // 'Email Válido' : 'Email Inválido'
  // const msg = screen.getByText(/Email Válido|Email Inválido/);
  const textEmail = screen.queryByTestId('id-email-user');

  expect(textEmail).not.toBeInTheDocument();
});

test('Testando se recebe a classe valid, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } isSent={ true } />);
  const email = screen.queryByTestId('id-email-user');
  expect(email).toHaveAttribute('class', 'valid');
});

test('Testando se recebe a classe invalid, caso o email seja inválido.', () => {
  const EMAIL_USER = 'email';
  render(<ValidEmail email={ EMAIL_USER } isSent={ true } />);
  const email = screen.queryByTestId('id-email-user');
  expect(email).toHaveAttribute('class', 'invalid');
});