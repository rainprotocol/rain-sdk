/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AutoApproveStateBuilder,
  AutoApproveStateBuilderInterface,
} from "../AutoApproveStateBuilder";

const _abi = [
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
    inputs: [
      {
        internalType: "address",
        name: "vm_",
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
        internalType: "struct StateConfig",
        name: "config_",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "entrypoint",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minFinalStackIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stackIndex",
            type: "uint256",
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
          {
            internalType: "uint256",
            name: "storageLength",
            type: "uint256",
          },
        ],
        internalType: "struct Bounds[]",
        name: "boundss_",
        type: "tuple[]",
      },
    ],
    name: "buildState",
    outputs: [
      {
        internalType: "bytes",
        name: "state_",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "stackPops_",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "stackPushes_",
        type: "uint256[]",
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
        internalType: "struct StateConfig",
        name: "stateConfig_",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "entrypoint",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minFinalStackIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stackIndex",
            type: "uint256",
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
          {
            internalType: "uint256",
            name: "storageLength",
            type: "uint256",
          },
        ],
        internalType: "struct Bounds",
        name: "bounds_",
        type: "tuple",
      },
    ],
    name: "ensureIntegrity",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stackPops",
    outputs: [
      {
        internalType: "uint256[]",
        name: "pops_",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "stackPushes",
    outputs: [
      {
        internalType: "uint256[]",
        name: "pushes_",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611dd0806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630d5236cd14610051578063661b810d1461006f578063aa9628a114610077578063ce19c93514610097575b600080fd5b6100596100ac565b60405161006691906115c4565b60405180910390f35b6100596100c3565b61008a61008536600461191c565b6100d5565b6040516100669190611a3a565b6100aa6100a5366004611a8b565b6103b0565b005b60606100be6100b96107b8565b610803565b905090565b60606100be6100d06107b8565b6109d4565b606060006100e285610ba6565b905060006100f38260200151610f0b565b905060008060006101026100c3565b9050600061010e6100ac565b905060005b88518110156101d857866000015161ffff1689828151811061013757610137611b26565b602002602001015160a001818152505061016c83838c8c858151811061015f5761015f611b26565b60200260200101516103b0565b61019c89828151811061018157610181611b26565b60200260200101516080015186610f3f90919063ffffffff16565b94506101ce8982815181106101b3576101b3611b26565b60200260200101516060015185610f3f90919063ffffffff16565b9350600101610113565b506000848a60200151510167ffffffffffffffff8111156101fb576101fb611608565b604051908082528060200260200182016040528015610224578160200160208202803683370190505b50905060005b8a602001515181101561027a578a60200151818151811061024d5761024d611b26565b602002602001015182828151811061026757610267611b26565b602090810291909101015260010161022a565b5089515160009067ffffffffffffffff81111561029957610299611608565b6040519080825280602002602001820160405280156102cc57816020015b60608152602001906001900390816102b75790505b50905060005b8b515181101561032857610303888d6000015183815181106102f6576102f6611b26565b6020026020010151610f58565b82828151811061031557610315611b26565b60209081029190910101526001016102d2565b506103a06040518060a00160405280600081526020018767ffffffffffffffff81111561035757610357611608565b604051908082528060200260200182016040528015610380578160200160208202803683370190505b5081526020018381526020018481526020018d60200151518152506110e8565b9c9b505050505050505050505050565b80518251518110610422576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4d494e5f534f555243455300000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6000808060008060208602602001885101519050805193505b838510156106cb576002850194508481015180601e1a935080601f1a925050600683101561060c57826104ec5787602001515187608001510182106104dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4f4f425f434f4e5354414e5400000000000000000000000000000000000000006044820152606401610419565b60408701805160010190526106ae565b600183141561056257866040015182106104dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4f4f425f535441434b00000000000000000000000000000000000000000000006044820152606401610419565b600283141561057b5760408701805160010190526106ae565b60038314156105f1578660a0015182106104dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4f4f425f53544f524147450000000000000000000000000000000000000000006044820152606401610419565b6004831415610607576106078a8a8a8a86611225565b6106ae565b60008a848151811061062057610620611b26565b60200260200101519050600581111561064557806106418463ffffffff8316565b9150505b60408801805182900390819052606089015161066091610f3f565b606089015289516000908b908690811061067c5761067c611b26565b6020026020010151905060058111156106a1578061069d8563ffffffff8316565b9150505b6040890180519091019052505b604087015160608801516106c191610f3f565b606088015261043b565b606087015160ff101561073a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4d41585f535441434b00000000000000000000000000000000000000000000006044820152606401610419565b8660200151876040015110156107ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f46494e414c5f535441434b5f494e4445580000000000000000000000000000006044820152606401610419565b50505050505050505050565b60408051600180825281830190925260609160009190602080830190803683370190505090506001816000815181106107f3576107f3611b26565b6020908102919091010152919050565b60606000825190506000604051806105e00160405280836028600601018152602001600181526020016001815260200160018152602001600181526020016000815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016108896112c890565b81526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152509050604051602083020160405280925060005b828110156109cc5784818151811061099957610999611b26565b60200260200101518460286006018301815181106109b9576109b9611b26565b602090810291909101015260010161097f565b505050919050565b805160609060006112c890506000604051806105e0016040528084602860060101815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160028152602001600181526020016003815260200160028152602001600281526020016002815260200160038152602001610a5e61133790565b81526020016000815260200160008152602001600081526020016000815260200160018152602001600281526020016002815260200160018152602001600181526020018381526020016003815260200160028152602001838152602001600281526020016001815260200160028152602001838152602001838152602001838152602001838152602001838152602001838152602001838152602001838152602001838152602001838152602001838152602001610b1c6113ac90565b81526020016113b28152600260208201526040016113b8815260200160028152509050604051602084020160405280935060005b83811015610b9d57858181518110610b6a57610b6a611b26565b6020026020010151856028600601830181518110610b8a57610b8a611b26565b6020908102919091010152600101610b50565b50505050919050565b6040805180820182526000808252602091820181905273ffffffffffffffffffffffffffffffffffffffff84811682528183529083902083518085019094525461ffff8116845262010000900416908201819052610f065760008273ffffffffffffffffffffffffffffffffffffffff163b11610c7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f305f53495a455f564d00000000000000000000000000000000000000000000006044820152606401610419565b60008273ffffffffffffffffffffffffffffffffffffffff1663ea7cb3706040518163ffffffff1660e01b8152600401600060405180830381865afa158015610ccc573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610d129190810190611b55565b905060008373ffffffffffffffffffffffffffffffffffffffff1663e0419ae36040518163ffffffff1660e01b81526004016040805180830381865afa158015610d60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d849190611bcc565b905061ffff801681602001511115610df8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f4f425f53544f524147455f4f50434f444553000000000000000000000000006044820152606401610419565b6002825181610e0957610e09611c1b565b0615610e71576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f494e56414c49445f504f494e54455253000000000000000000000000000000006044820152606401610419565b6040518060400160405280826020015161ffff168152602001610e9384611425565b73ffffffffffffffffffffffffffffffffffffffff908116909152858116600090815260208181526040909120835181549285015190931662010000027fffffffffffffffffffff0000000000000000000000000000000000000000000090921661ffff90931692909217179055925050505b919050565b6060610f398260017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6114b0565b92915050565b600081831015610f4f5781610f51565b825b9392505050565b805182516060919060011615610fca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4f44445f5041434b45445f5054525300000000000000000000000000000000006044820152606401610419565b6002810615611035576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4f44445f534f555243455f4c454e4754480000000000000000000000000000006044820152606401610419565b60006002600383020467ffffffffffffffff81111561105657611056611608565b6040519080825280601f01601f191660200182016040528015611080576020820181803683370190505b50905060056002808701908681019085880101600385015b818310156110da57825180601e1a868111156110b95760020285015161ffff165b81601f1a8160081b1783511783525050600283019250600381019050611098565b509398975050505050505050565b606060008260600151905060006018846040015151901b60108560800151901b6008866020015151901b866060015151171717905060008160001b836040516020016111349190611c4a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526111709291602001611c80565b604051602081830303815290604052905060005b85604001515181101561121c5781866040015182815181106111a8576111a8611b26565b60200260200101515160001b876040015183815181106111ca576111ca611b26565b60200260200101516040516020016111e493929190611ca6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190529150600101611184565b50949350505050565b6040820180517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600584901c918290030191829052606084015160019091019161126f9190610f3f565b606084015260808301516112839082610f3f565b60808401528251600783168085526001600385811c161b919060005b838110156112bb576112b38a8a8a8a6103b0565b60010161129f565b5050909352505050505050565b6000808211611333576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f305f4f504552414e445f4e5a4f4e0000000000000000000000000000000000006044820152606401610419565b5090565b60008082116113a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f305f4f504552414e445f455243313135350000000000000000000000000000006044820152606401610419565b5060020260010190565b60020190565b60030190565b6000601f821680610f39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4241445f4f504552414e440000000000000000000000000000000000000000006044820152606401610419565b6000806114508360405160200161143c9190611cdd565b604051602081830303815290604052611598565b90508051602082016000f0915073ffffffffffffffffffffffffffffffffffffffff82166114aa576040517f08d4abb600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50919050565b6060833b806114cf575050604080516020810190915260008152610f51565b808411156114ed575050604080516020810190915260008152610f51565b83831015611538576040517f2c4a89fa000000000000000000000000000000000000000000000000000000008152600481018290526024810185905260448101849052606401610419565b838303848203600082821061154d578261154f565b815b60408051603f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168101909152818152955090508087602087018a3c505050509392505050565b60608151826040516020016115ae929190611d03565b6040516020818303038152906040529050919050565b6020808252825182820181905260009190848201906040850190845b818110156115fc578351835292840192918401916001016115e0565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561165a5761165a611608565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156116a7576116a7611608565b604052919050565b600067ffffffffffffffff8211156116c9576116c9611608565b5060051b60200190565b600067ffffffffffffffff8211156116ed576116ed611608565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261172a57600080fd5b8135602061173f61173a836116af565b611660565b82815260059290921b8401810191818101908684111561175e57600080fd5b8286015b848110156117795780358352918301918301611762565b509695505050505050565b6000604080838503121561179757600080fd5b61179f611637565b9150823567ffffffffffffffff808211156117b957600080fd5b818501915085601f8301126117cd57600080fd5b813560206117dd61173a836116af565b82815260059290921b840181019181810190898411156117fc57600080fd5b8286015b84811015611870578035868111156118185760008081fd5b8701603f81018c1361182a5760008081fd5b8481013561183a61173a826116d3565b8181528d8b83850101111561184f5760008081fd5b818b8401888301376000918101870191909152845250918301918301611800565b508752508681013594508285111561188757600080fd5b61189388868901611719565b81870152505050505092915050565b600060c082840312156118b457600080fd5b60405160c0810181811067ffffffffffffffff821117156118d7576118d7611608565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a08201525092915050565b60008060006060848603121561193157600080fd5b833573ffffffffffffffffffffffffffffffffffffffff8116811461195557600080fd5b925060208481013567ffffffffffffffff8082111561197357600080fd5b61197f88838901611784565b9450604087013591508082111561199557600080fd5b508501601f810187136119a757600080fd5b80356119b561173a826116af565b81815260c0918202830184019184820191908a8411156119d457600080fd5b938501935b838510156119fa576119eb8b866118a2565b835293840193918501916119d9565b5080955050505050509250925092565b60005b83811015611a25578181015183820152602001611a0d565b83811115611a34576000848401525b50505050565b6020815260008251806020840152611a59816040850160208701611a0a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000806000806101208587031215611aa257600080fd5b843567ffffffffffffffff80821115611aba57600080fd5b611ac688838901611719565b95506020870135915080821115611adc57600080fd5b611ae888838901611719565b94506040870135915080821115611afe57600080fd5b50611b0b87828801611784565b925050611b1b86606087016118a2565b905092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611b6757600080fd5b815167ffffffffffffffff811115611b7e57600080fd5b8201601f81018413611b8f57600080fd5b8051611b9d61173a826116d3565b818152856020838501011115611bb257600080fd5b611bc3826020830160208601611a0a565b95945050505050565b600060408284031215611bde57600080fd5b6040516040810181811067ffffffffffffffff82111715611c0157611c01611608565b604052825181526020928301519281019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b815160009082906020808601845b83811015611c7457815185529382019390820190600101611c58565b50929695505050505050565b82815260008251611c98816020850160208701611a0a565b919091016020019392505050565b60008451611cb8818460208901611a0a565b82018481528351611cd0816020808501908801611a0a565b0160200195945050505050565b6000815260008251611cf6816001850160208701611a0a565b9190910160010192915050565b7f630000000000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008360e01b1660018201527f80600e6000396000f30000000000000000000000000000000000000000000000600582015260008251611d8c81600e850160208701611a0a565b91909101600e01939250505056fea2646970667358221220e9f523bdba3c8b51ae33ad4c5dcfd9c22bf320d386e324010146e587f59fa8d164736f6c634300080a0033";

type AutoApproveStateBuilderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AutoApproveStateBuilderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AutoApproveStateBuilder__factory extends ContractFactory {
  constructor(...args: AutoApproveStateBuilderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AutoApproveStateBuilder> {
    return super.deploy(overrides || {}) as Promise<AutoApproveStateBuilder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AutoApproveStateBuilder {
    return super.attach(address) as AutoApproveStateBuilder;
  }
  connect(signer: Signer): AutoApproveStateBuilder__factory {
    return super.connect(signer) as AutoApproveStateBuilder__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AutoApproveStateBuilderInterface {
    return new utils.Interface(_abi) as AutoApproveStateBuilderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AutoApproveStateBuilder {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AutoApproveStateBuilder;
  }
}
