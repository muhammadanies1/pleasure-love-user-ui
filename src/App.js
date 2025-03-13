
import { Button } from 'antd';
import './App.css';
import { useNavigate } from 'react-router';

function App() {

  const navigate = useNavigate()

  const toCart = () => {
    navigate('/cart')
  }

  return (
    <div
      style={{ display:"flex", flexDirection:"column", width:"100%", gap:"10px", justifyContent:'center' }}
    >
      <div>
        Home
      </div>
      <Button type='primary' size='large' onClick={toCart}>
        Cart
      </Button>
      
    </div>
  );
}

export default App;
