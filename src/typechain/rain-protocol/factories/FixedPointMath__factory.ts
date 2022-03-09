/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FixedPointMath,
  FixedPointMathInterface,
} from "../FixedPointMath";

const _abi = [
  {
    inputs: [],
    name: "DECIMALS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ONE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x61020b61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c80632e0f262514610045578063c2ee3a081461005f575b600080fd5b61004d601281565b60405190815260200160405180910390f35b61004d61006e6012600a6101c2565b81565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b808511156100f957817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156100df576100df610071565b808516156100ec57918102915b93841c93908002906100a5565b509250929050565b600082610110575060016101bc565b8161011d575060006101bc565b8160018114610133576002811461013d57610159565b60019150506101bc565b60ff84111561014e5761014e610071565b50506001821b6101bc565b5060208310610133831016604e8410600b841016171561017c575081810a6101bc565b61018683836100a0565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156101b8576101b8610071565b0290505b92915050565b60006101ce8383610101565b939250505056fea2646970667358221220b0afbd8999ca47035e9b4eae8ad56b19474365549f47bc980c103748059cf11464736f6c634300080a0033";

type FixedPointMathConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FixedPointMathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FixedPointMath__factory extends ContractFactory {
  constructor(...args: FixedPointMathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FixedPointMath> {
    return super.deploy(overrides || {}) as Promise<FixedPointMath>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FixedPointMath {
    return super.attach(address) as FixedPointMath;
  }
  connect(signer: Signer): FixedPointMath__factory {
    return super.connect(signer) as FixedPointMath__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FixedPointMathInterface {
    return new utils.Interface(_abi) as FixedPointMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FixedPointMath {
    return new Contract(address, _abi, signerOrProvider) as FixedPointMath;
  }
}
