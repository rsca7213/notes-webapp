import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CategoryEntity } from 'src/shared/database/category.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CategoriesService {
  public constructor(
    @InjectRepository(CategoryEntity)
    private readonly noteRepository: Repository<CategoryEntity>
  ) {}

  public getCategories() {
    return this.noteRepository.find()
  }

  public getCategoryById(id: number) {
    return this.noteRepository.findOneBy({ id })
  }

  public createCategory(data: CategoryEntity) {
    return this.noteRepository.save({ name: data.name })
  }

  public updateCategoryById(data: CategoryEntity) {
    return this.noteRepository.update(data.id, { name: data.name })
  }

  public deleteCategoryById(id: number) {
    return this.noteRepository.delete(id)
  }
}
