import { remultFresh } from "remult/remult-fresh";

export const remultServer = remultFresh({ }, Response);

export const handler = remultServer.handle;
