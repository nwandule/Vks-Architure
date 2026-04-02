/**
 * @author @vikash
 * @service ProjectService
 * @description Manages project data and simulates API calls for projects.
 *
 * Provides methods to get all projects or a single project by ID. 
  **/
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../../models/project.models';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Modern Glass Tower',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      category: 'Commercial',
      description: 'A futuristic skyscraper with glass facade.'
    },
    {
      id: 2,
      title: 'Minimalist Office',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
      category: 'Interior',
      description: 'Clean and modern workspace design.'
    },
    {
      id: 3,
      title: 'Luxury Villa',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      category: 'Residential',
      description: 'Premium villa with open spaces.'
    }
  ];

  // ✅ simulate API call
  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  // ✅ get single project (future: details page)
  getProjectById(id: number): Observable<Project | undefined> {
    const project = this.projects.find(p => p.id === id);
    return of(project);
  }
}
