import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @IsString()
  description: string;
}
