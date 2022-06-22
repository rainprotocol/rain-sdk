/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VMStateBuilder,
  VMStateBuilderInterface,
} from "../VMStateBuilder";

const _abi = [
  {
    inputs: [],
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
          {
            internalType: "uint256",
            name: "opcodesLength",
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
        name: "",
        type: "bytes",
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
          {
            internalType: "uint256",
            name: "opcodesLength",
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
    inputs: [
      {
        internalType: "bytes",
        name: "packedFnPtrs_",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "source_",
        type: "bytes",
      },
    ],
    name: "ptrSource",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "stackPopsFnPtrs",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "stackPushesFnPtrs",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506200002a60605b6200005460201b620009141760201c565b6001600160a01b031660805262000042606062000019565b6001600160a01b031660a05262000197565b6000806200008e836040516020016200006e919062000135565b604051602081830303815290604052620000c960201b6200099f1760201c565b90508051602082016000f091506001600160a01b038216620000c35760405163046a55db60e11b815260040160405180910390fd5b50919050565b6060815182604051602001620000e192919062000151565b6040516020818303038152906040529050919050565b6000815160005b818110156200011a5760208185018101518683015201620000fe565b818111156200012a576000828601525b509290920192915050565b6000815260006200014a6001830184620000f7565b9392505050565b606360f81b815260e083901b6001600160e01b03191660018201526880600e6000396000f360b81b600582015260006200018f600e830184620000f7565b949350505050565b60805160a051611720620001bd60003960006105600152600061053301526117206000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80634fc976e9116100505780634fc976e91461009c5780639b0bc349146100b1578063a46c2a311461009557600080fd5b806317376ae01461006c5780634127338614610095575b600080fd5b61007f61007a366004611253565b6100c4565b60405161008c9190611371565b60405180910390f35b606061007f565b6100af6100aa3660046113c2565b6104bf565b005b61007f6100bf366004611412565b6107c3565b606060006100d1856109cb565b905060008573ffffffffffffffffffffffffffffffffffffffff1663e0419ae36040518163ffffffff1660e01b81526004016040805180830381865afa15801561011f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101439190611476565b60200151905060008060005b86518110156102e7578387828151811061016b5761016b6114c5565b602002602001015160a0018181525050600285518161018c5761018c6114f4565b0487828151811061019f5761019f6114c5565b602002602001015160c00181815250506101d2888883815181106101c5576101c56114c5565b60200260200101516104bf565b6102028782815181106101e7576101e76114c5565b60200260200101516080015184610b0f90919063ffffffff16565b9250610234878281518110610219576102196114c5565b60200260200101516060015183610b0f90919063ffffffff16565b9150868181518110610248576102486114c5565b602002602001015160200151878281518110610266576102666114c5565b60200260200101516040015110156102df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f46494e414c5f535441434b5f494e44455800000000000000000000000000000060448201526064015b60405180910390fd5b60010161014f565b506000828860200151510167ffffffffffffffff81111561030a5761030a610f22565b604051908082528060200260200182016040528015610333578160200160208202803683370190505b50905060005b886020015151811015610389578860200151818151811061035c5761035c6114c5565b6020026020010151828281518110610376576103766114c5565b6020908102919091010152600101610339565b5087515160009067ffffffffffffffff8111156103a8576103a8610f22565b6040519080825280602002602001820160405280156103db57816020015b60608152602001906001900390816103c65790505b50905060005b89515181101561043757610412878b600001518381518110610405576104056114c5565b60200260200101516107c3565b828281518110610424576104246114c5565b60209081029190910101526001016103e1565b506104af6040518060a00160405280600081526020018567ffffffffffffffff81111561046657610466610f22565b60405190808252806020026020018201604052801561048f578160200160208202803683370190505b5081526020018381526020018481526020018b6020015151815250610b26565b96505050505050505b9392505050565b8051825151811061052c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4d494e5f534f555243455300000000000000000000000000000000000000000060448201526064016102d6565b60006105577f0000000000000000000000000000000000000000000000000000000000000000610c63565b905060006105847f0000000000000000000000000000000000000000000000000000000000000000610c63565b905060008080600080602088026020018a5101519050805193505b83851015610748576002850194508481015180601e1a935080601f1a925050600683101561066357826105f35789602001515189608001510182106105e357600080fd5b604089018051600101905261064a565b600183141561060c57886040015182106105e357600080fd5b600283141561062557604089018051600101905261064a565b600383141561064a578860a00151821061063e57600080fd5b60408901805160010190525b600483141561065e5761065e8a8a84610c91565b61072b565b8860c0015183106106d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d41585f4f50434f44450000000000000000000000000000000000000000000060448201526064016102d6565b6020838102888101820151908801909101516106ef8463ffffffff8416565b60408c018051919091039081905260608c015161070b91610b0f565b60608c015261071d8463ffffffff8316565b60408c018051909101905250505b604089015160608a015161073e91610b0f565b60608a015261059f565b606089015160ff10156107b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4d41585f535441434b000000000000000000000000000000000000000000000060448201526064016102d6565b50505050505050505050565b80516060906002810615610833576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4f44445f534f555243455f4c454e47544800000000000000000000000000000060448201526064016102d6565b60006002600383020467ffffffffffffffff81111561085457610854610f22565b6040519080825280601f01601f19166020018201604052801561087e576020820181803683370190505b509050600660018381018160005b828210156109065781890151601f1a60028306156108e857858110156108ba57600182019181908801602101535b8581106108e857600281026002018b015180601e1a83602001890153600183019260ff821690890160210153505b600283066108f95780826020018801535b506001918201910161088c565b509398975050505050505050565b60008061093f8360405160200161092b9190611523565b60405160208183030381529060405261099f565b90508051602082016000f0915073ffffffffffffffffffffffffffffffffffffffff8216610999576040517f08d4abb600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50919050565b60608151826040516020016109b5929190611549565b6040516020818303038152906040529050919050565b73ffffffffffffffffffffffffffffffffffffffff8082166000908152602081905260408120546060926109ff9116610c63565b9050805160001415610b0957610aac610aa78473ffffffffffffffffffffffffffffffffffffffff1663f2cd6c086040518163ffffffff1660e01b8152600401600060405180830381865afa158015610a5c573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610aa291908101906115e0565b610d30565b610914565b73ffffffffffffffffffffffffffffffffffffffff848116600090815260208190526040902080547fffffffffffffffffffffffff000000000000000000000000000000000000000016929091169190911790556104b8836109cb565b92915050565b600081831015610b1f57816104b8565b5090919050565b606060008260600151905060006018846040015151901b60108560800151901b6008866020015151901b866060015151171717905060008160001b83604051602001610b729190611657565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610bae929160200161168d565b604051602081830303815290604052905060005b856040015151811015610c5a578186604001518281518110610be657610be66114c5565b60200260200101515160001b87604001518381518110610c0857610c086114c5565b6020026020010151604051602001610c22939291906116b3565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190529150600101610bc2565b50949350505050565b6060610b098260017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e3a565b6040820180517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600584901c9182900301918290526060840151600190910191610cdb9190610b0f565b60608401526080830151610cef9082610b0f565b60808401528251600783168085526001600385811c161b919060005b83811015610d2557610d1d88886104bf565b600101610d0b565b505090935250505050565b60606020825181610d4357610d436114f4565b0615610dab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4241445f464e5f505452535f4c454e475448000000000000000000000000000060448201526064016102d6565b60006010835181610dbe57610dbe6114f4565b0467ffffffffffffffff811115610dd757610dd7610f22565b6040519080825280601f01601f191660200182016040528015610e01576020820181803683370190505b509050600060025b8451821015610e31578083018051602084880181015190911790915290910190600201610e09565b50909392505050565b6060833b80610e595750506040805160208101909152600081526104b8565b80841115610e775750506040805160208101909152600081526104b8565b83831015610ec2576040517f2c4a89fa0000000000000000000000000000000000000000000000000000000081526004810182905260248101859052604481018490526064016102d6565b8383038482036000828210610ed75782610ed9565b815b60408051603f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168101909152818152955090508087602087018a3c505050509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610f7457610f74610f22565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610fc157610fc1610f22565b604052919050565b600067ffffffffffffffff821115610fe357610fe3610f22565b5060051b60200190565b600067ffffffffffffffff82111561100757611007610f22565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261104457600080fd5b813561105761105282610fed565b610f7a565b81815284602083860101111561106c57600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f83011261109a57600080fd5b813560206110aa61105283610fc9565b82815260059290921b840181019181810190868411156110c957600080fd5b8286015b848110156110e457803583529183019183016110cd565b509695505050505050565b60006040828403121561110157600080fd5b611109610f51565b9050813567ffffffffffffffff8082111561112357600080fd5b818401915084601f83011261113757600080fd5b8135602061114761105283610fc9565b82815260059290921b8401810191818101908884111561116657600080fd5b8286015b8481101561119e578035868111156111825760008081fd5b6111908b86838b0101611033565b84525091830191830161116a565b50865250858101359350828411156111b557600080fd5b6111c187858801611089565b818601525050505092915050565b600060e082840312156111e157600080fd5b60405160e0810181811067ffffffffffffffff8211171561120457611204610f22565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c08201525092915050565b60008060006060848603121561126857600080fd5b833573ffffffffffffffffffffffffffffffffffffffff8116811461128c57600080fd5b925060208481013567ffffffffffffffff808211156112aa57600080fd5b6112b6888389016110ef565b945060408701359150808211156112cc57600080fd5b508501601f810187136112de57600080fd5b80356112ec61105282610fc9565b81815260e0918202830184019184820191908a84111561130b57600080fd5b938501935b83851015611331576113228b866111cf565b83529384019391850191611310565b5080955050505050509250925092565b60005b8381101561135c578181015183820152602001611344565b8381111561136b576000848401525b50505050565b6020815260008251806020840152611390816040850160208701611341565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008061010083850312156113d657600080fd5b823567ffffffffffffffff8111156113ed57600080fd5b6113f9858286016110ef565b92505061140984602085016111cf565b90509250929050565b6000806040838503121561142557600080fd5b823567ffffffffffffffff8082111561143d57600080fd5b61144986838701611033565b9350602085013591508082111561145f57600080fd5b5061146c85828601611033565b9150509250929050565b60006040828403121561148857600080fd5b6040516040810181811067ffffffffffffffff821117156114ab576114ab610f22565b604052825181526020928301519281019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600081526000825161153c816001850160208701611341565b9190910160010192915050565b7f630000000000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008360e01b1660018201527f80600e6000396000f300000000000000000000000000000000000000000000006005820152600082516115d281600e850160208701611341565b91909101600e019392505050565b6000602082840312156115f257600080fd5b815167ffffffffffffffff81111561160957600080fd5b8201601f8101841361161a57600080fd5b805161162861105282610fed565b81815285602083850101111561163d57600080fd5b61164e826020830160208601611341565b95945050505050565b815160009082906020808601845b8381101561168157815185529382019390820190600101611665565b50929695505050505050565b828152600082516116a5816020850160208701611341565b919091016020019392505050565b600084516116c5818460208901611341565b820184815283516116dd816020808501908801611341565b016020019594505050505056fea2646970667358221220cd735fe7d1006926589b3c5cd7e55f3ea2b6889bb0e65c15c8a1a1629fd568be64736f6c634300080a0033";

type VMStateBuilderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VMStateBuilderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VMStateBuilder__factory extends ContractFactory {
  constructor(...args: VMStateBuilderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VMStateBuilder> {
    return super.deploy(overrides || {}) as Promise<VMStateBuilder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VMStateBuilder {
    return super.attach(address) as VMStateBuilder;
  }
  connect(signer: Signer): VMStateBuilder__factory {
    return super.connect(signer) as VMStateBuilder__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VMStateBuilderInterface {
    return new utils.Interface(_abi) as VMStateBuilderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VMStateBuilder {
    return new Contract(address, _abi, signerOrProvider) as VMStateBuilder;
  }
}
