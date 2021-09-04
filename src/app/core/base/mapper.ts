export abstract class Mapper<Dto, Entity> {
  abstract toEntity(param: Dto): Entity;
  abstract toDto(param: Entity): Dto;
}
