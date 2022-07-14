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
  "0x60a060405234801561001057600080fd5b506001600090815560405161002490610096565b604051809103906000f080158015610040573d6000803e3d6000fd5b50604080513381526001600160a01b03831660208201529192507f7fac34ecf0b1b374cd9659e3d17db602659d53f1162b1f20142e6c02694aed70910160405180910390a16001600160a01b03166080526100a3565b6129ee80610b3383390190565b608051610a6f6100c46000396000818160a6015261037a0152610a6f6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632ea72a4914610051578063412eede31461008e5780635c60da1b146100a1578063fc91a897146100c8575b600080fd5b61006461005f366004610510565b610111565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61006461009c366004610582565b6102bf565b6100647f000000000000000000000000000000000000000000000000000000000000000081565b6101016100d63660046105e9565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b6040519015158152602001610085565b600060026000541415610185576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081556101968484610362565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205490915060ff1615610229576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4455504c49434154455f4348494c440000000000000000000000000000000000604482015260640161017c565b73ffffffffffffffffffffffffffffffffffffffff811660008181526001602081815260409283902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169092179091558151338152908101929092527f7da70c4e5387d7038610b79ca7d304caaef815826e51e67cf247135387a79bce910160405180910390a160016000559392505050565b60003073ffffffffffffffffffffffffffffffffffffffff16632ea72a49836040516020016102ee91906106ba565b6040516020818303038152906040526040518263ffffffff1660e01b815260040161031991906107ce565b6020604051808303816000875af1158015610338573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035c91906107e1565b92915050565b60008061037183850185610901565b9050600061039e7f000000000000000000000000000000000000000000000000000000000000000061042e565b6040517ffad876c300000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff82169063fad876c3906103f39085906004016109af565b600060405180830381600087803b15801561040d57600080fd5b505af1158015610421573d6000803e3d6000fd5b5092979650505050505050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f091505073ffffffffffffffffffffffffffffffffffffffff811661050b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f455243313136373a20637265617465206661696c656400000000000000000000604482015260640161017c565b919050565b6000806020838503121561052357600080fd5b823567ffffffffffffffff8082111561053b57600080fd5b818501915085601f83011261054f57600080fd5b81358181111561055e57600080fd5b86602082850101111561057057600080fd5b60209290920196919550909350505050565b60006020828403121561059457600080fd5b813567ffffffffffffffff8111156105ab57600080fd5b8201608081850312156105bd57600080fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146105e657600080fd5b50565b6000602082840312156105fb57600080fd5b81356105bd816105c4565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261063b57600080fd5b830160208101925035905067ffffffffffffffff81111561065b57600080fd5b80360383131561066a57600080fd5b9250929050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60208152600082356106cb816105c4565b73ffffffffffffffffffffffffffffffffffffffff8116602084015250602083013560408301526106ff6040840184610606565b6080606085015261071460a085018284610671565b9150506107246060850185610606565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016080860152610759838284610671565b9695505050505050565b6000815180845260005b818110156107895760208185018101518683018201520161076d565b8181111561079b576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006105bd6020830184610763565b6000602082840312156107f357600080fd5b81516105bd816105c4565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715610850576108506107fe565b60405290565b600082601f83011261086757600080fd5b813567ffffffffffffffff80821115610882576108826107fe565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156108c8576108c86107fe565b816040528381528660208588010111156108e157600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561091357600080fd5b813567ffffffffffffffff8082111561092b57600080fd5b908301906080828603121561093f57600080fd5b61094761082d565b8235610952816105c4565b81526020838101359082015260408301358281111561097057600080fd5b61097c87828601610856565b60408301525060608301358281111561099457600080fd5b6109a087828601610856565b60608301525095945050505050565b6020815273ffffffffffffffffffffffffffffffffffffffff82511660208201526020820151604082015260006040830151608060608401526109f560a0840182610763565b905060608401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016080850152610a308282610763565b9594505050505056fea26469706673582212204c8d0d3cc07d49c88334aada1dfe79c2e0a521ffce9d92aa4264e4aac392a1ee64736f6c634300080a0033608060405234801561001057600080fd5b5060016065556129c9806100256000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806370a08231116100b2578063a9059cbb11610081578063caa0eb3b11610066578063caa0eb3b14610256578063dd62ed3e14610269578063fad876c3146102af57600080fd5b8063a9059cbb14610230578063b6b55f251461024357600080fd5b806370a08231146101cc57806388d686041461020257806395d89b4114610215578063a457c2d71461021d57600080fd5b806323b872dd116100ee57806323b872dd146101825780632e1a7d4d14610195578063313ce567146101aa57806339509351146101b957600080fd5b806301ffc9a71461012057806306fdde0314610148578063095ea7b31461015d57806318160ddd14610170575b600080fd5b61013361012e3660046122cb565b6102c2565b60405190151581526020015b60405180910390f35b61015061035b565b60405161013f9190612339565b61013361016b3660046123b3565b6103ed565b6035545b60405190815260200161013f565b6101336101903660046123dd565b610405565b6101a86101a3366004612419565b61042b565b005b6040516012815260200161013f565b6101336101c73660046123b3565b610862565b6101746101da366004612432565b73ffffffffffffffffffffffffffffffffffffffff1660009081526033602052604090205490565b610174610210366004612499565b6108ae565b610150610a44565b61013361022b3660046123b3565b610a53565b61013361023e3660046123b3565b610b2f565b6101a8610251366004612419565b610b3d565b6101746102643660046124ec565b610ea0565b610174610277366004612546565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260346020908152604080832093909416825291909152205490565b6101a86102bd366004612579565b610ff4565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f42766d3f00000000000000000000000000000000000000000000000000000000148061035557507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60606036805461036a906125b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610396906125b4565b80156103e35780601f106103b8576101008083540402835291602001916103e3565b820191906000526020600020905b8154815290600101906020018083116103c657829003601f168201915b5050505050905090565b6000336103fb81858561139a565b5060019392505050565b60003361041385828561154e565b61041e858585611625565b60019150505b9392505050565b6002606554141561049d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260655580610509576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f305f414d4f554e540000000000000000000000000000000000000000000000006044820152606401610494565b3360009081526068602052604081205461052590600190612637565b336000908152606860205260408120805492935090918390811061054b5761054b61264e565b600091825260208220015464010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1691506105888483612637565b90505b3360009081526068602052604090208054829190859081106105af576105af61264e565b60009182526020909120015464010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff161115610647573360009081526068602052604090208054849081106106085761060861264e565b60009182526020822001558261061d57610647565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9092019161058b565b336000908152606860205260408120546106625760006106c2565b336000908152606860205260409020805461067f90600190612637565b8154811061068f5761068f61264e565b60009182526020909120015464010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff165b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169050808211156107725733600090815260686020908152604091829020825180840190935263ffffffff421683529190810161071b856118d8565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff90811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b600061077d60355490565b9050610789338761198a565b6066546040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152610855913391849173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156107fd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610821919061267d565b61082b908a612696565b61083591906126d3565b60665473ffffffffffffffffffffffffffffffffffffffff169190611b74565b5050600160655550505050565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906103fb90829086906108a990879061270e565b61139a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811561042457604080518082019091526000808252602082018190529060005b73ffffffffffffffffffffffffffffffffffffffff8716600090815260686020526040902054811015610a3a5773ffffffffffffffffffffffffffffffffffffffff871660009081526068602052604090208054829081106109535761095361264e565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169181019190915291505b84831080156109ed57508585848181106109c0576109c061264e565b9050602002013582602001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1610155b15610a1b57610a078484846000015163ffffffff16611c48565b935082610a1381612726565b9350506109a4565b82851415610a2857610a3a565b80610a3281612726565b9150506108ef565b5050509392505050565b60606037805461036a906125b4565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610b17576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610494565b610b24828686840361139a565b506001949350505050565b6000336103fb818585611625565b60026065541415610baa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610494565b600260655580610c16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f305f414d4f554e540000000000000000000000000000000000000000000000006044820152606401610494565b6066546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610c85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca9919061267d565b90506000610cb660355490565b606654909150610cde9073ffffffffffffffffffffffffffffffffffffffff16333086611cd1565b600081610cfa57606754610cf3908590611d2f565b9050610d12565b82610d058584612696565b610d0f91906126d3565b90505b60008111610d7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f305f4d494e5400000000000000000000000000000000000000000000000000006044820152606401610494565b610d863382611d4e565b33600090815260686020526040812054610da1576000610e01565b3360009081526068602052604090208054610dbe90600190612637565b81548110610dce57610dce61264e565b60009182526020909120015464010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff165b33600090815260686020908152604091829020825180840190935263ffffffff421683529293508101610e33886118d8565b610e3d908561275f565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff9081169091528254600181810185556000948552602094859020845195909401519092166401000000000263ffffffff9094169390931791909201556065555050505050565b63ffffffff81841015610fec576000838386818110610ec157610ec161264e565b905060200201359050610f0b6040518060400160405280600063ffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525090565b60005b73ffffffffffffffffffffffffffffffffffffffff8816600090815260686020526040902054811015610fe85773ffffffffffffffffffffffffffffffffffffffff88166000908152606860205260409020805482908110610f7257610f7261264e565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1691810182905292508311610fd657815163ffffffff169350610fe8565b80610fe081612726565b915050610f0e565b5050505b949350505050565b600054610100900460ff16158080156110145750600054600160ff909116105b8061102e5750303b15801561102e575060005460ff166001145b6110ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610494565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055801561111857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b60006111276020840184612432565b73ffffffffffffffffffffffffffffffffffffffff1614156111a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f305f544f4b454e000000000000000000000000000000000000000000000000006044820152606401610494565b6000826020013511611213576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f305f524154494f000000000000000000000000000000000000000000000000006044820152606401610494565b61129f611223604084018461279f565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061126592505050606085018561279f565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611e6e92505050565b6112ac6020830183612432565b606680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905560208201356067556040517fdc87f670e1a10e82b4063c89c0fd8fc5da0cf126722f5dc54e3fdbcbee092f5c9061132b90339085906128b1565b60405180910390a1801561139657600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b73ffffffffffffffffffffffffffffffffffffffff831661143c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610494565b73ffffffffffffffffffffffffffffffffffffffff82166114df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610494565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152603460209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461161f5781811015611612576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610494565b61161f848484840361139a565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166116c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610494565b73ffffffffffffffffffffffffffffffffffffffff821661176b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610494565b73ffffffffffffffffffffffffffffffffffffffff831660009081526033602052604090205481811015611821576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610494565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526033602052604080822085850390559185168152908120805484929061186590849061270e565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516118cb91815260200190565b60405180910390a361161f565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff821115611986576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203260448201527f32342062697473000000000000000000000000000000000000000000000000006064820152608401610494565b5090565b73ffffffffffffffffffffffffffffffffffffffff8216611a2d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610494565b73ffffffffffffffffffffffffffffffffffffffff821660009081526033602052604090205481811015611ae3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610494565b73ffffffffffffffffffffffffffffffffffffffff83166000908152603360205260408120838303905560358054849290611b1f908490612637565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001611541565b505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611b6f9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611f0f565b6000826008811115611cb6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f544945520000000000000000000000000000000000000000000000006044820152606401610494565b505063ffffffff602090920291821b199290921691901b1790565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261161f9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611bc6565b6000670de0b6b3a7640000611d448385612696565b61042491906126d3565b73ffffffffffffffffffffffffffffffffffffffff8216611dcb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610494565b8060356000828254611ddd919061270e565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526033602052604081208054839290611e1790849061270e565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600054610100900460ff16611f05576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610494565b611396828261201b565b6000611f71826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166120d99092919063ffffffff16565b805190915015611b6f5780806020019051810190611f8f9190612955565b611b6f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610494565b600054610100900460ff166120b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610494565b81516120c590603690602085019061223b565b508051611b6f90603790602084019061223b565b6060610fec84846000858573ffffffffffffffffffffffffffffffffffffffff85163b612162576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610494565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161218b9190612977565b60006040518083038185875af1925050503d80600081146121c8576040519150601f19603f3d011682016040523d82523d6000602084013e6121cd565b606091505b50915091506121dd8282866121e8565b979650505050505050565b606083156121f7575081610424565b8251156122075782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104949190612339565b828054612247906125b4565b90600052602060002090601f01602090048101928261226957600085556122af565b82601f1061228257805160ff19168380011785556122af565b828001600101855582156122af579182015b828111156122af578251825591602001919060010190612294565b506119869291505b8082111561198657600081556001016122b7565b6000602082840312156122dd57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461042457600080fd5b60005b83811015612328578181015183820152602001612310565b8381111561161f5750506000910152565b602081526000825180602084015261235881604085016020870161230d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146123ae57600080fd5b919050565b600080604083850312156123c657600080fd5b6123cf8361238a565b946020939093013593505050565b6000806000606084860312156123f257600080fd5b6123fb8461238a565b92506124096020850161238a565b9150604084013590509250925092565b60006020828403121561242b57600080fd5b5035919050565b60006020828403121561244457600080fd5b6104248261238a565b60008083601f84011261245f57600080fd5b50813567ffffffffffffffff81111561247757600080fd5b6020830191508360208260051b850101111561249257600080fd5b9250929050565b6000806000604084860312156124ae57600080fd5b6124b78461238a565b9250602084013567ffffffffffffffff8111156124d357600080fd5b6124df8682870161244d565b9497909650939450505050565b6000806000806060858703121561250257600080fd5b61250b8561238a565b935060208501359250604085013567ffffffffffffffff81111561252e57600080fd5b61253a8782880161244d565b95989497509550505050565b6000806040838503121561255957600080fd5b6125628361238a565b91506125706020840161238a565b90509250929050565b60006020828403121561258b57600080fd5b813567ffffffffffffffff8111156125a257600080fd5b82016080818503121561042457600080fd5b600181811c908216806125c857607f821691505b60208210811415612602577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561264957612649612608565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561268f57600080fd5b5051919050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156126ce576126ce612608565b500290565b600082612709577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000821982111561272157612721612608565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561275857612758612608565b5060010190565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff80831681851680830382111561279657612796612608565b01949350505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126127d457600080fd5b83018035915067ffffffffffffffff8211156127ef57600080fd5b60200191503681900382131561249257600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261283957600080fd5b830160208101925035905067ffffffffffffffff81111561285957600080fd5b80360383131561249257600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600073ffffffffffffffffffffffffffffffffffffffff808516835260406020840152806128de8561238a565b16604084015250602083013560608301526128fc6040840184612804565b60808085015261291060c085018284612868565b9150506129206060850185612804565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08584030160a08601526121dd838284612868565b60006020828403121561296757600080fd5b8151801515811461042457600080fd5b6000825161298981846020870161230d565b919091019291505056fea2646970667358221220fd729b475c9b0be8aaf319e61873b188919a1cca160d19b7be91f74a382eff1a64736f6c634300080a0033";

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
