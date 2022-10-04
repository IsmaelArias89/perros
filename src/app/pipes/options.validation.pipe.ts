import { ValidationPipe } from '@nestjs/common';
import { DomainError, DomainErrors } from '../../domain/dto/error/type.error';

export const VALIDATION_PIPE_OPTIONS = {
  transform: true,
  validationError: { target: false },
  exceptionFactory: (errors) => {
    throw new DomainError({
      ...DomainErrors.INVALID_INPUT,
      extraInfo: errors[0],
    });
  },
};
export const validationPipe = new ValidationPipe(VALIDATION_PIPE_OPTIONS);
