import { Test, TestingModule } from '@nestjs/testing';
import { FormulacionesController } from './formulaciones.controller';

describe('FormulacionesController', () => {
  let controller: FormulacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormulacionesController],
    }).compile();

    controller = module.get<FormulacionesController>(FormulacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
