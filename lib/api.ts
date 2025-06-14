import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Salesforce Integration
export const salesforceAPI = {
  authenticate: async (credentials: { username: string; password: string; securityToken: string }) => {
    const response = await api.post('/salesforce/auth', credentials);
    return response.data;
  },
  
  getLeads: async () => {
    const response = await api.get('/salesforce/leads');
    return response.data;
  },
  
  getOpportunities: async () => {
    const response = await api.get('/salesforce/opportunities');
    return response.data;
  },
  
  createTask: async (task: any) => {
    const response = await api.post('/salesforce/tasks', task);
    return response.data;
  },
};

// Slack Integration
export const slackAPI = {
  authenticate: async (code: string) => {
    const response = await api.post('/slack/auth', { code });
    return response.data;
  },
  
  getChannels: async () => {
    const response = await api.get('/slack/channels');
    return response.data;
  },
  
  sendMessage: async (channel: string, message: string) => {
    const response = await api.post('/slack/messages', { channel, message });
    return response.data;
  },
  
  getTeamInfo: async () => {
    const response = await api.get('/slack/team');
    return response.data;
  },
};

// Analytics API
export const analyticsAPI = {
  getProductivityMetrics: async (timeframe: string = '30d') => {
    const response = await api.get(`/analytics/productivity?timeframe=${timeframe}`);
    return response.data;
  },
  
  getTeamPerformance: async (teamId: string) => {
    const response = await api.get(`/analytics/team/${teamId}`);
    return response.data;
  },
  
  getAIInsights: async () => {
    const response = await api.get('/analytics/insights');
    return response.data;
  },
};

export default api;