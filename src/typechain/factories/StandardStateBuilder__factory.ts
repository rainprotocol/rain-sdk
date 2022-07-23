/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StandardStateBuilder,
  StandardStateBuilderInterface,
} from "../StandardStateBuilder";

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
  "0x608060405234801561001057600080fd5b50611d77806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630d5236cd14610051578063661b810d1461006f578063aa9628a114610077578063ce19c93514610097575b600080fd5b6100596100ac565b604051610066919061156b565b60405180910390f35b6100596100bc565b61008a6100853660046118c3565b6100c7565b60405161006691906119e1565b6100aa6100a5366004611a32565b6103a2565b005b60606100b7816107aa565b905090565b60606100b78161097b565b606060006100d485610b4d565b905060006100e58260200151610eb2565b905060008060006100f46100bc565b905060006101006100ac565b905060005b88518110156101ca57866000015161ffff1689828151811061012957610129611acd565b602002602001015160a001818152505061015e83838c8c858151811061015157610151611acd565b60200260200101516103a2565b61018e89828151811061017357610173611acd565b60200260200101516080015186610ee690919063ffffffff16565b94506101c08982815181106101a5576101a5611acd565b60200260200101516060015185610ee690919063ffffffff16565b9350600101610105565b506000848a60200151510167ffffffffffffffff8111156101ed576101ed6115af565b604051908082528060200260200182016040528015610216578160200160208202803683370190505b50905060005b8a602001515181101561026c578a60200151818151811061023f5761023f611acd565b602002602001015182828151811061025957610259611acd565b602090810291909101015260010161021c565b5089515160009067ffffffffffffffff81111561028b5761028b6115af565b6040519080825280602002602001820160405280156102be57816020015b60608152602001906001900390816102a95790505b50905060005b8b515181101561031a576102f5888d6000015183815181106102e8576102e8611acd565b6020026020010151610eff565b82828151811061030757610307611acd565b60209081029190910101526001016102c4565b506103926040518060a00160405280600081526020018767ffffffffffffffff811115610349576103496115af565b604051908082528060200260200182016040528015610372578160200160208202803683370190505b5081526020018381526020018481526020018d602001515181525061108f565b9c9b505050505050505050505050565b80518251518110610414576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4d494e5f534f555243455300000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6000808060008060208602602001885101519050805193505b838510156106bd576002850194508481015180601e1a935080601f1a92505060068310156105fe57826104de5787602001515187608001510182106104ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4f4f425f434f4e5354414e540000000000000000000000000000000000000000604482015260640161040b565b60408701805160010190526106a0565b600183141561055457866040015182106104ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4f4f425f535441434b0000000000000000000000000000000000000000000000604482015260640161040b565b600283141561056d5760408701805160010190526106a0565b60038314156105e3578660a0015182106104ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4f4f425f53544f52414745000000000000000000000000000000000000000000604482015260640161040b565b60048314156105f9576105f98a8a8a8a866111cc565b6106a0565b60008a848151811061061257610612611acd565b60200260200101519050600581111561063757806106338463ffffffff8316565b9150505b60408801805182900390819052606089015161065291610ee6565b606089015289516000908b908690811061066e5761066e611acd565b602002602001015190506005811115610693578061068f8563ffffffff8316565b9150505b6040890180519091019052505b604087015160608801516106b391610ee6565b606088015261042d565b606087015160ff101561072c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4d41585f535441434b0000000000000000000000000000000000000000000000604482015260640161040b565b86602001518760400151101561079e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f46494e414c5f535441434b5f494e444558000000000000000000000000000000604482015260640161040b565b50505050505050505050565b60606000825190506000604051806105e001604052808360286006010181526020016001815260200160018152602001600181526020016001815260200160008152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200161083061126f90565b81526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152602001600181526020016001815260200160018152509050604051602083020160405280925060005b828110156109735784818151811061094057610940611acd565b602002602001015184602860060183018151811061096057610960611acd565b6020908102919091010152600101610926565b505050919050565b8051606090600061126f90506000604051806105e0016040528084602860060101815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160028152602001600181526020016003815260200160028152602001600281526020016002815260200160038152602001610a056112de90565b81526020016000815260200160008152602001600081526020016000815260200160018152602001600281526020016002815260200160018152602001600181526020018381526020016003815260200160028152602001838152602001600281526020016001815260200160028152602001838152602001838152602001838152602001838152602001838152602001838152602001838152602001838152602001838152602001838152602001838152602001610ac361135390565b815260200161135981526002602082015260400161135f815260200160028152509050604051602084020160405280935060005b83811015610b4457858181518110610b1157610b11611acd565b6020026020010151856028600601830181518110610b3157610b31611acd565b6020908102919091010152600101610af7565b50505050919050565b6040805180820182526000808252602091820181905273ffffffffffffffffffffffffffffffffffffffff84811682528183529083902083518085019094525461ffff8116845262010000900416908201819052610ead5760008273ffffffffffffffffffffffffffffffffffffffff163b11610c26576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f305f53495a455f564d0000000000000000000000000000000000000000000000604482015260640161040b565b60008273ffffffffffffffffffffffffffffffffffffffff1663ea7cb3706040518163ffffffff1660e01b8152600401600060405180830381865afa158015610c73573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610cb99190810190611afc565b905060008373ffffffffffffffffffffffffffffffffffffffff1663e0419ae36040518163ffffffff1660e01b81526004016040805180830381865afa158015610d07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2b9190611b73565b905061ffff801681602001511115610d9f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f4f425f53544f524147455f4f50434f44455300000000000000000000000000604482015260640161040b565b6002825181610db057610db0611bc2565b0615610e18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f494e56414c49445f504f494e5445525300000000000000000000000000000000604482015260640161040b565b6040518060400160405280826020015161ffff168152602001610e3a846113cc565b73ffffffffffffffffffffffffffffffffffffffff908116909152858116600090815260208181526040909120835181549285015190931662010000027fffffffffffffffffffff0000000000000000000000000000000000000000000090921661ffff90931692909217179055925050505b919050565b6060610ee08260017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611457565b92915050565b600081831015610ef65781610ef8565b825b9392505050565b805182516060919060011615610f71576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4f44445f5041434b45445f505452530000000000000000000000000000000000604482015260640161040b565b6002810615610fdc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4f44445f534f555243455f4c454e475448000000000000000000000000000000604482015260640161040b565b60006002600383020467ffffffffffffffff811115610ffd57610ffd6115af565b6040519080825280601f01601f191660200182016040528015611027576020820181803683370190505b50905060056002808701908681019085880101600385015b8183101561108157825180601e1a868111156110605760020285015161ffff165b81601f1a8160081b178351178352505060028301925060038101905061103f565b509398975050505050505050565b606060008260600151905060006018846040015151901b60108560800151901b6008866020015151901b866060015151171717905060008160001b836040516020016110db9190611bf1565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526111179291602001611c27565b604051602081830303815290604052905060005b8560400151518110156111c357818660400151828151811061114f5761114f611acd565b60200260200101515160001b8760400151838151811061117157611171611acd565b602002602001015160405160200161118b93929190611c4d565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052915060010161112b565b50949350505050565b6040820180517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600584901c91829003019182905260608401516001909101916112169190610ee6565b6060840152608083015161122a9082610ee6565b60808401528251600783168085526001600385811c161b919060005b838110156112625761125a8a8a8a8a6103a2565b600101611246565b5050909352505050505050565b60008082116112da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f305f4f504552414e445f4e5a4f4e000000000000000000000000000000000000604482015260640161040b565b5090565b6000808211611349576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f305f4f504552414e445f45524331313535000000000000000000000000000000604482015260640161040b565b5060020260010190565b60020190565b60030190565b6000601f821680610ee0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4241445f4f504552414e44000000000000000000000000000000000000000000604482015260640161040b565b6000806113f7836040516020016113e39190611c84565b60405160208183030381529060405261153f565b90508051602082016000f0915073ffffffffffffffffffffffffffffffffffffffff8216611451576040517f08d4abb600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50919050565b6060833b80611476575050604080516020810190915260008152610ef8565b80841115611494575050604080516020810190915260008152610ef8565b838310156114df576040517f2c4a89fa00000000000000000000000000000000000000000000000000000000815260048101829052602481018590526044810184905260640161040b565b83830384820360008282106114f457826114f6565b815b60408051603f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168101909152818152955090508087602087018a3c505050509392505050565b6060815182604051602001611555929190611caa565b6040516020818303038152906040529050919050565b6020808252825182820181905260009190848201906040850190845b818110156115a357835183529284019291840191600101611587565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611601576116016115af565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561164e5761164e6115af565b604052919050565b600067ffffffffffffffff821115611670576116706115af565b5060051b60200190565b600067ffffffffffffffff821115611694576116946115af565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126116d157600080fd5b813560206116e66116e183611656565b611607565b82815260059290921b8401810191818101908684111561170557600080fd5b8286015b848110156117205780358352918301918301611709565b509695505050505050565b6000604080838503121561173e57600080fd5b6117466115de565b9150823567ffffffffffffffff8082111561176057600080fd5b818501915085601f83011261177457600080fd5b813560206117846116e183611656565b82815260059290921b840181019181810190898411156117a357600080fd5b8286015b84811015611817578035868111156117bf5760008081fd5b8701603f81018c136117d15760008081fd5b848101356117e16116e18261167a565b8181528d8b8385010111156117f65760008081fd5b818b84018883013760009181018701919091528452509183019183016117a7565b508752508681013594508285111561182e57600080fd5b61183a888689016116c0565b81870152505050505092915050565b600060c0828403121561185b57600080fd5b60405160c0810181811067ffffffffffffffff8211171561187e5761187e6115af565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a08201525092915050565b6000806000606084860312156118d857600080fd5b833573ffffffffffffffffffffffffffffffffffffffff811681146118fc57600080fd5b925060208481013567ffffffffffffffff8082111561191a57600080fd5b6119268883890161172b565b9450604087013591508082111561193c57600080fd5b508501601f8101871361194e57600080fd5b803561195c6116e182611656565b81815260c0918202830184019184820191908a84111561197b57600080fd5b938501935b838510156119a1576119928b86611849565b83529384019391850191611980565b5080955050505050509250925092565b60005b838110156119cc5781810151838201526020016119b4565b838111156119db576000848401525b50505050565b6020815260008251806020840152611a008160408501602087016119b1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000806000806101208587031215611a4957600080fd5b843567ffffffffffffffff80821115611a6157600080fd5b611a6d888389016116c0565b95506020870135915080821115611a8357600080fd5b611a8f888389016116c0565b94506040870135915080821115611aa557600080fd5b50611ab28782880161172b565b925050611ac28660608701611849565b905092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611b0e57600080fd5b815167ffffffffffffffff811115611b2557600080fd5b8201601f81018413611b3657600080fd5b8051611b446116e18261167a565b818152856020838501011115611b5957600080fd5b611b6a8260208301602086016119b1565b95945050505050565b600060408284031215611b8557600080fd5b6040516040810181811067ffffffffffffffff82111715611ba857611ba86115af565b604052825181526020928301519281019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b815160009082906020808601845b83811015611c1b57815185529382019390820190600101611bff565b50929695505050505050565b82815260008251611c3f8160208501602087016119b1565b919091016020019392505050565b60008451611c5f8184602089016119b1565b82018481528351611c778160208085019088016119b1565b0160200195945050505050565b6000815260008251611c9d8160018501602087016119b1565b9190910160010192915050565b7f630000000000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008360e01b1660018201527f80600e6000396000f30000000000000000000000000000000000000000000000600582015260008251611d3381600e8501602087016119b1565b91909101600e01939250505056fea26469706673582212209eb839edd88203a4fff92b7d123f4cd1ff081252552bfeca12619cd44d31e61f64736f6c634300080a0033";

type StandardStateBuilderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StandardStateBuilderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StandardStateBuilder__factory extends ContractFactory {
  constructor(...args: StandardStateBuilderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StandardStateBuilder> {
    return super.deploy(overrides || {}) as Promise<StandardStateBuilder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StandardStateBuilder {
    return super.attach(address) as StandardStateBuilder;
  }
  connect(signer: Signer): StandardStateBuilder__factory {
    return super.connect(signer) as StandardStateBuilder__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StandardStateBuilderInterface {
    return new utils.Interface(_abi) as StandardStateBuilderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StandardStateBuilder {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StandardStateBuilder;
  }
}
