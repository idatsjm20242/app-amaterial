import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../angular-material/material/material.module';

enum FormType{
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-category-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './category-detalle.component.html',
  styleUrl: './category-detalle.component.css'
})
export class CategoryDetalleComponent {
  categoryId: string | null = ''
  categoryForm!: FormGroup
  formType!: FormType
  formTitulo!: string
  
  constructor(private categoryService: CategoryService,
    private router: ActivatedRoute){

  }

  ngOnInit(): void {
   this.categoryId = this.router.snapshot.paramMap.get('id')
   this.categoryForm = this.crearFormulario()
   if(this.categoryId !== 'nuevo'){
    this.consutarCategoria(Number(this.categoryId))
    this.formTitulo = "Actualizar Categoria"
    this.formType = FormType.Actualizar
   }else{
    this.formTitulo = "Nueva Categoria"
    this.formType = FormType.Crear
   }
  }
  crearFormulario():FormGroup{
    return new FormGroup({
      categoryname: new FormControl(''),
      description: new FormControl('')
    })
  }

  consutarCategoria(id: number){
    this.categoryService.getCategory(id)
    .subscribe((data) => {
      //console.log(data)
      const {categoryname, description} = data
      this.categoryForm.setValue({categoryname, description})
    })
  }

}
