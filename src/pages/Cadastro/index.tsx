import React, { useState } from 'react';

const Cadastro: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aqui você pode enviar os dados do formulário para a API ou realizar outras ações de cadastro
    // Por exemplo, usando a função `auth.signup(email, password, phoneNumber, username)` 
    // se você estiver usando um contexto de autenticação.

    // Após o cadastro bem-sucedido, você pode redirecionar o usuário para a página de login 
    // ou para outra página relevante.
  };

  return (
    <div>
      <h2>CADASTRO</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="email" id="email" value={email} onChange={handleEmailChange}placeholder="Digite seu e-mail" 
             />
        </div>
        <div>
          <input type="password" id="password" value={password} onChange={handlePasswordChange}placeholder="Digite sua senha" /> 
        </div>
        <div>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange}placeholder="Digite seu número" />
        </div>
        <div>
          <input type="text" id="username" value={username} onChange={handleUsernameChange}placeholder="Digite seu Nome" />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
