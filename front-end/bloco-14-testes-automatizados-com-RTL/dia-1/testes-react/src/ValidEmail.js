import React from 'react';
import PropTypes from 'prop-types';
import './ValidEmail.css'

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email, isSent } = props;
  return (
    <div>
      { isSent && (
        <>
          <h2
            className={(verifyEmail(email) ? 'valid' : 'invalid')}
            data-testid="id-email-user">{`Valor: ${email}`}
          </h2>
          <h3>{(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>
        </>
      )}
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;