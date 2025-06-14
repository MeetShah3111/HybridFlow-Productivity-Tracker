import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

interface Team {
  id: string;
  name: string;
  members: User[];
  productivity: number;
  engagement: number;
}

interface AppState {
  user: User | null;
  teams: Team[];
  isLoading: boolean;
  setUser: (user: User) => void;
  setTeams: (teams: Team[]) => void;
  setLoading: (loading: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  teams: [],
  isLoading: false,
  setUser: (user) => set({ user }),
  setTeams: (teams) => set({ teams }),
  setLoading: (isLoading) => set({ isLoading }),
}));