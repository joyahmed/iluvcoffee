import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeDto } from "./create-coffe.dto";

export class UpdateCoffeeDto extends PartialType(CreateCoffeDto) {
}
