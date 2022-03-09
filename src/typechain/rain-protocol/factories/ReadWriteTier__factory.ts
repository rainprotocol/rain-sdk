/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReadWriteTier, ReadWriteTierInterface } from "../ReadWriteTier";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTier",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTier",
        type: "uint256",
      },
    ],
    name: "TierChange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
    ],
    name: "report",
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
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "endTier_",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "setTier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105b2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638a200fff1461003b578063e053ea3114610050575b600080fd5b61004e610049366004610471565b610075565b005b61006361005e36600461055a565b610182565b60405190815260200160405180910390f35b600082116100e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f5345545f5a45524f5f544945520000000000000000000000000000000000000060448201526064015b60405180910390fd5b60006100ef84610182565b905060006100fd82436101ff565b905061010b82828643610239565b73ffffffffffffffffffffffffffffffffffffffff861660008181526020818152604091829020939093558051338152928301919091528101829052606081018590527f100c93640a44fd8835d3652fa703bca54387aca4142e2cab319fb66cd80e3c9c9060800160405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260408120546101d2577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101f9565b73ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260409020545b92915050565b6000805b600881101561022f57828160200285901c63ffffffff1611156102275790506101f9565b600101610203565b5060089392505050565b60008383106102535761024e85858585610266565b61025d565b61025d8584610379565b95945050505050565b60008360088111156102d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016100db565b836008811115610340576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016100db565b6000865b8681101561036c5763ffffffff6020820290811b1999909916868a1b17989150600101610344565b5096979650505050505050565b60008160088111156103e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016100db565b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60209190910290811c901b1790565b803573ffffffffffffffffffffffffffffffffffffffff8116811461043d57600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060006060848603121561048657600080fd5b61048f84610419565b925060208401359150604084013567ffffffffffffffff808211156104b357600080fd5b818601915086601f8301126104c757600080fd5b8135818111156104d9576104d9610442565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561051f5761051f610442565b8160405282815289602084870101111561053857600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b60006020828403121561056c57600080fd5b61057582610419565b939250505056fea2646970667358221220e863641018884443e59b4b41e84321c8c0f94053da714f42d8125653080e67b464736f6c634300080a0033";

type ReadWriteTierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReadWriteTierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReadWriteTier__factory extends ContractFactory {
  constructor(...args: ReadWriteTierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ReadWriteTier> {
    return super.deploy(overrides || {}) as Promise<ReadWriteTier>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReadWriteTier {
    return super.attach(address) as ReadWriteTier;
  }
  connect(signer: Signer): ReadWriteTier__factory {
    return super.connect(signer) as ReadWriteTier__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReadWriteTierInterface {
    return new utils.Interface(_abi) as ReadWriteTierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReadWriteTier {
    return new Contract(address, _abi, signerOrProvider) as ReadWriteTier;
  }
}
