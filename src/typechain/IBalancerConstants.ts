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

export interface IBalancerConstantsInterface extends utils.Interface {
  functions: {
    "BONE()": FunctionFragment;
    "EXIT_FEE()": FunctionFragment;
    "MAX_ASSET_LIMIT()": FunctionFragment;
    "MAX_BALANCE()": FunctionFragment;
    "MAX_FEE()": FunctionFragment;
    "MAX_IN_RATIO()": FunctionFragment;
    "MAX_OUT_RATIO()": FunctionFragment;
    "MAX_POOL_SUPPLY()": FunctionFragment;
    "MAX_TOTAL_WEIGHT()": FunctionFragment;
    "MAX_UINT()": FunctionFragment;
    "MAX_WEIGHT()": FunctionFragment;
    "MIN_ASSET_LIMIT()": FunctionFragment;
    "MIN_BALANCE()": FunctionFragment;
    "MIN_FEE()": FunctionFragment;
    "MIN_POOL_SUPPLY()": FunctionFragment;
    "MIN_WEIGHT()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "BONE", values?: undefined): string;
  encodeFunctionData(functionFragment: "EXIT_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MAX_ASSET_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_BALANCE",
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
    functionFragment: "MAX_POOL_SUPPLY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_TOTAL_WEIGHT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MAX_UINT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MAX_WEIGHT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_ASSET_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_BALANCE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MIN_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MIN_POOL_SUPPLY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_WEIGHT",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "BONE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "EXIT_FEE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MAX_ASSET_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_BALANCE",
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
    functionFragment: "MAX_POOL_SUPPLY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_TOTAL_WEIGHT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_UINT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MAX_WEIGHT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MIN_ASSET_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_BALANCE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MIN_FEE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MIN_POOL_SUPPLY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MIN_WEIGHT", data: BytesLike): Result;

  events: {};
}

export interface IBalancerConstants extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBalancerConstantsInterface;

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

    EXIT_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_ASSET_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_BALANCE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_IN_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_OUT_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_POOL_SUPPLY(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_TOTAL_WEIGHT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_UINT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_WEIGHT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_ASSET_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_BALANCE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_POOL_SUPPLY(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_WEIGHT(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  BONE(overrides?: CallOverrides): Promise<BigNumber>;

  EXIT_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_ASSET_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_IN_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_OUT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_POOL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_TOTAL_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_ASSET_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_POOL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    BONE(overrides?: CallOverrides): Promise<BigNumber>;

    EXIT_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_ASSET_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_IN_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_OUT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_POOL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_TOTAL_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_ASSET_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_POOL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    BONE(overrides?: CallOverrides): Promise<BigNumber>;

    EXIT_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_ASSET_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_IN_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_OUT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_POOL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_TOTAL_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_ASSET_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_POOL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BONE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    EXIT_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_ASSET_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_BALANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_IN_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_OUT_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_POOL_SUPPLY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_TOTAL_WEIGHT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_UINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_WEIGHT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_ASSET_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_BALANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_POOL_SUPPLY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_WEIGHT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
