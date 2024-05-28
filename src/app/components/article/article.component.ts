import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe(
      (data: Article[]) => {
        this.articles = data;
      },
      (error) => {
        console.error('Error fetching articles', error);
      }
    );
  }

  addArticle(article: Article): void {
    this.articleService.createArticle(article).subscribe(
      (newArticle: Article) => {
        this.articles.push(newArticle);
      },
      (error) => {
        console.error('Error creating article', error);
      }
    );
  }

  updateArticle(article: Article): void {
    if (article.id !== undefined) {
      this.articleService.updateArticle(article.id, article).subscribe(
        (updatedArticle: Article) => {
          const index = this.articles.findIndex(a => a.id === article.id);
          if (index !== -1) {
            this.articles[index] = updatedArticle;
          }
        },
        (error) => {
          console.error('Error updating article', error);
        }
      );
    } else {
      console.error('Article ID is undefined');
    }
  }

  deleteArticle(id?: number): void {
    if (id !== undefined) {
      this.articleService.deleteArticle(id).subscribe(
        () => {
          this.articles = this.articles.filter(a => a.id !== id);
        },
        (error) => {
          console.error('Error deleting article', error);
        }
      );
    } else {
      console.error('Article ID is undefined');
    }
  }
}
