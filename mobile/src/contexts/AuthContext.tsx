import { createContext, ReactNode } from 'react';

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

// armazenar o conteudo do contexto
export const AuthContext = createContext({} as AuthContextDataProps);

// permite compartilhar o contexto com toda a aplicação
export function AuthContextProvider({ children }: AuthProviderProps) {
  async function signIn() {
    console.log('Uhuul');
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: 'Arlan Biati',
          avatarUrl: 'https://github.com/ArlanBiati.png',
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
