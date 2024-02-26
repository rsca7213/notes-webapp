import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CategoriesService } from './categories.service'
import { CreateCategoryDto, UpdateCategoryDto } from 'src/shared/dto/categories.dto'

@Controller('api/categories')
export class CategoriesController {
  public constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  public getCategories() {
    return this.categoriesService.getCategories()
  }

  @Get(':id')
  public getCategoryById(@Param('id') id: number) {
    id = Number(id)
    return this.categoriesService.getCategoryById(id)
  }

  @Post()
  public createCategory(@Body() category: CreateCategoryDto) {
    return this.categoriesService.createCategory({
      id: 0,
      name: category.name
    })
  }

  @Put(':id')
  public updateCategoryById(@Param('id') id: number, @Body() category: UpdateCategoryDto) {
    id = Number(id)
    return this.categoriesService.updateCategoryById({
      id,
      name: category.name
    })
  }

  @Delete(':id')
  public deleteCategoryById(@Param('id') id: number) {
    id = Number(id)
    return this.categoriesService.deleteCategoryById(id)
  }
}
