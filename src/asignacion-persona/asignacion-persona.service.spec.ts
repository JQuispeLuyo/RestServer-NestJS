import { Test, TestingModule } from '@nestjs/testing';
import { AsignacionPersonaService } from './asignacion-persona.service';

describe('AsignacionPersonaService', () => {
  let service: AsignacionPersonaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsignacionPersonaService],
    }).compile();

    service = module.get<AsignacionPersonaService>(AsignacionPersonaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
