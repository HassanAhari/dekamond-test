export interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
}

export interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthLoading: boolean;
}