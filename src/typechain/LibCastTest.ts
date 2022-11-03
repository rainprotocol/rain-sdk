/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface LibCastTestInterface extends utils.Interface {
  functions: {
    "asAddresses(uint256[])": FunctionFragment;
    "asEvalFunctionPointer(uint256)": FunctionFragment;
    "asIntegrityFunctionPointer(uint256)": FunctionFragment;
    "asIntegrityPointers(uint256[])": FunctionFragment;
    "asOpFunctionPointer(uint256)": FunctionFragment;
    "asOpFunctionPointers(uint256[])": FunctionFragment;
    "asUint256ArrayIntPtrs(uint256[])": FunctionFragment;
    "asUint256ArrayOpPtrs(uint256[])": FunctionFragment;
    "asUint256ArrayUint256(uint256[])": FunctionFragment;
    "asUint256Bool(bool)": FunctionFragment;
    "asUint256EvalPtr(uint256)": FunctionFragment;
    "asUint256IntPtr(uint256[])": FunctionFragment;
    "asUint256Uint256()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "asAddresses",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "asEvalFunctionPointer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "asIntegrityFunctionPointer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "asIntegrityPointers",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "asOpFunctionPointer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "asOpFunctionPointers",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "asUint256ArrayIntPtrs",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "asUint256ArrayOpPtrs",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "asUint256ArrayUint256",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "asUint256Bool",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "asUint256EvalPtr",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "asUint256IntPtr",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "asUint256Uint256",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "asAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "asEvalFunctionPointer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "asIntegrityFunctionPointer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "asIntegrityPointers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "asOpFunctionPointer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "asOpFunctionPointers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "asUint256ArrayIntPtrs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "asUint256ArrayOpPtrs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "asUint256ArrayUint256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "asUint256Bool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "asUint256EvalPtr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "asUint256IntPtr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "asUint256Uint256",
    data: BytesLike
  ): Result;

  events: {};
}

export interface LibCastTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibCastTestInterface;

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
    asAddresses(
      is_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[string[]] & { addresses_: string[] }>;

    asEvalFunctionPointer(
      i_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    asIntegrityFunctionPointer(
      i_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    asIntegrityPointers(
      is_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    asOpFunctionPointer(
      i_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    asOpFunctionPointers(
      is_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    asUint256ArrayIntPtrs(
      is_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    asUint256ArrayOpPtrs(
      is_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    asUint256ArrayUint256(
      is_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    asUint256Bool(
      bool_: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    asUint256EvalPtr(
      i_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    asUint256IntPtr(
      is_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    asUint256Uint256(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  asAddresses(
    is_: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<string[]>;

  asEvalFunctionPointer(
    i_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  asIntegrityFunctionPointer(
    i_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  asIntegrityPointers(
    is_: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  asOpFunctionPointer(
    i_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  asOpFunctionPointers(
    is_: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  asUint256ArrayIntPtrs(
    is_: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  asUint256ArrayOpPtrs(
    is_: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  asUint256ArrayUint256(
    is_: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  asUint256Bool(
    bool_: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  asUint256EvalPtr(
    i_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  asUint256IntPtr(
    is_: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  asUint256Uint256(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    asAddresses(
      is_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    asEvalFunctionPointer(
      i_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    asIntegrityFunctionPointer(
      i_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    asIntegrityPointers(
      is_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    asOpFunctionPointer(
      i_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    asOpFunctionPointers(
      is_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    asUint256ArrayIntPtrs(
      is_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    asUint256ArrayOpPtrs(
      is_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    asUint256ArrayUint256(
      is_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    asUint256Bool(
      bool_: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    asUint256EvalPtr(
      i_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    asUint256IntPtr(
      is_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    asUint256Uint256(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    asAddresses(
      is_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    asEvalFunctionPointer(
      i_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    asIntegrityFunctionPointer(
      i_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    asIntegrityPointers(
      is_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    asOpFunctionPointer(
      i_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    asOpFunctionPointers(
      is_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    asUint256ArrayIntPtrs(
      is_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    asUint256ArrayOpPtrs(
      is_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    asUint256ArrayUint256(
      is_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    asUint256Bool(
      bool_: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    asUint256EvalPtr(
      i_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    asUint256IntPtr(
      is_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    asUint256Uint256(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    asAddresses(
      is_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    asEvalFunctionPointer(
      i_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    asIntegrityFunctionPointer(
      i_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    asIntegrityPointers(
      is_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    asOpFunctionPointer(
      i_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    asOpFunctionPointers(
      is_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    asUint256ArrayIntPtrs(
      is_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    asUint256ArrayOpPtrs(
      is_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    asUint256ArrayUint256(
      is_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    asUint256Bool(
      bool_: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    asUint256EvalPtr(
      i_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    asUint256IntPtr(
      is_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    asUint256Uint256(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
