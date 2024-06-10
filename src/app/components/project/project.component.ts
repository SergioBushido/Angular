import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [];
  selectedProject: Project | null = null;
  project: Project = new Project(0, '', '', false);
  isEditMode: boolean = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getAllProjects().subscribe(
      (data: Project[]) => {
        this.projects = data;
      },
      error => {
        console.error('Error fetching projects', error);
      }
    );
  }

  selectProject(project: Project): void {
    this.selectedProject = project;
    this.isEditMode = true;
    this.project = { ...project };  // Clona el project para editar
  }

  clearSelection(): void {
    this.selectedProject = null;
    this.isEditMode = false;
    this.project = new Project(0, '', '', false);
  }

  saveProject(): void {
    if (this.isEditMode && this.selectedProject) {
      this.updateProject();
    } else {
      this.createProject();
    }
  }

  createProject(): void {
    if (!this.project.description || !this.project.language) {
      console.error('Project description and language are required.');
      return;
    }

    this.projectService.createProject(this.project).subscribe(
      (data: Project) => {
        this.projects.push(data);  // Agregar el nuevo proyecto a la lista de proyectos
        this.clearSelection();
        this.loadProjects();  // Volver a cargar la lista de proyectos para asegurarse de que esté actualizada
      },
      error => {
        console.error('Error creating project', error);
      }
    );
  }

  updateProject(): void {
    if (this.selectedProject) {
      this.projectService.updateProject(this.selectedProject.id, this.project).subscribe(
        (data: Project) => {
          const index = this.projects.findIndex(project => project.id === data.id);
          if (index !== -1) {
            this.projects[index] = data;
          }
          this.clearSelection();
        },
        error => {
          console.error('Error updating project', error);
        }
      );
    }
  }

  deleteProject(id: number): void {
    this.projectService.deleteProject(id).subscribe(
      () => {
        this.projects = this.projects.filter(project => project.id !== id);
        this.clearSelection();
      },
      error => {
        console.error('Error deleting project', error);
      }
    );
  }
}
