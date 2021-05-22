import { Injectable } from '@nestjs/common';

import { CreateJourneyDto } from './dto/create-journey.dto';
import { UpdateJourneyDto } from './dto/update-journey.dto';
import { Journey } from './entities/journey.entity';
import { JourneysRepository } from './journeys.repository';

@Injectable()
export class JourneysService {
  constructor(private readonly journeysRepository: JourneysRepository) {}

  create(createJourneyDto: CreateJourneyDto): Journey {
    return this.journeysRepository.create(new Journey(createJourneyDto));
  }

  findAll(): Journey[] {
    return this.journeysRepository.find();
  }

  findOne(id: string): Journey {
    return this.journeysRepository.findOne(id);
  }

  update(id: string, updateJourneyDto: UpdateJourneyDto) {
    return this.journeysRepository.update(id, updateJourneyDto);
  }

  remove(id: string) {
    return this.journeysRepository.remove(id);
  }
}