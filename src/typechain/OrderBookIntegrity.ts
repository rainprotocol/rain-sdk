/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type StorageOpcodesRangeStruct = {
  pointer: BigNumberish;
  length: BigNumberish;
};

export type StorageOpcodesRangeStructOutput = [BigNumber, BigNumber] & {
  pointer: BigNumber;
  length: BigNumber;
};

export interface OrderBookIntegrityInterface extends utils.Interface {
  functions: {
    "ensureIntegrity((uint256,uint256),bytes[],uint256,uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ensureIntegrity",
    values: [
      StorageOpcodesRangeStruct,
      BytesLike[],
      BigNumberish,
      BigNumberish[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "ensureIntegrity",
    data: BytesLike
  ): Result;

  events: {};
}

export interface OrderBookIntegrity extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OrderBookIntegrityInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ensureIntegrity(
      storageOpcodesRange_: StorageOpcodesRangeStruct,
      sources_: BytesLike[],
      constantsLength_: BigNumberish,
      finalStacks_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        scratch_: BigNumber;
        contextScratch_: BigNumber;
        stackLength_: BigNumber;
      }
    >;
  };

  ensureIntegrity(
    storageOpcodesRange_: StorageOpcodesRangeStruct,
    sources_: BytesLike[],
    constantsLength_: BigNumberish,
    finalStacks_: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      scratch_: BigNumber;
      contextScratch_: BigNumber;
      stackLength_: BigNumber;
    }
  >;

  callStatic: {
    ensureIntegrity(
      storageOpcodesRange_: StorageOpcodesRangeStruct,
      sources_: BytesLike[],
      constantsLength_: BigNumberish,
      finalStacks_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        scratch_: BigNumber;
        contextScratch_: BigNumber;
        stackLength_: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    ensureIntegrity(
      storageOpcodesRange_: StorageOpcodesRangeStruct,
      sources_: BytesLike[],
      constantsLength_: BigNumberish,
      finalStacks_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ensureIntegrity(
      storageOpcodesRange_: StorageOpcodesRangeStruct,
      sources_: BytesLike[],
      constantsLength_: BigNumberish,
      finalStacks_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
