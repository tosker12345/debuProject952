
import { endpoint, internal } from "akanjs/signal";

import * as srv from "../srv";

export class TestnicknamekkkaInternal extends internal(srv.testnicknamekkka, () => ({})) {}

export class TestnicknamekkkaEndpoint extends endpoint(srv.testnicknamekkka, () => ({})) {}
  