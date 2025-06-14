# HybridFlow - Productivity Platform

A comprehensive hybrid work productivity solution that integrates Salesforce and Slack with modern 3D elements and AI-powered analytics.

## Features

- **🚀 Modern 3D Interface**: Interactive Spline 3D elements for engaging user experience
- **📊 Real-time Analytics**: AI-powered insights and productivity tracking
- **🔗 Seamless Integrations**: Native Salesforce and Slack connectivity
- **📱 Responsive Design**: Optimized for all devices and screen sizes
- **🤖 AI Recommendations**: Machine learning-driven productivity suggestions
- **🔒 Enterprise Security**: SOC 2, GDPR, and HIPAA compliance

## Tech Stack

### Frontend
- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Spline** - 3D graphics and interactions
- **Recharts** - Data visualization
- **Zustand** - State management

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Axios** - HTTP client for API integrations

### Integrations
- **Salesforce API** - CRM data and workflow automation
- **Slack API** - Team communication and collaboration

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Salesforce Developer Account
- Slack App credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hybridflow
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your Salesforce and Slack credentials in the `.env` file.

5. **Start the development servers**
   
   Backend server:
   ```bash
   cd server
   npm run dev
   ```
   
   Frontend (in a new terminal):
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## Configuration

### Salesforce Setup
1. Create a Connected App in Salesforce
2. Enable OAuth settings
3. Add your credentials to `.env`

### Slack Setup
1. Create a Slack App at api.slack.com
2. Configure OAuth & Permissions
3. Add your app credentials to `.env`

## API Endpoints

### Salesforce
- `POST /api/salesforce/auth` - Authenticate with Salesforce
- `GET /api/salesforce/leads` - Fetch leads data
- `GET /api/salesforce/opportunities` - Fetch opportunities

### Slack
- `POST /api/slack/auth` - Authenticate with Slack
- `GET /api/slack/channels` - Get channel list
- `POST /api/slack/messages` - Send messages

### Analytics
- `GET /api/analytics/productivity` - Get productivity metrics
- `GET /api/analytics/insights` - Get AI-generated insights

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── lib/                   # Utility libraries
│   ├── api.ts            # API client
│   ├── store.ts          # State management
│   └── utils.ts          # Helper functions
├── server/               # Backend server
│   ├── index.js         # Express server
│   └── package.json     # Server dependencies
└── public/              # Static assets
```

## Deployment

### Frontend (Vercel)
```bash
npm run build
```

### Backend (Railway/Heroku)
```bash
cd server
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support, email hello@hybridflow.com or join our Slack community.