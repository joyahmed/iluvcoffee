import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeDto } from './dto/create-coffe.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) { }

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    //const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(typeof id);
    return this.coffeesService.findOne(id)
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeDto);
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
