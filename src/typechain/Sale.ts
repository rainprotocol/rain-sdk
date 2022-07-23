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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type SaleConstructorConfigStruct = {
  maximumSaleTimeout: BigNumberish;
  maximumCooldownDuration: BigNumberish;
  redeemableERC20Factory: string;
  vmStateBuilder: string;
};

export type SaleConstructorConfigStructOutput = [
  BigNumber,
  BigNumber,
  string,
  string
] & {
  maximumSaleTimeout: BigNumber;
  maximumCooldownDuration: BigNumber;
  redeemableERC20Factory: string;
  vmStateBuilder: string;
};

export type BuyConfigStruct = {
  feeRecipient: string;
  fee: BigNumberish;
  minimumUnits: BigNumberish;
  desiredUnits: BigNumberish;
  maximumPrice: BigNumberish;
};

export type BuyConfigStructOutput = [
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  feeRecipient: string;
  fee: BigNumber;
  minimumUnits: BigNumber;
  desiredUnits: BigNumber;
  maximumPrice: BigNumber;
};

export type ReceiptStruct = {
  id: BigNumberish;
  feeRecipient: string;
  fee: BigNumberish;
  units: BigNumberish;
  price: BigNumberish;
};

export type ReceiptStructOutput = [
  BigNumber,
  string,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  id: BigNumber;
  feeRecipient: string;
  fee: BigNumber;
  units: BigNumber;
  price: BigNumber;
};

export type StateConfigStruct = {
  sources: BytesLike[];
  constants: BigNumberish[];
};

export type StateConfigStructOutput = [string[], BigNumber[]] & {
  sources: string[];
  constants: BigNumber[];
};

export type SaleConfigStruct = {
  vmStateConfig: StateConfigStruct;
  recipient: string;
  reserve: string;
  saleTimeout: BigNumberish;
  cooldownDuration: BigNumberish;
  minimumRaise: BigNumberish;
  dustSize: BigNumberish;
};

export type SaleConfigStructOutput = [
  StateConfigStructOutput,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  vmStateConfig: StateConfigStructOutput;
  recipient: string;
  reserve: string;
  saleTimeout: BigNumber;
  cooldownDuration: BigNumber;
  minimumRaise: BigNumber;
  dustSize: BigNumber;
};

export type ERC20ConfigStruct = {
  name: string;
  symbol: string;
  distributor: string;
  initialSupply: BigNumberish;
};

export type ERC20ConfigStructOutput = [string, string, string, BigNumber] & {
  name: string;
  symbol: string;
  distributor: string;
  initialSupply: BigNumber;
};

export type SaleRedeemableERC20ConfigStruct = {
  erc20Config: ERC20ConfigStruct;
  tier: string;
  minimumTier: BigNumberish;
  distributionEndForwardingAddress: string;
};

export type SaleRedeemableERC20ConfigStructOutput = [
  ERC20ConfigStructOutput,
  string,
  BigNumber,
  string
] & {
  erc20Config: ERC20ConfigStructOutput;
  tier: string;
  minimumTier: BigNumber;
  distributionEndForwardingAddress: string;
};

export type StorageOpcodesRangeStruct = {
  pointer: BigNumberish;
  length: BigNumberish;
};

export type StorageOpcodesRangeStructOutput = [BigNumber, BigNumber] & {
  pointer: BigNumber;
  length: BigNumber;
};

