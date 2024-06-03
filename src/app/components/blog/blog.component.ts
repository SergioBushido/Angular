import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  selectedBlog: Blog | null = null;
  newBlog: Blog = { id: 0, title: '', date: '' };

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs().subscribe((blogs: Blog[]) => {
      this.blogs = blogs;
    });
  }

  selectBlog(blog: Blog): void {
    this.selectedBlog = blog;
  }

  createBlog(): void {
    this.blogService.createBlog(this.newBlog).subscribe((blog: Blog) => {
      this.blogs.push(blog);
      this.newBlog = { id: 0, title: '', date: '' }; // reset the form
    });
  }

  updateBlog(): void {
    if (this.selectedBlog) {
      this.blogService.updateBlog(this.selectedBlog.id, this.selectedBlog).subscribe((blog: Blog) => {
        const index = this.blogs.findIndex(b => b.id === blog.id);
        if (index !== -1) {
          this.blogs[index] = blog;
        }
      });
    }
  }

  deleteBlog(id: number): void {
    this.blogService.deleteBlog(id).subscribe(() => {
      this.blogs = this.blogs.filter(blog => blog.id !== id);
      if (this.selectedBlog?.id === id) {
        this.selectedBlog = null;
      }
    });
  }
}
