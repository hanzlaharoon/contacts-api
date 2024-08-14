import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './schemas/contact.schema';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<Contact>,
  ) {}

  async create(createContactDto: CreateContactDto) {
    return this.contactModel.create(createContactDto);
  }

  async findAll() {
    return this.contactModel.find();
  }

  async findOne(id: string) {
    return this.contactModel.findById(id);
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    return this.contactModel.findByIdAndUpdate(id, updateContactDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.contactModel.deleteOne({ _id: id });
  }
}
