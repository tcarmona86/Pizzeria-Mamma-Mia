import { useNavigate } from 'react-router-dom';


function Profile() {
  const navigate = useNavigate();


  const userEmail = "usuario@ejemplo.com";

  const handleLogout = () => {
    console.log("Sesión cerrada");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <h1>Perfil del Usuario</h1>
      <p><strong>Email:</strong> {userEmail}</p>
      <button className="logout-button" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Profile;
