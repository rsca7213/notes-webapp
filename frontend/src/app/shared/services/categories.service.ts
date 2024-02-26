import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Category } from '../models/category.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private constructor(private readonly httpClient: HttpClient) {}

  public getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('http://localhost:3000/api/categories')
  }

  public getCategoryById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`http://localhost:3000/api/categories/${id}`)
  }

  public createCategory(category: Category): Observable<void> {
    return this.httpClient.post<void>('http://localhost:3000/api/categories', category)
  }

  public updateCategoryById(category: Category): Observable<void> {
    return this.httpClient.put<void>(`http://localhost:3000/api/categories/${category.id}`, category)
  }

  public deleteCategoryById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:3000/api/categories/${id}`)
  }
}
