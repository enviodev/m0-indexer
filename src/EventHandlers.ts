/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { indexer, IndexUpdated, StartedEarning, StoppedEarning, AuthorizationCanceled, AuthorizationUsed } from "envio";
import { makeEventId } from "./utils";

indexer.onEvent(
  { contract: "MToken", event: "AuthorizationCanceled" },
  async ({ event, context }) => {
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
}
);

indexer.onEvent(
  { contract: "MToken", event: "AuthorizationUsed" },
  async ({ event, context }) => {
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
}
);

indexer.onEvent(
  { contract: "MToken", event: "IndexUpdated" },
  async ({ event, context }) => {
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
}
);

indexer.onEvent(
  { contract: "MToken", event: "StartedEarning" },
  async ({ event, context }) => {
  const id = makeEventId(event.transaction.hash, event.logIndex);

  const entity: StartedEarning = {
    id,
    account: event.params.account,
    blockNumber: event.block.number,
    blockTimestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  };

  context.StartedEarning.set(entity);
}
);

indexer.onEvent(
  { contract: "MToken", event: "StoppedEarning" },
  async ({ event, context }) => {
  const id = makeEventId(event.transaction.hash, event.logIndex);

  const entity: StoppedEarning = {
    id,
    account: event.params.account,
    blockNumber: event.block.number,
    blockTimestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  };

  context.StoppedEarning.set(entity);
}
);
