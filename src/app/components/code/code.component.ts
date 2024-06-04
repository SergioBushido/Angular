import { Component, OnInit } from '@angular/core';
import { CodeService } from '../../services/code.service';
import { Code } from '../../models/code.model';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  codes: Code[] = [];
  selectedCode: Code | null = null;
  newCode: Code = { file: '', packageName: '' };


  constructor(private codeService: CodeService) {}

  ngOnInit(): void {
    this.loadCodes();
  }

  loadCodes(): void {
    this.codeService.getCodes().subscribe((data: Code[]) => {
      this.codes = data;
    });
  }

  selectCode(code: Code): void {
    this.selectedCode = { ...code };
  }

  saveCode(): void {
    if (this.selectedCode && this.selectedCode.id) {
      this.codeService.updateCode(this.selectedCode.id, this.selectedCode).subscribe(() => {
        this.loadCodes();
        this.selectedCode = null;
      });
    } else {
      this.codeService.createCode(this.newCode).subscribe(() => {
        this.loadCodes();
        this.newCode = { file: '', packageName: '' };
      });
    }
  }

  deleteCode(id: number | undefined): void {
    if (id !== undefined) {
      this.codeService.deleteCode(id).subscribe(() => {
        this.loadCodes();
      });
    }
  }

  resetSelection(): void {
    this.selectedCode = null;
  }
}
