import { Test, TestingModule } from '@nestjs/testing';
import { AsignacionPersonaController } from './asignacion-persona.controller';

describe('AsignacionPersona Controller', () => {
  let controller: AsignacionPersonaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsignacionPersonaController],
    }).compile();

    controller = module.get<AsignacionPersonaController>(AsignacionPersonaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
