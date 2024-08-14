import {
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 35)
  name: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsOptional()
  @Length(3, 255)
  description: string;
}
