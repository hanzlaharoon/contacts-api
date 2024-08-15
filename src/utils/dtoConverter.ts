import { ClassConstructor, plainToInstance } from 'class-transformer';

export function entityToDto<T, V>(
  cls: ClassConstructor<T>,
  plain: V,
  options?: Record<string, string>,
): T {
  return plainToInstance(cls, plain, {
    excludeExtraneousValues: true,
    ...options,
  });
}

export function entityToDtoArray<T, V>(
  cls: ClassConstructor<T>,
  plain: V[],
  options?: Record<string, string>,
): T[] {
  return plainToInstance(cls, plain, {
    excludeExtraneousValues: true,
    ...options,
  });
}
