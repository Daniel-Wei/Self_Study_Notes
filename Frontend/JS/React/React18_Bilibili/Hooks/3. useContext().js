import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

let App = function MyApp() {
    const [theme, setTheme] = useState('light');
    return (
        <MyProviders theme={theme} setTheme={setTheme}>
            <WelcomePanel />
              <label>
                  <input
                      type="checkbox"
                      checked={theme === 'dark'}
                      onChange={(e) => {
                        setTheme(e.target.checked ? 'dark' : 'light')
                      }}
                  />
                  Use dark mode
              </label>
        </MyProviders>
    );
}


// group 2 contexts as a component
function MyProviders({ children, theme, setTheme }) {
    const [currentUser, setCurrentUser] = useState(null);
    return (
        <ThemeContext value={theme}>
            <CurrentUserContext
                value={{
                  currentUser,
                  setCurrentUser
                }}
              >
                {children}
            </CurrentUserContext>
        </ThemeContext>
    );
}

function WelcomePanel({ children }) {
    // useContext() always looks for the closest provider above the component that calls it. 
    // It searches upwards and does not consider providers in the component from which you’re calling useContext()
    const {currentUser} = useContext(CurrentUserContext);
    return (
        <Panel title="Welcome">
            {currentUser !== null ?
                <Greeting /> :
                <LoginForm />
            }
        </Panel>
    );
}

function Greeting() {
  const {currentUser} = useContext(CurrentUserContext);
  return (
    <p>You logged in as {currentUser.name}.</p>
  )
}

function LoginForm() {
    const {setCurrentUser} = useContext(CurrentUserContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const canLogin = firstName !== '' && lastName !== '';
    return (
        <>
            <label>
                First name{': '}
                <input
                    required
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                />
            </label>
            <label>
                  Last name{': '}
                  <input
                      required
                          value={lastName}
                          onChange={e => setLastName(e.target.value)}
                  />
            </label>
            <Button
                disabled={!canLogin}
                onClick={() => {
                    setCurrentUser({
                        name: firstName + ' ' + lastName
                    });
                }}
            >
                Log in
            </Button>
          {!canLogin && <i>Fill in both fields.</i>}
        </>
    );
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({ children, disabled, onClick }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
        <button
            className={className}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}


const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
