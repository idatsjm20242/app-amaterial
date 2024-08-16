import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllCategory():Observable<Category[]>{
    return this.httpClient.get<Category[]>("http://localhost:8080/category/listar")
  }
  getCategory(id: number):Observable<Category>{
    return this.httpClient.get<Category>("http://localhost:8080/category/"+id)
  }

  createCategory(category: Category):Observable<Category>{
    return this.httpClient.post<Category>("http://localhost:8080/category", category)
  }

}
