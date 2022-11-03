/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1155HolderUpgradeable,
  ERC1155HolderUpgradeableInterface,
} from "../ERC1155HolderUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506104eb806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a714610046578063bc197c811461006e578063f23a6e61146100d7575b600080fd5b6100596100543660046101a8565b61010f565b60405190151581526020015b60405180910390f35b6100a661007c3660046103a6565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610065565b6100a66100e5366004610450565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e00000000000000000000000000000000000000000000000000000000014806101a257507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6000602082840312156101ba57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146101ea57600080fd5b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461021557600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156102905761029061021a565b604052919050565b600082601f8301126102a957600080fd5b8135602067ffffffffffffffff8211156102c5576102c561021a565b8160051b6102d4828201610249565b92835284810182019282810190878511156102ee57600080fd5b83870192505b8483101561030d578235825291830191908301906102f4565b979650505050505050565b600082601f83011261032957600080fd5b813567ffffffffffffffff8111156103435761034361021a565b61037460207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610249565b81815284602083860101111561038957600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a086880312156103be57600080fd5b6103c7866101f1565b94506103d5602087016101f1565b9350604086013567ffffffffffffffff808211156103f257600080fd5b6103fe89838a01610298565b9450606088013591508082111561041457600080fd5b61042089838a01610298565b9350608088013591508082111561043657600080fd5b5061044388828901610318565b9150509295509295909350565b600080600080600060a0868803121561046857600080fd5b610471866101f1565b945061047f602087016101f1565b93506040860135925060608601359150608086013567ffffffffffffffff8111156104a957600080fd5b6104438882890161031856fea26469706673582212205c26e77630f4429a7015605782521440b3e39eb84061f02622850ffe32bafdc164736f6c63430008110033";

type ERC1155HolderUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155HolderUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155HolderUpgradeable__factory extends ContractFactory {
  constructor(...args: ERC1155HolderUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155HolderUpgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC1155HolderUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155HolderUpgradeable {
    return super.attach(address) as ERC1155HolderUpgradeable;
  }
  connect(signer: Signer): ERC1155HolderUpgradeable__factory {
    return super.connect(signer) as ERC1155HolderUpgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155HolderUpgradeableInterface {
    return new utils.Interface(_abi) as ERC1155HolderUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155HolderUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155HolderUpgradeable;
  }
}
