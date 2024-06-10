import { Component, OnInit } from '@angular/core';
import { Tag } from '../../models/tag.model';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  tags: Tag[] = [];
  selectedTag: Tag | null = null;
  newTag: Tag = new Tag(0, '', new Date());
  isEditMode: boolean = false;

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.loadTags();
  }

  loadTags(): void {
    this.tagService.getAllTags().subscribe(
      (data: Tag[]) => {
        this.tags = data;
      },
      error => {
        console.error('Error', error);
      }
    );
  }

  selectTag(tag: Tag): void {
    this.selectedTag = tag;
    this.isEditMode = true;
    this.newTag = { ...tag };  // Clona el tag para editar
  }

  clearSelection(): void {
    this.selectedTag = null;
    this.isEditMode = false;
    this.newTag = new Tag(0, '', new Date());
  }

  saveTag(): void {
    if (this.isEditMode && this.selectedTag) {
      this.updateTag();
    } else {
      this.createTag();
    }
  }

  createTag(): void {
    this.tagService.createTag(this.newTag).subscribe(
      (data: Tag) => {
        this.tags.push(data);
        this.clearSelection();
      },
      error => {
        console.error('Error', error);
      }
    );
  }

  updateTag(): void {
    if (this.selectedTag) {
      this.tagService.updateTag(this.selectedTag.id, this.newTag).subscribe(
        (data: Tag) => {
          const index = this.tags.findIndex(tag => tag.id === data.id);
          if (index !== -1) {
            this.tags[index] = data;
          }
          this.clearSelection();
        },
        error => {
          console.error('Error', error);
        }
      );
    }
  }

  deleteTag(id: number): void {
    this.tagService.deleteTag(id).subscribe(
      () => {
        this.tags = this.tags.filter(tag => tag.id !== id);
        this.clearSelection();
      },
      error => {
        console.error('Error', error);
      }
    );
  }
}
