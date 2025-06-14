const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Salesforce configuration
const SALESFORCE_CONFIG = {
  loginUrl: process.env.SALESFORCE_LOGIN_URL || 'https://login.salesforce.com',
  clientId: process.env.SALESFORCE_CLIENT_ID,
  clientSecret: process.env.SALESFORCE_CLIENT_SECRET,
  redirectUri: process.env.SALESFORCE_REDIRECT_URI,
};

// Slack configuration
const SLACK_CONFIG = {
  clientId: process.env.SLACK_CLIENT_ID,
  clientSecret: process.env.SLACK_CLIENT_SECRET,
  redirectUri: process.env.SLACK_REDIRECT_URI,
};

// In-memory storage (use database in production)
let salesforceTokens = {};
let slackTokens = {};

// Salesforce Routes
app.post('/api/salesforce/auth', async (req, res) => {
  try {
    const { username, password, securityToken } = req.body;
    
    const authData = {
      grant_type: 'password',
      client_id: SALESFORCE_CONFIG.clientId,
      client_secret: SALESFORCE_CONFIG.clientSecret,
      username,
      password: password + securityToken,
    };

    const response = await axios.post(
      `${SALESFORCE_CONFIG.loginUrl}/services/oauth2/token`,
      new URLSearchParams(authData),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    salesforceTokens = response.data;
    res.json({ success: true, data: response.data });
  } catch (error) {
    console.error('Salesforce auth error:', error.response?.data || error.message);
    res.status(400).json({ error: 'Authentication failed' });
  }
});

app.get('/api/salesforce/leads', async (req, res) => {
  try {
    if (!salesforceTokens.access_token) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const response = await axios.get(
      `${salesforceTokens.instance_url}/services/data/v58.0/query/?q=SELECT Id, Name, Email, Company, Status FROM Lead LIMIT 10`,
      {
        headers: {
          Authorization: `Bearer ${salesforceTokens.access_token}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Salesforce leads error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

app.get('/api/salesforce/opportunities', async (req, res) => {
  try {
    if (!salesforceTokens.access_token) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const response = await axios.get(
      `${salesforceTokens.instance_url}/services/data/v58.0/query/?q=SELECT Id, Name, Amount, StageName, CloseDate FROM Opportunity LIMIT 10`,
      {
        headers: {
          Authorization: `Bearer ${salesforceTokens.access_token}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Salesforce opportunities error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch opportunities' });
  }
});

// Slack Routes
app.post('/api/slack/auth', async (req, res) => {
  try {
    const { code } = req.body;

    const response = await axios.post('https://slack.com/api/oauth.v2.access', {
      client_id: SLACK_CONFIG.clientId,
      client_secret: SLACK_CONFIG.clientSecret,
      code,
      redirect_uri: SLACK_CONFIG.redirectUri,
    });

    slackTokens = response.data;
    res.json({ success: true, data: response.data });
  } catch (error) {
    console.error('Slack auth error:', error.response?.data || error.message);
    res.status(400).json({ error: 'Authentication failed' });
  }
});

app.get('/api/slack/channels', async (req, res) => {
  try {
    if (!slackTokens.access_token) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const response = await axios.get('https://slack.com/api/conversations.list', {
      headers: {
        Authorization: `Bearer ${slackTokens.access_token}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Slack channels error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch channels' });
  }
});

app.post('/api/slack/messages', async (req, res) => {
  try {
    const { channel, message } = req.body;

    if (!slackTokens.access_token) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const response = await axios.post(
      'https://slack.com/api/chat.postMessage',
      {
        channel,
        text: message,
      },
      {
        headers: {
          Authorization: `Bearer ${slackTokens.access_token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Slack message error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Analytics Routes
app.get('/api/analytics/productivity', (req, res) => {
  const { timeframe } = req.query;
  
  // Mock data - replace with real analytics
  const mockData = {
    '7d': [
      { date: '2025-01-01', productivity: 85, engagement: 78, satisfaction: 82 },
      { date: '2025-01-02', productivity: 88, engagement: 81, satisfaction: 85 },
      { date: '2025-01-03', productivity: 82, engagement: 75, satisfaction: 79 },
      { date: '2025-01-04', productivity: 90, engagement: 85, satisfaction: 88 },
      { date: '2025-01-05', productivity: 87, engagement: 83, satisfaction: 86 },
      { date: '2025-01-06', productivity: 92, engagement: 88, satisfaction: 91 },
      { date: '2025-01-07', productivity: 89, engagement: 86, satisfaction: 88 },
    ],
    '30d': Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      productivity: Math.floor(Math.random() * 20) + 75,
      engagement: Math.floor(Math.random() * 20) + 70,
      satisfaction: Math.floor(Math.random() * 20) + 72,
    })),
  };

  res.json(mockData[timeframe] || mockData['30d']);
});

app.get('/api/analytics/insights', (req, res) => {
  const insights = [
    {
      id: 1,
      type: 'optimization',
      title: 'Meeting Optimization Opportunity',
      description: 'Reduce daily meetings by 30 minutes to increase focus time',
      impact: 'high',
      timeframe: '1 week',
      confidence: 0.87,
    },
    {
      id: 2,
      type: 'collaboration',
      title: 'Cross-team Communication',
      description: 'Increase collaboration between Sales and Marketing teams',
      impact: 'medium',
      timeframe: '2 weeks',
      confidence: 0.73,
    },
    {
      id: 3,
      type: 'automation',
      title: 'Workflow Automation',
      description: 'Automate status report generation to save 2 hours weekly',
      impact: 'high',
      timeframe: '3 days',
      confidence: 0.92,
    },
  ];

  res.json(insights);
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});