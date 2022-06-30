import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import PokemonsList from './Pages/PokemonsList';
import LoginButton from './Pages/Login';
import { gapi } from 'gapi-script';
import { PrivateRoute } from './PrivateRoute';
import LogoutButton from './Pages/Logout';
import { useGoogleAuth } from './context/GoogleAuthContext';
import { Searchbar } from './Pages/Searchbar';
import SavedPokemon from './Pages/SavedPokemon';
function App() {
  const { token, name, email } = useGoogleAuth();

  return (
    <div className='App'>
      {token && (
        <nav className='nav-bar'>
          <div className='left-container'>
            {token && <NavLink to='/list'>Home</NavLink>}
            {token && <NavLink to='/saved'>Saved Pokemons</NavLink>}
          </div>
          <div className='search-bar'>{token && <Searchbar />}</div>
          <div className='right-container'>{token && <LogoutButton />}</div>
        </nav>
      )}
      {token && (
        <div className='user-info'>
          <p>Name - {name ? name : 'Loading...'}</p>
          <p>Email - {email ? email : 'Loading...'}</p>
        </div>
      )}
      <Routes>
        <Route path='/' element={<LoginButton />} />
        <Route
          path='/list'
          element={
            <PrivateRoute>
              <PokemonsList />
            </PrivateRoute>
          }
        />
        <Route
          path='/saved'
          element={
            <PrivateRoute>
              <SavedPokemon />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
