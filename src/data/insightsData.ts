export interface InsightArticle {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
}

export interface InsightVideo {
  id: string;
  speaker: string;
  topic: string;
  thumbnail: string;
  duration: string;
}

export interface InsightNews {
  id: string;
  title: string;
  date: string;
  category: string;
}

export interface InsightUpdate {
  id: string;
  title: string;
  description: string;
  date: string;
}

export const mockInsightsData = {
  articles: [
    {
      id: 'a1',
      title: 'Future of AI in Education',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
      description: 'How artificial intelligence is reshaping the learning experience and what it means for the next generation of students.',
      category: 'Technology',
    },
    {
      id: 'a2',
      title: 'How Universities Are Changing in 2030',
      image: 'https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww',
      description: 'A look into the future of higher education, focusing on hybrid learning models and skill-based curriculums.',
      category: 'Education Trends',
    },
  ] as InsightArticle[],
  videos: [
    {
      id: 'v1',
      speaker: 'Dr. Sarah Chen',
      topic: 'Leadership Talk by Industry Expert',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      duration: '45:20',
    },
    {
      id: 'v2',
      speaker: 'Mark Johnson',
      topic: 'Career Guidance for Engineering Students',
      thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
      duration: '32:15',
    },
  ] as InsightVideo[],
  news: [
    {
      id: 'n1',
      title: 'Global EdTech Market Growth Exceeds Expectations',
      date: '2 hours ago',
      category: 'Business',
    },
    {
      id: 'n2',
      title: 'Top Universities Adopting New AI Tools for Assessment',
      date: '5 hours ago',
      category: 'Technology',
    },
    {
      id: 'n3',
      title: 'New Policies for International Student Visas Announced',
      date: '1 day ago',
      category: 'Global Trends',
    },
  ] as InsightNews[],
  updates: [
    {
      id: 'u1',
      title: 'CampusConnect v2.0 Launch',
      description: 'We are excited to announce the launch of our new platform features including enhanced analytics.',
      date: 'Oct 15, 2024',
    },
    {
      id: 'u2',
      title: 'New Advanced Machine Learning Course',
      description: 'Registration is now open for the upcoming semester\'s most anticipated course.',
      date: 'Oct 12, 2024',
    },
  ] as InsightUpdate[],
};
