/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StandardIntegrity,
  StandardIntegrityInterface,
} from "../StandardIntegrity";

const _abi = [
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
  "0x608060405234801561001057600080fd5b506125c9806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e9108ddf14610030575b600080fd5b61004361003e366004611e8a565b610062565b6040805193845260208401929092529082015260600160405180910390f35b60008060008060405180610120016040528088815260200189815260200187815260200160008152602001600081526020016000815260200160008152602001600081526020016100b1610134565b9052905060005b8551811015610105576100f28160008884815181106100d9576100d961200a565b602002602001015185610144909392919063ffffffff16565b50806100fd81612068565b9150506100b8565b5060c081015160e082015160a083015160808401516101239161023c565b935093509350509450945094915050565b606061013f81610249565b905090565b83516020848102909101015180516000919081015b808210156101b457600080600484019350835161ffff8116915061ffff8160101c169250506101ab8982898c6101000151868151811061019b5761019b61200a565b602002602001015163ffffffff16565b96505050610159565b60808701516101c3908661023c565b841115610231576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4d494e5f46494e414c5f535441434b000000000000000000000000000000000060448201526064015b60405180910390fd5b509295945050505050565b6020828203045b92915050565b60606000604051806107200160405280610261603890565b67ffffffffffffffff1667ffffffffffffffff16815260200161045b815260200161047481526020016104cf8152602001610506815260200161052381526020016105af81526020016105de81526020016106e181526020016107748152602001610784815260200161079381526020016107a281526020016107b1815260200161078481526020016107c081526020016107cf81526020016107de81526020016107ee81526020016107fe81526020016107fe81526020016107fe81526020016107fe815260200161080a815260200161082281526020016108318152602001610840815260200161084f815260200161085e815260200161086d815260200161088781526020016108a4815260200161086d81526020016108b381526020016108c281526020016108d181526020016108e081526020016108f08152602001610900815260200161091081526020016109208152602001610930815260200161094081526020016109508152602001610960815260200161097081526020016109808152602001610990815260200161099f81526020016109ae81526020016109bd81526020016109cc81526020016109db81526020016109eb81526020016109fb8152602001610a0a8152602001610a8c8152509050600061044582610a9b565b90506104518185610b0d565b805b949350505050565b600061046a8483610b43610b4f565b90505b9392505050565b6080830151600090600780851691600386811c1691600587901c169061049b888786610b67565b60808901526104ac88838886610144565b5060808801516104be90899085610b89565b608090980152509495945050505050565b60e0830151600090600884901c9060ff8516906104ed908383610b99565b60e08701526104fc8685610c81565b9695505050505050565b600082600381111561051a5761051a6120cf565b50909392505050565b600061053d836105338685610c8f565b8691906000610144565b82146105a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4c4f4f505f5348494654000000000000000000000000000000000000000000006044820152606401610228565b61046a8483610c8f565b6000600f80841690600485901c16825b82811015610231576105d48783876000610144565b94506001016105bf565b600060018084169084901c8161066a5760808601516105fd908561023c565b8110610665576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4f4f425f535441434b5f524541440000000000000000000000000000000000006044820152606401610228565b6106d7565b856040015181106106d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4f4f425f434f4e5354414e545f524541440000000000000000000000000000006044820152606401610228565b6104fc8685610c81565b602083015151600090831080159061070457506020808501519081015190510183105b61076a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4f4f425f53544f524147455f52454144000000000000000000000000000000006044820152606401610228565b61046a8483610c81565b600061046a8483610cbc86610d0b565b600061046a8483610d1b610b4f565b600061046a8483610db0610e21565b600061046a8483610e30610ecc565b600061046a8483610edd610b4f565b600061046a8483610f33610b4f565b600061046a8483610fe2610ecc565b600061046a848361103f866110f9565b600061046a848361111786611124565b600061046a8483610c81565b600061046a6108198584610c8f565b85906008610b89565b600061046a8483611131610e21565b600061046a848361113d610b4f565b600061046a8483611153610b4f565b600061046a8483611169610e21565b600061046a8483611175610e21565b6000611d4a61087e85848387610d0b565b95945050505050565b600061046a8261118161089b8660016120fe565b879291906110f9565b600061046a8483611191610b4f565b600061046a848361119b610b4f565b600061046a84836111a5610e21565b600061046a84836111ae610b4f565b600061046a84836111b886610d0b565b600061046a84836111f386610d0b565b600061046a848361122486610d0b565b600061046a848361123a86610d0b565b600061046a848361124686610d0b565b600061046a848361125286610d0b565b600061046a848361125e86610d0b565b600061046a848361127486610d0b565b600061046a848361128386610d0b565b600061046a848361128f86610d0b565b600061046a848361129b86610d0b565b600061046a84836112a7610e21565b600061046a84836112f4610e21565b600061046a8483611381610e21565b600061046a8483611403610e21565b600061046a8483611450610e21565b600061046a848361149d866114f4565b600061046a8483611507866115a1565b600061046a84836115b4610b4f565b6000601f831680610a77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4241445f4f504552414e440000000000000000000000000000000000000000006044820152606401610228565b61087e610a85868584610b67565b8690610c81565b600061046a8483611613610b4f565b80518190603814610b08576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4241445f44594e414d49435f4c454e47544800000000000000000000000000006044820152606401610228565b919050565b604051825182516020808302860101831115610b2857600080fd5b602081028301604052018352610b3e828261162b565b505050565b600061046d838361163f565b600061046a610b6085856002610b67565b8590610c81565b60008115610b81576020820283039250610b81848461181a565b509092915050565b60208102820161046d848261189b565b6000828260108210610c07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4f4f425f434f4c554d4e000000000000000000000000000000000000000000006044820152606401610228565b60108110610c71576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4f4f425f524f57000000000000000000000000000000000000000000000000006044820152606401610228565b60016010860285011b86176104fc565b60208101610243838261189b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101610243838261181a565b600081604051602001610ccf9190612111565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012092915050565b600061087e610a85868685610b67565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152600091908416906370a08231906024015b602060405180830381865afa158015610d8c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046d9190612147565b60008173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610dfd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102439190612147565b600061046a610b608585610c8f565b6040517f4ee2cd7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905260009190851690634ee2cd7e906044015b602060405180830381865afa158015610ea8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046a9190612147565b600061046a610b6085856003610b67565b6040517f981b24d00000000000000000000000000000000000000000000000000000000081526004810182905260009073ffffffffffffffffffffffffffffffffffffffff84169063981b24d090602401610d6f565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810182905260009073ffffffffffffffffffffffffffffffffffffffff841690636352211e90602401602060405180830381865afa158015610fa1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc59190612160565b73ffffffffffffffffffffffffffffffffffffffff169392505050565b6040517efdd58e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152602482018390526000919085169062fdd58e90604401610e8b565b6040517f4e1273f400000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff851690634e1273f49061109690869086906004016121d1565b600060405180830381865afa1580156110b3573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261046a9190810190612234565b600061087e61110f868660016002870201610b67565b869084610b89565b8061112157600080fd5b50565b600061087e858584610b67565b600061046d82846118b0565b600061046a8261114d85876118b0565b90611930565b600061046a8261116385876118b0565b90611945565b600061046d828461195a565b600061046d82846119a9565b606060008411610b81578161046a565b600081831461046d565b600081831161046d565b60008115610243565b600081831061046d565b60008282018381106111ca5780610453565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff949350505050565b60008260000361120557506000610243565b82820282848281611218576112186120a0565b04036111ca5780610453565b600081831161123457600061046d565b50900390565b600061046d82846120fe565b600061046d82846122c5565b600061046d82846123f9565b600081831161126d578161046d565b5090919050565b600081831061126d578161046d565b600061046d8284612405565b600061046d8284612419565b600061046d8284612430565b60008173ffffffffffffffffffffffffffffffffffffffff1663ec14b06e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610dfd573d6000803e3d6000fd5b60008173ffffffffffffffffffffffffffffffffffffffff1663cd3293de6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611341573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113659190612160565b73ffffffffffffffffffffffffffffffffffffffff1692915050565b60008173ffffffffffffffffffffffffffffffffffffffff1663f9020e336040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f29190612443565b6003811115610243576102436120cf565b60008173ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611341573d6000803e3d6000fd5b60008173ffffffffffffffffffffffffffffffffffffffff166347e4bbb96040518163ffffffff1660e01b8152600401602060405180830381865afa158015610dfd573d6000803e3d6000fd5b6040517f88d6860400000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8516906388d6860490610e8b9086908690600401612464565b600061087e610a85868660028601610b67565b6040517fcaa0eb3b00000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff86169063caa0eb3b9061156090879087908790600401612493565b602060405180830381865afa15801561157d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087e9190612147565b600061087e610a85868660038601610b67565b60008060015b6008811161160b5760006115ce8683611a06565b905060006115dc8684611a06565b905060006115ea8383611224565b90506115fa856001860383611ab6565b945050600190920191506115ba9050565b509392505050565b600061046a8385600f16600487901c600f1685611b3f565b6000602083019050610b3e81838551611be5565b60008060008473ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa15801561168f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116b391906124e2565b5093505092505060008213611724576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4d494e5f424153455f50524943450000000000000000000000000000000000006044820152606401610228565b8361172f8242612430565b10611796576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f5354414c455f50524943450000000000000000000000000000000000000000006044820152606401610228565b61087e8573ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156117e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118089190612532565b60ff1661181484611c0d565b906118b0565b8160800151811015801561183157508160a0015181105b611897576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f535441434b5f554e444552464c4f5700000000000000000000000000000000006044820152606401610228565b5050565b8160a001518111156118975760a09190910152565b600080826012036118c45783915050610243565b82601211156118f0575060128290036118de81600a6123f9565b6118e89085612419565b915050610243565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee820161191f81600a6123f9565b6118e890856122c5565b5092915050565b600061046d83670de0b6b3a764000084611c7d565b600061046d8383670de0b6b3a7640000611c7d565b60008160000b60000361196e575081610243565b60008260000b13156119965761198582600a612555565b61198f9084612419565b9050610243565b60ff60008390031661191f81600a6123f9565b600080601283036119bd5783915050610243565b82601211156119d75750601282900361191f81600a6123f9565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee82016118de81600a6123f9565b6000816008811115611a74576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f544945520000000000000000000000000000000000000000000000006044820152606401610228565b82600003611a855760009150611929565b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016020021c63ffffffff1690565b6000826008811115611b24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f544945520000000000000000000000000000000000000000000000006044820152606401610228565b505063ffffffff602090920291821b199290921691901b1790565b6000826008811115611bad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f544945520000000000000000000000000000000000000000000000006044820152606401610228565b6000855b85811015611bd95763ffffffff6020820290811b199890981685891b17979150600101611bb1565b50959695505050505050565b8060200283015b80841015611c07578351835260209384019390920191611bec565b50505050565b600080821215611c79576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f7369746976656044820152606401610228565b5090565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85870985870292508281108382030391505080600003611cd557838281611ccb57611ccb6120a0565b049250505061046d565b808411611ce157600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b611d52612564565b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611da657611da6611d54565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611df357611df3611d54565b604052919050565b600067ffffffffffffffff821115611e1557611e15611d54565b5060051b60200190565b600082601f830112611e3057600080fd5b81356020611e45611e4083611dfb565b611dac565b82815260059290921b84018101918181019086841115611e6457600080fd5b8286015b84811015611e7f5780358352918301918301611e68565b509695505050505050565b60008060008084860360a0811215611ea157600080fd5b6040811215611eaf57600080fd5b50611eb8611d83565b853581526020808701358183015290945060408601359067ffffffffffffffff80831115611ee557600080fd5b828801925088601f840112611ef957600080fd5b8235611f07611e4082611dfb565b81815260059190911b8401830190838101908b831115611f2657600080fd5b8486015b83811015611fd057803585811115611f425760008081fd5b8701603f81018e13611f545760008081fd5b8681013586811115611f6857611f68611d54565b611f98887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611dac565b8181528f6040838501011115611fae5760008081fd5b81604084018a8301376000918101890191909152845250918501918501611f2a565b5097505050606088013594506080880135925080831115611ff057600080fd5b5050611ffe87828801611e1f565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361209957612099612039565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8082018082111561024357610243612039565b815160009082906020808601845b8381101561213b5781518552938201939082019060010161211f565b50929695505050505050565b60006020828403121561215957600080fd5b5051919050565b60006020828403121561217257600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461046d57600080fd5b600081518084526020808501945080840160005b838110156121c6578151875295820195908201906001016121aa565b509495945050505050565b604080825283519082018190526000906020906060840190828701845b8281101561222057815173ffffffffffffffffffffffffffffffffffffffff16845292840192908401906001016121ee565b505050838103828501526104fc8186612196565b6000602080838503121561224757600080fd5b825167ffffffffffffffff81111561225e57600080fd5b8301601f8101851361226f57600080fd5b805161227d611e4082611dfb565b81815260059190911b8201830190838101908783111561229c57600080fd5b928401925b828410156122ba578351825292840192908401906122a1565b979650505050505050565b6000826122d4576122d46120a0565b500490565b600181815b8085111561233257817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561231857612318612039565b8085161561232557918102915b93841c93908002906122de565b509250929050565b60008261234957506001610243565b8161235657506000610243565b816001811461236c576002811461237657612392565b6001915050610243565b60ff84111561238757612387612039565b50506001821b610243565b5060208310610133831016604e8410600b84101617156123b5575081810a610243565b6123bf83836122d9565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156123f1576123f1612039565b029392505050565b600061046d838361233a565b600082612414576124146120a0565b500690565b808202811582820484141761024357610243612039565b8181038181111561024357610243612039565b60006020828403121561245557600080fd5b81516004811061046d57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600061046a6040830184612196565b73ffffffffffffffffffffffffffffffffffffffff8416815282602082015260606040820152600061087e6060830184612196565b805169ffffffffffffffffffff81168114610b0857600080fd5b600080600080600060a086880312156124fa57600080fd5b612503866124c8565b9450602086015193506040860151925060608601519150612526608087016124c8565b90509295509295909350565b60006020828403121561254457600080fd5b815160ff8116811461046d57600080fd5b600061046d60ff84168361233a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea2646970667358221220adb842766bfc9f56aaa5b59337a69f65736c16fa8eb0a4034c763b9abc2dc41c64736f6c63430008110033";

type StandardIntegrityConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StandardIntegrityConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StandardIntegrity__factory extends ContractFactory {
  constructor(...args: StandardIntegrityConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StandardIntegrity> {
    return super.deploy(overrides || {}) as Promise<StandardIntegrity>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StandardIntegrity {
    return super.attach(address) as StandardIntegrity;
  }
  connect(signer: Signer): StandardIntegrity__factory {
    return super.connect(signer) as StandardIntegrity__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StandardIntegrityInterface {
    return new utils.Interface(_abi) as StandardIntegrityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StandardIntegrity {
    return new Contract(address, _abi, signerOrProvider) as StandardIntegrity;
  }
}
