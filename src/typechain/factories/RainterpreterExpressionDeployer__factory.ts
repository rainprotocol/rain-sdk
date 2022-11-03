/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RainterpreterExpressionDeployer,
  RainterpreterExpressionDeployerInterface,
} from "../RainterpreterExpressionDeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "interpreter_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WriteError",
    type: "error",
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
            internalType: "bytes[]",
            name: "sources",
            type: "bytes[]",
          },
          {
            internalType: "uint256[]",
            name: "constants",
            type: "uint256[]",
          },
        ],
        indexed: false,
        internalType: "struct StateConfig",
        name: "config",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "expressionAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "contextScratch",
        type: "uint256",
      },
    ],
    name: "DeployExpression",
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
        indexed: false,
        internalType: "address",
        name: "interpreter",
        type: "address",
      },
    ],
    name: "ValidInterpreter",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes[]",
            name: "sources",
            type: "bytes[]",
          },
          {
            internalType: "uint256[]",
            name: "constants",
            type: "uint256[]",
          },
        ],
        internalType: "struct StateConfig",
        name: "config_",
        type: "tuple",
      },
      {
        internalType: "uint256[]",
        name: "finalMinStacks_",
        type: "uint256[]",
      },
    ],
    name: "deployExpression",
    outputs: [
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
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "pointer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "length",
            type: "uint256",
          },
        ],
        internalType: "struct StorageOpcodesRange",
        name: "storageOpcodesRange_",
        type: "tuple",
      },
      {
        internalType: "bytes[]",
        name: "sources_",
        type: "bytes[]",
      },
      {
        internalType: "uint256",
        name: "constantsLength_",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "finalStacks_",
        type: "uint256[]",
      },
    ],
    name: "ensureIntegrity",
    outputs: [
      {
        internalType: "uint256",
        name: "scratch_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "contextScratch_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stackLength_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200335c3803806200335c833981016040819052620000349162000280565b6000816001600160a01b031663f933c72f6040518163ffffffff1660e01b8152600401600060405180830381865afa15801562000075573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200009f9190810190620002ee565b9050620000b7816200021160201b6200023d1760201c565b6040518060a0016040528060708152602001620032ec6070913980519060200120818051906020012014620001225760405162461bcd60e51b815260206004820152600c60248201526b4241445f504f494e5445525360a01b60448201526064015b60405180910390fd5b60408051833f60208201819052916200015691016040516020818303038152906040526200021160201b6200023d1760201c565b7f2b4248b9be0943364b68e5a7bdb4cfe6218e70a4c4058d47104cdecff6f2ebb18114620001c75760405162461bcd60e51b815260206004820152601460248201527f4241445f494e5445525052455445525f48415348000000000000000000000000604482015260640162000119565b604080513381526001600160a01b03851660208201527ff37e8ef81084fa6f55ef06a1fee409bc7e4dc04c063ecb589e146bafcbd9cbcf910160405180910390a1505050620003e9565b6200025c81604051602401620002289190620003d4565b60408051601f198184030181529190526020810180516001600160e01b039081166305f3bfab60e11b179091526200025f16565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000602082840312156200029357600080fd5b81516001600160a01b0381168114620002ab57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620002e5578181015183820152602001620002cb565b50506000910152565b6000602082840312156200030157600080fd5b81516001600160401b03808211156200031957600080fd5b818401915084601f8301126200032e57600080fd5b815181811115620003435762000343620002b2565b604051601f8201601f19908116603f011681019083821181831017156200036e576200036e620002b2565b816040528281528760208487010111156200038857600080fd5b6200039b836020830160208801620002c8565b979650505050505050565b60008151808452620003c0816020860160208601620002c8565b601f01601f19169290920160200192915050565b602081526000620002ab6020830184620003a6565b612ef380620003f96000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631ed061d91461003b578063e9108ddf1461007f575b600080fd5b61004e61004936600461250b565b6100ad565b6040805173ffffffffffffffffffffffffffffffffffffffff90931683526020830191909152015b60405180910390f35b61009261008d3660046125c3565b61016b565b60408051938452602084019290925290820152606001610076565b60008060008060006100e0604051806040016040528060008152602001600081525088600001518960200151518961016b565b92509250925060006101118484846040518060a0016040528060708152602001612e4e607091398c9392919061035e565b9050600061011e82610484565b90507f47e759e722a8d8ae1bd080ed88fada765f27e54cbb9dd0fa96e1cd35848ba7d1338a83876040516101559493929190612722565b60405180910390a1989297509195505050505050565b60008060008060405180610120016040528088815260200189815260200187815260200160008152602001600081526020016000815260200160008152602001600081526020016101ba61050f565b9052905060005b855181101561020e576101fb8160008884815181106101e2576101e261282f565b60200260200101518561051f909392919063ffffffff16565b50806102068161288d565b9150506101c1565b5060c081015160e082015160a0830151608084015161022c91610617565b935093509350509450945094915050565b6102cc8160405160240161025191906128c5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f0be77f5600000000000000000000000000000000000000000000000000000000179052610624565b50565b6102cc816040516024016102e391906128c5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac00000000000000000000000000000000000000000000000000000000179052610624565b602085810151516060910260800160005b8751518110156103ad576103a1886000015182815181106103925761039261282f565b60200260200101515160200190565b9091019060010161036f565b5060008167ffffffffffffffff8111156103c9576103c96122d3565b6040519080825280601f01601f1916602001820160405280156103f3576020820181803683370190505b5090506000610403825b60200190565b86815260208a8101519101915061041b90829061064d565b888152602081018890526040019050606060005b8a5151811015610475578a5180518290811061044d5761044d61282f565b602002602001015191506104618288610674565b61046b83836106d3565b925060010161042f565b50919998505050505050505050565b6000806104af8360405160200161049b91906128d8565b6040516020818303038152906040526106f3565b90508051602082016000f0915073ffffffffffffffffffffffffffffffffffffffff8216610509576040517f08d4abb600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50919050565b606061051a8161071f565b905090565b83516020848102909101015180516000919081015b8082101561058f57600080600484019350835161ffff8116915061ffff8160101c169250506105868982898c610100015186815181106105765761057661282f565b602002602001015163ffffffff16565b96505050610534565b608087015161059e9086610617565b84111561060c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4d494e5f46494e414c5f535441434b000000000000000000000000000000000060448201526064015b60405180910390fd5b509295945050505050565b6020828203045b92915050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b815260200190565b600061066d8261066784518661064590919063ffffffff16565b90610931565b9392505050565b815161ffff907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000090840160028481019086015b828110156106ca57805185811660020283015186169085161781526004016106a7565b50505050505050565b600061066d826106ed84518661064590919063ffffffff16565b90610949565b606081518260405160200161070992919061292d565b6040516020818303038152906040529050919050565b60606000604051806107200160405280610737603890565b67ffffffffffffffff1667ffffffffffffffff16815260200161096b815260200161097a81526020016109d58152602001610a0c8152602001610a298152602001610ab58152602001610ae48152602001610be78152602001610c7a8152602001610c8a8152602001610c998152602001610ca88152602001610cb78152602001610c8a8152602001610cc68152602001610cd58152602001610ce48152602001610cf48152602001610d048152602001610d048152602001610d048152602001610d048152602001610d108152602001610d288152602001610d378152602001610d468152602001610d558152602001610d648152602001610d738152602001610d8d8152602001610daa8152602001610d738152602001610db98152602001610dc88152602001610dd78152602001610de68152602001610df68152602001610e068152602001610e168152602001610e268152602001610e368152602001610e468152602001610e568152602001610e668152602001610e768152602001610e868152602001610e968152602001610ea58152602001610eb48152602001610ec38152602001610ed28152602001610ee18152602001610ef18152602001610f018152602001610f108152602001610f928152509050600061091b82610fa1565b90506109278185611013565b805b949350505050565b600061093d8284611049565b8151602002830161066d565b600061096283835161095b6103fd8690565b919061105d565b8151830161066d565b600061092984836110d96110e5565b6080830151600090600780851691600386811c1691600587901c16906109a18887866110fd565b60808901526109b28883888661051f565b5060808801516109c49089908561111f565b608090980152509495945050505050565b60e0830151600090600884901c9060ff8516906109f390838361112f565b60e0870152610a028685611217565b9695505050505050565b6000826003811115610a2057610a206129c4565b50909392505050565b6000610a4383610a398685611225565b869190600061051f565b8214610aab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4c4f4f505f5348494654000000000000000000000000000000000000000000006044820152606401610603565b6109298483611225565b6000600f80841690600485901c16825b8281101561060c57610ada878387600061051f565b9450600101610ac5565b600060018084169084901c81610b70576080860151610b039085610617565b8110610b6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4f4f425f535441434b5f524541440000000000000000000000000000000000006044820152606401610603565b610bdd565b85604001518110610bdd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4f4f425f434f4e5354414e545f524541440000000000000000000000000000006044820152606401610603565b610a028685611217565b6020830151516000908310801590610c0a57506020808501519081015190510183105b610c70576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4f4f425f53544f524147455f52454144000000000000000000000000000000006044820152606401610603565b6109298483611217565b60006109298483611252866112a1565b600061092984836112b16110e5565b600061092984836113466113b7565b600061092984836113c6611462565b600061092984836114736110e5565b600061092984836114c96110e5565b60006109298483611578611462565b600061092984836115d58661168f565b600061092984836116ad866116b7565b60006109298483611217565b6000610929610d1f8584611225565b8590600861111f565b600061092984836116c46113b7565b600061092984836116d06110e5565b600061092984836116e66110e5565b600061092984836116fc6113b7565b600061092984836117086113b7565b60006122c9610d84858483876112a1565b95945050505050565b600061092982611714610da18660016129f3565b8792919061168f565b600061092984836117246110e5565b6000610929848361172e6110e5565b600061092984836117386113b7565b600061092984836117416110e5565b6000610929848361174b866112a1565b60006109298483611786866112a1565b600061092984836117b7866112a1565b600061092984836117cd866112a1565b600061092984836117d9866112a1565b600061092984836117e5866112a1565b600061092984836117f1866112a1565b60006109298483611807866112a1565b60006109298483611816866112a1565b60006109298483611822866112a1565b6000610929848361182e866112a1565b6000610929848361183a6113b7565b600061092984836118876113b7565b600061092984836119146113b7565b600061092984836119966113b7565b600061092984836119e36113b7565b60006109298483611a3086611a87565b60006109298483611a9a86611b34565b60006109298483611b476110e5565b6000601f831680610f7d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4241445f4f504552414e440000000000000000000000000000000000000000006044820152606401610603565b610d84610f8b8685846110fd565b8690611217565b60006109298483611ba66110e5565b8051819060381461100e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4241445f44594e414d49435f4c454e47544800000000000000000000000000006044820152606401610603565b919050565b60405182518251602080830286010183111561102e57600080fd5b6020810283016040520183526110448282611049565b505050565b600060208301905061104481838551611bbe565b5b6020811061109b5782518252602092830192909101907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00161105e565b8015611044577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600882021c80835116811985511617835250505050565b600061066d8383611be6565b60006109296110f6858560026110fd565b8590611217565b600081156111175760208202830392506111178484611dc1565b509092915050565b60208102820161066d8482611e42565b600082826010821061119d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4f4f425f434f4c554d4e000000000000000000000000000000000000000000006044820152606401610603565b60108110611207576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4f4f425f524f57000000000000000000000000000000000000000000000000006044820152606401610603565b60016010860285011b8617610a02565b6020810161061e8382611e42565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0810161061e8382611dc1565b6000816040516020016112659190612a06565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012092915050565b6000610d84610f8b8686856110fd565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152600091908416906370a08231906024015b602060405180830381865afa158015611322573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066d9190612a3c565b60008173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611393573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061e9190612a3c565b60006109296110f68585611225565b6040517f4ee2cd7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905260009190851690634ee2cd7e906044015b602060405180830381865afa15801561143e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109299190612a3c565b60006109296110f6858560036110fd565b6040517f981b24d00000000000000000000000000000000000000000000000000000000081526004810182905260009073ffffffffffffffffffffffffffffffffffffffff84169063981b24d090602401611305565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810182905260009073ffffffffffffffffffffffffffffffffffffffff841690636352211e90602401602060405180830381865afa158015611537573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155b9190612a55565b73ffffffffffffffffffffffffffffffffffffffff169392505050565b6040517efdd58e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152602482018390526000919085169062fdd58e90604401611421565b6040517f4e1273f400000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff851690634e1273f49061162c9086908690600401612a8b565b600060405180830381865afa158015611649573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109299190810190612aee565b6000610d846116a58686600160028702016110fd565b86908461111f565b806102cc57600080fd5b6000610d848585846110fd565b600061066d8284611e57565b6000610929826116e08587611e57565b90611ed7565b6000610929826116f68587611e57565b90611eec565b600061066d8284611f01565b600061066d8284611f50565b6060600084116111175781610929565b600081831461066d565b600081831161066d565b6000811561061e565b600081831061066d565b600082820183811061175d5780610929565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff949350505050565b6000826000036117985750600061061e565b828202828482816117ab576117ab6128fe565b040361175d5780610929565b60008183116117c757600061066d565b50900390565b600061066d82846129f3565b600061066d8284612b7f565b600061066d8284612cb3565b6000818311611800578161066d565b5090919050565b6000818310611800578161066d565b600061066d8284612cbf565b600061066d8284612cd3565b600061066d8284612cea565b60008173ffffffffffffffffffffffffffffffffffffffff1663ec14b06e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611393573d6000803e3d6000fd5b60008173ffffffffffffffffffffffffffffffffffffffff1663cd3293de6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156118d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118f89190612a55565b73ffffffffffffffffffffffffffffffffffffffff1692915050565b60008173ffffffffffffffffffffffffffffffffffffffff1663f9020e336040518163ffffffff1660e01b8152600401602060405180830381865afa158015611961573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119859190612cfd565b600381111561061e5761061e6129c4565b60008173ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156118d4573d6000803e3d6000fd5b60008173ffffffffffffffffffffffffffffffffffffffff166347e4bbb96040518163ffffffff1660e01b8152600401602060405180830381865afa158015611393573d6000803e3d6000fd5b6040517f88d6860400000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8516906388d68604906114219086908690600401612d1e565b6000610d84610f8b8686600286016110fd565b6040517fcaa0eb3b00000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff86169063caa0eb3b90611af390879087908790600401612d4d565b602060405180830381865afa158015611b10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d849190612a3c565b6000610d84610f8b8686600386016110fd565b60008060015b60088111611b9e576000611b618683611fad565b90506000611b6f8684611fad565b90506000611b7d83836117b7565b9050611b8d85600186038361205d565b94505060019092019150611b4d9050565b509392505050565b60006109298385600f16600487901c600f16856120e6565b8060200283015b80841015611be0578351835260209384019390920191611bc5565b50505050565b60008060008473ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015611c36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c5a9190612d9c565b5093505092505060008213611ccb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4d494e5f424153455f50524943450000000000000000000000000000000000006044820152606401610603565b83611cd68242612cea565b10611d3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f5354414c455f50524943450000000000000000000000000000000000000000006044820152606401610603565b610d848573ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611d8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611daf9190612dec565b60ff16611dbb8461218c565b90611e57565b81608001518110158015611dd857508160a0015181105b611e3e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f535441434b5f554e444552464c4f5700000000000000000000000000000000006044820152606401610603565b5050565b8160a00151811115611e3e5760a09190910152565b60008082601203611e6b578391505061061e565b8260121115611e9757506012829003611e8581600a612cb3565b611e8f9085612cd3565b91505061061e565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee8201611ec681600a612cb3565b611e8f9085612b7f565b5092915050565b600061066d83670de0b6b3a7640000846121fc565b600061066d8383670de0b6b3a76400006121fc565b60008160000b600003611f1557508161061e565b60008260000b1315611f3d57611f2c82600a612e0f565b611f369084612cd3565b905061061e565b60ff600083900316611ec681600a612cb3565b60008060128303611f64578391505061061e565b8260121115611f7e57506012829003611ec681600a612cb3565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee8201611e8581600a612cb3565b600081600881111561201b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f544945520000000000000000000000000000000000000000000000006044820152606401610603565b8260000361202c5760009150611ed0565b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016020021c63ffffffff1690565b60008260088111156120cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f544945520000000000000000000000000000000000000000000000006044820152606401610603565b505063ffffffff602090920291821b199290921691901b1790565b6000826008811115612154576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f544945520000000000000000000000000000000000000000000000006044820152606401610603565b6000855b858110156121805763ffffffff6020820290811b199890981685891b17979150600101612158565b50959695505050505050565b6000808212156121f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f7369746976656044820152606401610603565b5090565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff858709858702925082811083820303915050806000036122545783828161224a5761224a6128fe565b049250505061066d565b80841161226057600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6122d1612e1e565b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715612325576123256122d3565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612372576123726122d3565b604052919050565b600067ffffffffffffffff821115612394576123946122d3565b5060051b60200190565b6000601f83818401126123b057600080fd5b823560206123c56123c08361237a565b61232b565b82815260059290921b850181019181810190878411156123e457600080fd5b8287015b8481101561249957803567ffffffffffffffff808211156124095760008081fd5b818a0191508a603f83011261241e5760008081fd5b85820135604082821115612434576124346122d3565b612463887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08c8501160161232b565b92508183528c8183860101111561247a5760008081fd5b81818501898501375060009082018701528452509183019183016123e8565b50979650505050505050565b600082601f8301126124b657600080fd5b813560206124c66123c08361237a565b82815260059290921b840181019181810190868411156124e557600080fd5b8286015b8481101561250057803583529183019183016124e9565b509695505050505050565b6000806040838503121561251e57600080fd5b823567ffffffffffffffff8082111561253657600080fd5b908401906040828703121561254a57600080fd5b612552612302565b82358281111561256157600080fd5b61256d8882860161239e565b82525060208301358281111561258257600080fd5b61258e888286016124a5565b6020830152508094505060208501359150808211156125ac57600080fd5b506125b9858286016124a5565b9150509250929050565b60008060008084860360a08112156125da57600080fd5b60408112156125e857600080fd5b506040516040810167ffffffffffffffff828210818311171561260d5761260d6122d3565b816040528735835260208801356020840152829650604088013592508083111561263657600080fd5b61264289848a0161239e565b955060608801359450608088013592508083111561265f57600080fd5b505061266d878288016124a5565b91505092959194509250565b60005b8381101561269457818101518382015260200161267c565b50506000910152565b600081518084526126b5816020860160208601612679565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600081518084526020808501945080840160005b83811015612717578151875295820195908201906001016126fb565b509495945050505050565b73ffffffffffffffffffffffffffffffffffffffff851681526000602060808184015260c0830186516040608086015281815180845260e08701915060e08160051b8801019350848301925060005b818110156127bd577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff208886030183526127ab85855161269d565b94509285019291850191600101612771565b50505050908601518382037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800160a0850152906127fa81836126e7565b92505050612820604083018573ffffffffffffffffffffffffffffffffffffffff169052565b82606083015295945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036128be576128be61285e565b5060010190565b60208152600061066d602083018461269d565b60008152600082516128f1816001850160208701612679565b9190910160010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f630000000000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008360e01b1660018201527f80600e6000396000f300000000000000000000000000000000000000000000006005820152600082516129b681600e850160208701612679565b91909101600e019392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8082018082111561061e5761061e61285e565b815160009082906020808601845b83811015612a3057815185529382019390820190600101612a14565b50929695505050505050565b600060208284031215612a4e57600080fd5b5051919050565b600060208284031215612a6757600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461066d57600080fd5b604080825283519082018190526000906020906060840190828701845b82811015612ada57815173ffffffffffffffffffffffffffffffffffffffff1684529284019290840190600101612aa8565b50505083810382850152610a0281866126e7565b60006020808385031215612b0157600080fd5b825167ffffffffffffffff811115612b1857600080fd5b8301601f81018513612b2957600080fd5b8051612b376123c08261237a565b81815260059190911b82018301908381019087831115612b5657600080fd5b928401925b82841015612b7457835182529284019290840190612b5b565b979650505050505050565b600082612b8e57612b8e6128fe565b500490565b600181815b80851115612bec57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115612bd257612bd261285e565b80851615612bdf57918102915b93841c9390800290612b98565b509250929050565b600082612c035750600161061e565b81612c105750600061061e565b8160018114612c265760028114612c3057612c4c565b600191505061061e565b60ff841115612c4157612c4161285e565b50506001821b61061e565b5060208310610133831016604e8410600b8410161715612c6f575081810a61061e565b612c798383612b93565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115612cab57612cab61285e565b029392505050565b600061066d8383612bf4565b600082612cce57612cce6128fe565b500690565b808202811582820484141761061e5761061e61285e565b8181038181111561061e5761061e61285e565b600060208284031215612d0f57600080fd5b81516004811061066d57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600061092960408301846126e7565b73ffffffffffffffffffffffffffffffffffffffff84168152826020820152606060408201526000610d8460608301846126e7565b805169ffffffffffffffffffff8116811461100e57600080fd5b600080600080600060a08688031215612db457600080fd5b612dbd86612d82565b9450602086015193506040860151925060608601519150612de060808701612d82565b90509295509295909350565b600060208284031215612dfe57600080fd5b815160ff8116811461066d57600080fd5b600061066d60ff841683612bf4565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfe081d082b088008d408f6094e098509a309b209c109cf09dd09eb09c109f90a070a150a240a330a410a4f0a5d0a6b0aee0afd0b0c0b1b0b2a0b390b820b940ba20bd40be20bf00bfe0c0d0c1c0c2b0c3a0c490c580c670c760c850c940ca30cb10cbf0ccd0cdb0ce90cf80d070d150d7fa26469706673582212208ae7bb1fc37aa33e77843c946dad75374eb682875304620eeb7f58aa98d5cedd64736f6c63430008110033081d082b088008d408f6094e098509a309b209c109cf09dd09eb09c109f90a070a150a240a330a410a4f0a5d0a6b0aee0afd0b0c0b1b0b2a0b390b820b940ba20bd40be20bf00bfe0c0d0c1c0c2b0c3a0c490c580c670c760c850c940ca30cb10cbf0ccd0cdb0ce90cf80d070d150d7f";

type RainterpreterExpressionDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RainterpreterExpressionDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RainterpreterExpressionDeployer__factory extends ContractFactory {
  constructor(...args: RainterpreterExpressionDeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    interpreter_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RainterpreterExpressionDeployer> {
    return super.deploy(
      interpreter_,
      overrides || {}
    ) as Promise<RainterpreterExpressionDeployer>;
  }
  getDeployTransaction(
    interpreter_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(interpreter_, overrides || {});
  }
  attach(address: string): RainterpreterExpressionDeployer {
    return super.attach(address) as RainterpreterExpressionDeployer;
  }
  connect(signer: Signer): RainterpreterExpressionDeployer__factory {
    return super.connect(signer) as RainterpreterExpressionDeployer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RainterpreterExpressionDeployerInterface {
    return new utils.Interface(
      _abi
    ) as RainterpreterExpressionDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RainterpreterExpressionDeployer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RainterpreterExpressionDeployer;
  }
}
