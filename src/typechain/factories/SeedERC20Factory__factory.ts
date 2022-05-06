/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SeedERC20Factory,
  SeedERC20FactoryInterface,
} from "../SeedERC20Factory";

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
            internalType: "contract IERC20",
            name: "reserve",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "seedPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cooldownDuration",
            type: "uint256",
          },
          {
            components: [
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
              {
                internalType: "address",
                name: "distributor",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "initialSupply",
                type: "uint256",
              },
            ],
            internalType: "struct ERC20Config",
            name: "erc20Config",
            type: "tuple",
          },
        ],
        internalType: "struct SeedERC20Config",
        name: "config_",
        type: "tuple",
      },
    ],
    name: "createChildTyped",
    outputs: [
      {
        internalType: "contract SeedERC20",
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
  "0x60a060405234801561001057600080fd5b506001600090815560405161002490610096565b604051809103906000f080158015610040573d6000803e3d6000fd5b50604080513381526001600160a01b03831660208201529192507f7fac34ecf0b1b374cd9659e3d17db602659d53f1162b1f20142e6c02694aed70910160405180910390a16001600160a01b03166080526100a3565b6134d880610c8a83390190565b608051610bc66100c46000396000818160a6015261037a0152610bc66000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632ea72a491461005157806337669b011461008e5780635c60da1b146100a1578063fc91a897146100c8575b600080fd5b61006461005f366004610510565b610111565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61006461009c366004610582565b6102bf565b6100647f000000000000000000000000000000000000000000000000000000000000000081565b6101016100d63660046105e9565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b6040519015158152602001610085565b600060026000541415610185576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081556101968484610362565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205490915060ff1615610229576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4455504c49434154455f4348494c440000000000000000000000000000000000604482015260640161017c565b73ffffffffffffffffffffffffffffffffffffffff811660008181526001602081815260409283902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169092179091558151338152908101929092527f7da70c4e5387d7038610b79ca7d304caaef815826e51e67cf247135387a79bce910160405180910390a160016000559392505050565b60003073ffffffffffffffffffffffffffffffffffffffff16632ea72a49836040516020016102ee91906106ba565b6040516020818303038152906040526040518263ffffffff1660e01b81526004016103199190610857565b6020604051808303816000875af1158015610338573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035c919061086a565b92915050565b600080610371838501856109ad565b9050600061039e7f000000000000000000000000000000000000000000000000000000000000000061042e565b6040517ff6d5a76600000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff82169063f6d5a766906103f3908590600401610acb565b600060405180830381600087803b15801561040d57600080fd5b505af1158015610421573d6000803e3d6000fd5b5092979650505050505050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f091505073ffffffffffffffffffffffffffffffffffffffff811661050b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f455243313136373a20637265617465206661696c656400000000000000000000604482015260640161017c565b919050565b6000806020838503121561052357600080fd5b823567ffffffffffffffff8082111561053b57600080fd5b818501915085601f83011261054f57600080fd5b81358181111561055e57600080fd5b86602082850101111561057057600080fd5b60209290920196919550909350505050565b60006020828403121561059457600080fd5b813567ffffffffffffffff8111156105ab57600080fd5b820160a081850312156105bd57600080fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146105e657600080fd5b50565b6000602082840312156105fb57600080fd5b81356105bd816105c4565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261063b57600080fd5b830160208101925035905067ffffffffffffffff81111561065b57600080fd5b80360383131561066a57600080fd5b9250929050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60208152600082356106cb816105c4565b73ffffffffffffffffffffffffffffffffffffffff8082166020850152602085013591506106f8826105c4565b80821660408501526040850135606085015260608501356080850152608085013591507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8185360301821261074b57600080fd5b60a0848101529084019061075f8280610606565b608060c087015261077561014087018284610671565b9150506107856020840184610606565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff408784030160e08801526107ba838284610671565b9250505060408301356107cc816105c4565b909116610100850152606091909101356101209093019290925250919050565b6000815180845260005b81811015610812576020818501810151868301820152016107f6565b81811115610824576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006105bd60208301846107ec565b60006020828403121561087c57600080fd5b81516105bd816105c4565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156108d9576108d9610887565b60405290565b6040516080810167ffffffffffffffff811182821017156108d9576108d9610887565b600082601f83011261091357600080fd5b813567ffffffffffffffff8082111561092e5761092e610887565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561097457610974610887565b8160405283815286602085880101111561098d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000602082840312156109bf57600080fd5b813567ffffffffffffffff808211156109d757600080fd5b9083019060a082860312156109eb57600080fd5b6109f36108b6565b82356109fe816105c4565b81526020830135610a0e816105c4565b806020830152506040830135604082015260608301356060820152608083013582811115610a3b57600080fd5b929092019160808387031215610a5057600080fd5b610a586108df565b833583811115610a6757600080fd5b610a7388828701610902565b825250602084013583811115610a8857600080fd5b610a9488828701610902565b60208301525060408401359250610aaa836105c4565b60408101929092526060928301359282019290925260808201529392505050565b60208152600073ffffffffffffffffffffffffffffffffffffffff8084511660208401528060208501511660408401526040840151606084015260608401516080840152608084015160a0808501528051608060c0860152610b316101408601826107ec565b905060208201517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff408683030160e0870152610b6c82826107ec565b6040840151909416610100870152505060600151610120909301929092525091905056fea26469706673582212200b3711ff5554ff079cc95ce057a7ed405ffd82a250e6c1b87f0d8fdaa68cb81664736f6c634300080a00336080604052600060025534801561001557600080fd5b506134b3806100256000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c806370a08231116100e3578063a9059cbb1161008c578063dd62ed3e11610066578063dd62ed3e14610366578063f6d5a766146103ac578063fed8ea71146103bf57600080fd5b8063a9059cbb1461032d578063b7a3c82814610340578063b8ffd02c1461035357600080fd5b806395d89b41116100bd57806395d89b41146102ea5780639923c94b146102f2578063a457c2d71461031a57600080fd5b806370a082311461028e57806379cc6790146102c45780637cbc2373146102d757600080fd5b806318160ddd11610145578063395093511161011f578063395093511461025557806342966c6814610268578063634991af1461027b57600080fd5b806318160ddd1461022b57806323b872dd14610233578063313ce5671461024657600080fd5b8063094890961161017657806309489096146101e2578063095ea7b3146101f5578063166a00e41461021857600080fd5b8063038ef03e1461019d578063055ad42e146101b257806306fdde03146101cd575b600080fd5b6101b06101ab366004612e10565b6103c8565b005b6101ba61041a565b6040519081526020015b60405180910390f35b6101d5610485565b6040516101c49190612e59565b6101b06101f0366004612eaa565b610517565b610208610203366004612ec3565b6107b2565b60405190151581526020016101c4565b6101b0610226366004612eef565b6107cc565b6039546101ba565b610208610241366004612f11565b610ca0565b604051600081526020016101c4565b610208610263366004612ec3565b610cc6565b6101b0610276366004612eaa565b610d12565b6101ba610289366004612fcd565b610d1f565b6101ba61029c366004612e10565b73ffffffffffffffffffffffffffffffffffffffff1660009081526037602052604090205490565b6101b06102d2366004612ec3565b610d73565b6101b06102e5366004612eef565b610d8c565b6101d5610fb7565b610305610300366004612eaa565b610fc6565b60405163ffffffff90911681526020016101c4565b610208610328366004612ec3565b610ff6565b61020861033b366004612ec3565b6110d2565b6101b061034e366004612eaa565b6110e0565b6101ba610361366004612fcd565b61110b565b6101ba610374366004613063565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260386020908152604080832093909416825291909152205490565b6101b06103ba366004613147565b61114a565b6101ba60a15481565b6040805133815273ffffffffffffffffffffffffffffffffffffffff831660208201527f2ab01e95cf254bfe2f3e7e2a70a40262c15f0c753a586568529e3b109c567d5691015b60405180910390a150565b6040805161010081019182905260009161048091906001906008908286855b82829054906101000a900463ffffffff1663ffffffff1681526020019060040190602082600301049283019260010382029150808411610439579050505050505043610d1f565b905090565b6060603a805461049490613265565b80601f01602080910402602001604051908101604052809291908181526020018280546104c090613265565b801561050d5780601f106104e25761010080835404028352916020019161050d565b820191906000526020600020905b8154815290600101906020018083116104f057829003601f168201915b5050505050905090565b60018061052261041a565b1461058e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4241445f5048415345000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b60045460009073ffffffffffffffffffffffffffffffffffffffff16156105cd5760045473ffffffffffffffffffffffffffffffffffffffff166105fb565b600480547fffffffffffffffffffffffff000000000000000000000000000000000000000016339081179091555b73ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090205490915043101561068d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f434f4f4c444f574e0000000000000000000000000000000000000000000000006044820152606401610585565b60006002544361069d91906132e8565b73ffffffffffffffffffffffffffffffffffffffff8316600081815260036020908152604091829020849055815192835282018390529192507fdd9ec76fd04aab7ee6b385c04a7bdf966620500e72b134bfc3f19654fae20f25910160405180910390a1600084609f546107119190613300565b905061071e333087611560565b60408051338152602081018790529081018290527fa7a28d973038da3f8f74915d4ba1108930a16dfd6c9f81bf3881c858e08568369060600160405180910390a1609d546107839073ffffffffffffffffffffffffffffffffffffffff163383611815565b5050600480547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055505050565b6000336107c08185856118ee565b60019150505b92915050565b6001806107d761041a565b1461083e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4241445f504841534500000000000000000000000000000000000000000000006044820152606401610585565b60045460009073ffffffffffffffffffffffffffffffffffffffff161561087d5760045473ffffffffffffffffffffffffffffffffffffffff166108ab565b600480547fffffffffffffffffffffffff000000000000000000000000000000000000000016339081179091555b73ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090205490915043101561093d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f434f4f4c444f574e0000000000000000000000000000000000000000000000006044820152606401610585565b60006002544361094d91906132e8565b73ffffffffffffffffffffffffffffffffffffffff8316600081815260036020908152604091829020849055815192835282018390529192507fdd9ec76fd04aab7ee6b385c04a7bdf966620500e72b134bfc3f19654fae20f25910160405180910390a160008411610a1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f444553495245445f3000000000000000000000000000000000000000000000006044820152606401610585565b83851115610a85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4d494e494d554d5f4f5645525f444553495245440000000000000000000000006044820152606401610585565b3060009081526037602052604090205480861115610aff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f494e53554646494349454e545f53544f434b00000000000000000000000000006044820152606401610585565b6000610b0b8683611aa1565b9050600081609f54610b1d9190613300565b905081831415610b3257610b32600243611ab7565b610b3d303384611560565b60408051338152602081018490529081018290527fcfbc75cbfc5b8b5055f9bbb6b60bdf5394eb8dc9a09770d5deedd7d4f82d79169060600160405180910390a1609d54610ba39073ffffffffffffffffffffffffffffffffffffffff16333084611d60565b6002610bad61041a565b1415610c6e57609e54609d546040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152610c6e9273ffffffffffffffffffffffffffffffffffffffff9081169216906370a0823190602401602060405180830381865afa158015610c2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4e919061333d565b609d5473ffffffffffffffffffffffffffffffffffffffff169190611815565b5050600480547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055505050505050565b600033610cae858285611dbe565b610cb9858585611560565b60019150505b9392505050565b33600081815260386020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906107c09082908690610d0d9087906132e8565b6118ee565b610d1c3382611e8f565b50565b6000805b6008811015610d6957838160088110610d3e57610d3e613356565b602002015163ffffffff16831015610d575790506107c6565b80610d6181613385565b915050610d23565b5060089392505050565b610d7e823383611dbe565b610d888282611e8f565b5050565b600280610d9761041a565b14610dfe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4241445f504841534500000000000000000000000000000000000000000000006044820152606401610585565b609d546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610e6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e91919061333d565b60a15490915081811015610ea7575060a1819055805b60a054610eb485836132e8565b1015610f1c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f524553455256455f42414c414e434500000000000000000000000000000000006044820152606401610585565b604080516001808252818301909252600091602080830190803683375050609d54825192935073ffffffffffffffffffffffffffffffffffffffff1691839150600090610f6b57610f6b613356565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050610faf818761207c565b505050505050565b6060603b805461049490613265565b60018160088110610fd657600080fd5b60089182820401919006600402915054906101000a900463ffffffff1681565b33600081815260386020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156110ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610585565b6110c782868684036118ee565b506001949350505050565b6000336107c0818585611560565b609b54609c54610d1c9173ffffffffffffffffffffffffffffffffffffffff91821691163084611d60565b600080821161111b57600061113d565b826111276001846133be565b6008811061113757611137613356565b60200201515b63ffffffff169392505050565b600054610100900460ff166111655760005460ff1615611169565b303b155b6111f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610585565b600054610100900460ff1615801561123457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b60008260400151116112a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50524943455f30000000000000000000000000000000000000000000000000006044820152606401610585565b600082608001516060015111611314576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f535550504c595f300000000000000000000000000000000000000000000000006044820152606401610585565b602082015173ffffffffffffffffffffffffffffffffffffffff16611395576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f524543495049454e545f300000000000000000000000000000000000000000006044820152606401610585565b61139d612421565b6113aa82606001516124cb565b608082018051306040909101525180516020909101516113ca9190612580565b6113e4826080015160400151836080015160600151612621565b6114356040518060400160405280846020015173ffffffffffffffffffffffffffffffffffffffff168152602001846000015173ffffffffffffffffffffffffffffffffffffffff16815250612741565b6020820151609e805473ffffffffffffffffffffffffffffffffffffffff9283167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091558351609d80549190931691161790556040820151609f8190556080830151606001516114a991613300565b60a05581516114b7906103c8565b6020808301518351604080860151815133815273ffffffffffffffffffffffffffffffffffffffff94851695810195909552929091169083015260608201527fc38c89ccc76be750f6667bd27ef37d3fa8061eb6451003ba3008ac6b00fa17339060800160405180910390a161152e600143611ab7565b8015610d8857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050565b73ffffffffffffffffffffffffffffffffffffffff8316611603576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610585565b73ffffffffffffffffffffffffffffffffffffffff82166116a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610585565b73ffffffffffffffffffffffffffffffffffffffff83166000908152603760205260409020548181101561175c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610585565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152603760205260408082208585039055918516815290812080548492906117a09084906132e8565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161180691815260200190565b60405180910390a35b50505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526118e99084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526128ff565b505050565b73ffffffffffffffffffffffffffffffffffffffff8316611990576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610585565b73ffffffffffffffffffffffffffffffffffffffff8216611a33576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610585565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526038602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000818310611ab05781610cbf565b5090919050565b80431115611b21576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e4558545f424c4f434b5f5041535400000000000000000000000000000000006044820152606401610585565b63ffffffff8110611b8e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e4558545f424c4f434b5f554e494e495449414c495a454400000000000000006044820152606401610585565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820180611bba61041a565b14611c21576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4e4558545f5048415345000000000000000000000000000000000000000000006044820152606401610585565b60018160088110611c3457611c34613356565b60088104919091015460079091166004026101000a900463ffffffff90811614611cba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4558545f424c4f434b5f5345540000000000000000000000000000000000006044820152606401610585565b8160018260088110611cce57611cce613356565b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff1602179055507fba85f6676f17ca992195e3cb204ae48c68666b109edc14a794e5d894387d25d3338484604051611d539392919073ffffffffffffffffffffffffffffffffffffffff9390931683526020830191909152604082015260600190565b60405180910390a1505050565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261180f9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611867565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152603860209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461180f5781811015611e82576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610585565b61180f84848484036118ee565b73ffffffffffffffffffffffffffffffffffffffff8216611f32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610585565b73ffffffffffffffffffffffffffffffffffffffff821660009081526037602052604090205481811015611fe8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610585565b73ffffffffffffffffffffffffffffffffffffffff831660009081526037602052604081208383039055603980548492906120249084906133be565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b815160008167ffffffffffffffff81111561209957612099612f52565b6040519080825280602002602001820160405280156120c2578160200160208202803683370190505b5090506000821161212f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f454d5054595f41535345545300000000000000000000000000000000000000006044820152606401610585565b60003073ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561217c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121a0919061333d565b90506000805b848110156123935782868883815181106121c2576121c2613356565b60209081029190910101516040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015612238573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061225c919061333d565b6122669190613300565b61227091906133d5565b9150600082116122dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f5a45524f5f414d4f554e540000000000000000000000000000000000000000006044820152606401610585565b7f3f693fff038bb8a046aa76d9516190ac7444f7d69cf952c4cbdc086fdef2d6fc3388838151811061231057612310613356565b6020026020010151888560405161235b949392919073ffffffffffffffffffffffffffffffffffffffff94851681529290931660208301526040820152606081019190915260800190565b60405180910390a18184828151811061237657612376613356565b60209081029190910101528061238b81613385565b9150506121a6565b5061239e3386611e8f565b60005b8481101561241857612406338583815181106123bf576123bf613356565b60200260200101518984815181106123d9576123d9613356565b602002602001015173ffffffffffffffffffffffffffffffffffffffff166118159092919063ffffffff16565b8061241081613385565b9150506123a1565b50505050505050565b6001805463ffffffff161061243857612438613410565b604080516101008101825263ffffffff80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091526124896001826008612cc9565b5060408051338152600060208201819052918101919091527fba85f6676f17ca992195e3cb204ae48c68666b109edc14a794e5d894387d25d39060600161040f565b60008111612535576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f434f4f4c444f574e5f30000000000000000000000000000000000000000000006044820152606401610585565b6002541561254557612545613410565b600281905560408051338152602081018390527f6153539ba1c54ed4ef5b6f1fda4b7183eeaa1b5707c152abed56f61e09452521910161040f565b600054610100900460ff16612617576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610585565b610d888282612a0b565b73ffffffffffffffffffffffffffffffffffffffff821661269e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610585565b80603960008282546126b091906132e8565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600090815260376020526040812080548392906126ea9084906132e8565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b805173ffffffffffffffffffffffffffffffffffffffff163b6127c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f454f415f53454e444552000000000000000000000000000000000000000000006044820152606401610585565b602081015173ffffffffffffffffffffffffffffffffffffffff16612841576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f5a45524f5f544f4b454e000000000000000000000000000000000000000000006044820152606401610585565b609c5473ffffffffffffffffffffffffffffffffffffffff161561286757612867613410565b8051609b805473ffffffffffffffffffffffffffffffffffffffff9283167fffffffffffffffffffffffff00000000000000000000000000000000000000009182168117909255602080850151609c805491909516921682179093556040805133815293840192909252908201527fe67a5c2dcf68e8fac05314f53ecd2ff0b403ed683c4bfdad15eaec7a8a63f5559060600161040f565b6000612961826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16612ac99092919063ffffffff16565b8051909150156118e9578080602001905181019061297f919061343f565b6118e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610585565b600054610100900460ff16612aa2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610585565b8151612ab590603a906020850190612d65565b5080516118e990603b906020840190612d65565b6060612ad88484600085612ae0565b949350505050565b606082471015612b72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610585565b73ffffffffffffffffffffffffffffffffffffffff85163b612bf0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610585565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051612c199190613461565b60006040518083038185875af1925050503d8060008114612c56576040519150601f19603f3d011682016040523d82523d6000602084013e612c5b565b606091505b5091509150612c6b828286612c76565b979650505050505050565b60608315612c85575081610cbf565b825115612c955782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105859190612e59565b600183019183908215612d555791602002820160005b83821115612d2357835183826101000a81548163ffffffff021916908363ffffffff1602179055509260200192600401602081600301049283019260010302612cdf565b8015612d535782816101000a81549063ffffffff0219169055600401602081600301049283019260010302612d23565b505b50612d61929150612dd9565b5090565b828054612d7190613265565b90600052602060002090601f016020900481019282612d935760008555612d55565b82601f10612dac57805160ff1916838001178555612d55565b82800160010185558215612d55579182015b82811115612d55578251825591602001919060010190612dbe565b5b80821115612d615760008155600101612dda565b73ffffffffffffffffffffffffffffffffffffffff81168114610d1c57600080fd5b600060208284031215612e2257600080fd5b8135610cbf81612dee565b60005b83811015612e48578181015183820152602001612e30565b8381111561180f5750506000910152565b6020815260008251806020840152612e78816040850160208701612e2d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600060208284031215612ebc57600080fd5b5035919050565b60008060408385031215612ed657600080fd5b8235612ee181612dee565b946020939093013593505050565b60008060408385031215612f0257600080fd5b50508035926020909101359150565b600080600060608486031215612f2657600080fd5b8335612f3181612dee565b92506020840135612f4181612dee565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715612fa457612fa4612f52565b60405290565b6040516080810167ffffffffffffffff81118282101715612fa457612fa4612f52565b6000806101208385031215612fe157600080fd5b83601f840112612ff057600080fd5b60405161010080820182811067ffffffffffffffff8211171561301557613015612f52565b6040528401818682111561302857600080fd5b855b8281101561305557803563ffffffff811681146130475760008081fd5b82526020918201910161302a565b509196903595509350505050565b6000806040838503121561307657600080fd5b823561308181612dee565b9150602083013561309181612dee565b809150509250929050565b600082601f8301126130ad57600080fd5b813567ffffffffffffffff808211156130c8576130c8612f52565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561310e5761310e612f52565b8160405283815286602085880101111561312757600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561315957600080fd5b813567ffffffffffffffff8082111561317157600080fd5b9083019060a0828603121561318557600080fd5b61318d612f81565b823561319881612dee565b815260208301356131a881612dee565b8060208301525060408301356040820152606083013560608201526080830135828111156131d557600080fd5b9290920191608083870312156131ea57600080fd5b6131f2612faa565b83358381111561320157600080fd5b61320d8882870161309c565b82525060208401358381111561322257600080fd5b61322e8882870161309c565b6020830152506040840135925061324483612dee565b60408101929092526060928301359282019290925260808201529392505050565b600181811c9082168061327957607f821691505b602082108114156132b3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082198211156132fb576132fb6132b9565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613338576133386132b9565b500290565b60006020828403121561334f57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156133b7576133b76132b9565b5060010190565b6000828210156133d0576133d06132b9565b500390565b60008261340b577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b60006020828403121561345157600080fd5b81518015158114610cbf57600080fd5b60008251613473818460208701612e2d565b919091019291505056fea26469706673582212208becaf28eb8be00ce558400e2544e5a9b92e4781e776c63ce43af3f028bbb44764736f6c634300080a0033";

type SeedERC20FactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SeedERC20FactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SeedERC20Factory__factory extends ContractFactory {
  constructor(...args: SeedERC20FactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SeedERC20Factory> {
    return super.deploy(overrides || {}) as Promise<SeedERC20Factory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SeedERC20Factory {
    return super.attach(address) as SeedERC20Factory;
  }
  connect(signer: Signer): SeedERC20Factory__factory {
    return super.connect(signer) as SeedERC20Factory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SeedERC20FactoryInterface {
    return new utils.Interface(_abi) as SeedERC20FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SeedERC20Factory {
    return new Contract(address, _abi, signerOrProvider) as SeedERC20Factory;
  }
}
