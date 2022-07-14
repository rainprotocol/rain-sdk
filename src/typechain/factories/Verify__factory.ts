/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verify, VerifyInterface } from "../Verify";

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
  "0x608060405234801561001057600080fd5b50612c7e806100206000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c806381792e44116100e3578063b9bd01351161008c578063d547741f11610066578063d547741f146104d3578063e04dcf3d146104e6578063e2fac37c146104f957600080fd5b8063b9bd01351461049a578063ba658111146104ad578063cd491526146104c057600080fd5b8063a217fddf116100bd578063a217fddf14610458578063b6a597dd14610460578063b8c55bfa1461047357600080fd5b806381792e44146103da57806391d14854146104015780639f8392221461044557600080fd5b806331e658a5116101455780635df0675a1161011f5780635df0675a1461038d5780637547a867146103a05780637c7d7f7a146103c757600080fd5b806331e658a51461029e57806336568abe146103535780633d111c7e1461036657600080fd5b80631e210912116101765780631e2109121461023f578063248a9ca3146102665780632f2ff15d1461028957600080fd5b806301ffc9a71461019d578063083b2732146101c5578063100ec9981461020a575b600080fd5b6101b06101ab366004612346565b61050c565b60405190151581526020015b60405180910390f35b6003546101e59073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101bc565b6102317f9d65f741849e7609dd1e2c70f0d7da5f5433b36bfcf3ba4d27d2bb08ad2155b181565b6040519081526020016101bc565b6102317f2d4d1d70bd81797c3479f5c3f873a5c9203d249659c3b317cdad46367472783c81565b610231610274366004612388565b60009081526020819052604090206001015490565b61029c6102973660046123ca565b6105a5565b005b6103246102ac3660046123f6565b60408051606080820183526000808352602080840182905292840181905273ffffffffffffffffffffffffffffffffffffffff9490941684526002825292829020825193840183525463ffffffff80821685526401000000008204811692850192909252680100000000000000009004169082015290565b60408051825163ffffffff908116825260208085015182169083015292820151909216908201526060016101bc565b61029c6103613660046123ca565b6105cf565b6102317f5ff1fb0ce9089603e6e193667ed17164e0360a6148f4a39fc194055588948a3181565b61029c61039b366004612411565b610687565b6102317f794e4221ebb6dd4e460d558b4ec709511d44017d6610ba89daa896c0684ddfac81565b61029c6103d53660046125fa565b6107b6565b6102317fbb496ca6fee71a17f78592fbc6fc7f04a436edb9c709c4289d6bbfbc5fd45f4d81565b6101b061040f3660046123ca565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b61029c6104533660046125fa565b610be2565b610231600081565b61029c61046e3660046126bd565b610e87565b6102317f5a686c9d070917be517818979fb56f451f007e3ae83e96fb5a22a304929b070d81565b6102316104a83660046126e9565b61131b565b61029c6104bb36600461276d565b611389565b61029c6104ce366004612411565b6116d3565b61029c6104e13660046123ca565b611b11565b61029c6104f4366004612411565b611b36565b61029c610507366004612411565b611c65565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061059f57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6000828152602081905260409020600101546105c081611d94565b6105ca8383611da1565b505050565b73ffffffffffffffffffffffffffffffffffffffff81163314610679576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6106838282611e91565b5050565b336000908152600260208181526040928390208351606081018552905463ffffffff8082168352640100000000820481169383019390935268010000000000000000900490911692810192909252906106e0904261131b565b14610747576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4f4e4c595f415050524f564544000000000000000000000000000000000000006044820152606401610670565b60005b818110156105ca577f9def0eb63e24d052c362c931f2ab4c31eda642472ddc393a44484906f374ba4d33848484818110610786576107866127cd565b905060200281019061079891906127fc565b6040516107a692919061283a565b60405180910390a160010161074a565b7f5ff1fb0ce9089603e6e193667ed17164e0360a6148f4a39fc194055588948a316107e081611d94565b60408051606081018252600080825260208201819052918101919091526000835167ffffffffffffffff81111561081957610819612486565b604051908082528060200260200182016040528015610842578160200160208202803683370190505b5090506000845167ffffffffffffffff81111561086157610861612486565b60405190808252806020026020018201604052801561088a578160200160208202803683370190505b50905060008060005b8751811015610a8a5760008882815181106108b0576108b06127cd565b602090810291909101810151805173ffffffffffffffffffffffffffffffffffffffff166000908152600283526040908190208151606081018352905463ffffffff8082168084526401000000008304821696840196909652680100000000000000009091041691810191909152985091506001111561097557604080516060808201835260008083526020808401829052928401528251908101835263ffffffff428116825291810182905291820152965061096e868286611f48565b6001909301925b602087015163ffffffff9081161415610a485763ffffffff4281166020808a01918252835173ffffffffffffffffffffffffffffffffffffffff16600090815260029091526040908190208a5181549351928c0151851668010000000000000000027fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff938616640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000090951691909516179290921716919091179055610a41858285611f48565b6001909201915b7fd140ad1540fe1b6d943b0509d447b34e0719ff7f9c6175d26a870abc89c9304f3382604051610a799291906129d8565b60405180910390a150600101610893565b5060035473ffffffffffffffffffffffffffffffffffffffff168015610bd8578215610b4157610aba8584611f72565b6040517f89bd6b2600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8216906389bd6b2690610b0e9033908990600401612a07565b600060405180830381600087803b158015610b2857600080fd5b505af1158015610b3c573d6000803e3d6000fd5b505050505b8115610bd857610b518483611f72565b6040517f376dcbe200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82169063376dcbe290610ba59033908890600401612a07565b600060405180830381600087803b158015610bbf57600080fd5b505af1158015610bd3573d6000803e3d6000fd5b505050505b5050505050505050565b7f794e4221ebb6dd4e460d558b4ec709511d44017d6610ba89daa896c0684ddfac610c0c81611d94565b60408051606081018252600080825260208201819052918101919091526000835167ffffffffffffffff811115610c4557610c45612486565b604051908082528060200260200182016040528015610c6e578160200160208202803683370190505b5090506000805b8551811015610dc8576000868281518110610c9257610c926127cd565b6020026020010151905060026000888481518110610cb257610cb26127cd565b6020908102919091018101515173ffffffffffffffffffffffffffffffffffffffff1682528181019290925260409081016000208151606081018352905463ffffffff8082168084526401000000008304821695840195909552680100000000000000009091041691810191909152955015610d8657805173ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902080547fffffffffffffffffffffffffffffffffffffffff000000000000000000000000169055610d7f848285611f48565b6001909201915b7fb6a0d4e5532c50d585db7a2aeb6d4628467d3c969d491458bb46c3dba33c46da3382604051610db79291906129d8565b60405180910390a150600101610c75565b5060035473ffffffffffffffffffffffffffffffffffffffff168015610e7f578115610e7f57610df88383611f72565b6040517febae2d8c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82169063ebae2d8c90610e4c9033908790600401612a07565b600060405180830381600087803b158015610e6657600080fd5b505af1158015610e7a573d6000803e3d6000fd5b505050505b505050505050565b600154610100900460ff1615808015610ea457506001805460ff16105b80610ebd5750303b158015610ebd57506001805460ff16145b610f49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610670565b600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016811790558015610fa657600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b6000610fb560208401846123f6565b73ffffffffffffffffffffffffffffffffffffffff161415611033576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f305f4143434f554e5400000000000000000000000000000000000000000000006044820152606401610670565b61105d7f2d4d1d70bd81797c3479f5c3f873a5c9203d249659c3b317cdad46367472783c80611fe1565b6110a77f5ff1fb0ce9089603e6e193667ed17164e0360a6148f4a39fc194055588948a317f2d4d1d70bd81797c3479f5c3f873a5c9203d249659c3b317cdad46367472783c611fe1565b6110d17f9d65f741849e7609dd1e2c70f0d7da5f5433b36bfcf3ba4d27d2bb08ad2155b180611fe1565b61111b7f794e4221ebb6dd4e460d558b4ec709511d44017d6610ba89daa896c0684ddfac7f9d65f741849e7609dd1e2c70f0d7da5f5433b36bfcf3ba4d27d2bb08ad2155b1611fe1565b6111457fbb496ca6fee71a17f78592fbc6fc7f04a436edb9c709c4289d6bbfbc5fd45f4d80611fe1565b61118f7f5a686c9d070917be517818979fb56f451f007e3ae83e96fb5a22a304929b070d7fbb496ca6fee71a17f78592fbc6fc7f04a436edb9c709c4289d6bbfbc5fd45f4d611fe1565b6111c57f2d4d1d70bd81797c3479f5c3f873a5c9203d249659c3b317cdad46367472783c6111c060208501856123f6565b611da1565b6111f67f9d65f741849e7609dd1e2c70f0d7da5f5433b36bfcf3ba4d27d2bb08ad2155b16111c060208501856123f6565b6112277fbb496ca6fee71a17f78592fbc6fc7f04a436edb9c709c4289d6bbfbc5fd45f4d6111c060208501856123f6565b61123760408301602084016123f6565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556040517fed00b297c1b136ccaa940038371e3751cf8ca3c2bd51002f9bc4a4ad908441d0906112ae9033908590612aa5565b60405180910390a1801561068357600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b60006001836000015163ffffffff1610156113385750600061059f565b81836040015163ffffffff16116113515750600361059f565b81836020015163ffffffff161161136a5750600261059f565b825163ffffffff1682106113805750600161059f565b50600092915050565b3360009081526002602090815260408083208151606081018352905463ffffffff8082168352640100000000820481169483019490945268010000000000000000900490921690820152906113de824261131b565b9050600281141580156113f2575060038114155b611458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f414c52454144595f4558495354530000000000000000000000000000000000006044820152606401610670565b8061152757604080516060808201835260008083526020808401829052928401528251908101835263ffffffff428116825291810182905291820152336000908152600260209081526040918290208351815492850151949093015163ffffffff90811668010000000000000000027fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff958216640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000909416919094161791909117929092161790555b600060405180604001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200186868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509152506040519091507f9def0eb63e24d052c362c931f2ab4c31eda642472ddc393a44484906f374ba4d906115bd90339084906129d8565b60405180910390a160035473ffffffffffffffffffffffffffffffffffffffff168015610e7f57604080516001808252818301909252600091816020015b6040805180820190915260008152606060208201528152602001906001900390816115fb5790505090508281600081518110611639576116396127cd565b60209081029190910101526040517f89bd6b2600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8316906389bd6b26906116989033908590600401612a07565b600060405180830381600087803b1580156116b257600080fd5b505af11580156116c6573d6000803e3d6000fd5b5050505050505050505050565b7f5a686c9d070917be517818979fb56f451f007e3ae83e96fb5a22a304929b070d6116fd81611d94565b60408051606081018252600080825260208201819052918101829052908367ffffffffffffffff81111561173357611733612486565b60405190808252806020026020018201604052801561175c578160200160208202803683370190505b50905060008467ffffffffffffffff81111561177a5761177a612486565b6040519080825280602002602001820160405280156117a3578160200160208202803683370190505b50905060008060005b878110156119b85760008989838181106117c8576117c86127cd565b90506020028101906117da91906127fc565b6117e390612aef565b805173ffffffffffffffffffffffffffffffffffffffff166000908152600260209081526040918290208251606081018452905463ffffffff8082168084526401000000008304821694840194909452680100000000000000009091041692810192909252909850909150600111156118a157604080516060808201835260008083526020808401829052928401528251908101835263ffffffff428116825291810182905291820152965061189a868286611f48565b6001909301925b604087015163ffffffff90811614156119765763ffffffff4281166040808a01918252835173ffffffffffffffffffffffffffffffffffffffff166000908152600260209081529190208a518154928c01519351851668010000000000000000027fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff948616640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000009094169190951617919091179190911691909117905561196f858285611f48565b6001909201915b7f56ed5bd6a5ed51ea9976f064fa4b26035c05a8d1ef4f4cd92454befc5090e9d233826040516119a79291906129d8565b60405180910390a1506001016117ac565b5060035473ffffffffffffffffffffffffffffffffffffffff168015611b06578215611a6f576119e88584611f72565b6040517f89bd6b2600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8216906389bd6b2690611a3c9033908990600401612a07565b600060405180830381600087803b158015611a5657600080fd5b505af1158015611a6a573d6000803e3d6000fd5b505050505b8115611b0657611a7f8483611f72565b6040517f8f6b114600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821690638f6b114690611ad39033908890600401612a07565b600060405180830381600087803b158015611aed57600080fd5b505af1158015611b01573d6000803e3d6000fd5b505050505b505050505050505050565b600082815260208190526040902060010154611b2c81611d94565b6105ca8383611e91565b336000908152600260208181526040928390208351606081018552905463ffffffff808216835264010000000082048116938301939093526801000000000000000090049091169281019290925290611b8f904261131b565b14611bf6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4f4e4c595f415050524f564544000000000000000000000000000000000000006044820152606401610670565b60005b818110156105ca577f9d48392ffd5df4ad821c86aa1f446e2b39cfecb6acd84a5b1dd41e3b4c1defce33848484818110611c3557611c356127cd565b9050602002810190611c4791906127fc565b604051611c5592919061283a565b60405180910390a1600101611bf9565b336000908152600260208181526040928390208351606081018552905463ffffffff808216835264010000000082048116938301939093526801000000000000000090049091169281019290925290611cbe904261131b565b14611d25576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4f4e4c595f415050524f564544000000000000000000000000000000000000006044820152606401610670565b60005b818110156105ca577f1b7bdec72dbe138bce2074865e8cf0347693327c317e9c1fdfe914001d48b5d133848484818110611d6457611d646127cd565b9050602002810190611d7691906127fc565b604051611d8492919061283a565b60405180910390a1600101611d28565b611d9e813361202c565b50565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166106835760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055611e333390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16156106835760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600082905080848381518110611f6057611f606127cd565b60200260200101818152505050505050565b8151811115611fdd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4241445f524553495a45000000000000000000000000000000000000000000006044820152606401610670565b9052565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16610683576120828173ffffffffffffffffffffffffffffffffffffffff1660146120fc565b61208d8360206120fc565b60405160200161209e929190612afb565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a000000000000000000000000000000000000000000000000000000000825261067091600401612b7c565b6060600061210b836002612bbe565b612116906002612bfb565b67ffffffffffffffff81111561212e5761212e612486565b6040519080825280601f01601f191660200182016040528015612158576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061218f5761218f6127cd565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106121f2576121f26127cd565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600061222e846002612bbe565b612239906001612bfb565b90505b60018111156122d6577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061227a5761227a6127cd565b1a60f81b828281518110612290576122906127cd565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c936122cf81612c13565b905061223c565b50831561233f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610670565b9392505050565b60006020828403121561235857600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461233f57600080fd5b60006020828403121561239a57600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146123c557600080fd5b919050565b600080604083850312156123dd57600080fd5b823591506123ed602084016123a1565b90509250929050565b60006020828403121561240857600080fd5b61233f826123a1565b6000806020838503121561242457600080fd5b823567ffffffffffffffff8082111561243c57600080fd5b818501915085601f83011261245057600080fd5b81358181111561245f57600080fd5b8660208260051b850101111561247457600080fd5b60209290920196919550909350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156124d8576124d8612486565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561252557612525612486565b604052919050565b60006040828403121561253f57600080fd5b6125476124b5565b9050612552826123a1565b815260208083013567ffffffffffffffff8082111561257057600080fd5b818501915085601f83011261258457600080fd5b81358181111561259657612596612486565b6125c6847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016124de565b915080825286848285010111156125dc57600080fd5b80848401858401376000908201840152918301919091525092915050565b6000602080838503121561260d57600080fd5b823567ffffffffffffffff8082111561262557600080fd5b818501915085601f83011261263957600080fd5b81358181111561264b5761264b612486565b8060051b61265a8582016124de565b918252838101850191858101908984111561267457600080fd5b86860192505b838310156126b0578235858111156126925760008081fd5b6126a08b89838a010161252d565b835250918601919086019061267a565b9998505050505050505050565b6000604082840312156126cf57600080fd5b50919050565b803563ffffffff811681146123c557600080fd5b60008082840360808112156126fd57600080fd5b606081121561270b57600080fd5b506040516060810181811067ffffffffffffffff8211171561272f5761272f612486565b60405261273b846126d5565b8152612749602085016126d5565b602082015261275a604085016126d5565b6040820152946060939093013593505050565b6000806020838503121561278057600080fd5b823567ffffffffffffffff8082111561279857600080fd5b818501915085601f8301126127ac57600080fd5b8135818111156127bb57600080fd5b86602082850101111561247457600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc183360301811261283057600080fd5b9190910192915050565b600073ffffffffffffffffffffffffffffffffffffffff80851683526040602084015280612867856123a1565b1660408401525060208301357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126128a357600080fd5b8301803567ffffffffffffffff8111156128bc57600080fd5b8036038513156128cb57600080fd5b60406060850152806080850152806020830160a0860137600060a0828601015260a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050509392505050565b60005b8381101561293c578181015183820152602001612924565b8381111561294b576000848401525b50505050565b60008151808452612969816020860160208601612921565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff815116825260006020820151604060208501526129d06040850182612951565b949350505050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006129d0604083018461299b565b60006040820173ffffffffffffffffffffffffffffffffffffffff85168352602060408185015281855180845260608601915060608160051b870101935082870160005b82811015612a97577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018452612a8586835161299b565b95509284019290840190600101612a4b565b509398975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8381168252606082019080612ace856123a1565b16602084015280612ae1602086016123a1565b166040840152509392505050565b600061059f368361252d565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612b33816017850160208801612921565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351612b70816028840160208801612921565b01602801949350505050565b60208152600061233f6020830184612951565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612bf657612bf6612b8f565b500290565b60008219821115612c0e57612c0e612b8f565b500190565b600081612c2257612c22612b8f565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019056fea26469706673582212203d0ba714d57d7fdb0d65b54e89a15e74d8998df27f317576865309844fbad83f64736f6c634300080a0033";

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
