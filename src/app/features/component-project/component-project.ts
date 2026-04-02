import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../models/project.models';
import { ComponentGetInTouchBanner } from '../../shared/component-get-in-touch-banner/component-get-in-touch-banner';

@Component({
  selector: 'app-component-project',
  standalone: true,
  imports: [CommonModule,ComponentGetInTouchBanner],
  templateUrl: './component-project.html',
  styleUrl: './component-project.scss',
})
export class ComponentProject {

  private projectService = inject(ProjectService);

  // ✅ cast the observable type so TS knows it returns Project[]
  projects = toSignal(
    this.projectService.getProjects() as unknown as import('rxjs').Subscribable<Project[]>,
    {
      initialValue: [],
      requireSync: false, // default is false
    }
  );

  trackById(index: number, project: Project) {
    return project.id;
  }
}