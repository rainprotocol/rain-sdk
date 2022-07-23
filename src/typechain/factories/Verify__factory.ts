/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verify, VerifyInterface } from "../Verify";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct Evidence",
        name: "evidence",
        type: "tuple",
      },
    ],
    name: "Approve",
    type: "event",
  },
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
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct Evidence",
        name: "evidence",
        type: "tuple",
      },
    ],
    name: "Ban",
    type: "event",
  },
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
        components: [
          {
            internalType: "address",
            name: "admin",
            type: "address",
          },
          {
            internalType: "address",
            name: "callback",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct VerifyConfig",
        name: "config",
        type: "tuple",
      },
    ],
    name: "Initialize",
    type: "event",
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct Evidence",
        name: "evidence",
        type: "tuple",
      },
    ],
    name: "Remove",
    type: "event",
  },
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
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct Evidence",
        name: "evidence",
        type: "tuple",
      },
    ],
    name: "RequestApprove",
    type: "event",
  },
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
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct Evidence",
        name: "evidence",
        type: "tuple",
      },
    ],
    name: "RequestBan",
    type: "event",
  },
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
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct Evidence",
        name: "evidence",
        type: "tuple",
      },
    ],
    name: "RequestRemove",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "APPROVER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "APPROVER_ADMIN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BANNER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BANNER_ADMIN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REMOVER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REMOVER_ADMIN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Evidence[]",
        name: "evidences_",
        type: "tuple[]",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Evidence[]",
        name: "evidences_",
        type: "tuple[]",
      },
    ],
    name: "ban",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "callback",
    outputs: [
      {
        internalType: "contract IVerifyCallback",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "admin",
            type: "address",
          },
          {
            internalType: "address",
            name: "callback",
            type: "address",
          },
        ],
        internalType: "struct VerifyConfig",
        name: "config_",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Evidence[]",
        name: "evidences_",
        type: "tuple[]",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Evidence[]",
        name: "evidences_",
        type: "tuple[]",
      },
    ],
    name: "requestApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Evidence[]",
        name: "evidences_",
        type: "tuple[]",
      },
    ],
    name: "requestBan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Evidence[]",
        name: "evidences_",
        type: "tuple[]",
      },
    ],
    name: "requestRemove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
    ],
    name: "state",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "addedSince",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "approvedSince",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "bannedSince",
            type: "uint32",
          },
        ],
        internalType: "struct State",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "addedSince",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "approvedSince",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "bannedSince",
            type: "uint32",
          },
        ],
        internalType: "struct State",
        name: "state_",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "timestamp_",
        type: "uint256",
      },
    ],
    name: "statusAtTime",
    outputs: [
      {
        internalType: "uint256",
        name: "status_",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
  "0x60806040523480156200001157600080fd5b506200001c62000022565b620000e4565b600154610100900460ff16156200008f5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60015460ff9081161015620000e2576001805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b612c5980620000f46000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c806381792e44116100e3578063b9bd01351161008c578063d547741f11610066578063d547741f146104d3578063e04dcf3d146104e6578063e2fac37c146104f957600080fd5b8063b9bd01351461049a578063ba658111146104ad578063cd491526146104c057600080fd5b8063a217fddf116100bd578063a217fddf14610458578063b6a597dd14610460578063b8c55bfa1461047357600080fd5b806381792e44146103da57806391d14854146104015780639f8392221461044557600080fd5b806331e658a5116101455780635df0675a1161011f5780635df0675a1461038d5780637547a867146103a05780637c7d7f7a146103c757600080fd5b806331e658a51461029e57806336568abe146103535780633d111c7e1461036657600080fd5b80631e210912116101765780631e2109121461023f578063248a9ca3146102665780632f2ff15d1461028957600080fd5b806301ffc9a71461019d578063083b2732146101c5578063100ec9981461020a575b600080fd5b6101b06101ab366004612328565b61050c565b60405190151581526020015b60405180910390f35b6003546101e59073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101bc565b6102317f9d65f741849e7609dd1e2c70f0d7da5f5433b36bfcf3ba4d27d2bb08ad2155b181565b6040519081526020016101bc565b6102317f2d4d1d70bd81797c3479f5c3f873a5c9203d249659c3b317cdad46367472783c81565b61023161027436600461236a565b60009081526020819052604090206001015490565b61029c6102973660046123ac565b6105a5565b005b6103246102ac3660046123d8565b60408051606080820183526000808352602080840182905292840181905273ffffffffffffffffffffffffffffffffffffffff9490941684526002825292829020825193840183525463ffffffff80821685526401000000008204811692850192909252680100000000000000009004169082015290565b60408051825163ffffffff908116825260208085015182169083015292820151909216908201526060016101bc565b61029c6103613660046123ac565b6105cf565b6102317f5ff1fb0ce9089603e6e193667ed17164e0360a6148f4a39fc194055588948a3181565b61029c61039b3660046123f3565b610687565b6102317f794e4221ebb6dd4e460d558b4ec709511d44017d6610ba89daa896c0684ddfac81565b61029c6103d53660046125dc565b6107b6565b6102317fbb496ca6fee71a17f78592fbc6fc7f04a436edb9c709c4289d6bbfbc5fd45f4d81565b6101b061040f3660046123ac565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b61029c6104533660046125dc565b610be2565b610231600081565b61029c61046e36600461269f565b610e87565b6102317f5a686c9d070917be517818979fb56f451f007e3ae83e96fb5a22a304929b070d81565b6102316104a836600461270e565b6112fd565b61029c6104bb366004612792565b61136b565b61029c6104ce3660046123f3565b6116b5565b61029c6104e13660046123ac565b611af3565b61029c6104f43660046123f3565b611b18565b61029c6105073660046123f3565b611c47565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061059f57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6000828152602081905260409020600101546105c081611d76565b6105ca8383611d83565b505050565b73ffffffffffffffffffffffffffffffffffffffff81163314610679576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6106838282611e73565b5050565b336000908152600260208181526040928390208351606081018552905463ffffffff8082168352640100000000820481169383019390935268010000000000000000900490911692810192909252906106e090426112fd565b14610747576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4f4e4c595f415050524f564544000000000000000000000000000000000000006044820152606401610670565b60005b818110156105ca577f9def0eb63e24d052c362c931f2ab4c31eda642472ddc393a44484906f374ba4d33848484818110610786576107866127f2565b90506020028101906107989190612821565b6040516107a692919061285f565b60405180910390a160010161074a565b7f5ff1fb0ce9089603e6e193667ed17164e0360a6148f4a39fc194055588948a316107e081611d76565b60408051606081018252600080825260208201819052918101919091526000835167ffffffffffffffff81111561081957610819612468565b604051908082528060200260200182016040528015610842578160200160208202803683370190505b5090506000845167ffffffffffffffff81111561086157610861612468565b60405190808252806020026020018201604052801561088a578160200160208202803683370190505b50905060008060005b8751811015610a8a5760008882815181106108b0576108b06127f2565b602090810291909101810151805173ffffffffffffffffffffffffffffffffffffffff166000908152600283526040908190208151606081018352905463ffffffff8082168084526401000000008304821696840196909652680100000000000000009091041691810191909152985091506001111561097557604080516060808201835260008083526020808401829052928401528251908101835263ffffffff428116825291810182905291820152965061096e868286611f2a565b6001909301925b602087015163ffffffff9081161415610a485763ffffffff4281166020808a01918252835173ffffffffffffffffffffffffffffffffffffffff16600090815260029091526040908190208a5181549351928c0151851668010000000000000000027fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff938616640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000090951691909516179290921716919091179055610a41858285611f2a565b6001909201915b7fd140ad1540fe1b6d943b0509d447b34e0719ff7f9c6175d26a870abc89c9304f3382604051610a799291906129fd565b60405180910390a150600101610893565b5060035473ffffffffffffffffffffffffffffffffffffffff168015610bd8578215610b4157610aba8584611f54565b6040517f89bd6b2600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8216906389bd6b2690610b0e9033908990600401612a2c565b600060405180830381600087803b158015610b2857600080fd5b505af1158015610b3c573d6000803e3d6000fd5b505050505b8115610bd857610b518483611f54565b6040517f376dcbe200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82169063376dcbe290610ba59033908890600401612a2c565b600060405180830381600087803b158015610bbf57600080fd5b505af1158015610bd3573d6000803e3d6000fd5b505050505b5050505050505050565b7f794e4221ebb6dd4e460d558b4ec709511d44017d6610ba89daa896c0684ddfac610c0c81611d76565b60408051606081018252600080825260208201819052918101919091526000835167ffffffffffffffff811115610c4557610c45612468565b604051908082528060200260200182016040528015610c6e578160200160208202803683370190505b5090506000805b8551811015610dc8576000868281518110610c9257610c926127f2565b6020026020010151905060026000888481518110610cb257610cb26127f2565b6020908102919091018101515173ffffffffffffffffffffffffffffffffffffffff1682528181019290925260409081016000208151606081018352905463ffffffff8082168084526401000000008304821695840195909552680100000000000000009091041691810191909152955015610d8657805173ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902080547fffffffffffffffffffffffffffffffffffffffff000000000000000000000000169055610d7f848285611f2a565b6001909201915b7fb6a0d4e5532c50d585db7a2aeb6d4628467d3c969d491458bb46c3dba33c46da3382604051610db79291906129fd565b60405180910390a150600101610c75565b5060035473ffffffffffffffffffffffffffffffffffffffff168015610e7f578115610e7f57610df88383611f54565b6040517febae2d8c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82169063ebae2d8c90610e4c9033908790600401612a2c565b600060405180830381600087803b158015610e6657600080fd5b505af1158015610e7a573d6000803e3d6000fd5b505050505b505050505050565b600154610100900460ff1615808015610ea457506001805460ff16105b80610ebd5750303b158015610ebd57506001805460ff16145b610f49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610670565b600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016811790558015610fa657600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b815173ffffffffffffffffffffffffffffffffffffffff16611024576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f305f4143434f554e5400000000000000000000000000000000000000000000006044820152606401610670565b61104e7f2d4d1d70bd81797c3479f5c3f873a5c9203d249659c3b317cdad46367472783c80611fc3565b6110987f5ff1fb0ce9089603e6e193667ed17164e0360a6148f4a39fc194055588948a317f2d4d1d70bd81797c3479f5c3f873a5c9203d249659c3b317cdad46367472783c611fc3565b6110c27f9d65f741849e7609dd1e2c70f0d7da5f5433b36bfcf3ba4d27d2bb08ad2155b180611fc3565b61110c7f794e4221ebb6dd4e460d558b4ec709511d44017d6610ba89daa896c0684ddfac7f9d65f741849e7609dd1e2c70f0d7da5f5433b36bfcf3ba4d27d2bb08ad2155b1611fc3565b6111367fbb496ca6fee71a17f78592fbc6fc7f04a436edb9c709c4289d6bbfbc5fd45f4d80611fc3565b6111807f5a686c9d070917be517818979fb56f451f007e3ae83e96fb5a22a304929b070d7fbb496ca6fee71a17f78592fbc6fc7f04a436edb9c709c4289d6bbfbc5fd45f4d611fc3565b6111ae7f2d4d1d70bd81797c3479f5c3f873a5c9203d249659c3b317cdad46367472783c8360000151611d83565b6111dc7f9d65f741849e7609dd1e2c70f0d7da5f5433b36bfcf3ba4d27d2bb08ad2155b18360000151611d83565b61120a7fbb496ca6fee71a17f78592fbc6fc7f04a436edb9c709c4289d6bbfbc5fd45f4d8360000151611d83565b60208281018051600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff928316179055604080513381528651831694810194909452915116908201527fed00b297c1b136ccaa940038371e3751cf8ca3c2bd51002f9bc4a4ad908441d09060600160405180910390a1801561068357600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b60006001836000015163ffffffff16101561131a5750600061059f565b81836040015163ffffffff16116113335750600361059f565b81836020015163ffffffff161161134c5750600261059f565b825163ffffffff1682106113625750600161059f565b50600092915050565b3360009081526002602090815260408083208151606081018352905463ffffffff8082168352640100000000820481169483019490945268010000000000000000900490921690820152906113c082426112fd565b9050600281141580156113d4575060038114155b61143a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f414c52454144595f4558495354530000000000000000000000000000000000006044820152606401610670565b8061150957604080516060808201835260008083526020808401829052928401528251908101835263ffffffff428116825291810182905291820152336000908152600260209081526040918290208351815492850151949093015163ffffffff90811668010000000000000000027fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff958216640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000909416919094161791909117929092161790555b600060405180604001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200186868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509152506040519091507f9def0eb63e24d052c362c931f2ab4c31eda642472ddc393a44484906f374ba4d9061159f90339084906129fd565b60405180910390a160035473ffffffffffffffffffffffffffffffffffffffff168015610e7f57604080516001808252818301909252600091816020015b6040805180820190915260008152606060208201528152602001906001900390816115dd579050509050828160008151811061161b5761161b6127f2565b60209081029190910101526040517f89bd6b2600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8316906389bd6b269061167a9033908590600401612a2c565b600060405180830381600087803b15801561169457600080fd5b505af11580156116a8573d6000803e3d6000fd5b5050505050505050505050565b7f5a686c9d070917be517818979fb56f451f007e3ae83e96fb5a22a304929b070d6116df81611d76565b60408051606081018252600080825260208201819052918101829052908367ffffffffffffffff81111561171557611715612468565b60405190808252806020026020018201604052801561173e578160200160208202803683370190505b50905060008467ffffffffffffffff81111561175c5761175c612468565b604051908082528060200260200182016040528015611785578160200160208202803683370190505b50905060008060005b8781101561199a5760008989838181106117aa576117aa6127f2565b90506020028101906117bc9190612821565b6117c590612aca565b805173ffffffffffffffffffffffffffffffffffffffff166000908152600260209081526040918290208251606081018452905463ffffffff80821680845264010000000083048216948401949094526801000000000000000090910416928101929092529098509091506001111561188357604080516060808201835260008083526020808401829052928401528251908101835263ffffffff428116825291810182905291820152965061187c868286611f2a565b6001909301925b604087015163ffffffff90811614156119585763ffffffff4281166040808a01918252835173ffffffffffffffffffffffffffffffffffffffff166000908152600260209081529190208a518154928c01519351851668010000000000000000027fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff948616640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000090941691909516179190911791909116919091179055611951858285611f2a565b6001909201915b7f56ed5bd6a5ed51ea9976f064fa4b26035c05a8d1ef4f4cd92454befc5090e9d233826040516119899291906129fd565b60405180910390a15060010161178e565b5060035473ffffffffffffffffffffffffffffffffffffffff168015611ae8578215611a51576119ca8584611f54565b6040517f89bd6b2600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8216906389bd6b2690611a1e9033908990600401612a2c565b600060405180830381600087803b158015611a3857600080fd5b505af1158015611a4c573d6000803e3d6000fd5b505050505b8115611ae857611a618483611f54565b6040517f8f6b114600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821690638f6b114690611ab59033908890600401612a2c565b600060405180830381600087803b158015611acf57600080fd5b505af1158015611ae3573d6000803e3d6000fd5b505050505b505050505050505050565b600082815260208190526040902060010154611b0e81611d76565b6105ca8383611e73565b336000908152600260208181526040928390208351606081018552905463ffffffff808216835264010000000082048116938301939093526801000000000000000090049091169281019290925290611b7190426112fd565b14611bd8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4f4e4c595f415050524f564544000000000000000000000000000000000000006044820152606401610670565b60005b818110156105ca577f9d48392ffd5df4ad821c86aa1f446e2b39cfecb6acd84a5b1dd41e3b4c1defce33848484818110611c1757611c176127f2565b9050602002810190611c299190612821565b604051611c3792919061285f565b60405180910390a1600101611bdb565b336000908152600260208181526040928390208351606081018552905463ffffffff808216835264010000000082048116938301939093526801000000000000000090049091169281019290925290611ca090426112fd565b14611d07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4f4e4c595f415050524f564544000000000000000000000000000000000000006044820152606401610670565b60005b818110156105ca577f1b7bdec72dbe138bce2074865e8cf0347693327c317e9c1fdfe914001d48b5d133848484818110611d4657611d466127f2565b9050602002810190611d589190612821565b604051611d6692919061285f565b60405180910390a1600101611d0a565b611d80813361200e565b50565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166106835760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055611e153390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16156106835760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600082905080848381518110611f4257611f426127f2565b60200260200101818152505050505050565b8151811115611fbf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4241445f524553495a45000000000000000000000000000000000000000000006044820152606401610670565b9052565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16610683576120648173ffffffffffffffffffffffffffffffffffffffff1660146120de565b61206f8360206120de565b604051602001612080929190612ad6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a000000000000000000000000000000000000000000000000000000000825261067091600401612b57565b606060006120ed836002612b99565b6120f8906002612bd6565b67ffffffffffffffff81111561211057612110612468565b6040519080825280601f01601f19166020018201604052801561213a576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110612171576121716127f2565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106121d4576121d46127f2565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000612210846002612b99565b61221b906001612bd6565b90505b60018111156122b8577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061225c5761225c6127f2565b1a60f81b828281518110612272576122726127f2565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c936122b181612bee565b905061221e565b508315612321576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610670565b9392505050565b60006020828403121561233a57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461232157600080fd5b60006020828403121561237c57600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146123a757600080fd5b919050565b600080604083850312156123bf57600080fd5b823591506123cf60208401612383565b90509250929050565b6000602082840312156123ea57600080fd5b61232182612383565b6000806020838503121561240657600080fd5b823567ffffffffffffffff8082111561241e57600080fd5b818501915085601f83011261243257600080fd5b81358181111561244157600080fd5b8660208260051b850101111561245657600080fd5b60209290920196919550909350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156124ba576124ba612468565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561250757612507612468565b604052919050565b60006040828403121561252157600080fd5b612529612497565b905061253482612383565b815260208083013567ffffffffffffffff8082111561255257600080fd5b818501915085601f83011261256657600080fd5b81358181111561257857612578612468565b6125a8847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016124c0565b915080825286848285010111156125be57600080fd5b80848401858401376000908201840152918301919091525092915050565b600060208083850312156125ef57600080fd5b823567ffffffffffffffff8082111561260757600080fd5b818501915085601f83011261261b57600080fd5b81358181111561262d5761262d612468565b8060051b61263c8582016124c0565b918252838101850191858101908984111561265657600080fd5b86860192505b83831015612692578235858111156126745760008081fd5b6126828b89838a010161250f565b835250918601919086019061265c565b9998505050505050505050565b6000604082840312156126b157600080fd5b6040516040810181811067ffffffffffffffff821117156126d4576126d4612468565b6040526126e083612383565b81526126ee60208401612383565b60208201529392505050565b803563ffffffff811681146123a757600080fd5b600080828403608081121561272257600080fd5b606081121561273057600080fd5b506040516060810181811067ffffffffffffffff8211171561275457612754612468565b604052612760846126fa565b815261276e602085016126fa565b602082015261277f604085016126fa565b6040820152946060939093013593505050565b600080602083850312156127a557600080fd5b823567ffffffffffffffff808211156127bd57600080fd5b818501915085601f8301126127d157600080fd5b8135818111156127e057600080fd5b86602082850101111561245657600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc183360301811261285557600080fd5b9190910192915050565b600073ffffffffffffffffffffffffffffffffffffffff8085168352604060208401528061288c85612383565b1660408401525060208301357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126128c857600080fd5b8301803567ffffffffffffffff8111156128e157600080fd5b8036038513156128f057600080fd5b60406060850152806080850152806020830160a0860137600060a0828601015260a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050509392505050565b60005b83811015612961578181015183820152602001612949565b83811115612970576000848401525b50505050565b6000815180845261298e816020860160208601612946565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff815116825260006020820151604060208501526129f56040850182612976565b949350505050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006129f560408301846129c0565b60006040820173ffffffffffffffffffffffffffffffffffffffff85168352602060408185015281855180845260608601915060608160051b870101935082870160005b82811015612abc577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018452612aaa8683516129c0565b95509284019290840190600101612a70565b509398975050505050505050565b600061059f368361250f565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612b0e816017850160208801612946565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351612b4b816028840160208801612946565b01602801949350505050565b6020815260006123216020830184612976565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612bd157612bd1612b6a565b500290565b60008219821115612be957612be9612b6a565b500190565b600081612bfd57612bfd612b6a565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019056fea2646970667358221220296cff4dcea9f4275b1211dc3f87dfe8fd16364241623bfee2195df62e92b95d64736f6c634300080a0033";

type VerifyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Verify__factory extends ContractFactory {
  constructor(...args: VerifyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Verify> {
    return super.deploy(overrides || {}) as Promise<Verify>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verify {
    return super.attach(address) as Verify;
  }
  connect(signer: Signer): Verify__factory {
    return super.connect(signer) as Verify__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifyInterface {
    return new utils.Interface(_abi) as VerifyInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Verify {
    return new Contract(address, _abi, signerOrProvider) as Verify;
  }
}
