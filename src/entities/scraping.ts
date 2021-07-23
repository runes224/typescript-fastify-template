import { Static, Type } from '@sinclair/typebox';

export const scrapingReqBody = Type.Object({
  sites: Type.Array(
    Type.Object({
      url: Type.String(),
      charset: Type.String(),
      baseSelector: Type.String(),
      elements: Type.Array(
        Type.Object({
          selector: Type.String(),
          outputPath: Type.String(),
        })
      ),
    })
  ),
});

export type scrapingReqBodyType = Static<typeof scrapingReqBody>;