export interface SaleInterface extends utils.Interface {
  functions: {
    "buy((address,uint256,uint256,uint256,uint256))": FunctionFragment;
    "calculateBuy(uint256)": FunctionFragment;
    "canLive()": FunctionFragment;
    "claimFees(address)": FunctionFragment;
    "end()": FunctionFragment;
    "initialize(((bytes[],uint256[]),address,address,uint256,uint256,uint256,uint256),((string,string,address,uint256),address,uint256,address))": FunctionFragment;
    "packedFunctionPointers()": FunctionFragment;
    "refund((uint256,address,uint256,uint256,uint256))": FunctionFragment;
    "reserve()": FunctionFragment;
    "saleStatus()": FunctionFragment;
    "start()": FunctionFragment;
    "storageOpcodesRange()": FunctionFragment;
    "timeout()": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "buy",
    values: [BuyConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateBuy",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "canLive", values?: undefined): string;
  encodeFunctionData(functionFragment: "claimFees", values: [string]): string;
  encodeFunctionData(functionFragment: "end", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [SaleConfigStruct, SaleRedeemableERC20ConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "packedFunctionPointers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "refund",
    values: [ReceiptStruct]
  ): string;
  encodeFunctionData(functionFragment: "reserve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "saleStatus",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "storageOpcodesRange",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "timeout", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateBuy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "canLive", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "end", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "packedFunctionPointers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reserve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "saleStatus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "storageOpcodesRange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "timeout", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {
    "Buy(address,tuple,tuple)": EventFragment;
    "Construct(address,tuple)": EventFragment;
    "CooldownInitialize(address,uint256)": EventFragment;
    "CooldownTriggered(address,uint256)": EventFragment;
    "End(address,uint8)": EventFragment;
    "Initialize(address,tuple,address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "Refund(address,tuple)": EventFragment;
    "Start(address)": EventFragment;
    "Timeout(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Buy"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Construct"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CooldownInitialize"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CooldownTriggered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "End"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialize"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Refund"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Start"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Timeout"): EventFragment;
}

export type BuyEvent = TypedEvent<
  [string, BuyConfigStructOutput, ReceiptStructOutput],
  {
    sender: string;
    config: BuyConfigStructOutput;
    receipt: ReceiptStructOutput;
  }
>;

export type BuyEventFilter = TypedEventFilter<BuyEvent>;

export type ConstructEvent = TypedEvent<
  [string, SaleConstructorConfigStructOutput],
  { sender: string; config: SaleConstructorConfigStructOutput }
>;

export type ConstructEventFilter = TypedEventFilter<ConstructEvent>;

export type CooldownInitializeEvent = TypedEvent<
  [string, BigNumber],
  { sender: string; cooldownDuration: BigNumber }
>;

export type CooldownInitializeEventFilter =
  TypedEventFilter<CooldownInitializeEvent>;

export type CooldownTriggeredEvent = TypedEvent<
  [string, BigNumber],
  { caller: string; cooldown: BigNumber }
>;

export type CooldownTriggeredEventFilter =
  TypedEventFilter<CooldownTriggeredEvent>;

export type EndEvent = TypedEvent<
  [string, number],
  { sender: string; saleStatus: number }
>;

export type EndEventFilter = TypedEventFilter<EndEvent>;

export type InitializeEvent = TypedEvent<
  [string, SaleConfigStructOutput, string],
  { sender: string; config: SaleConfigStructOutput; token: string }
>;

export type InitializeEventFilter = TypedEventFilter<InitializeEvent>;

export type InitializedEvent = TypedEvent<[number], { version: number }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export type RefundEvent = TypedEvent<
  [string, ReceiptStructOutput],
  { sender: string; receipt: ReceiptStructOutput }
>;

export type RefundEventFilter = TypedEventFilter<RefundEvent>;

export type StartEvent = TypedEvent<[string], { sender: string }>;

export type StartEventFilter = TypedEventFilter<StartEvent>;

export type TimeoutEvent = TypedEvent<[string], { sender: string }>;

export type TimeoutEventFilter = TypedEventFilter<TimeoutEvent>;

export interface Sale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SaleInterface;

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
    buy(
      config_: BuyConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculateBuy(
      targetUnits_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    canLive(overrides?: CallOverrides): Promise<[boolean]>;

    claimFees(
      recipient_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    end(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      config_: SaleConfigStruct,
      saleRedeemableERC20Config_: SaleRedeemableERC20ConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    packedFunctionPointers(
      overrides?: CallOverrides
    ): Promise<[string] & { ptrs_: string }>;

    refund(
      receipt_: ReceiptStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reserve(overrides?: CallOverrides): Promise<[string]>;

    saleStatus(overrides?: CallOverrides): Promise<[number]>;

    start(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    storageOpcodesRange(
      overrides?: CallOverrides
    ): Promise<[StorageOpcodesRangeStructOutput]>;

    timeout(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  buy(
    config_: BuyConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculateBuy(
    targetUnits_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  canLive(overrides?: CallOverrides): Promise<boolean>;

  claimFees(
    recipient_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  end(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    config_: SaleConfigStruct,
    saleRedeemableERC20Config_: SaleRedeemableERC20ConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  packedFunctionPointers(overrides?: CallOverrides): Promise<string>;

  refund(
    receipt_: ReceiptStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reserve(overrides?: CallOverrides): Promise<string>;

  saleStatus(overrides?: CallOverrides): Promise<number>;

  start(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  storageOpcodesRange(
    overrides?: CallOverrides
  ): Promise<StorageOpcodesRangeStructOutput>;

  timeout(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    buy(config_: BuyConfigStruct, overrides?: CallOverrides): Promise<void>;

    calculateBuy(
      targetUnits_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    canLive(overrides?: CallOverrides): Promise<boolean>;

    claimFees(recipient_: string, overrides?: CallOverrides): Promise<void>;

    end(overrides?: CallOverrides): Promise<void>;

    initialize(
      config_: SaleConfigStruct,
      saleRedeemableERC20Config_: SaleRedeemableERC20ConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    packedFunctionPointers(overrides?: CallOverrides): Promise<string>;

    refund(receipt_: ReceiptStruct, overrides?: CallOverrides): Promise<void>;

    reserve(overrides?: CallOverrides): Promise<string>;

    saleStatus(overrides?: CallOverrides): Promise<number>;

    start(overrides?: CallOverrides): Promise<void>;

    storageOpcodesRange(
      overrides?: CallOverrides
    ): Promise<StorageOpcodesRangeStructOutput>;

    timeout(overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Buy(address,tuple,tuple)"(
      sender?: null,
      config?: null,
      receipt?: null
    ): BuyEventFilter;
    Buy(sender?: null, config?: null, receipt?: null): BuyEventFilter;

    "Construct(address,tuple)"(
      sender?: null,
      config?: null
    ): ConstructEventFilter;
    Construct(sender?: null, config?: null): ConstructEventFilter;

    "CooldownInitialize(address,uint256)"(
      sender?: null,
      cooldownDuration?: null
    ): CooldownInitializeEventFilter;
    CooldownInitialize(
      sender?: null,
      cooldownDuration?: null
    ): CooldownInitializeEventFilter;

    "CooldownTriggered(address,uint256)"(
      caller?: null,
      cooldown?: null
    ): CooldownTriggeredEventFilter;
    CooldownTriggered(
      caller?: null,
      cooldown?: null
    ): CooldownTriggeredEventFilter;

    "End(address,uint8)"(sender?: null, saleStatus?: null): EndEventFilter;
    End(sender?: null, saleStatus?: null): EndEventFilter;

    "Initialize(address,tuple,address)"(
      sender?: null,
      config?: null,
      token?: null
    ): InitializeEventFilter;
    Initialize(
      sender?: null,
      config?: null,
      token?: null
    ): InitializeEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "Refund(address,tuple)"(sender?: null, receipt?: null): RefundEventFilter;
    Refund(sender?: null, receipt?: null): RefundEventFilter;

    "Start(address)"(sender?: null): StartEventFilter;
    Start(sender?: null): StartEventFilter;

    "Timeout(address)"(sender?: null): TimeoutEventFilter;
    Timeout(sender?: null): TimeoutEventFilter;
  };

  estimateGas: {
    buy(
      config_: BuyConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculateBuy(
      targetUnits_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canLive(overrides?: CallOverrides): Promise<BigNumber>;

    claimFees(
      recipient_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    end(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      config_: SaleConfigStruct,
      saleRedeemableERC20Config_: SaleRedeemableERC20ConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    packedFunctionPointers(overrides?: CallOverrides): Promise<BigNumber>;

    refund(
      receipt_: ReceiptStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reserve(overrides?: CallOverrides): Promise<BigNumber>;

    saleStatus(overrides?: CallOverrides): Promise<BigNumber>;

    start(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    storageOpcodesRange(overrides?: CallOverrides): Promise<BigNumber>;

    timeout(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    buy(
      config_: BuyConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculateBuy(
      targetUnits_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canLive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimFees(
      recipient_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    end(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      config_: SaleConfigStruct,
      saleRedeemableERC20Config_: SaleRedeemableERC20ConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    packedFunctionPointers(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    refund(
      receipt_: ReceiptStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reserve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    saleStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    start(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    storageOpcodesRange(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    timeout(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
