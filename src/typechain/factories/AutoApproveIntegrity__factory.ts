/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AutoApproveIntegrity,
  AutoApproveIntegrityInterface,
} from "../AutoApproveIntegrity";

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
  "0x608060405234801561001057600080fd5b50612644806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e9108ddf14610030575b600080fd5b61004361003e366004611f05565b610062565b6040805193845260208401929092529082015260600160405180910390f35b60008060008060405180610120016040528088815260200189815260200187815260200160008152602001600081526020016000815260200160008152602001600081526020016100b1610134565b9052905060005b8551811015610105576100f28160008884815181106100d9576100d9612085565b60200260200101518561014b909392919063ffffffff16565b50806100fd816120e3565b9150506100b8565b5060c081015160e082015160a0830151608084015161012391610243565b935093509350509450945094915050565b6060610146610141610250565b6102b7565b905090565b83516020848102909101015180516000919081015b808210156101bb57600080600484019350835161ffff8116915061ffff8160101c169250506101b28982898c610100015186815181106101a2576101a2612085565b602002602001015163ffffffff16565b96505050610160565b60808701516101ca9086610243565b841115610238576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4d494e5f46494e414c5f535441434b000000000000000000000000000000000060448201526064015b60405180910390fd5b509295945050505050565b6020828203045b92915050565b60408051600180825281830190925260609160009190816020015b611dc581526020019060019003908161026b5790505090506104c98160008151811061029957610299612085565b67ffffffffffffffff90921660209283029190910190910152919050565b606060006040518061072001604052806102cf603890565b67ffffffffffffffff1667ffffffffffffffff1681526020016104e481526020016104f3815260200161054e815260200161058581526020016105a2815260200161062e815260200161065d815260200161076081526020016107f381526020016108038152602001610812815260200161082181526020016108308152602001610803815260200161083f815260200161084e815260200161085d815260200161086d815260200161087d815260200161087d815260200161087d815260200161087d815260200161088981526020016108a181526020016108b081526020016108bf81526020016108ce81526020016108dd81526020016108ec81526020016108fd815260200161091a81526020016108ec8152602001610929815260200161093881526020016109478152602001610956815260200161096681526020016109768152602001610986815260200161099681526020016109a681526020016109b681526020016109c681526020016109d681526020016109e681526020016109f68152602001610a068152602001610a158152602001610a248152602001610a338152602001610a428152602001610a518152602001610a618152602001610a718152602001610a808152602001610b02815250905060006104b382610b11565b90506104bf8185610b83565b805b949350505050565b6000611dc56104d9858483610bb9565b9150505b9392505050565b60006104c18483610bcf610bdb565b6080830151600090600780851691600386811c1691600587901c169061051a888786610be8565b608089015261052b8883888661014b565b50608088015161053d90899085610c0a565b608090980152509495945050505050565b60e0830151600090600884901c9060ff85169061056c908383610c1a565b60e087015261057b8685610d02565b9695505050505050565b60008260038111156105995761059961214a565b50909392505050565b60006105bc836105b28685610d10565b869190600061014b565b8214610624576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4c4f4f505f534849465400000000000000000000000000000000000000000000604482015260640161022f565b6104c18483610d10565b6000600f80841690600485901c16825b8281101561023857610653878387600061014b565b945060010161063e565b600060018084169084901c816106e957608086015161067c9085610243565b81106106e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4f4f425f535441434b5f52454144000000000000000000000000000000000000604482015260640161022f565b610756565b85604001518110610756576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4f4f425f434f4e5354414e545f52454144000000000000000000000000000000604482015260640161022f565b61057b8685610d02565b602083015151600090831080159061078357506020808501519081015190510183105b6107e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4f4f425f53544f524147455f5245414400000000000000000000000000000000604482015260640161022f565b6104c18483610d02565b60006104c18483610d3d86610d8c565b60006104c18483610da5610bdb565b60006104c18483610e3a610bb9565b60006104c18483610eab610f47565b60006104c18483610f58610bdb565b60006104c18483610fae610bdb565b60006104c1848361105d610f47565b60006104c184836110ba86611174565b60006104c184836111928661119f565b60006104c18483610d02565b60006104c16108988584610d10565b85906008610c0a565b60006104c184836111ac610bb9565b60006104c184836111b8610bdb565b60006104c184836111ce610bdb565b60006104c184836111e4610bb9565b60006104c184836111f0610bb9565b6000611dc56104d985848387610d8c565b60006104c1826111fc610911866001612179565b87929190611174565b60006104c1848361120c610bdb565b60006104c18483611216610bdb565b60006104c18483611220610bb9565b60006104c18483611229610bdb565b60006104c1848361123386610d8c565b60006104c1848361126e86610d8c565b60006104c1848361129f86610d8c565b60006104c184836112b586610d8c565b60006104c184836112c186610d8c565b60006104c184836112cd86610d8c565b60006104c184836112d986610d8c565b60006104c184836112ef86610d8c565b60006104c184836112fe86610d8c565b60006104c1848361130a86610d8c565b60006104c1848361131686610d8c565b60006104c18483611322610bb9565b60006104c1848361136f610bb9565b60006104c184836113fc610bb9565b60006104c1848361147e610bb9565b60006104c184836114cb610bb9565b60006104c184836115188661156f565b60006104c184836115828661161c565b60006104c1848361162f610bdb565b6000601f831680610aed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4241445f4f504552414e44000000000000000000000000000000000000000000604482015260640161022f565b6104d9610afb868584610be8565b8690610d02565b60006104c1848361168e610bdb565b80518190603814610b7e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4241445f44594e414d49435f4c454e4754480000000000000000000000000000604482015260640161022f565b919050565b604051825182516020808302860101831115610b9e57600080fd5b602081028301604052018352610bb482826116a6565b505050565b60006104c1610bc88585610d10565b8590610d02565b60006104dd83836116ba565b60006104c1610bc8858560025b60008115610c02576020820283039250610c028484611895565b509092915050565b6020810282016104dd8482611916565b6000828260108210610c88576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4f4f425f434f4c554d4e00000000000000000000000000000000000000000000604482015260640161022f565b60108110610cf2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4f4f425f524f5700000000000000000000000000000000000000000000000000604482015260640161022f565b60016010860285011b861761057b565b6020810161024a8382611916565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0810161024a8382611895565b600081604051602001610d50919061218c565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012092915050565b6000610d9c610afb868685610be8565b95945050505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152600091908416906370a08231906024015b602060405180830381865afa158015610e16573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104dd91906121c2565b60008173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e87573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024a91906121c2565b6040517f4ee2cd7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905260009190851690634ee2cd7e906044015b602060405180830381865afa158015610f23573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c191906121c2565b60006104c1610bc885856003610be8565b6040517f981b24d00000000000000000000000000000000000000000000000000000000081526004810182905260009073ffffffffffffffffffffffffffffffffffffffff84169063981b24d090602401610df9565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810182905260009073ffffffffffffffffffffffffffffffffffffffff841690636352211e90602401602060405180830381865afa15801561101c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104091906121db565b73ffffffffffffffffffffffffffffffffffffffff169392505050565b6040517efdd58e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152602482018390526000919085169062fdd58e90604401610f06565b6040517f4e1273f400000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff851690634e1273f490611111908690869060040161224c565b600060405180830381865afa15801561112e573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526104c191908101906122af565b6000610d9c61118a868660016002870201610be8565b869084610c0a565b8061119c57600080fd5b50565b6000610d9c858584610be8565b60006104dd828461192b565b60006104c1826111c8858761192b565b906119ab565b60006104c1826111de858761192b565b906119c0565b60006104dd82846119d5565b60006104dd8284611a24565b606060008411610c0257816104c1565b60008183146104dd565b60008183116104dd565b6000811561024a565b60008183106104dd565b600082820183811061124557806104c1565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff949350505050565b6000826000036112805750600061024a565b828202828482816112935761129361211b565b040361124557806104c1565b60008183116112af5760006104dd565b50900390565b60006104dd8284612179565b60006104dd8284612340565b60006104dd8284612474565b60008183116112e857816104dd565b5090919050565b60008183106112e857816104dd565b60006104dd8284612480565b60006104dd8284612494565b60006104dd82846124ab565b60008173ffffffffffffffffffffffffffffffffffffffff1663ec14b06e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e87573d6000803e3d6000fd5b60008173ffffffffffffffffffffffffffffffffffffffff1663cd3293de6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113e091906121db565b73ffffffffffffffffffffffffffffffffffffffff1692915050565b60008173ffffffffffffffffffffffffffffffffffffffff1663f9020e336040518163ffffffff1660e01b8152600401602060405180830381865afa158015611449573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061146d91906124be565b600381111561024a5761024a61214a565b60008173ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113bc573d6000803e3d6000fd5b60008173ffffffffffffffffffffffffffffffffffffffff166347e4bbb96040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e87573d6000803e3d6000fd5b6040517f88d6860400000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8516906388d6860490610f0690869086906004016124df565b6000610d9c610afb868660028601610be8565b6040517fcaa0eb3b00000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff86169063caa0eb3b906115db9087908790879060040161250e565b602060405180830381865afa1580156115f8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9c91906121c2565b6000610d9c610afb868660038601610be8565b60008060015b600881116116865760006116498683611a81565b905060006116578684611a81565b90506000611665838361129f565b9050611675856001860383611b31565b945050600190920191506116359050565b509392505050565b60006104c18385600f16600487901c600f1685611bba565b6000602083019050610bb481838551611c60565b60008060008473ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa15801561170a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172e919061255d565b509350509250506000821361179f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4d494e5f424153455f5052494345000000000000000000000000000000000000604482015260640161022f565b836117aa82426124ab565b10611811576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f5354414c455f5052494345000000000000000000000000000000000000000000604482015260640161022f565b610d9c8573ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561185f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061188391906125ad565b60ff1661188f84611c88565b9061192b565b816080015181101580156118ac57508160a0015181105b611912576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f535441434b5f554e444552464c4f570000000000000000000000000000000000604482015260640161022f565b5050565b8160a001518111156119125760a09190910152565b6000808260120361193f578391505061024a565b826012111561196b5750601282900361195981600a612474565b6119639085612494565b91505061024a565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee820161199a81600a612474565b6119639085612340565b5092915050565b60006104dd83670de0b6b3a764000084611cf8565b60006104dd8383670de0b6b3a7640000611cf8565b60008160000b6000036119e957508161024a565b60008260000b1315611a1157611a0082600a6125d0565b611a0a9084612494565b905061024a565b60ff60008390031661199a81600a612474565b60008060128303611a38578391505061024a565b8260121115611a525750601282900361199a81600a612474565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee820161195981600a612474565b6000816008811115611aef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f54494552000000000000000000000000000000000000000000000000604482015260640161022f565b82600003611b0057600091506119a4565b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016020021c63ffffffff1690565b6000826008811115611b9f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f54494552000000000000000000000000000000000000000000000000604482015260640161022f565b505063ffffffff602090920291821b199290921691901b1790565b6000826008811115611c28576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f54494552000000000000000000000000000000000000000000000000604482015260640161022f565b6000855b85811015611c545763ffffffff6020820290811b199890981685891b17979150600101611c2c565b50959695505050505050565b8060200283015b80841015611c82578351835260209384019390920191611c67565b50505050565b600080821215611cf4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f736974697665604482015260640161022f565b5090565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85870985870292508281108382030391505080600003611d5057838281611d4657611d4661211b565b04925050506104dd565b808411611d5c57600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b611dcd6125df565b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611e2157611e21611dcf565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611e6e57611e6e611dcf565b604052919050565b600067ffffffffffffffff821115611e9057611e90611dcf565b5060051b60200190565b600082601f830112611eab57600080fd5b81356020611ec0611ebb83611e76565b611e27565b82815260059290921b84018101918181019086841115611edf57600080fd5b8286015b84811015611efa5780358352918301918301611ee3565b509695505050505050565b60008060008084860360a0811215611f1c57600080fd5b6040811215611f2a57600080fd5b50611f33611dfe565b853581526020808701358183015290945060408601359067ffffffffffffffff80831115611f6057600080fd5b828801925088601f840112611f7457600080fd5b8235611f82611ebb82611e76565b81815260059190911b8401830190838101908b831115611fa157600080fd5b8486015b8381101561204b57803585811115611fbd5760008081fd5b8701603f81018e13611fcf5760008081fd5b8681013586811115611fe357611fe3611dcf565b612013887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611e27565b8181528f60408385010111156120295760008081fd5b81604084018a8301376000918101890191909152845250918501918501611fa5565b509750505060608801359450608088013592508083111561206b57600080fd5b505061207987828801611e9a565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612114576121146120b4565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8082018082111561024a5761024a6120b4565b815160009082906020808601845b838110156121b65781518552938201939082019060010161219a565b50929695505050505050565b6000602082840312156121d457600080fd5b5051919050565b6000602082840312156121ed57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff811681146104dd57600080fd5b600081518084526020808501945080840160005b8381101561224157815187529582019590820190600101612225565b509495945050505050565b604080825283519082018190526000906020906060840190828701845b8281101561229b57815173ffffffffffffffffffffffffffffffffffffffff1684529284019290840190600101612269565b5050508381038285015261057b8186612211565b600060208083850312156122c257600080fd5b825167ffffffffffffffff8111156122d957600080fd5b8301601f810185136122ea57600080fd5b80516122f8611ebb82611e76565b81815260059190911b8201830190838101908783111561231757600080fd5b928401925b828410156123355783518252928401929084019061231c565b979650505050505050565b60008261234f5761234f61211b565b500490565b600181815b808511156123ad57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115612393576123936120b4565b808516156123a057918102915b93841c9390800290612359565b509250929050565b6000826123c45750600161024a565b816123d15750600061024a565b81600181146123e757600281146123f15761240d565b600191505061024a565b60ff841115612402576124026120b4565b50506001821b61024a565b5060208310610133831016604e8410600b8410161715612430575081810a61024a565b61243a8383612354565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561246c5761246c6120b4565b029392505050565b60006104dd83836123b5565b60008261248f5761248f61211b565b500690565b808202811582820484141761024a5761024a6120b4565b8181038181111561024a5761024a6120b4565b6000602082840312156124d057600080fd5b8151600481106104dd57600080fd5b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006104c16040830184612211565b73ffffffffffffffffffffffffffffffffffffffff84168152826020820152606060408201526000610d9c6060830184612211565b805169ffffffffffffffffffff81168114610b7e57600080fd5b600080600080600060a0868803121561257557600080fd5b61257e86612543565b94506020860151935060408601519250606086015191506125a160808701612543565b90509295509295909350565b6000602082840312156125bf57600080fd5b815160ff811681146104dd57600080fd5b60006104dd60ff8416836123b5565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea26469706673582212207005af538b7322d45edfb5b8637b644ba95e7eea5673ff3bf21c394bfe1c6d2e64736f6c63430008110033";

type AutoApproveIntegrityConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AutoApproveIntegrityConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AutoApproveIntegrity__factory extends ContractFactory {
  constructor(...args: AutoApproveIntegrityConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AutoApproveIntegrity> {
    return super.deploy(overrides || {}) as Promise<AutoApproveIntegrity>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AutoApproveIntegrity {
    return super.attach(address) as AutoApproveIntegrity;
  }
  connect(signer: Signer): AutoApproveIntegrity__factory {
    return super.connect(signer) as AutoApproveIntegrity__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AutoApproveIntegrityInterface {
    return new utils.Interface(_abi) as AutoApproveIntegrityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AutoApproveIntegrity {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AutoApproveIntegrity;
  }
}
