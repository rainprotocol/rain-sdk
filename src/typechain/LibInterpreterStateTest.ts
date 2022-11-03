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

export type StateConfigStruct = {
  sources: BytesLike[];
  constants: BigNumberish[];
};

export type StateConfigStructOutput = [string[], BigNumber[]] & {
  sources: string[];
  constants: BigNumber[];
};

export type InterpreterStateStruct = {
  stackBottom: BigNumberish;
  constantsBottom: BigNumberish;
  scratch: BigNumberish;
  contextScratch: BigNumberish;
  context: BigNumberish[][];
  compiledSources: BytesLike[];
};

export type InterpreterStateStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber[][],
  string[]
] & {
  stackBottom: BigNumber;
  constantsBottom: BigNumber;
  scratch: BigNumber;
  contextScratch: BigNumber;
  context: BigNumber[][];
  compiledSources: string[];
};

export type StorageOpcodesRangeStruct = {
  pointer: BigNumberish;
  length: BigNumberish;
};

export type StorageOpcodesRangeStructOutput = [BigNumber, BigNumber] & {
  pointer: BigNumber;
  length: BigNumber;
};

export interface LibInterpreterStateTestInterface extends utils.Interface {
  functions: {
    "debug((bytes[],uint256[]),uint256[][],uint8,uint256)": FunctionFragment;
    "eval((bytes[],uint256[]))": FunctionFragment;
    "evalStackTop((bytes[],uint256[]))": FunctionFragment;
    "serDeserialize((bytes[],uint256[]),uint256[][])": FunctionFragment;
    "serialize((bytes[],uint256[]))": FunctionFragment;
    "storageOpcodesRange()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "debug",
    values: [StateConfigStruct, BigNumberish[][], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "eval",
    values: [StateConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "evalStackTop",
    values: [StateConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "serDeserialize",
    values: [StateConfigStruct, BigNumberish[][]]
  ): string;
  encodeFunctionData(
    functionFragment: "serialize",
    values: [StateConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "storageOpcodesRange",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "debug", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eval", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "evalStackTop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "serDeserialize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "serialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "storageOpcodesRange",
    data: BytesLike
  ): Result;

  events: {};
}

export interface LibInterpreterStateTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibInterpreterStateTestInterface;

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
    debug(
      config_: StateConfigStruct,
      context_: BigNumberish[][],
      debugStyle_: BigNumberish,
      sourceIndex_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        stackTop_: BigNumber;
        stackTopAfter_: BigNumber;
      }
    >;

    "eval((bytes[],uint256[]))"(
      config_: StateConfigStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        stackTopAfter_: BigNumber;
        stackBottom_: BigNumber;
      }
    >;

    "eval((bytes[],uint256[]),uint256)"(
      config_: StateConfigStruct,
      sourceIndex_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        stackTopAfter_: BigNumber;
        stackBottom_: BigNumber;
      }
    >;

    "evalStackTop((bytes[],uint256[]))"(
      config_: StateConfigStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        stackTopAfter_: BigNumber;
        stackBottom_: BigNumber;
      }
    >;

    "evalStackTop((bytes[],uint256[]),uint256)"(
      config_: StateConfigStruct,
      sourceIndex_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        stackTopAfter_: BigNumber;
        stackBottom_: BigNumber;
      }
    >;

    serDeserialize(
      config_: StateConfigStruct,
      context_: BigNumberish[][],
      overrides?: CallOverrides
    ): Promise<
      [InterpreterStateStructOutput] & { state_: InterpreterStateStructOutput }
    >;

    serialize(
      config_: StateConfigStruct,
      overrides?: CallOverrides
    ): Promise<[string] & { serialized_: string }>;

    storageOpcodesRange(
      overrides?: CallOverrides
    ): Promise<[StorageOpcodesRangeStructOutput]>;
  };

  debug(
    config_: StateConfigStruct,
    context_: BigNumberish[][],
    debugStyle_: BigNumberish,
    sourceIndex_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { stackTop_: BigNumber; stackTopAfter_: BigNumber }
  >;

  "eval((bytes[],uint256[]))"(
    config_: StateConfigStruct,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      stackTopAfter_: BigNumber;
      stackBottom_: BigNumber;
    }
  >;

  "eval((bytes[],uint256[]),uint256)"(
    config_: StateConfigStruct,
    sourceIndex_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      stackTopAfter_: BigNumber;
      stackBottom_: BigNumber;
    }
  >;

  "evalStackTop((bytes[],uint256[]))"(
    config_: StateConfigStruct,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      stackTopAfter_: BigNumber;
      stackBottom_: BigNumber;
    }
  >;

  "evalStackTop((bytes[],uint256[]),uint256)"(
    config_: StateConfigStruct,
    sourceIndex_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      stackTopAfter_: BigNumber;
      stackBottom_: BigNumber;
    }
  >;

  serDeserialize(
    config_: StateConfigStruct,
    context_: BigNumberish[][],
    overrides?: CallOverrides
  ): Promise<InterpreterStateStructOutput>;

  serialize(
    config_: StateConfigStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  storageOpcodesRange(
    overrides?: CallOverrides
  ): Promise<StorageOpcodesRangeStructOutput>;

  callStatic: {
    debug(
      config_: StateConfigStruct,
      context_: BigNumberish[][],
      debugStyle_: BigNumberish,
      sourceIndex_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        stackTop_: BigNumber;
        stackTopAfter_: BigNumber;
      }
    >;

    "eval((bytes[],uint256[]))"(
      config_: StateConfigStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        stackTopAfter_: BigNumber;
        stackBottom_: BigNumber;
      }
    >;

    "eval((bytes[],uint256[]),uint256)"(
      config_: StateConfigStruct,
      sourceIndex_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        stackTopAfter_: BigNumber;
        stackBottom_: BigNumber;
      }
    >;

    "evalStackTop((bytes[],uint256[]))"(
      config_: StateConfigStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        stackTopAfter_: BigNumber;
        stackBottom_: BigNumber;
      }
    >;

    "evalStackTop((bytes[],uint256[]),uint256)"(
      config_: StateConfigStruct,
      sourceIndex_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        stackTopAfter_: BigNumber;
        stackBottom_: BigNumber;
      }
    >;

    serDeserialize(
      config_: StateConfigStruct,
      context_: BigNumberish[][],
      overrides?: CallOverrides
    ): Promise<InterpreterStateStructOutput>;

    serialize(
      config_: StateConfigStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    storageOpcodesRange(
      overrides?: CallOverrides
    ): Promise<StorageOpcodesRangeStructOutput>;
  };

  filters: {};

  estimateGas: {
    debug(
      config_: StateConfigStruct,
      context_: BigNumberish[][],
      debugStyle_: BigNumberish,
      sourceIndex_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "eval((bytes[],uint256[]))"(
      config_: StateConfigStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "eval((bytes[],uint256[]),uint256)"(
      config_: StateConfigStruct,
      sourceIndex_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "evalStackTop((bytes[],uint256[]))"(
      config_: StateConfigStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "evalStackTop((bytes[],uint256[]),uint256)"(
      config_: StateConfigStruct,
      sourceIndex_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    serDeserialize(
      config_: StateConfigStruct,
      context_: BigNumberish[][],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    serialize(
      config_: StateConfigStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    storageOpcodesRange(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    debug(
      config_: StateConfigStruct,
      context_: BigNumberish[][],
      debugStyle_: BigNumberish,
      sourceIndex_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "eval((bytes[],uint256[]))"(
      config_: StateConfigStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "eval((bytes[],uint256[]),uint256)"(
      config_: StateConfigStruct,
      sourceIndex_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "evalStackTop((bytes[],uint256[]))"(
      config_: StateConfigStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "evalStackTop((bytes[],uint256[]),uint256)"(
      config_: StateConfigStruct,
      sourceIndex_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    serDeserialize(
      config_: StateConfigStruct,
      context_: BigNumberish[][],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    serialize(
      config_: StateConfigStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    storageOpcodesRange(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
