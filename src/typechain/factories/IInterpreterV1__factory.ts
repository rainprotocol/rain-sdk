/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IInterpreterV1,
  IInterpreterV1Interface,
} from "../IInterpreterV1";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "expressionPointer",
        type: "address",
      },
      {
        internalType: "SourceIndex",
        name: "entrypoint",
        type: "uint256",
      },
      {
        internalType: "uint256[][]",
        name: "context",
        type: "uint256[][]",
      },
    ],
    name: "eval",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "functionPointers",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IInterpreterV1__factory {
  static readonly abi = _abi;
  static createInterface(): IInterpreterV1Interface {
    return new utils.Interface(_abi) as IInterpreterV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IInterpreterV1 {
    return new Contract(address, _abi, signerOrProvider) as IInterpreterV1;
  }
}
