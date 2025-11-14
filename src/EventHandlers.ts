/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  MToken,
  IndexUpdated,
  StartedEarning,
  StoppedEarning,
  AuthorizationCanceled,
  AuthorizationUsed,
} from "generated";
import { makeEventId } from "./utils";

MToken.AuthorizationCanceled.handler(async ({ event, context }) => {
  const id = makeEventId(event.transaction.hash, event.logIndex);

  const entity: AuthorizationCanceled = {
    id,
    authorizer: event.params.authorizer,
    nonce: event.params.nonce,
    blockNumber: event.block.number,
    blockTimestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  };

  context.AuthorizationCanceled.set(entity);
});

MToken.AuthorizationUsed.handler(async ({ event, context }) => {
  const id = makeEventId(event.transaction.hash, event.logIndex);

  const entity: AuthorizationUsed = {
    id,
    authorizer: event.params.authorizer,
    nonce: event.params.nonce,
    blockNumber: event.block.number,
    blockTimestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  };

  context.AuthorizationUsed.set(entity);
});

MToken.IndexUpdated.handler(async ({ event, context }) => {
  const id = makeEventId(event.transaction.hash, event.logIndex);

  const entity: IndexUpdated = {
    id,
    index: event.params.index,
    rate: event.params.rate,
    blockNumber: event.block.number,
    blockTimestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  };

  context.IndexUpdated.set(entity);
});

MToken.StartedEarning.handler(async ({ event, context }) => {
  const id = makeEventId(event.transaction.hash, event.logIndex);

  const entity: StartedEarning = {
    id,
    account: event.params.account,
    blockNumber: event.block.number,
    blockTimestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  };

  context.StartedEarning.set(entity);
});

MToken.StoppedEarning.handler(async ({ event, context }) => {
  const id = makeEventId(event.transaction.hash, event.logIndex);

  const entity: StoppedEarning = {
    id,
    account: event.params.account,
    blockNumber: event.block.number,
    blockTimestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  };

  context.StoppedEarning.set(entity);
});
