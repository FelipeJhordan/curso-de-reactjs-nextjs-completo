import { useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

export default function Abc() {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(function () {
      navigate('/');
    }, 5000);
  });

  return (
    <div>
      <h1>Olá sou a página 2</h1>
      <h1>{slug}</h1>
      {JSON.stringify(location).replace('{"', '').replace('"}', '').split(',')}
    </div>
  );
}
