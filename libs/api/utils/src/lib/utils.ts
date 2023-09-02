import { NotFoundException } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';

async function tryFind<T extends { id: number }>(
  repository: Repository<T>,
  id: number
): Promise<T> {
  const entity = await repository.findOne({
    where: { id } as FindOptionsWhere<T>,
  });
  if (!entity) {
    throw new NotFoundException(
      `Entity ${({ id } as T).constructor.name} with id ${id} was not found`
    );
  }
  return entity;
}

export { tryFind };
