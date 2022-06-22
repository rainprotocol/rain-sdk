/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StakeFactory, StakeFactoryInterface } from "../StakeFactory";

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
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Implementation",
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
        name: "child",
        type: "address",
      },
    ],
    name: "NewChild",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "createChild",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "initialRatio",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
        ],
        internalType: "struct StakeConfig",
        name: "config_",
        type: "tuple",
      },
    ],
    name: "createChildTyped",
    outputs: [
      {
        internalType: "contract Stake",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "maybeChild_",
        type: "address",
      },
    ],
    name: "isChild",
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
  "0x60a060405234801561001057600080fd5b506001600090815560405161002490610096565b604051809103906000f080158015610040573d6000803e3d6000fd5b50604080513381526001600160a01b03831660208201529192507f7fac34ecf0b1b374cd9659e3d17db602659d53f1162b1f20142e6c02694aed70910160405180910390a16001600160a01b03166080526100a3565b612a9180610b3383390190565b608051610a6f6100c46000396000818160a6015261037a0152610a6f6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632ea72a4914610051578063412eede31461008e5780635c60da1b146100a1578063fc91a897146100c8575b600080fd5b61006461005f366004610510565b610111565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61006461009c366004610582565b6102bf565b6100647f000000000000000000000000000000000000000000000000000000000000000081565b6101016100d63660046105e9565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b6040519015158152602001610085565b600060026000541415610185576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081556101968484610362565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205490915060ff1615610229576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4455504c49434154455f4348494c440000000000000000000000000000000000604482015260640161017c565b73ffffffffffffffffffffffffffffffffffffffff811660008181526001602081815260409283902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169092179091558151338152908101929092527f7da70c4e5387d7038610b79ca7d304caaef815826e51e67cf247135387a79bce910160405180910390a160016000559392505050565b60003073ffffffffffffffffffffffffffffffffffffffff16632ea72a49836040516020016102ee91906106ba565b6040516020818303038152906040526040518263ffffffff1660e01b815260040161031991906107ce565b6020604051808303816000875af1158015610338573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035c91906107e1565b92915050565b60008061037183850185610901565b9050600061039e7f000000000000000000000000000000000000000000000000000000000000000061042e565b6040517ffad876c300000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff82169063fad876c3906103f39085906004016109af565b600060405180830381600087803b15801561040d57600080fd5b505af1158015610421573d6000803e3d6000fd5b5092979650505050505050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f091505073ffffffffffffffffffffffffffffffffffffffff811661050b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f455243313136373a20637265617465206661696c656400000000000000000000604482015260640161017c565b919050565b6000806020838503121561052357600080fd5b823567ffffffffffffffff8082111561053b57600080fd5b818501915085601f83011261054f57600080fd5b81358181111561055e57600080fd5b86602082850101111561057057600080fd5b60209290920196919550909350505050565b60006020828403121561059457600080fd5b813567ffffffffffffffff8111156105ab57600080fd5b8201608081850312156105bd57600080fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146105e657600080fd5b50565b6000602082840312156105fb57600080fd5b81356105bd816105c4565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261063b57600080fd5b830160208101925035905067ffffffffffffffff81111561065b57600080fd5b80360383131561066a57600080fd5b9250929050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60208152600082356106cb816105c4565b73ffffffffffffffffffffffffffffffffffffffff8116602084015250602083013560408301526106ff6040840184610606565b6080606085015261071460a085018284610671565b9150506107246060850185610606565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016080860152610759838284610671565b9695505050505050565b6000815180845260005b818110156107895760208185018101518683018201520161076d565b8181111561079b576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006105bd6020830184610763565b6000602082840312156107f357600080fd5b81516105bd816105c4565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715610850576108506107fe565b60405290565b600082601f83011261086757600080fd5b813567ffffffffffffffff80821115610882576108826107fe565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156108c8576108c86107fe565b816040528381528660208588010111156108e157600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561091357600080fd5b813567ffffffffffffffff8082111561092b57600080fd5b908301906080828603121561093f57600080fd5b61094761082d565b8235610952816105c4565b81526020838101359082015260408301358281111561097057600080fd5b61097c87828601610856565b60408301525060608301358281111561099457600080fd5b6109a087828601610856565b60608301525095945050505050565b6020815273ffffffffffffffffffffffffffffffffffffffff82511660208201526020820151604082015260006040830151608060608401526109f560a0840182610763565b905060608401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016080850152610a308282610763565b9594505050505056fea2646970667358221220944d4ecf3631be609085936463812e5cf31bd3d61498b29d497fe72a6b58990764736f6c634300080a0033608060405234801561001057600080fd5b506001606555612a6c806100256000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806370a08231116100b2578063a9059cbb11610081578063caa0eb3b11610066578063caa0eb3b14610256578063dd62ed3e14610269578063fad876c3146102af57600080fd5b8063a9059cbb14610230578063b6b55f251461024357600080fd5b806370a08231146101cc57806388d686041461020257806395d89b4114610215578063a457c2d71461021d57600080fd5b806323b872dd116100ee57806323b872dd146101825780632e1a7d4d14610195578063313ce567146101aa57806339509351146101b957600080fd5b806301ffc9a71461012057806306fdde0314610148578063095ea7b31461015d57806318160ddd14610170575b600080fd5b61013361012e366004612373565b6102c2565b60405190151581526020015b60405180910390f35b61015061035b565b60405161013f91906123e1565b61013361016b366004612456565b6103ed565b6035545b60405190815260200161013f565b610133610190366004612480565b610405565b6101a86101a33660046124bc565b61042b565b005b6040516012815260200161013f565b6101336101c7366004612456565b610862565b6101746101da3660046124d5565b73ffffffffffffffffffffffffffffffffffffffff1660009081526033602052604090205490565b61017461021036600461253c565b6108ae565b610150610a44565b61013361022b366004612456565b610a53565b61013361023e366004612456565b610b2f565b6101a86102513660046124bc565b610b3d565b61017461026436600461258f565b610ea0565b6101746102773660046125e9565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260346020908152604080832093909416825291909152205490565b6101a86102bd36600461261c565b610ff4565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f42766d3f00000000000000000000000000000000000000000000000000000000148061035557507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60606036805461036a90612657565b80601f016020809104026020016040519081016040528092919081815260200182805461039690612657565b80156103e35780601f106103b8576101008083540402835291602001916103e3565b820191906000526020600020905b8154815290600101906020018083116103c657829003601f168201915b5050505050905090565b6000336103fb8185856112b7565b5060019392505050565b60003361041385828561146b565b61041e858585611542565b60019150505b9392505050565b6002606554141561049d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260655580610509576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f305f414d4f554e540000000000000000000000000000000000000000000000006044820152606401610494565b33600090815260686020526040812054610525906001906126da565b336000908152606860205260408120805492935090918390811061054b5761054b6126f1565b600091825260208220015464010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16915061058884836126da565b90505b3360009081526068602052604090208054829190859081106105af576105af6126f1565b60009182526020909120015464010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16111561064757336000908152606860205260409020805484908110610608576106086126f1565b60009182526020822001558261061d57610647565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9092019161058b565b336000908152606860205260408120546106625760006106c2565b336000908152606860205260409020805461067f906001906126da565b8154811061068f5761068f6126f1565b60009182526020909120015464010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff165b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169050808211156107725733600090815260686020908152604091829020825180840190935263ffffffff421683529190810161071b856117f5565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff90811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b600061077d60355490565b905061078933876118a7565b6066546040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152610855913391849173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156107fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108219190612720565b61082b908a612739565b6108359190612776565b60665473ffffffffffffffffffffffffffffffffffffffff169190611a91565b5050600160655550505050565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906103fb90829086906108a99087906127b1565b6112b7565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811561042457604080518082019091526000808252602082018190529060005b73ffffffffffffffffffffffffffffffffffffffff8716600090815260686020526040902054811015610a3a5773ffffffffffffffffffffffffffffffffffffffff87166000908152606860205260409020805482908110610953576109536126f1565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169181019190915291505b84831080156109ed57508585848181106109c0576109c06126f1565b9050602002013582602001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1610155b15610a1b57610a078484846000015163ffffffff16611b65565b935082610a13816127c9565b9350506109a4565b82851415610a2857610a3a565b80610a32816127c9565b9150506108ef565b5050509392505050565b60606037805461036a90612657565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610b17576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610494565b610b2482868684036112b7565b506001949350505050565b6000336103fb818585611542565b60026065541415610baa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610494565b600260655580610c16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f305f414d4f554e540000000000000000000000000000000000000000000000006044820152606401610494565b6066546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610c85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca99190612720565b90506000610cb660355490565b606654909150610cde9073ffffffffffffffffffffffffffffffffffffffff16333086611bee565b600081610cfa57606754610cf3908590611c4c565b9050610d12565b82610d058584612739565b610d0f9190612776565b90505b60008111610d7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f305f4d494e5400000000000000000000000000000000000000000000000000006044820152606401610494565b610d863382611c6b565b33600090815260686020526040812054610da1576000610e01565b3360009081526068602052604090208054610dbe906001906126da565b81548110610dce57610dce6126f1565b60009182526020909120015464010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff165b33600090815260686020908152604091829020825180840190935263ffffffff421683529293508101610e33886117f5565b610e3d9085612802565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff9081169091528254600181810185556000948552602094859020845195909401519092166401000000000263ffffffff9094169390931791909201556065555050505050565b63ffffffff81841015610fec576000838386818110610ec157610ec16126f1565b905060200201359050610f0b6040518060400160405280600063ffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525090565b60005b73ffffffffffffffffffffffffffffffffffffffff8816600090815260686020526040902054811015610fe85773ffffffffffffffffffffffffffffffffffffffff88166000908152606860205260409020805482908110610f7257610f726126f1565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1691810182905292508311610fd657815163ffffffff169350610fe8565b80610fe0816127c9565b915050610f0e565b5050505b949350505050565b60006110006001611d8b565b9050801561103557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b600061104460208401846124d5565b73ffffffffffffffffffffffffffffffffffffffff1614156110c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f305f544f4b454e000000000000000000000000000000000000000000000000006044820152606401610494565b6000826020013511611130576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f305f524154494f000000000000000000000000000000000000000000000000006044820152606401610494565b6111bc6111406040840184612842565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611182925050506060850185612842565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611f1692505050565b6111c960208301836124d5565b606680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905560208201356067556040517fdc87f670e1a10e82b4063c89c0fd8fc5da0cf126722f5dc54e3fdbcbee092f5c906112489033908590612954565b60405180910390a180156112b357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b73ffffffffffffffffffffffffffffffffffffffff8316611359576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610494565b73ffffffffffffffffffffffffffffffffffffffff82166113fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610494565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152603460209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461153c578181101561152f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610494565b61153c84848484036112b7565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166115e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610494565b73ffffffffffffffffffffffffffffffffffffffff8216611688576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610494565b73ffffffffffffffffffffffffffffffffffffffff83166000908152603360205260409020548181101561173e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610494565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152603360205260408082208585039055918516815290812080548492906117829084906127b1565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516117e891815260200190565b60405180910390a361153c565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8211156118a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203260448201527f32342062697473000000000000000000000000000000000000000000000000006064820152608401610494565b5090565b73ffffffffffffffffffffffffffffffffffffffff821661194a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610494565b73ffffffffffffffffffffffffffffffffffffffff821660009081526033602052604090205481811015611a00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610494565b73ffffffffffffffffffffffffffffffffffffffff83166000908152603360205260408120838303905560358054849290611a3c9084906126da565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161145e565b505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611a8c9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611fb7565b6000826008811115611bd3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f544945520000000000000000000000000000000000000000000000006044820152606401610494565b505063ffffffff602090920291821b199290921691901b1790565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261153c9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611ae3565b6000670de0b6b3a7640000611c618385612739565b6104249190612776565b73ffffffffffffffffffffffffffffffffffffffff8216611ce8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610494565b8060356000828254611cfa91906127b1565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526033602052604081208054839290611d349084906127b1565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60008054610100900460ff1615611e42578160ff166001148015611dae5750303b155b611e3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610494565b506000919050565b60005460ff808416911610611ed9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610494565b50600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff92909216919091179055600190565b919050565b600054610100900460ff16611fad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610494565b6112b382826120c3565b6000612019826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166121819092919063ffffffff16565b805190915015611a8c578080602001905181019061203791906129f8565b611a8c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610494565b600054610100900460ff1661215a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610494565b815161216d9060369060208501906122e3565b508051611a8c9060379060208401906122e3565b6060610fec84846000858573ffffffffffffffffffffffffffffffffffffffff85163b61220a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610494565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516122339190612a1a565b60006040518083038185875af1925050503d8060008114612270576040519150601f19603f3d011682016040523d82523d6000602084013e612275565b606091505b5091509150612285828286612290565b979650505050505050565b6060831561229f575081610424565b8251156122af5782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049491906123e1565b8280546122ef90612657565b90600052602060002090601f0160209004810192826123115760008555612357565b82601f1061232a57805160ff1916838001178555612357565b82800160010185558215612357579182015b8281111561235757825182559160200191906001019061233c565b506118a39291505b808211156118a3576000815560010161235f565b60006020828403121561238557600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461042457600080fd5b60005b838110156123d05781810151838201526020016123b8565b8381111561153c5750506000910152565b60208152600082518060208401526124008160408501602087016123b5565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f1157600080fd5b6000806040838503121561246957600080fd5b61247283612432565b946020939093013593505050565b60008060006060848603121561249557600080fd5b61249e84612432565b92506124ac60208501612432565b9150604084013590509250925092565b6000602082840312156124ce57600080fd5b5035919050565b6000602082840312156124e757600080fd5b61042482612432565b60008083601f84011261250257600080fd5b50813567ffffffffffffffff81111561251a57600080fd5b6020830191508360208260051b850101111561253557600080fd5b9250929050565b60008060006040848603121561255157600080fd5b61255a84612432565b9250602084013567ffffffffffffffff81111561257657600080fd5b612582868287016124f0565b9497909650939450505050565b600080600080606085870312156125a557600080fd5b6125ae85612432565b935060208501359250604085013567ffffffffffffffff8111156125d157600080fd5b6125dd878288016124f0565b95989497509550505050565b600080604083850312156125fc57600080fd5b61260583612432565b915061261360208401612432565b90509250929050565b60006020828403121561262e57600080fd5b813567ffffffffffffffff81111561264557600080fd5b82016080818503121561042457600080fd5b600181811c9082168061266b57607f821691505b602082108114156126a5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156126ec576126ec6126ab565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561273257600080fd5b5051919050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612771576127716126ab565b500290565b6000826127ac577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600082198211156127c4576127c46126ab565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156127fb576127fb6126ab565b5060010190565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff808316818516808303821115612839576128396126ab565b01949350505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261287757600080fd5b83018035915067ffffffffffffffff82111561289257600080fd5b60200191503681900382131561253557600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126128dc57600080fd5b830160208101925035905067ffffffffffffffff8111156128fc57600080fd5b80360383131561253557600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600073ffffffffffffffffffffffffffffffffffffffff8085168352604060208401528061298185612432565b166040840152506020830135606083015261299f60408401846128a7565b6080808501526129b360c08501828461290b565b9150506129c360608501856128a7565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08584030160a086015261228583828461290b565b600060208284031215612a0a57600080fd5b8151801515811461042457600080fd5b60008251612a2c8184602087016123b5565b919091019291505056fea2646970667358221220bfb5394bbf762ac29113e49e62ffcecdbbded41c8c210c77ea7aa52c125636f764736f6c634300080a0033";

type StakeFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakeFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakeFactory__factory extends ContractFactory {
  constructor(...args: StakeFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StakeFactory> {
    return super.deploy(overrides || {}) as Promise<StakeFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StakeFactory {
    return super.attach(address) as StakeFactory;
  }
  connect(signer: Signer): StakeFactory__factory {
    return super.connect(signer) as StakeFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakeFactoryInterface {
    return new utils.Interface(_abi) as StakeFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakeFactory {
    return new Contract(address, _abi, signerOrProvider) as StakeFactory;
  }
}
