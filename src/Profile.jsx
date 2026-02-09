import { useEffect, useContext } from "react";
import { UserContext } from "./context/UserContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { token, email, profile, getProfile, logout } = useContext(UserContext);
  const navigate = useNavigate();


  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token, getProfile]);

  if (!token) {
    return <p>Debes iniciar sesión para ver tu perfil.</p>;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <main className="profile-page">
      <h1>Perfil</h1>
      <p><strong>Email:</strong> {email}</p>

      {profile && (
        <div className="profile-data">
          <h3>Datos del usuario:</h3>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        </div>
      )}

      <button className="logout-btn" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </main>
  );
}

export default Profile;
