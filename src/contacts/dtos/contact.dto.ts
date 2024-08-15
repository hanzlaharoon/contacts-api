import { Expose } from 'class-transformer';

export class Contact {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  phone: string;

  @Expose()
  description: string;
}
