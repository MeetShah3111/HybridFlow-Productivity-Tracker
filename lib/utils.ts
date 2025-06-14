export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date: Date | string) {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatTime(date: Date | string) {
  const d = new Date(date);
  return d.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function calculateProductivityScore(metrics: {
  tasksCompleted: number;
  meetingsAttended: number;
  messagesResponded: number;
  hoursWorked: number;
}) {
  const { tasksCompleted, meetingsAttended, messagesResponded, hoursWorked } = metrics;
  
  // Weighted scoring algorithm
  const taskWeight = 0.4;
  const meetingWeight = 0.2;
  const responseWeight = 0.2;
  const timeWeight = 0.2;
  
  const taskScore = Math.min(tasksCompleted * 10, 100);
  const meetingScore = Math.min(meetingsAttended * 15, 100);
  const responseScore = Math.min(messagesResponded * 2, 100);
  const timeScore = Math.min((hoursWorked / 8) * 100, 100);
  
  return Math.round(
    taskScore * taskWeight +
    meetingScore * meetingWeight +
    responseScore * responseWeight +
    timeScore * timeWeight
  );
}

export function getProductivityTrend(currentScore: number, previousScore: number) {
  const difference = currentScore - previousScore;
  const percentageChange = (difference / previousScore) * 100;
  
  return {
    direction: difference > 0 ? 'up' : difference < 0 ? 'down' : 'stable',
    percentage: Math.abs(percentageChange),
    difference: Math.abs(difference),
  };
}

export function generateInsights(data: any[]) {
  // AI-powered insights generation (simplified)
  const insights = [];
  
  // Analyze productivity patterns
  const avgProductivity = data.reduce((sum, item) => sum + item.productivity, 0) / data.length;
  if (avgProductivity > 85) {
    insights.push({
      type: 'positive',
      title: 'High Performance Team',
      description: 'Your team is performing exceptionally well with consistent high productivity scores.',
    });
  }
  
  // Analyze collaboration patterns
  const avgEngagement = data.reduce((sum, item) => sum + item.engagement, 0) / data.length;
  if (avgEngagement < 70) {
    insights.push({
      type: 'warning',
      title: 'Low Engagement Alert',
      description: 'Team engagement is below optimal levels. Consider team building activities.',
    });
  }
  
  return insights;
}