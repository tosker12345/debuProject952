
import { serviceDictionary } from "akanjs/dictionary";

import type { TestnicknamekkkaEndpoint } from "./testnicknamekkka.signal";

export const dictionary = serviceDictionary(["en", "ko"])
  .endpoint<TestnicknamekkkaEndpoint>((fn) => ({}))
  .translate({});
