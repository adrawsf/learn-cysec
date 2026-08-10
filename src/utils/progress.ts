import { getCollection } from 'astro:content';
import { ROADMAP } from '../config/roadmap';
import type { Topic } from '../config/topics';

export async function getOverallProgress() {
  const notes = await getCollection('notes');
  const totalNotes = notes.length;
  
  // Roadmap progress
  let totalRoadmapItems = 0;
  let completedRoadmapItems = 0;
  
  ROADMAP.forEach(section => {
    section.items.forEach(item => {
      totalRoadmapItems++;
      if (item.status === 'completed') {
        completedRoadmapItems++;
      }
    });
  });
  
  const roadmapProgress = totalRoadmapItems > 0 
    ? Math.round((completedRoadmapItems / totalRoadmapItems) * 100) 
    : 0;

  return {
    totalNotes,
    completedRoadmapItems,
    totalRoadmapItems,
    percentage: roadmapProgress,
  };
}

export async function getTopicsStats(topics: Topic[]) {
  const notes = await getCollection('notes');
  
  return topics.map(topic => {
    const topicNotes = notes.filter(n => n.data.category === topic.slug);
    return {
      ...topic,
      notesCount: topicNotes.length
    };
  });
}
