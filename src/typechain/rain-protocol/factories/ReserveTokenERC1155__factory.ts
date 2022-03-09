/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ReserveTokenERC1155,
  ReserveTokenERC1155Interface,
} from "../ReserveTokenERC1155";

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
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
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
    name: "TOTAL_SUPPLY",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [],
    name: "mintNewToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
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
  {
    inputs: [],
    name: "tokenCount",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805160208101909152600081526200002c8162000071565b50600060038190556200006b9033906200004960066009620004a1565b6200005690600a620005bb565b6040805160208101909152600081526200008a565b620007e2565b805162000086906002906020840190620003e5565b5050565b6001600160a01b038416620000f05760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084015b60405180910390fd5b3362000116816000876200010488620001aa565b6200010f88620001aa565b5050505050565b6000848152602081815260408083206001600160a01b03891684529091528120805485929062000148908490620004a1565b909155505060408051858152602081018590526001600160a01b0380881692600092918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46200010f8160008787878762000200565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110620001e757620001e7620005d0565b602090810291909101015292915050565b505050505050565b6200021f846001600160a01b0316620003d660201b620009761760201c565b15620001f85760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906200025b908990899088908890889060040162000636565b6020604051808303816000875af192505050801562000299575060408051601f3d908101601f1916820190925262000296918101906200067d565b60015b6200035a57620002a8620006a9565b806308c379a01415620002e95750620002c062000701565b80620002cd5750620002eb565b8060405162461bcd60e51b8152600401620000e7919062000790565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e7465720000000000000000000000006064820152608401620000e7565b6001600160e01b0319811663f23a6e6160e01b14620003cd5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b6064820152608401620000e7565b50505050505050565b6001600160a01b03163b151590565b828054620003f390620007a5565b90600052602060002090601f01602090048101928262000417576000855562000462565b82601f106200043257805160ff191683800117855562000462565b8280016001018555821562000462579182015b828111156200046257825182559160200191906001019062000445565b506200047092915062000474565b5090565b5b8082111562000470576000815560010162000475565b634e487b7160e01b600052601160045260246000fd5b60008219821115620004b757620004b76200048b565b500190565b600181815b80851115620004fd578160001904821115620004e157620004e16200048b565b80851615620004ef57918102915b93841c9390800290620004c1565b509250929050565b6000826200051657506001620005b5565b816200052557506000620005b5565b81600181146200053e5760028114620005495762000569565b6001915050620005b5565b60ff8411156200055d576200055d6200048b565b50506001821b620005b5565b5060208310610133831016604e8410600b84101617156200058e575081810a620005b5565b6200059a8383620004bc565b8060001904821115620005b157620005b16200048b565b0290505b92915050565b6000620005c9838362000505565b9392505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b818110156200060e57602081850181015186830182015201620005f0565b8181111562000621576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906200067290830184620005e6565b979650505050505050565b6000602082840312156200069057600080fd5b81516001600160e01b031981168114620005c957600080fd5b600060033d1115620006c35760046000803e5060005160e01c5b90565b601f8201601f191681016001600160401b0381118282101715620006fa57634e487b7160e01b600052604160045260246000fd5b6040525050565b600060443d1015620007105790565b6040516003193d81016004833e81513d6001600160401b0380831160248401831017156200074057505050505090565b8285019150815181811115620007595750505050505090565b843d8701016020828501011115620007745750505050505090565b6200078560208286010187620006c6565b509095945050505050565b602081526000620005c96020830184620005e6565b600181811c90821680620007ba57607f821691505b60208210811415620007dc57634e487b7160e01b600052602260045260246000fd5b50919050565b6125a980620007f26000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c806374f104791161008c578063a22cb46511610066578063a22cb465146101c0578063e985e9c5146101d3578063f242432a1461021c578063f5298aca1461022f57600080fd5b806374f10479146101a7578063902d55a5146101af5780639f181b5e146101b757600080fd5b80632e0f2625116100c85780632e0f2625146101575780632eb2c2d61461015f5780634e1273f4146101745780636b20c4541461019457600080fd5b8062fdd58e146100ee57806301ffc9a7146101145780630e89341c14610137575b600080fd5b6101016100fc366004611b85565b610242565b6040519081526020015b60405180910390f35b610127610122366004611be0565b610322565b604051901515815260200161010b565b61014a610145366004611c04565b610405565b60405161010b9190611c88565b610101600681565b61017261016d366004611e3c565b610499565b005b610187610182366004611ee6565b610562565b60405161010b9190611fec565b6101726101a2366004611fff565b6106ba565b61017261077f565b6101016107cb565b61010160035481565b6101726101ce366004612073565b6107e5565b6101276101e13660046120af565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b61017261022a3660046120e2565b6107f4565b61017261023d366004612147565b6108b6565b600073ffffffffffffffffffffffffffffffffffffffff83166102ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201527f65726f206164647265737300000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060008181526020818152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091529020545b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a260000000000000000000000000000000000000000000000000000000014806103b557507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b8061031c57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083161461031c565b6060600280546104149061217a565b80601f01602080910402602001604051908101604052809291908181526020018280546104409061217a565b801561048d5780601f106104625761010080835404028352916020019161048d565b820191906000526020600020905b81548152906001019060200180831161047057829003601f168201915b50505050509050919050565b73ffffffffffffffffffffffffffffffffffffffff85163314806104c257506104c285336101e1565b61054e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f742060448201527f6f776e6572206e6f7220617070726f766564000000000000000000000000000060648201526084016102e3565b61055b8585858585610992565b5050505050565b606081518351146105f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d61746368000000000000000000000000000000000000000000000060648201526084016102e3565b6000835167ffffffffffffffff81111561061157610611611c9b565b60405190808252806020026020018201604052801561063a578160200160208202803683370190505b50905060005b84518110156106b25761068585828151811061065e5761065e6121ce565b6020026020010151858381518110610678576106786121ce565b6020026020010151610242565b828281518110610697576106976121ce565b60209081029190910101526106ab8161222c565b9050610640565b509392505050565b73ffffffffffffffffffffffffffffffffffffffff83163314806106e357506106e383336101e1565b61076f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201527f20617070726f766564000000000000000000000000000000000000000000000060648201526084016102e3565b61077a838383610ccc565b505050565b6003805490600061078f8361222c565b91905055506107c933600354600660096107a99190612265565b6107b490600a61239d565b60405180602001604052806000815250610fe5565b565b6107d760066009612265565b6107e290600a61239d565b81565b6107f033838361114c565b5050565b73ffffffffffffffffffffffffffffffffffffffff851633148061081d575061081d85336101e1565b6108a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201527f20617070726f766564000000000000000000000000000000000000000000000060648201526084016102e3565b61055b85858585856112a0565b73ffffffffffffffffffffffffffffffffffffffff83163314806108df57506108df83336101e1565b61096b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201527f20617070726f766564000000000000000000000000000000000000000000000060648201526084016102e3565b61077a8383836114d1565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b8151835114610a23576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d6174636800000000000000000000000000000000000000000000000060648201526084016102e3565b73ffffffffffffffffffffffffffffffffffffffff8416610ac6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016102e3565b3360005b8451811015610c37576000858281518110610ae757610ae76121ce565b602002602001015190506000858381518110610b0557610b056121ce565b6020908102919091018101516000848152808352604080822073ffffffffffffffffffffffffffffffffffffffff8e168352909352919091205490915081811015610bd2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e736665720000000000000000000000000000000000000000000060648201526084016102e3565b60008381526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8e8116855292528083208585039055908b16825281208054849290610c1c908490612265565b9250508190555050505080610c309061222c565b9050610aca565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610cae9291906123a9565b60405180910390a4610cc48187878787876116d9565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d6f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016102e3565b8051825114610e00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d6174636800000000000000000000000000000000000000000000000060648201526084016102e3565b604080516020810190915260009081905233905b8351811015610f5f576000848281518110610e3157610e316121ce565b602002602001015190506000848381518110610e4f57610e4f6121ce565b6020908102919091018101516000848152808352604080822073ffffffffffffffffffffffffffffffffffffffff8c168352909352919091205490915081811015610f1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c60448201527f616e63650000000000000000000000000000000000000000000000000000000060648201526084016102e3565b60009283526020838152604080852073ffffffffffffffffffffffffffffffffffffffff8b1686529091529092209103905580610f578161222c565b915050610e14565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051610fd79291906123a9565b60405180910390a450505050565b73ffffffffffffffffffffffffffffffffffffffff8416611088576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016102e3565b336110a28160008761109988611964565b61055b88611964565b60008481526020818152604080832073ffffffffffffffffffffffffffffffffffffffff89168452909152812080548592906110df908490612265565b9091555050604080518581526020810185905273ffffffffffffffffffffffffffffffffffffffff80881692600092918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461055b816000878787876119af565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611208576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c66000000000000000000000000000000000000000000000060648201526084016102e3565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8416611343576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016102e3565b3361135381878761109988611964565b60008481526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8a16845290915290205483811015611411576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e736665720000000000000000000000000000000000000000000060648201526084016102e3565b60008581526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8b811685529252808320878503905590881682528120805486929061145b908490612265565b9091555050604080518681526020810186905273ffffffffffffffffffffffffffffffffffffffff808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46114c88288888888886119af565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611574576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016102e3565b336115a48185600061158587611964565b61158e87611964565b5050604080516020810190915260009052505050565b60008381526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8816845290915290205482811015611661576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c60448201527f616e63650000000000000000000000000000000000000000000000000000000060648201526084016102e3565b60008481526020818152604080832073ffffffffffffffffffffffffffffffffffffffff898116808652918452828520888703905582518981529384018890529092908616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b73ffffffffffffffffffffffffffffffffffffffff84163b15610cc4576040517fbc197c8100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063bc197c819061175090899089908890889088906004016123d7565b6020604051808303816000875af19250505080156117a9575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526117a691810190612442565b60015b611893576117b561245f565b806308c379a0141561180957506117ca61247b565b806117d5575061180b565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e39190611c88565b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e74657200000000000000000000000060648201526084016102e3565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c8100000000000000000000000000000000000000000000000000000000146114c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e7300000000000000000000000000000000000000000000000060648201526084016102e3565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061199e5761199e6121ce565b602090810291909101015292915050565b73ffffffffffffffffffffffffffffffffffffffff84163b15610cc4576040517ff23a6e6100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063f23a6e6190611a269089908990889088908890600401612523565b6020604051808303816000875af1925050508015611a7f575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611a7c91810190612442565b60015b611a8b576117b561245f565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e6100000000000000000000000000000000000000000000000000000000146114c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e7300000000000000000000000000000000000000000000000060648201526084016102e3565b803573ffffffffffffffffffffffffffffffffffffffff81168114611b8057600080fd5b919050565b60008060408385031215611b9857600080fd5b611ba183611b5c565b946020939093013593505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114611bdd57600080fd5b50565b600060208284031215611bf257600080fd5b8135611bfd81611baf565b9392505050565b600060208284031215611c1657600080fd5b5035919050565b6000815180845260005b81811015611c4357602081850181015186830182015201611c27565b81811115611c55576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000611bfd6020830184611c1d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff82111715611d0e57611d0e611c9b565b6040525050565b600067ffffffffffffffff821115611d2f57611d2f611c9b565b5060051b60200190565b600082601f830112611d4a57600080fd5b81356020611d5782611d15565b604051611d648282611cca565b83815260059390931b8501820192828101915086841115611d8457600080fd5b8286015b84811015611d9f5780358352918301918301611d88565b509695505050505050565b600082601f830112611dbb57600080fd5b813567ffffffffffffffff811115611dd557611dd5611c9b565b604051611e0a60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160182611cca565b818152846020838601011115611e1f57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215611e5457600080fd5b611e5d86611b5c565b9450611e6b60208701611b5c565b9350604086013567ffffffffffffffff80821115611e8857600080fd5b611e9489838a01611d39565b94506060880135915080821115611eaa57600080fd5b611eb689838a01611d39565b93506080880135915080821115611ecc57600080fd5b50611ed988828901611daa565b9150509295509295909350565b60008060408385031215611ef957600080fd5b823567ffffffffffffffff80821115611f1157600080fd5b818501915085601f830112611f2557600080fd5b81356020611f3282611d15565b604051611f3f8282611cca565b83815260059390931b8501820192828101915089841115611f5f57600080fd5b948201945b83861015611f8457611f7586611b5c565b82529482019490820190611f64565b96505086013592505080821115611f9a57600080fd5b50611fa785828601611d39565b9150509250929050565b600081518084526020808501945080840160005b83811015611fe157815187529582019590820190600101611fc5565b509495945050505050565b602081526000611bfd6020830184611fb1565b60008060006060848603121561201457600080fd5b61201d84611b5c565b9250602084013567ffffffffffffffff8082111561203a57600080fd5b61204687838801611d39565b9350604086013591508082111561205c57600080fd5b5061206986828701611d39565b9150509250925092565b6000806040838503121561208657600080fd5b61208f83611b5c565b9150602083013580151581146120a457600080fd5b809150509250929050565b600080604083850312156120c257600080fd5b6120cb83611b5c565b91506120d960208401611b5c565b90509250929050565b600080600080600060a086880312156120fa57600080fd5b61210386611b5c565b945061211160208701611b5c565b93506040860135925060608601359150608086013567ffffffffffffffff81111561213b57600080fd5b611ed988828901611daa565b60008060006060848603121561215c57600080fd5b61216584611b5c565b95602085013595506040909401359392505050565b600181811c9082168061218e57607f821691505b602082108114156121c8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561225e5761225e6121fd565b5060010190565b60008219821115612278576122786121fd565b500190565b600181815b808511156122d657817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156122bc576122bc6121fd565b808516156122c957918102915b93841c9390800290612282565b509250929050565b6000826122ed5750600161031c565b816122fa5750600061031c565b8160018114612310576002811461231a57612336565b600191505061031c565b60ff84111561232b5761232b6121fd565b50506001821b61031c565b5060208310610133831016604e8410600b8410161715612359575081810a61031c565b612363838361227d565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115612395576123956121fd565b029392505050565b6000611bfd83836122de565b6040815260006123bc6040830185611fb1565b82810360208401526123ce8185611fb1565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a0604083015261241060a0830186611fb1565b82810360608401526124228186611fb1565b905082810360808401526124368185611c1d565b98975050505050505050565b60006020828403121561245457600080fd5b8151611bfd81611baf565b600060033d11156124785760046000803e5060005160e01c5b90565b600060443d10156124895790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff81602484011181841117156124d757505050505090565b82850191508151818111156124ef5750505050505090565b843d87010160208285010111156125095750505050505090565b61251860208286010187611cca565b509095945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015283606083015260a0608083015261256860a0830184611c1d565b97965050505050505056fea2646970667358221220c21711eb7731a55f85e881a24682902f6386cc5ec8a788ce4c52a4e380435bfc64736f6c634300080a0033";

type ReserveTokenERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReserveTokenERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReserveTokenERC1155__factory extends ContractFactory {
  constructor(...args: ReserveTokenERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ReserveTokenERC1155> {
    return super.deploy(overrides || {}) as Promise<ReserveTokenERC1155>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReserveTokenERC1155 {
    return super.attach(address) as ReserveTokenERC1155;
  }
  connect(signer: Signer): ReserveTokenERC1155__factory {
    return super.connect(signer) as ReserveTokenERC1155__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReserveTokenERC1155Interface {
    return new utils.Interface(_abi) as ReserveTokenERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReserveTokenERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ReserveTokenERC1155;
  }
}
