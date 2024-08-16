import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-category-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './category-lista.component.html',
  styleUrl: './category-lista.component.css'
})
export class CategoryListaComponent {
  displayedColumns: string[] = ['categoryid', 'categoryname', 
    'description'];

  categories: Category[] = []

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ){
  }

  ngOnInit(): void {
    this.categoryService.getAllCategory()
    .subscribe((data) => {
      this.categories = data
    })
  }

  irDetalleCategoria(id: string){
    this.router.navigate([id], {relativeTo: this.route})
  }

  irCrearCategoria(){
    this.router.navigate(["nuevo"], {relativeTo: this.route})
  }

}
