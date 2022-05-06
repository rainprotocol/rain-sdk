/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BConstInterface extends utils.Interface {
  functions: {
    "BONE()": FunctionFragment;
    "BPOW_PRECISION()": FunctionFragment;
    "EXIT_FEE()": FunctionFragment;
    "INIT_POOL_SUPPLY()": FunctionFragment;
    "MAX_BOUND_TOKENS()": FunctionFragment;
    "MAX_BPOW_BASE()": FunctionFragment;
    "MAX_FEE()": FunctionFragment;
    "MAX_IN_RATIO()": FunctionFragment;
    "MAX_OUT_RATIO()": FunctionFragment;
    "MAX_TOTAL_WEIGHT()": FunctionFragment;
    "MAX_WEIGHT()": FunctionFragment;
    "MIN_BALANCE()": FunctionFragment;
    "MIN_BOUND_TOKENS()": FunctionFragment;
    "MIN_BPOW_BASE()": FunctionFragment;
    "MIN_FEE()": FunctionFragment;
    "MIN_WEIGHT()": FunctionFragment;
    "getColor()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "BONE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "BPOW_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "EXIT_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "INIT_POOL_SUPPLY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_BOUND_TOKENS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_BPOW_BASE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MAX_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MAX_IN_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_OUT_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_TOTAL_WEIGHT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_WEIGHT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_BALANCE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_BOUND_TOKENS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_BPOW_BASE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MIN_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MIN_WEIGHT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getColor", values?: undefined): string;

  decodeFunctionResult(functionFragment: "BONE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "BPOW_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "EXIT_FEE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "INIT_POOL_SUPPLY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_BOUND_TOKENS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_BPOW_BASE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_FEE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MAX_IN_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_OUT_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_TOTAL_WEIGHT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_WEIGHT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MIN_BALANCE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_BOUND_TOKENS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_BPOW_BASE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MIN_FEE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MIN_WEIGHT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getColor", data: BytesLike): Result;

  events: {};
}

export interface BConst extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BConstInterface;

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
    BONE(overrides?: CallOverrides): Promise<[BigNumber]>;

    BPOW_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    EXIT_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    INIT_POOL_SUPPLY(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_BOUND_TOKENS(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_BPOW_BASE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_IN_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_OUT_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_TOTAL_WEIGHT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_WEIGHT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_BALANCE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_BOUND_TOKENS(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_BPOW_BASE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_WEIGHT(overrides?: CallOverrides): Promise<[BigNumber]>;

    getColor(overrides?: CallOverrides): Promise<[string]>;
  };

  BONE(overrides?: CallOverrides): Promise<BigNumber>;

  BPOW_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  EXIT_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  INIT_POOL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_BOUND_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_BPOW_BASE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_IN_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_OUT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_TOTAL_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_BOUND_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_BPOW_BASE(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

  getColor(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    BONE(overrides?: CallOverrides): Promise<BigNumber>;

    BPOW_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    EXIT_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    INIT_POOL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_BOUND_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_BPOW_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_IN_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_OUT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_TOTAL_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_BOUND_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_BPOW_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    getColor(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    BONE(overrides?: CallOverrides): Promise<BigNumber>;

    BPOW_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    EXIT_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    INIT_POOL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_BOUND_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_BPOW_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_IN_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_OUT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_TOTAL_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_BOUND_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_BPOW_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    getColor(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BONE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BPOW_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    EXIT_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    INIT_POOL_SUPPLY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_BOUND_TOKENS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_BPOW_BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_IN_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_OUT_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_TOTAL_WEIGHT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_WEIGHT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_BALANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_BOUND_TOKENS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_BPOW_BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_WEIGHT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getColor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
