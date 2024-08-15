import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dtos/create-contact.dto';
import { UpdateContactDto } from './dtos/update-contact.dto';
import { Contact } from './dtos/contact.dto';
import { entityToDto, entityToDtoArray } from 'src/utils';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async create(@Body() createContactDto: CreateContactDto): Promise<Contact> {
    return entityToDto(
      Contact,
      await this.contactsService.create(createContactDto),
    );
  }

  @Get()
  async findAll(): Promise<Contact[]> {
    return entityToDtoArray(Contact, await this.contactsService.findAll());
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Contact> {
    return entityToDto(Contact, await this.contactsService.findOne(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ): Promise<Contact> {
    return entityToDto(
      Contact,
      await this.contactsService.update(id, updateContactDto),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactsService.remove(id);
  }
}
