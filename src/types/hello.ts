import { Static, Type } from '@sinclair/typebox';

export const helloSchema = Type.Object(
  {
    data: Type.String({ example: 'Hello World!' }),
  },
  {
    description: 'Succesful response',
  }
);

export type helloType = Static<typeof helloSchema>;
