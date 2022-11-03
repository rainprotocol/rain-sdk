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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
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

export type FlowCommonConfigStruct = {
  expressionDeployer: string;
  interpreter: string;
  flows: StateConfigStruct[];
  flowFinalMinStack: BigNumberish;
};

export type FlowCommonConfigStructOutput = [
  string,
  string,
  StateConfigStructOutput[],
  BigNumber
] & {
  expressionDeployer: string;
  interpreter: string;
  flows: StateConfigStructOutput[];
  flowFinalMinStack: BigNumber;
};

export type FlowConfigStruct = {
  stateConfig: StateConfigStruct;
  flowConfig: FlowCommonConfigStruct;
};

export type FlowConfigStructOutput = [
  StateConfigStructOutput,
  FlowCommonConfigStructOutput
] & {
  stateConfig: StateConfigStructOutput;
  flowConfig: FlowCommonConfigStructOutput;
};

export type SignedContextStruct = {
  signer: string;
  signature: BytesLike;
  context: BigNumberish[];
};

export type SignedContextStructOutput = [string, string, BigNumber[]] & {
  signer: string;
  signature: string;
  context: BigNumber[];
};

export type NativeTransferStruct = {
  from: string;
  to: string;
  amount: BigNumberish;
};

export type NativeTransferStructOutput = [string, string, BigNumber] & {
  from: string;
  to: string;
  amount: BigNumber;
};

export type ERC20TransferStruct = {
  token: string;
  from: string;
  to: string;
  amount: BigNumberish;
};

export type ERC20TransferStructOutput = [string, string, string, BigNumber] & {
  token: string;
  from: string;
  to: string;
  amount: BigNumber;
};

export type ERC721TransferStruct = {
  token: string;
  from: string;
  to: string;
  id: BigNumberish;
};

export type ERC721TransferStructOutput = [string, string, string, BigNumber] & {
  token: string;
  from: string;
  to: string;
  id: BigNumber;
};

export type ERC1155TransferStruct = {
  token: string;
  from: string;
  to: string;
  id: BigNumberish;
  amount: BigNumberish;
};

export type ERC1155TransferStructOutput = [
  string,
  string,
  string,
  BigNumber,
  BigNumber
] & {
  token: string;
  from: string;
  to: string;
  id: BigNumber;
  amount: BigNumber;
};

export type FlowTransferStruct = {
  native: NativeTransferStruct[];
  erc20: ERC20TransferStruct[];
  erc721: ERC721TransferStruct[];
  erc1155: ERC1155TransferStruct[];
};

export type FlowTransferStructOutput = [
  NativeTransferStructOutput[],
  ERC20TransferStructOutput[],
  ERC721TransferStructOutput[],
  ERC1155TransferStructOutput[]
] & {
  native: NativeTransferStructOutput[];
  erc20: ERC20TransferStructOutput[];
  erc721: ERC721TransferStructOutput[];
  erc1155: ERC1155TransferStructOutput[];
};

export interface FlowInterface extends utils.Interface {
  functions: {
    "flow(address,uint256,(address,bytes,uint256[])[])": FunctionFragment;
    "initialize(((bytes[],uint256[]),(address,address,(bytes[],uint256[])[],uint256)))": FunctionFragment;
    "multicall(bytes[])": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "previewFlow(address,uint256,(address,bytes,uint256[])[])": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "flow",
    values: [string, BigNumberish, SignedContextStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [FlowConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "previewFlow",
    values: [string, BigNumberish, SignedContextStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "flow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewFlow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "Initialize(address,tuple)": EventFragment;
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialize"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export type InitializeEvent = TypedEvent<
  [string, FlowConfigStructOutput],
  { sender: string; config: FlowConfigStructOutput }
>;

export type InitializeEventFilter = TypedEventFilter<InitializeEvent>;

export type InitializedEvent = TypedEvent<[number], { version: number }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface Flow extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FlowInterface;

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
    flow(
      flow_: string,
      id_: BigNumberish,
      signedContexts_: SignedContextStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      config_: FlowConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    multicall(
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    previewFlow(
      flow_: string,
      id_: BigNumberish,
      signedContexts_: SignedContextStruct[],
      overrides?: CallOverrides
    ): Promise<[FlowTransferStructOutput]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  flow(
    flow_: string,
    id_: BigNumberish,
    signedContexts_: SignedContextStruct[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    config_: FlowConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  multicall(
    data: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155BatchReceived(
    arg0: string,
    arg1: string,
    arg2: BigNumberish[],
    arg3: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  previewFlow(
    flow_: string,
    id_: BigNumberish,
    signedContexts_: SignedContextStruct[],
    overrides?: CallOverrides
  ): Promise<FlowTransferStructOutput>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    flow(
      flow_: string,
      id_: BigNumberish,
      signedContexts_: SignedContextStruct[],
      overrides?: CallOverrides
    ): Promise<FlowTransferStructOutput>;

    initialize(
      config_: FlowConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    previewFlow(
      flow_: string,
      id_: BigNumberish,
      signedContexts_: SignedContextStruct[],
      overrides?: CallOverrides
    ): Promise<FlowTransferStructOutput>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Initialize(address,tuple)"(
      sender?: null,
      config?: null
    ): InitializeEventFilter;
    Initialize(sender?: null, config?: null): InitializeEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;
  };

  estimateGas: {
    flow(
      flow_: string,
      id_: BigNumberish,
      signedContexts_: SignedContextStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      config_: FlowConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    multicall(
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    previewFlow(
      flow_: string,
      id_: BigNumberish,
      signedContexts_: SignedContextStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    flow(
      flow_: string,
      id_: BigNumberish,
      signedContexts_: SignedContextStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      config_: FlowConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    multicall(
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    previewFlow(
      flow_: string,
      id_: BigNumberish,
      signedContexts_: SignedContextStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
