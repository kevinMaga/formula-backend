import { Test, TestingModule } from '@nestjs/testing';
import { FormulacionesService } from './formulaciones.service';

describe('FormulacionesService', () => {
  let service: FormulacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormulacionesService],
    }).compile();

    service = module.get<FormulacionesService>(FormulacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
