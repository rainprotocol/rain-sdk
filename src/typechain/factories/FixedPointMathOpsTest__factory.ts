/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FixedPointMathOpsTest,
  FixedPointMathOpsTestInterface,
  StateConfigStruct,
} from "../FixedPointMathOpsTest";

const _abi = [
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
          {
            internalType: "uint256",
            name: "stackLength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "argumentsLength",
            type: "uint256",
          },
        ],
        internalType: "struct StateConfig",
        name: "config_",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_end",
        type: "uint256",
      },
    ],
    name: "InvalidCodeAtRange",
    type: "error",
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
        indexed: false,
        internalType: "address",
        name: "pointer",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "stackIndex",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "stack",
            type: "uint256[]",
          },
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
          {
            internalType: "uint256[]",
            name: "arguments",
            type: "uint256[]",
          },
        ],
        indexed: false,
        internalType: "struct State",
        name: "state",
        type: "tuple",
      },
    ],
    name: "Snapshot",
    type: "event",
  },
  {
    inputs: [],
    name: "run",
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
    name: "runState",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "stackIndex",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "stack",
            type: "uint256[]",
          },
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
          {
            internalType: "uint256[]",
            name: "arguments",
            type: "uint256[]",
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
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001c0838038062001c088339810160408190526200003491620003fd565b60056080526200004e620000488262000061565b6200019b565b6001600160a01b031660a0525062000759565b620000946040518060a0016040528060008152602001606081526020016060815260200160608152602001606081525090565b815151620000d45760405162461bcd60e51b8152602060048201526009602482015268305f534f555243455360b81b604482015260640160405180910390fd5b6040518060a001604052806000815260200183604001516001600160401b03811115620001055762000105620002bd565b6040519080825280602002602001820160405280156200012f578160200160208202803683370190505b508152602001836000015181526020018360200151815260200183606001516001600160401b03811115620001685762000168620002bd565b60405190808252806020026020018201604052801562000192578160200160208202803683370190505b50905292915050565b600080620001d583604051602001620001b5919062000694565b6040516020818303038152906040526200021a60201b6200012f1760201c565b90507ff95eed63f55d96a35306669cc3b5f652f8d44552e3e4b17b2f78f13571114abd3382856040516200020c93929190620006b0565b60405180910390a192915050565b6000806200025483604051602001620002349190620006de565b6040516020818303038152906040526200028f60201b620001ba1760201c565b90508051602082016000f091506001600160a01b038216620002895760405163046a55db60e11b815260040160405180910390fd5b50919050565b6060815182604051602001620002a792919062000706565b6040516020818303038152906040529050919050565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b0381118282101715620002f857620002f8620002bd565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620003295762000329620002bd565b604052919050565b60006001600160401b038211156200034d576200034d620002bd565b5060051b60200190565b60005b83811015620003745781810151838201526020016200035a565b8381111562000384576000848401525b50505050565b600082601f8301126200039c57600080fd5b81516020620003b5620003af8362000331565b620002fe565b82815260059290921b84018101918181019086841115620003d557600080fd5b8286015b84811015620003f25780518352918301918301620003d9565b509695505050505050565b600060208083850312156200041157600080fd5b82516001600160401b03808211156200042957600080fd5b90840190608082870312156200043e57600080fd5b62000448620002d3565b8251828111156200045857600080fd5b8301601f810188136200046a57600080fd5b80516200047b620003af8262000331565b81815260059190911b8201860190868101908a8311156200049b57600080fd5b8784015b838110156200053157805187811115620004b95760008081fd5b8501603f81018d13620004cc5760008081fd5b89810151604089821115620004e557620004e5620002bd565b620004f9601f8301601f19168d01620002fe565b8281528f828486010111156200050f5760008081fd5b62000520838e830184870162000357565b86525050509188019188016200049f565b50845250505082840151828111156200054957600080fd5b62000557888286016200038a565b858301525060408301516040820152606083015160608201528094505050505092915050565b600081518084526020808501945080840160005b83811015620005af5781518752958201959082019060010162000591565b509495945050505050565b80518252600060208083015160a082860152620005db60a08601826200057d565b9050604084015185820360408701528181518084528484019150848160051b850101858401935060005b828110156200064f57601f19808784030185528551805180855262000630818b87018c850162000357565b9689019695890195601f01909116929092018701915060010162000605565b506060880151955088810360608a01526200066b81876200057d565b95505050505050608083015184820360808601526200068b82826200057d565b95945050505050565b602081526000620006a96020830184620005ba565b9392505050565b6001600160a01b038481168252831660208201526060604082018190526000906200068b90830184620005ba565b6000815260008251620006f981600185016020870162000357565b9190910160010192915050565b606360f81b815260e083901b6001600160e01b03191660018201526880600e6000396000f360b81b600582015281516000906200074b81600e85016020870162000357565b91909101600e019392505050565b60805160a05161148a6200077e600039600060a8015260006106ef015261148a6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806345c6a7a61461003b578063c040622614610059575b600080fd5b61004361006f565b6040516100509190610d2d565b60405180910390f35b6100616100ee565b604051908152602001610050565b6100a16040518060a0016040528060008152602001606081526020016060815260200160608152602001606081525090565b60006100cc7f00000000000000000000000000000000000000000000000000000000000000006101e6565b90506100e96040518060200160405280600081525082600061023a565b919050565b6000806100f961006f565b90508060200151600182600001516101119190610e41565b8151811061012157610121610e58565b602002602001015191505090565b60008061015a836040516020016101469190610e87565b6040516020818303038152906040526101ba565b90508051602082016000f0915073ffffffffffffffffffffffffffffffffffffffff82166101b4576040517f08d4abb600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50919050565b60608151826040516020016101d0929190610ead565b6040516020818303038152906040529050919050565b6102186040518060a0016040528060008152602001606081526020016060815260200160608152602001606081525090565b610221826104c3565b806020019051810190610234919061117c565b92915050565b602082015151825111156102af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f535441434b5f4f564552464c4f5700000000000000000000000000000000000060448201526064015b60405180910390fd5b602082810151604084015183830201909101516060840151608085015182516000948594859492939092915b848810156104b6576002880197508784015180601e1a975080601f1a965050600587101561043557600187141561034d5781608087166103185750825b607f87168151811061032957600080fd5b8b516020820260200183015160208202602001850152600181018d52505050610441565b600287141561038457895180871061036457600080fd5b6020870260200182015160208202602001830152600181018b5250610441565b600387141561039d576103988b8b886104f1565b610441565b60048714156103ce576103988a6040516020016103ba9190610d2d565b604051602081830303815290604052610657565b86610398576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f534b49505f52454d4f564544000000000000000000000000000000000000000060448201526064016102a6565b6104418b8b89896106e9565b60208a0151518a5111156104b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f535441434b5f4f564552464c4f5700000000000000000000000000000000000060448201526064016102a6565b6102db565b5050505050505050505050565b60606102348260017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61071c565b81517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600583901c918290030183526007821690610100600384811c1681901c91908290039060010160008167ffffffffffffffff81111561055557610555610f44565b60405190808252806020026020018201604052801561057e578160200160208202803683370190505b50905060005b828110156105d557876020015181896000015101815181106105a8576105a8610e58565b60200260200101518282815181106105c2576105c2610e58565b6020908102919091010152600101610584565b5060005b61010081101561064c5760005b83811015610639578482860384838151811061060457610604610e58565b6020026020010151901b901c8960800151828151811061062657610626610e58565b60209081029190910101526001016105e6565b5061064589898861023a565b84016105d9565b505050505050505050565b6106e68160405160240161066b919061125f565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f0be77f5600000000000000000000000000000000000000000000000000000000179052610805565b50565b610716837f0000000000000000000000000000000000000000000000000000000000000000840383610826565b50505050565b6060833b8061073b5750506040805160208101909152600081526107fe565b808411156107595750506040805160208101909152600081526107fe565b838310156107a4576040517f2c4a89fa0000000000000000000000000000000000000000000000000000000081526004810182905260248101859052604481018490526064016102a6565b83830384820360008282106107b957826107bb565b815b60408051603f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168101909152818152955090508087602087018a3c505050505b9392505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60078210610890576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d41585f4f50434f44450000000000000000000000000000000000000000000060448201526064016102a6565b60028210156109dc5782517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe018261093b57836020015181600101815181106108db576108db610e58565b602002602001015161091383866020015184815181106108fd576108fd610e58565b6020026020010151610b5990919063ffffffff16565b028460200151828151811061092a5761092a610e58565b6020026020010181815250506109b0565b60018314156109b0578360200151816001018151811061095d5761095d610e58565b602002602001015161097f83866020015184815181106108fd576108fd610e58565b8161098c5761098c611272565b04846020015182815181106109a3576109a3610e58565b6020026020010181815250505b5082517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018352505050565b6005821015610aed5782517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016002831415610a5357610a2c82856020015183815181106108fd576108fd610e58565b84602001518281518110610a4257610a42610e58565b602002602001018181525050610716565b6003831415610a8c57610a2c8285602001518381518110610a7657610a76610e58565b6020026020010151610bd390919063ffffffff16565b600483141561071657610ac58285602001518381518110610aaf57610aaf610e58565b6020026020010151610c3190919063ffffffff16565b84602001518281518110610adb57610adb610e58565b60200260200101818152505050505050565b6005821415610b2f57670de0b6b3a76400008360200151846000015181518110610b1957610b19610e58565b6020908102919091010152505080516001019052565b6006821415610b545760128360200151846000015181518110610b1957610b19610e58565b505050565b6000808260121415610b6e5783915050610234565b8260121115610b9a57506012829003610b8881600a6113c1565b610b9290856113cd565b915050610234565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee8201610bc981600a6113c1565b610b92908561140a565b6000806012831415610be85783915050610234565b8260121115610c0257506012829003610bc981600a6113c1565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee8201610b8881600a6113c1565b600081810b610c41575081610234565b60008260000b1315610c6957610c5882600a611445565b610c6290846113cd565b9050610234565b60ff600083900316610bc981600a6113c1565b600081518084526020808501945080840160005b83811015610cac57815187529582019590820190600101610c90565b509495945050505050565b60005b83811015610cd2578181015183820152602001610cba565b838111156107165750506000910152565b60008151808452610cfb816020860160208601610cb7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060208083528351818401528084015160a06040850152610d5260c0850182610c7c565b905060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0808684030160608701528282518085528585019150858160051b860101868501945060005b82811015610dcb5784878303018452610db9828751610ce3565b95880195938801939150600101610d9f565b5060608a01519650838982030160808a0152610de78188610c7c565b965050505060808701519250808685030160a08701525050610e098282610c7c565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015610e5357610e53610e12565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000815260008251610ea0816001850160208701610cb7565b9190910160010192915050565b7f630000000000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008360e01b1660018201527f80600e6000396000f30000000000000000000000000000000000000000000000600582015260008251610f3681600e850160208701610cb7565b91909101600e019392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715610f9657610f96610f44565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610fe357610fe3610f44565b604052919050565b600067ffffffffffffffff82111561100557611005610f44565b5060051b60200190565b600082601f83011261102057600080fd5b8151602061103561103083610feb565b610f9c565b82815260059290921b8401810191818101908684111561105457600080fd5b8286015b8481101561106f5780518352918301918301611058565b509695505050505050565b6000601f838184011261108c57600080fd5b8251602061109c61103083610feb565b82815260059290921b850181019181810190878411156110bb57600080fd5b8287015b8481101561117057805167ffffffffffffffff808211156110e05760008081fd5b818a0191508a603f8301126110f55760008081fd5b8582015160408282111561110b5761110b610f44565b61113a887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08c85011601610f9c565b92508183528c818386010111156111515760008081fd5b61116082898501838701610cb7565b50508452509183019183016110bf565b50979650505050505050565b60006020828403121561118e57600080fd5b815167ffffffffffffffff808211156111a657600080fd5b9083019060a082860312156111ba57600080fd5b6111c2610f73565b825181526020830151828111156111d857600080fd5b6111e48782860161100f565b6020830152506040830151828111156111fc57600080fd5b6112088782860161107a565b60408301525060608301518281111561122057600080fd5b61122c8782860161100f565b60608301525060808301518281111561124457600080fd5b6112508782860161100f565b60808301525095945050505050565b6020815260006107fe6020830184610ce3565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600181815b808511156112fa57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156112e0576112e0610e12565b808516156112ed57918102915b93841c93908002906112a6565b509250929050565b60008261131157506001610234565b8161131e57506000610234565b8160018114611334576002811461133e5761135a565b6001915050610234565b60ff84111561134f5761134f610e12565b50506001821b610234565b5060208310610133831016604e8410600b841016171561137d575081810a610234565b61138783836112a1565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156113b9576113b9610e12565b029392505050565b60006107fe8383611302565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561140557611405610e12565b500290565b600082611440577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60006107fe60ff84168361130256fea264697066735822122059cb1b6f1ed628a5bcf7732c41c2780e924d701d5e40902fa38264a568717daa64736f6c634300080a0033";

type FixedPointMathOpsTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FixedPointMathOpsTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FixedPointMathOpsTest__factory extends ContractFactory {
  constructor(...args: FixedPointMathOpsTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    config_: StateConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FixedPointMathOpsTest> {
    return super.deploy(
      config_,
      overrides || {}
    ) as Promise<FixedPointMathOpsTest>;
  }
  getDeployTransaction(
    config_: StateConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(config_, overrides || {});
  }
  attach(address: string): FixedPointMathOpsTest {
    return super.attach(address) as FixedPointMathOpsTest;
  }
  connect(signer: Signer): FixedPointMathOpsTest__factory {
    return super.connect(signer) as FixedPointMathOpsTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FixedPointMathOpsTestInterface {
    return new utils.Interface(_abi) as FixedPointMathOpsTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FixedPointMathOpsTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FixedPointMathOpsTest;
  }
}
