const LoanNFT = {
  "contractName": "LoanNFT",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_couponRate",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "couponRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "loanId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "loans",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "principal",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "interestRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "term",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maturityDate",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isRepaid",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_principal",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_interestRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_term",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maturityDate",
          "type": "uint256"
        }
      ],
      "name": "issueLoan",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_loanId",
          "type": "uint256"
        }
      ],
      "name": "repayLoan",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_loanId",
          "type": "uint256"
        }
      ],
      "name": "buyNFT",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_loanId",
          "type": "uint256"
        }
      ],
      "name": "calculateCouponAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_loanId",
          "type": "uint256"
        }
      ],
      "name": "destroyNFT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_couponRate\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_loanId\",\"type\":\"uint256\"}],\"name\":\"buyNFT\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_loanId\",\"type\":\"uint256\"}],\"name\":\"calculateCouponAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"couponRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_loanId\",\"type\":\"uint256\"}],\"name\":\"destroyNFT\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_borrower\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_principal\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_interestRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_term\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maturityDate\",\"type\":\"uint256\"}],\"name\":\"issueLoan\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"loanId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"loans\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"principal\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"interestRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"term\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maturityDate\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"borrower\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"isRepaid\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_loanId\",\"type\":\"uint256\"}],\"name\":\"repayLoan\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/LoanNFT.sol\":\"LoanNFT\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x1e854874c68bec05be100dc0092cb5fbbc71253d370ae98ddef248bbfc3fe118\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ef0fb6e809779426dc2ac201149bbad4aecdc5810874f2843b050e8b5fef8d30\",\"dweb:/ipfs/QmPDRjaNxmcyxLUKvv8Fxk5eWcf7xvC5S9JpbtqvE7Cadu\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xab28a56179c1db258c9bf5235b382698cb650debecb51b23d12be9e241374b68\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://daae589a9d6fa7e55f99f86c0a16796ca490f243fb3693632c3711c0646c1d56\",\"dweb:/ipfs/QmR3zpd7wNw3rcUdekwiv6FYHJqksuTCXLVioTxu6Fbxk3\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708\",\"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xe279b5cfcd2e27d99998c1f13c501c6b2e7d3583dbf7ec1857f28c8f0199f6fa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d81e923a76c0c2b8e16ec1e941e1c176e3da1ceb5ba58b6fa177cb142ae45459\",\"dweb:/ipfs/QmViRcJPP7yTgbPUNzXaYkGxMR5JF8FtZDcBFvZdbEQyKb\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xa4d1d62251f8574deb032a35fc948386a9b4de74b812d4f545a1ac120486b48a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8c969013129ba9e651a20735ef659fef6d8a1139ea3607bd4b26ddea2d645634\",\"dweb:/ipfs/QmVhVa6LGuzAcB8qgDtVHRkucn4ihj5UZr8xBLcJkP6ucb\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xa1e8e83cd0087785df04ac79fb395d9f3684caeaf973d9e2c71caef723a3a5d6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://33bbf48cc069be677705037ba7520c22b1b622c23b33e1a71495f2d36549d40b\",\"dweb:/ipfs/Qmct36zWXv3j7LZB83uwbg7TXwnZSN1fqHNDZ93GG98bGz\"]},\"project:/contracts/LoanNFT.sol\":{\"keccak256\":\"0xf7fbccbd5d9a62032e5c20bbe4a08c8c6d14c6948a504174a3d76a5e5c8af81d\",\"license\":\"UNLICENSED\",\"urls\":[\"bzz-raw://3a2587447aaf7f3906db4145624bd453e8691fe4fc8cba75086654065a3e5942\",\"dweb:/ipfs/QmTeQb7GfAMzLr7UAUF44HUrrwPHsJ7xE32uKnNhUAmPpD\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162003639380380620036398339818101604052810190620000379190620001be565b828281600090805190602001906200005192919062000085565b5080600190805190602001906200006a92919062000085565b5050506000600781905550806008819055505050506200039b565b8280546200009390620002ed565b90600052602060002090601f016020900481019282620000b7576000855562000103565b82601f10620000d257805160ff191683800117855562000103565b8280016001018555821562000103579182015b8281111562000102578251825591602001919060010190620000e5565b5b50905062000112919062000116565b5090565b5b808211156200013157600081600090555060010162000117565b5090565b60006200014c62000146846200027a565b62000246565b9050828152602081018484840111156200016557600080fd5b62000172848285620002b7565b509392505050565b600082601f8301126200018c57600080fd5b81516200019e84826020860162000135565b91505092915050565b600081519050620001b88162000381565b92915050565b600080600060608486031215620001d457600080fd5b600084015167ffffffffffffffff811115620001ef57600080fd5b620001fd868287016200017a565b935050602084015167ffffffffffffffff8111156200021b57600080fd5b62000229868287016200017a565b92505060406200023c86828701620001a7565b9150509250925092565b6000604051905081810181811067ffffffffffffffff8211171562000270576200026f62000352565b5b8060405250919050565b600067ffffffffffffffff82111562000298576200029762000352565b5b601f19601f8301169050602081019050919050565b6000819050919050565b60005b83811015620002d7578082015181840152602081019050620002ba565b83811115620002e7576000848401525b50505050565b600060028204905060018216806200030657607f821691505b602082108114156200031d576200031c62000323565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200038c81620002ad565b81146200039857600080fd5b50565b61328e80620003ab6000396000f3fe60806040526004361061012a5760003560e01c806395d89b41116100ab578063c40412b51161006f578063c40412b5146103f3578063c87b56dd1461041c578063c95669a514610459578063e1ec3c6814610484578063e985e9c5146104c7578063ff1ea4b2146105045761012a565b806395d89b4114610322578063a22cb4651461034d578063ab7b1c8914610376578063b88d4fde1461039f578063c0bcb26f146103c85761012a565b806342842e0e116100f257806342842e0e1461022657806351ed82881461024f5780636352211e1461026b57806370a08231146102a85780637d3fb87d146102e55761012a565b806301ffc9a71461012f57806306fdde031461016c578063081812fc14610197578063095ea7b3146101d457806323b872dd146101fd575b600080fd5b34801561013b57600080fd5b5061015660048036038101906101519190612486565b61052d565b6040516101639190612bb2565b60405180910390f35b34801561017857600080fd5b5061018161060f565b60405161018e9190612bcd565b60405180910390f35b3480156101a357600080fd5b506101be60048036038101906101b991906124d8565b6106a1565b6040516101cb9190612b4b565b60405180910390f35b3480156101e057600080fd5b506101fb60048036038101906101f691906123d3565b6106e7565b005b34801561020957600080fd5b50610224600480360381019061021f91906122cd565b6107ff565b005b34801561023257600080fd5b5061024d600480360381019061024891906122cd565b61085f565b005b610269600480360381019061026491906124d8565b61087f565b005b34801561027757600080fd5b50610292600480360381019061028d91906124d8565b6109a4565b60405161029f9190612b4b565b60405180910390f35b3480156102b457600080fd5b506102cf60048036038101906102ca9190612268565b610a2b565b6040516102dc9190612def565b60405180910390f35b3480156102f157600080fd5b5061030c600480360381019061030791906124d8565b610ae3565b6040516103199190612def565b60405180910390f35b34801561032e57600080fd5b50610337610c88565b6040516103449190612bcd565b60405180910390f35b34801561035957600080fd5b50610374600480360381019061036f9190612397565b610d1a565b005b34801561038257600080fd5b5061039d600480360381019061039891906124d8565b610d30565b005b3480156103ab57600080fd5b506103c660048036038101906103c1919061231c565b610e06565b005b3480156103d457600080fd5b506103dd610e68565b6040516103ea9190612def565b60405180910390f35b3480156103ff57600080fd5b5061041a600480360381019061041591906124d8565b610e6e565b005b34801561042857600080fd5b50610443600480360381019061043e91906124d8565b610ef0565b6040516104509190612bcd565b60405180910390f35b34801561046557600080fd5b5061046e610f58565b60405161047b9190612def565b60405180910390f35b34801561049057600080fd5b506104ab60048036038101906104a691906124d8565b610f5e565b6040516104be9796959493929190612e0a565b60405180910390f35b3480156104d357600080fd5b506104ee60048036038101906104e99190612291565b610fcd565b6040516104fb9190612bb2565b60405180910390f35b34801561051057600080fd5b5061052b6004803603810190610526919061240f565b611061565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105f857507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061060857506106078261118b565b5b9050919050565b60606000805461061e906130b4565b80601f016020809104026020016040519081016040528092919081815260200182805461064a906130b4565b80156106975780601f1061066c57610100808354040283529160200191610697565b820191906000526020600020905b81548152906001019060200180831161067a57829003601f168201915b5050505050905090565b60006106ac826111f5565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106f2826109a4565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610763576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075a90612daf565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610782611240565b73ffffffffffffffffffffffffffffffffffffffff1614806107b157506107b0816107ab611240565b610fcd565b5b6107f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e790612dcf565b60405180910390fd5b6107fa8383611248565b505050565b61081061080a611240565b82611301565b61084f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084690612bef565b60405180910390fd5b61085a838383611396565b505050565b61087a83838360405180602001604052806000815250610e06565b505050565b3373ffffffffffffffffffffffffffffffffffffffff1661089f826109a4565b73ffffffffffffffffffffffffffffffffffffffff1614156108f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ed90612d4f565b60405180910390fd5b6108ff81610ae3565b341015610941576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093890612c8f565b60405180910390fd5b600061094c826109a4565b9050610959813384611396565b8073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561099f573d6000803e3d6000fd5b505050565b6000806109b083611690565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1990612d8f565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9390612cef565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16610b05836109a4565b73ffffffffffffffffffffffffffffffffffffffff161415610b5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5390612c2f565b60405180910390fd5b6000600660008481526020019081526020016000206040518060e001604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160149054906101000a900460ff1615151515815250509050600081606001516064610c349190612fa4565b60085483604001518460200151610c4b9190612fa4565b610c559190612fa4565b610c5f9190612f73565b90508160c0015115610c7e57816020015181610c7b9190612f1d565b90505b8092505050919050565b606060018054610c97906130b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610cc3906130b4565b8015610d105780601f10610ce557610100808354040283529160200191610d10565b820191906000526020600020905b815481529060010190602001808311610cf357829003601f168201915b5050505050905090565b610d2c610d25611240565b83836116cd565b5050565b6006600082815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610dd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcb90612d6f565b60405180910390fd5b60016006600083815260200190815260200160002060050160146101000a81548160ff02191690831515021790555050565b610e17610e11611240565b83611301565b610e56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4d90612bef565b60405180910390fd5b610e628484848461183a565b50505050565b60085481565b3373ffffffffffffffffffffffffffffffffffffffff16610e8e826109a4565b73ffffffffffffffffffffffffffffffffffffffff1614610ee4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610edb90612d0f565b60405180910390fd5b610eed81611896565b50565b6060610efb826111f5565b6000610f056119e4565b90506000815111610f255760405180602001604052806000815250610f50565b80610f2f846119fb565b604051602001610f40929190612b27565b6040516020818303038152906040525b915050919050565b60075481565b60066020528060005260406000206000915090508060000154908060010154908060020154908060030154908060040154908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160149054906101000a900460ff16905087565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60076000815480929190611074906130e6565b91905055506040518060e0016040528060075481526020018581526020018481526020018381526020018281526020018673ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250600660006007548152602001908152602001600020600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160050160146101000a81548160ff02191690831515021790555090505061118433600754611b1f565b5050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6111fe81611d3d565b61123d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123490612d8f565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166112bb836109a4565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061130d836109a4565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061134f575061134e8185610fcd565b5b8061138d57508373ffffffffffffffffffffffffffffffffffffffff16611375846106a1565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166113b6826109a4565b73ffffffffffffffffffffffffffffffffffffffff161461140c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140390612c4f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561147c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147390612caf565b60405180910390fd5b6114898383836001611d7e565b8273ffffffffffffffffffffffffffffffffffffffff166114a9826109a4565b73ffffffffffffffffffffffffffffffffffffffff16146114ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f690612c4f565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461168b8383836001611d84565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561173c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161173390612ccf565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161182d9190612bb2565b60405180910390a3505050565b611845848484611396565b61185184848484611d8a565b611890576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188790612c0f565b60405180910390fd5b50505050565b60006118a1826109a4565b90506118b1816000846001611d7e565b6118ba826109a4565b90506004600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46119e0816000846001611d84565b5050565b606060405180602001604052806000815250905090565b606060006001611a0a84611f21565b01905060008167ffffffffffffffff811115611a4f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611a815781602001600182028036833780820191505090505b509050600082602001820190505b600115611b14578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611afe577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0494506000851415611b0f57611b14565b611a8f565b819350505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8690612d2f565b60405180910390fd5b611b9881611d3d565b15611bd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bcf90612c6f565b60405180910390fd5b611be6600083836001611d7e565b611bef81611d3d565b15611c2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c2690612c6f565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611d39600083836001611d84565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff16611d5f83611690565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b6000611dab8473ffffffffffffffffffffffffffffffffffffffff16612158565b15611f14578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611dd4611240565b8786866040518563ffffffff1660e01b8152600401611df69493929190612b66565b602060405180830381600087803b158015611e1057600080fd5b505af1925050508015611e4157506040513d601f19601f82011682018060405250810190611e3e91906124af565b60015b611ec4573d8060008114611e71576040519150601f19603f3d011682016040523d82523d6000602084013e611e76565b606091505b50600081511415611ebc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eb390612c0f565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611f19565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611fa5577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611f9b577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612008576d04ee2d6d415b85acef81000000008381611ffe577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506020810190505b662386f26fc10000831061205d57662386f26fc100008381612053577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506010810190505b6305f5e10083106120ac576305f5e10083816120a2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506008810190505b61271083106120f75761271083816120ed577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506004810190505b606483106121405760648381612136577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506002810190505b600a831061214f576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff16803b806020016040519081016040528181526000908060200190933c51119050919050565b60006121aa6121a584612eaa565b612e79565b9050828152602081018484840111156121c257600080fd5b6121cd848285613072565b509392505050565b6000813590506121e4816131fc565b92915050565b6000813590506121f981613213565b92915050565b60008135905061220e8161322a565b92915050565b6000815190506122238161322a565b92915050565b600082601f83011261223a57600080fd5b813561224a848260208601612197565b91505092915050565b60008135905061226281613241565b92915050565b60006020828403121561227a57600080fd5b6000612288848285016121d5565b91505092915050565b600080604083850312156122a457600080fd5b60006122b2858286016121d5565b92505060206122c3858286016121d5565b9150509250929050565b6000806000606084860312156122e257600080fd5b60006122f0868287016121d5565b9350506020612301868287016121d5565b925050604061231286828701612253565b9150509250925092565b6000806000806080858703121561233257600080fd5b6000612340878288016121d5565b9450506020612351878288016121d5565b935050604061236287828801612253565b925050606085013567ffffffffffffffff81111561237f57600080fd5b61238b87828801612229565b91505092959194509250565b600080604083850312156123aa57600080fd5b60006123b8858286016121d5565b92505060206123c9858286016121ea565b9150509250929050565b600080604083850312156123e657600080fd5b60006123f4858286016121d5565b925050602061240585828601612253565b9150509250929050565b600080600080600060a0868803121561242757600080fd5b6000612435888289016121d5565b955050602061244688828901612253565b945050604061245788828901612253565b935050606061246888828901612253565b925050608061247988828901612253565b9150509295509295909350565b60006020828403121561249857600080fd5b60006124a6848285016121ff565b91505092915050565b6000602082840312156124c157600080fd5b60006124cf84828501612214565b91505092915050565b6000602082840312156124ea57600080fd5b60006124f884828501612253565b91505092915050565b61250a81612ffe565b82525050565b61251981613010565b82525050565b600061252a82612eda565b6125348185612ef0565b9350612544818560208601613081565b61254d816131eb565b840191505092915050565b600061256382612ee5565b61256d8185612f01565b935061257d818560208601613081565b612586816131eb565b840191505092915050565b600061259c82612ee5565b6125a68185612f12565b93506125b6818560208601613081565b80840191505092915050565b60006125cf602d83612f01565b91507f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008301527f72206f7220617070726f766564000000000000000000000000000000000000006020830152604082019050919050565b6000612635603283612f01565b91507f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008301527f63656976657220696d706c656d656e74657200000000000000000000000000006020830152604082019050919050565b600061269b601083612f01565b91507f496e76616c6964206c6f616e204e4654000000000000000000000000000000006000830152602082019050919050565b60006126db602583612f01565b91507f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008301527f6f776e65720000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612741601c83612f01565b91507f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006000830152602082019050919050565b6000612781602683612f01565b91507f496e73756666696369656e742066756e647320746f2062757920746865206c6f60008301527f616e204e465400000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006127e7602483612f01565b91507f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061284d601983612f01565b91507f4552433732313a20617070726f766520746f2063616c6c6572000000000000006000830152602082019050919050565b600061288d602983612f01565b91507f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008301527f6c6964206f776e657200000000000000000000000000000000000000000000006020830152604082019050919050565b60006128f3602383612f01565b91507f4f6e6c79206f776e65722063616e2064657374726f7920746865206c6f616e2060008301527f4e465400000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612959602083612f01565b91507f4552433732313a206d696e7420746f20746865207a65726f20616464726573736000830152602082019050919050565b6000612999601c83612f01565b91507f43616e6e6f742062757920796f7572206f776e206c6f616e204e4654000000006000830152602082019050919050565b60006129d9602083612f01565b91507f4f6e6c7920626f72726f7765722063616e20726570617920746865206c6f616e6000830152602082019050919050565b6000612a19601883612f01565b91507f4552433732313a20696e76616c696420746f6b656e20494400000000000000006000830152602082019050919050565b6000612a59602183612f01565b91507f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612abf603d83612f01565b91507f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008301527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006020830152604082019050919050565b612b2181613068565b82525050565b6000612b338285612591565b9150612b3f8284612591565b91508190509392505050565b6000602082019050612b606000830184612501565b92915050565b6000608082019050612b7b6000830187612501565b612b886020830186612501565b612b956040830185612b18565b8181036060830152612ba7818461251f565b905095945050505050565b6000602082019050612bc76000830184612510565b92915050565b60006020820190508181036000830152612be78184612558565b905092915050565b60006020820190508181036000830152612c08816125c2565b9050919050565b60006020820190508181036000830152612c2881612628565b9050919050565b60006020820190508181036000830152612c488161268e565b9050919050565b60006020820190508181036000830152612c68816126ce565b9050919050565b60006020820190508181036000830152612c8881612734565b9050919050565b60006020820190508181036000830152612ca881612774565b9050919050565b60006020820190508181036000830152612cc8816127da565b9050919050565b60006020820190508181036000830152612ce881612840565b9050919050565b60006020820190508181036000830152612d0881612880565b9050919050565b60006020820190508181036000830152612d28816128e6565b9050919050565b60006020820190508181036000830152612d488161294c565b9050919050565b60006020820190508181036000830152612d688161298c565b9050919050565b60006020820190508181036000830152612d88816129cc565b9050919050565b60006020820190508181036000830152612da881612a0c565b9050919050565b60006020820190508181036000830152612dc881612a4c565b9050919050565b60006020820190508181036000830152612de881612ab2565b9050919050565b6000602082019050612e046000830184612b18565b92915050565b600060e082019050612e1f600083018a612b18565b612e2c6020830189612b18565b612e396040830188612b18565b612e466060830187612b18565b612e536080830186612b18565b612e6060a0830185612501565b612e6d60c0830184612510565b98975050505050505050565b6000604051905081810181811067ffffffffffffffff82111715612ea057612e9f6131bc565b5b8060405250919050565b600067ffffffffffffffff821115612ec557612ec46131bc565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612f2882613068565b9150612f3383613068565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612f6857612f6761312f565b5b828201905092915050565b6000612f7e82613068565b9150612f8983613068565b925082612f9957612f9861315e565b5b828204905092915050565b6000612faf82613068565b9150612fba83613068565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612ff357612ff261312f565b5b828202905092915050565b600061300982613048565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561309f578082015181840152602081019050613084565b838111156130ae576000848401525b50505050565b600060028204905060018216806130cc57607f821691505b602082108114156130e0576130df61318d565b5b50919050565b60006130f182613068565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156131245761312361312f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61320581612ffe565b811461321057600080fd5b50565b61321c81613010565b811461322757600080fd5b50565b6132338161301c565b811461323e57600080fd5b50565b61324a81613068565b811461325557600080fd5b5056fea2646970667358221220d02af1da387147719036f8e9801de1bc85c957e71c22ed415b3327f10551765a64736f6c63430008000033",
  "deployedBytecode": "0x60806040526004361061012a5760003560e01c806395d89b41116100ab578063c40412b51161006f578063c40412b5146103f3578063c87b56dd1461041c578063c95669a514610459578063e1ec3c6814610484578063e985e9c5146104c7578063ff1ea4b2146105045761012a565b806395d89b4114610322578063a22cb4651461034d578063ab7b1c8914610376578063b88d4fde1461039f578063c0bcb26f146103c85761012a565b806342842e0e116100f257806342842e0e1461022657806351ed82881461024f5780636352211e1461026b57806370a08231146102a85780637d3fb87d146102e55761012a565b806301ffc9a71461012f57806306fdde031461016c578063081812fc14610197578063095ea7b3146101d457806323b872dd146101fd575b600080fd5b34801561013b57600080fd5b5061015660048036038101906101519190612486565b61052d565b6040516101639190612bb2565b60405180910390f35b34801561017857600080fd5b5061018161060f565b60405161018e9190612bcd565b60405180910390f35b3480156101a357600080fd5b506101be60048036038101906101b991906124d8565b6106a1565b6040516101cb9190612b4b565b60405180910390f35b3480156101e057600080fd5b506101fb60048036038101906101f691906123d3565b6106e7565b005b34801561020957600080fd5b50610224600480360381019061021f91906122cd565b6107ff565b005b34801561023257600080fd5b5061024d600480360381019061024891906122cd565b61085f565b005b610269600480360381019061026491906124d8565b61087f565b005b34801561027757600080fd5b50610292600480360381019061028d91906124d8565b6109a4565b60405161029f9190612b4b565b60405180910390f35b3480156102b457600080fd5b506102cf60048036038101906102ca9190612268565b610a2b565b6040516102dc9190612def565b60405180910390f35b3480156102f157600080fd5b5061030c600480360381019061030791906124d8565b610ae3565b6040516103199190612def565b60405180910390f35b34801561032e57600080fd5b50610337610c88565b6040516103449190612bcd565b60405180910390f35b34801561035957600080fd5b50610374600480360381019061036f9190612397565b610d1a565b005b34801561038257600080fd5b5061039d600480360381019061039891906124d8565b610d30565b005b3480156103ab57600080fd5b506103c660048036038101906103c1919061231c565b610e06565b005b3480156103d457600080fd5b506103dd610e68565b6040516103ea9190612def565b60405180910390f35b3480156103ff57600080fd5b5061041a600480360381019061041591906124d8565b610e6e565b005b34801561042857600080fd5b50610443600480360381019061043e91906124d8565b610ef0565b6040516104509190612bcd565b60405180910390f35b34801561046557600080fd5b5061046e610f58565b60405161047b9190612def565b60405180910390f35b34801561049057600080fd5b506104ab60048036038101906104a691906124d8565b610f5e565b6040516104be9796959493929190612e0a565b60405180910390f35b3480156104d357600080fd5b506104ee60048036038101906104e99190612291565b610fcd565b6040516104fb9190612bb2565b60405180910390f35b34801561051057600080fd5b5061052b6004803603810190610526919061240f565b611061565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105f857507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061060857506106078261118b565b5b9050919050565b60606000805461061e906130b4565b80601f016020809104026020016040519081016040528092919081815260200182805461064a906130b4565b80156106975780601f1061066c57610100808354040283529160200191610697565b820191906000526020600020905b81548152906001019060200180831161067a57829003601f168201915b5050505050905090565b60006106ac826111f5565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106f2826109a4565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610763576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075a90612daf565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610782611240565b73ffffffffffffffffffffffffffffffffffffffff1614806107b157506107b0816107ab611240565b610fcd565b5b6107f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e790612dcf565b60405180910390fd5b6107fa8383611248565b505050565b61081061080a611240565b82611301565b61084f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084690612bef565b60405180910390fd5b61085a838383611396565b505050565b61087a83838360405180602001604052806000815250610e06565b505050565b3373ffffffffffffffffffffffffffffffffffffffff1661089f826109a4565b73ffffffffffffffffffffffffffffffffffffffff1614156108f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ed90612d4f565b60405180910390fd5b6108ff81610ae3565b341015610941576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093890612c8f565b60405180910390fd5b600061094c826109a4565b9050610959813384611396565b8073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561099f573d6000803e3d6000fd5b505050565b6000806109b083611690565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1990612d8f565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9390612cef565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16610b05836109a4565b73ffffffffffffffffffffffffffffffffffffffff161415610b5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5390612c2f565b60405180910390fd5b6000600660008481526020019081526020016000206040518060e001604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160149054906101000a900460ff1615151515815250509050600081606001516064610c349190612fa4565b60085483604001518460200151610c4b9190612fa4565b610c559190612fa4565b610c5f9190612f73565b90508160c0015115610c7e57816020015181610c7b9190612f1d565b90505b8092505050919050565b606060018054610c97906130b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610cc3906130b4565b8015610d105780601f10610ce557610100808354040283529160200191610d10565b820191906000526020600020905b815481529060010190602001808311610cf357829003601f168201915b5050505050905090565b610d2c610d25611240565b83836116cd565b5050565b6006600082815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610dd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcb90612d6f565b60405180910390fd5b60016006600083815260200190815260200160002060050160146101000a81548160ff02191690831515021790555050565b610e17610e11611240565b83611301565b610e56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4d90612bef565b60405180910390fd5b610e628484848461183a565b50505050565b60085481565b3373ffffffffffffffffffffffffffffffffffffffff16610e8e826109a4565b73ffffffffffffffffffffffffffffffffffffffff1614610ee4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610edb90612d0f565b60405180910390fd5b610eed81611896565b50565b6060610efb826111f5565b6000610f056119e4565b90506000815111610f255760405180602001604052806000815250610f50565b80610f2f846119fb565b604051602001610f40929190612b27565b6040516020818303038152906040525b915050919050565b60075481565b60066020528060005260406000206000915090508060000154908060010154908060020154908060030154908060040154908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160149054906101000a900460ff16905087565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60076000815480929190611074906130e6565b91905055506040518060e0016040528060075481526020018581526020018481526020018381526020018281526020018673ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250600660006007548152602001908152602001600020600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160050160146101000a81548160ff02191690831515021790555090505061118433600754611b1f565b5050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6111fe81611d3d565b61123d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123490612d8f565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166112bb836109a4565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061130d836109a4565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061134f575061134e8185610fcd565b5b8061138d57508373ffffffffffffffffffffffffffffffffffffffff16611375846106a1565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166113b6826109a4565b73ffffffffffffffffffffffffffffffffffffffff161461140c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140390612c4f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561147c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147390612caf565b60405180910390fd5b6114898383836001611d7e565b8273ffffffffffffffffffffffffffffffffffffffff166114a9826109a4565b73ffffffffffffffffffffffffffffffffffffffff16146114ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f690612c4f565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461168b8383836001611d84565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561173c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161173390612ccf565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161182d9190612bb2565b60405180910390a3505050565b611845848484611396565b61185184848484611d8a565b611890576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188790612c0f565b60405180910390fd5b50505050565b60006118a1826109a4565b90506118b1816000846001611d7e565b6118ba826109a4565b90506004600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46119e0816000846001611d84565b5050565b606060405180602001604052806000815250905090565b606060006001611a0a84611f21565b01905060008167ffffffffffffffff811115611a4f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611a815781602001600182028036833780820191505090505b509050600082602001820190505b600115611b14578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611afe577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0494506000851415611b0f57611b14565b611a8f565b819350505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8690612d2f565b60405180910390fd5b611b9881611d3d565b15611bd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bcf90612c6f565b60405180910390fd5b611be6600083836001611d7e565b611bef81611d3d565b15611c2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c2690612c6f565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611d39600083836001611d84565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff16611d5f83611690565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b6000611dab8473ffffffffffffffffffffffffffffffffffffffff16612158565b15611f14578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611dd4611240565b8786866040518563ffffffff1660e01b8152600401611df69493929190612b66565b602060405180830381600087803b158015611e1057600080fd5b505af1925050508015611e4157506040513d601f19601f82011682018060405250810190611e3e91906124af565b60015b611ec4573d8060008114611e71576040519150601f19603f3d011682016040523d82523d6000602084013e611e76565b606091505b50600081511415611ebc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eb390612c0f565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611f19565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611fa5577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611f9b577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612008576d04ee2d6d415b85acef81000000008381611ffe577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506020810190505b662386f26fc10000831061205d57662386f26fc100008381612053577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506010810190505b6305f5e10083106120ac576305f5e10083816120a2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506008810190505b61271083106120f75761271083816120ed577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506004810190505b606483106121405760648381612136577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506002810190505b600a831061214f576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff16803b806020016040519081016040528181526000908060200190933c51119050919050565b60006121aa6121a584612eaa565b612e79565b9050828152602081018484840111156121c257600080fd5b6121cd848285613072565b509392505050565b6000813590506121e4816131fc565b92915050565b6000813590506121f981613213565b92915050565b60008135905061220e8161322a565b92915050565b6000815190506122238161322a565b92915050565b600082601f83011261223a57600080fd5b813561224a848260208601612197565b91505092915050565b60008135905061226281613241565b92915050565b60006020828403121561227a57600080fd5b6000612288848285016121d5565b91505092915050565b600080604083850312156122a457600080fd5b60006122b2858286016121d5565b92505060206122c3858286016121d5565b9150509250929050565b6000806000606084860312156122e257600080fd5b60006122f0868287016121d5565b9350506020612301868287016121d5565b925050604061231286828701612253565b9150509250925092565b6000806000806080858703121561233257600080fd5b6000612340878288016121d5565b9450506020612351878288016121d5565b935050604061236287828801612253565b925050606085013567ffffffffffffffff81111561237f57600080fd5b61238b87828801612229565b91505092959194509250565b600080604083850312156123aa57600080fd5b60006123b8858286016121d5565b92505060206123c9858286016121ea565b9150509250929050565b600080604083850312156123e657600080fd5b60006123f4858286016121d5565b925050602061240585828601612253565b9150509250929050565b600080600080600060a0868803121561242757600080fd5b6000612435888289016121d5565b955050602061244688828901612253565b945050604061245788828901612253565b935050606061246888828901612253565b925050608061247988828901612253565b9150509295509295909350565b60006020828403121561249857600080fd5b60006124a6848285016121ff565b91505092915050565b6000602082840312156124c157600080fd5b60006124cf84828501612214565b91505092915050565b6000602082840312156124ea57600080fd5b60006124f884828501612253565b91505092915050565b61250a81612ffe565b82525050565b61251981613010565b82525050565b600061252a82612eda565b6125348185612ef0565b9350612544818560208601613081565b61254d816131eb565b840191505092915050565b600061256382612ee5565b61256d8185612f01565b935061257d818560208601613081565b612586816131eb565b840191505092915050565b600061259c82612ee5565b6125a68185612f12565b93506125b6818560208601613081565b80840191505092915050565b60006125cf602d83612f01565b91507f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008301527f72206f7220617070726f766564000000000000000000000000000000000000006020830152604082019050919050565b6000612635603283612f01565b91507f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008301527f63656976657220696d706c656d656e74657200000000000000000000000000006020830152604082019050919050565b600061269b601083612f01565b91507f496e76616c6964206c6f616e204e4654000000000000000000000000000000006000830152602082019050919050565b60006126db602583612f01565b91507f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008301527f6f776e65720000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612741601c83612f01565b91507f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006000830152602082019050919050565b6000612781602683612f01565b91507f496e73756666696369656e742066756e647320746f2062757920746865206c6f60008301527f616e204e465400000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006127e7602483612f01565b91507f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061284d601983612f01565b91507f4552433732313a20617070726f766520746f2063616c6c6572000000000000006000830152602082019050919050565b600061288d602983612f01565b91507f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008301527f6c6964206f776e657200000000000000000000000000000000000000000000006020830152604082019050919050565b60006128f3602383612f01565b91507f4f6e6c79206f776e65722063616e2064657374726f7920746865206c6f616e2060008301527f4e465400000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612959602083612f01565b91507f4552433732313a206d696e7420746f20746865207a65726f20616464726573736000830152602082019050919050565b6000612999601c83612f01565b91507f43616e6e6f742062757920796f7572206f776e206c6f616e204e4654000000006000830152602082019050919050565b60006129d9602083612f01565b91507f4f6e6c7920626f72726f7765722063616e20726570617920746865206c6f616e6000830152602082019050919050565b6000612a19601883612f01565b91507f4552433732313a20696e76616c696420746f6b656e20494400000000000000006000830152602082019050919050565b6000612a59602183612f01565b91507f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612abf603d83612f01565b91507f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008301527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006020830152604082019050919050565b612b2181613068565b82525050565b6000612b338285612591565b9150612b3f8284612591565b91508190509392505050565b6000602082019050612b606000830184612501565b92915050565b6000608082019050612b7b6000830187612501565b612b886020830186612501565b612b956040830185612b18565b8181036060830152612ba7818461251f565b905095945050505050565b6000602082019050612bc76000830184612510565b92915050565b60006020820190508181036000830152612be78184612558565b905092915050565b60006020820190508181036000830152612c08816125c2565b9050919050565b60006020820190508181036000830152612c2881612628565b9050919050565b60006020820190508181036000830152612c488161268e565b9050919050565b60006020820190508181036000830152612c68816126ce565b9050919050565b60006020820190508181036000830152612c8881612734565b9050919050565b60006020820190508181036000830152612ca881612774565b9050919050565b60006020820190508181036000830152612cc8816127da565b9050919050565b60006020820190508181036000830152612ce881612840565b9050919050565b60006020820190508181036000830152612d0881612880565b9050919050565b60006020820190508181036000830152612d28816128e6565b9050919050565b60006020820190508181036000830152612d488161294c565b9050919050565b60006020820190508181036000830152612d688161298c565b9050919050565b60006020820190508181036000830152612d88816129cc565b9050919050565b60006020820190508181036000830152612da881612a0c565b9050919050565b60006020820190508181036000830152612dc881612a4c565b9050919050565b60006020820190508181036000830152612de881612ab2565b9050919050565b6000602082019050612e046000830184612b18565b92915050565b600060e082019050612e1f600083018a612b18565b612e2c6020830189612b18565b612e396040830188612b18565b612e466060830187612b18565b612e536080830186612b18565b612e6060a0830185612501565b612e6d60c0830184612510565b98975050505050505050565b6000604051905081810181811067ffffffffffffffff82111715612ea057612e9f6131bc565b5b8060405250919050565b600067ffffffffffffffff821115612ec557612ec46131bc565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612f2882613068565b9150612f3383613068565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612f6857612f6761312f565b5b828201905092915050565b6000612f7e82613068565b9150612f8983613068565b925082612f9957612f9861315e565b5b828204905092915050565b6000612faf82613068565b9150612fba83613068565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612ff357612ff261312f565b5b828202905092915050565b600061300982613048565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561309f578082015181840152602081019050613084565b838111156130ae576000848401525b50505050565b600060028204905060018216806130cc57607f821691505b602082108114156130e0576130df61318d565b5b50919050565b60006130f182613068565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156131245761312361312f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61320581612ffe565b811461321057600080fd5b50565b61321c81613010565b811461322757600080fd5b50565b6132338161301c565b811461323e57600080fd5b50565b61324a81613068565b811461325557600080fd5b5056fea2646970667358221220d02af1da387147719036f8e9801de1bc85c957e71c22ed415b3327f10551765a64736f6c63430008000033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:3483:11",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "102:258:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "112:74:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "178:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "array_allocation_size_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "136:41:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "136:49:11"
                      }
                    ],
                    "functionName": {
                      "name": "allocateMemory",
                      "nodeType": "YulIdentifier",
                      "src": "121:14:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "121:65:11"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "112:5:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "202:5:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "209:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "195:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "195:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "195:21:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "225:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "240:5:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "247:4:11",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "236:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "236:16:11"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "229:3:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "290:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "299:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "302:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "292:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "292:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "292:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "271:3:11"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "276:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "267:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "267:16:11"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "285:3:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "264:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "264:25:11"
                  },
                  "nodeType": "YulIf",
                  "src": "261:2:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "337:3:11"
                      },
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "342:3:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "347:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "315:21:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "315:39:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "315:39:11"
                }
              ]
            },
            "name": "abi_decode_available_length_t_string_memory_ptr_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "75:3:11",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "80:6:11",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "88:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "96:5:11",
                "type": ""
              }
            ],
            "src": "7:353:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "453:215:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "502:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "511:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "514:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "504:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "504:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "504:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "481:6:11"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "489:4:11",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "477:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "477:17:11"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "496:3:11"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "473:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "473:27:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "466:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "466:35:11"
                  },
                  "nodeType": "YulIf",
                  "src": "463:2:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "527:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "547:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "541:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "541:13:11"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "531:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "563:99:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "635:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "643:4:11",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "631:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "631:17:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "650:6:11"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "658:3:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_available_length_t_string_memory_ptr_fromMemory",
                      "nodeType": "YulIdentifier",
                      "src": "572:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "572:90:11"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "563:5:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_t_string_memory_ptr_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "431:6:11",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "439:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "447:5:11",
                "type": ""
              }
            ],
            "src": "380:288:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "737:80:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "747:22:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "762:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "756:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "756:13:11"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "747:5:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "805:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "778:26:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "778:33:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "778:33:11"
                }
              ]
            },
            "name": "abi_decode_t_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "715:6:11",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "723:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "731:5:11",
                "type": ""
              }
            ],
            "src": "674:143:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "954:677:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1000:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1009:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1012:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1002:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1002:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1002:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "975:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "984:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "971:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "971:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "996:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "967:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "967:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "964:2:11"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1026:224:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1041:38:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1065:9:11"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1076:1:11",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1061:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1061:17:11"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "1055:5:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1055:24:11"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1045:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1126:16:11",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1135:1:11",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1138:1:11",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1128:6:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1128:12:11"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1128:12:11"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "1098:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1106:18:11",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "1095:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1095:30:11"
                      },
                      "nodeType": "YulIf",
                      "src": "1092:2:11"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1156:84:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1212:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1223:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1208:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1208:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1232:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "1166:41:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1166:74:11"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1156:6:11"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1260:225:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1275:39:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1299:9:11"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1310:2:11",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1295:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1295:18:11"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "1289:5:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1289:25:11"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1279:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1361:16:11",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1370:1:11",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1373:1:11",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1363:6:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1363:12:11"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1363:12:11"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "1333:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1341:18:11",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "1330:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1330:30:11"
                      },
                      "nodeType": "YulIf",
                      "src": "1327:2:11"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1391:84:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1447:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1458:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1443:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1443:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1467:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "1401:41:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1401:74:11"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "1391:6:11"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1495:129:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1510:16:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1524:2:11",
                        "type": "",
                        "value": "64"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1514:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1540:74:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1586:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1597:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1582:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1582:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1606:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "1550:31:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1550:64:11"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "1540:6:11"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "908:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "919:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "931:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "939:6:11",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "947:6:11",
                "type": ""
              }
            ],
            "src": "823:808:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1677:243:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1687:19:11",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1703:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1697:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1697:9:11"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "1687:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1715:35:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "1737:6:11"
                      },
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "1745:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1733:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1733:17:11"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "1719:10:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1861:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "1863:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1863:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1863:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "1804:10:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1816:18:11",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "1801:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1801:34:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "1840:10:11"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "1852:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "1837:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1837:22:11"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "1798:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1798:62:11"
                  },
                  "nodeType": "YulIf",
                  "src": "1795:2:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1899:2:11",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "1903:10:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1892:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1892:22:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1892:22:11"
                }
              ]
            },
            "name": "allocateMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "1661:4:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "1670:6:11",
                "type": ""
              }
            ],
            "src": "1637:283:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1993:265:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2098:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "2100:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2100:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2100:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2070:6:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2078:18:11",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2067:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2067:30:11"
                  },
                  "nodeType": "YulIf",
                  "src": "2064:2:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2150:41:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2166:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2174:4:11",
                            "type": "",
                            "value": "0x1f"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2162:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2162:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2185:4:11",
                            "type": "",
                            "value": "0x1f"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "2181:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2181:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "2158:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2158:33:11"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "2150:4:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2228:23:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "2240:4:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2246:4:11",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2236:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2236:15:11"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "2228:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "array_allocation_size_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1977:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "1988:4:11",
                "type": ""
              }
            ],
            "src": "1926:332:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2309:32:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2319:16:11",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "2330:5:11"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "2319:7:11"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2291:5:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "2301:7:11",
                "type": ""
              }
            ],
            "src": "2264:77:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2396:258:11",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2406:10:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2415:1:11",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "2410:1:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2475:63:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "2500:3:11"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "2505:1:11"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2496:3:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2496:11:11"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "2519:3:11"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "2524:1:11"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2515:3:11"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2515:11:11"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "2509:5:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2509:18:11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2489:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2489:39:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2489:39:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "2436:1:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2439:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "2433:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2433:13:11"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "2447:19:11",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2449:15:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "2458:1:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2461:2:11",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2454:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2454:10:11"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "2449:1:11"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "2429:3:11",
                    "statements": []
                  },
                  "src": "2425:113:11"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2572:76:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "2622:3:11"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "2627:6:11"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2618:3:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2618:16:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2636:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2611:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2611:27:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2611:27:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "2553:1:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2556:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2550:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2550:13:11"
                  },
                  "nodeType": "YulIf",
                  "src": "2547:2:11"
                }
              ]
            },
            "name": "copy_memory_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "2378:3:11",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "2383:3:11",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "2388:6:11",
                "type": ""
              }
            ],
            "src": "2347:307:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2711:269:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2721:22:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "2735:4:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2741:1:11",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "2731:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2731:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "2721:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2752:38:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "2782:4:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2788:1:11",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "2778:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2778:12:11"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "2756:18:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2829:51:11",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2843:27:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2857:6:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2865:4:11",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "2853:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2853:17:11"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2843:6:11"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "2809:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2802:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2802:26:11"
                  },
                  "nodeType": "YulIf",
                  "src": "2799:2:11"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2932:42:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "2946:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2946:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2946:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "2896:18:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2919:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2927:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "2916:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2916:14:11"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "2893:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2893:38:11"
                  },
                  "nodeType": "YulIf",
                  "src": "2890:2:11"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "2695:4:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "2704:6:11",
                "type": ""
              }
            ],
            "src": "2660:320:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3014:152:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3031:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3034:77:11",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3024:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3024:88:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3024:88:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3128:1:11",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3131:4:11",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3121:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3121:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3121:15:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3152:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3155:4:11",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3145:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3145:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3145:15:11"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "2986:180:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3200:152:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3217:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3220:77:11",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3210:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3210:88:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3210:88:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3314:1:11",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3317:4:11",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3307:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3307:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3307:15:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3338:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3341:4:11",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3331:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3331:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3331:15:11"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "3172:180:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3401:79:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3458:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3467:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3470:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3460:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3460:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3460:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3424:5:11"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "3449:5:11"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "3431:17:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3431:24:11"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "3421:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3421:35:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3414:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3414:43:11"
                  },
                  "nodeType": "YulIf",
                  "src": "3411:2:11"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3394:5:11",
                "type": ""
              }
            ],
            "src": "3358:122:11"
          }
        ]
      },
      "contents": "{\n\n    function abi_decode_available_length_t_string_memory_ptr_fromMemory(src, length, end) -> array {\n        array := allocateMemory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert(0, 0) }\n        copy_memory_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr_fromMemory(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let length := mload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr_fromMemory(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_uint256_fromMemory(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n\n        {\n\n            let offset := mload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value0 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := mload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value1 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function allocateMemory(size) -> memPtr {\n        memPtr := mload(64)\n        let newFreePtr := add(memPtr, size)\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        // round up\n        size := and(add(length, 0x1f), not(0x1f))\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
      "id": 11,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:28034:11",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "90:259:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "100:73:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "165:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "array_allocation_size_t_bytes_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "124:40:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "124:48:11"
                      }
                    ],
                    "functionName": {
                      "name": "allocateMemory",
                      "nodeType": "YulIdentifier",
                      "src": "109:14:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "109:64:11"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "100:5:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "189:5:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "196:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "182:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "182:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "182:21:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "212:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "227:5:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "234:4:11",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "223:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "223:16:11"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "216:3:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "277:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "286:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "289:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "279:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "279:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "279:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "258:3:11"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "263:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "254:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "254:16:11"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "272:3:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "251:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "251:25:11"
                  },
                  "nodeType": "YulIf",
                  "src": "248:2:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "326:3:11"
                      },
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "331:3:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "336:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "copy_calldata_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "302:23:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "302:41:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "302:41:11"
                }
              ]
            },
            "name": "abi_decode_available_length_t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "63:3:11",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "68:6:11",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "76:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "84:5:11",
                "type": ""
              }
            ],
            "src": "7:342:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "407:87:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "417:29:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "439:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "426:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "426:20:11"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "417:5:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "482:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "455:26:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "455:33:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "455:33:11"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "385:6:11",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "393:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "401:5:11",
                "type": ""
              }
            ],
            "src": "355:139:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "549:84:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "559:29:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "581:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "568:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "568:20:11"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "559:5:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "621:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_bool",
                      "nodeType": "YulIdentifier",
                      "src": "597:23:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "597:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "597:30:11"
                }
              ]
            },
            "name": "abi_decode_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "527:6:11",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "535:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "543:5:11",
                "type": ""
              }
            ],
            "src": "500:133:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "690:86:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "700:29:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "722:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "709:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "709:20:11"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "700:5:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "764:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_bytes4",
                      "nodeType": "YulIdentifier",
                      "src": "738:25:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "738:32:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "738:32:11"
                }
              ]
            },
            "name": "abi_decode_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "668:6:11",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "676:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "684:5:11",
                "type": ""
              }
            ],
            "src": "639:137:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "844:79:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "854:22:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "869:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "863:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "863:13:11"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "854:5:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "911:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_bytes4",
                      "nodeType": "YulIdentifier",
                      "src": "885:25:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "885:32:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "885:32:11"
                }
              ]
            },
            "name": "abi_decode_t_bytes4_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "822:6:11",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "830:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "838:5:11",
                "type": ""
              }
            ],
            "src": "782:141:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1003:210:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1052:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1061:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1064:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1054:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1054:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1054:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1031:6:11"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1039:4:11",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1027:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1027:17:11"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "1046:3:11"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "1023:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1023:27:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1016:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1016:35:11"
                  },
                  "nodeType": "YulIf",
                  "src": "1013:2:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1077:34:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1104:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1091:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1091:20:11"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "1081:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1120:87:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "1180:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1188:4:11",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1176:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1176:17:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1195:6:11"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "1203:3:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_available_length_t_bytes_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "1129:46:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1129:78:11"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "1120:5:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "981:6:11",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "989:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "997:5:11",
                "type": ""
              }
            ],
            "src": "942:271:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1271:87:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1281:29:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1303:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1290:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1290:20:11"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1281:5:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1346:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "1319:26:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1319:33:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1319:33:11"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "1249:6:11",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1257:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1265:5:11",
                "type": ""
              }
            ],
            "src": "1219:139:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1430:196:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1476:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1485:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1488:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1478:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1478:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1478:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1451:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1460:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1447:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1447:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1472:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1443:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1443:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "1440:2:11"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1502:117:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1517:15:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1531:1:11",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1521:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1546:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1581:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1592:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1577:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1577:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1601:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1556:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1556:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1546:6:11"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1400:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1411:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1423:6:11",
                "type": ""
              }
            ],
            "src": "1364:262:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1715:324:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1761:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1770:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1773:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1763:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1763:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1763:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1736:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1745:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1732:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1732:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1757:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1728:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1728:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "1725:2:11"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1787:117:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1802:15:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1816:1:11",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1806:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1831:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1866:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1877:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1862:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1862:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1886:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1841:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1841:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1831:6:11"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1914:118:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1929:16:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1943:2:11",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1933:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1959:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1994:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2005:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1990:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1990:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2014:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1969:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1969:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "1959:6:11"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1677:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1688:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1700:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1708:6:11",
                "type": ""
              }
            ],
            "src": "1632:407:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2145:452:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2191:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2200:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2203:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2193:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2193:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2193:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2166:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2175:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2162:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2162:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2187:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2158:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2158:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "2155:2:11"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2217:117:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2232:15:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2246:1:11",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2236:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2261:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2296:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2307:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2292:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2292:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2316:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "2271:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2271:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2261:6:11"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2344:118:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2359:16:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2373:2:11",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2363:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2389:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2424:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2435:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2420:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2420:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2444:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "2399:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2399:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "2389:6:11"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2472:118:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2487:16:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2501:2:11",
                        "type": "",
                        "value": "64"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2491:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2517:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2552:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2563:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2548:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2548:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2572:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "2527:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2527:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "2517:6:11"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2099:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2110:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2122:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2130:6:11",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "2138:6:11",
                "type": ""
              }
            ],
            "src": "2045:552:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2729:683:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2776:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2785:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2788:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2778:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2778:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2778:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2750:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2759:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2746:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2746:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2771:3:11",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2742:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2742:33:11"
                  },
                  "nodeType": "YulIf",
                  "src": "2739:2:11"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2802:117:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2817:15:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2831:1:11",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2821:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2846:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2881:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2892:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2877:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2877:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2901:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "2856:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2856:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2846:6:11"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2929:118:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2944:16:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2958:2:11",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2948:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2974:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3009:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3020:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3005:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3005:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3029:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "2984:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2984:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "2974:6:11"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3057:118:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3072:16:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3086:2:11",
                        "type": "",
                        "value": "64"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3076:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3102:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3137:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3148:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3133:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3133:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3157:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "3112:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3112:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "3102:6:11"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3185:220:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3200:46:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3231:9:11"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3242:2:11",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3227:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3227:18:11"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "3214:12:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3214:32:11"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3204:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3293:16:11",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3302:1:11",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3305:1:11",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "3295:6:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3295:12:11"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "3295:12:11"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3265:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3273:18:11",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "3262:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3262:30:11"
                      },
                      "nodeType": "YulIf",
                      "src": "3259:2:11"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3323:72:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3367:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3378:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3363:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3363:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3387:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bytes_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "3333:29:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3333:62:11"
                      },
                      "variableNames": [
                        {
                          "name": "value3",
                          "nodeType": "YulIdentifier",
                          "src": "3323:6:11"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2675:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2686:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2698:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2706:6:11",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "2714:6:11",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "2722:6:11",
                "type": ""
              }
            ],
            "src": "2603:809:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3498:321:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3544:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3553:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3556:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3546:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3546:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3546:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3519:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3528:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3515:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3515:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3540:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3511:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3511:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "3508:2:11"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3570:117:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3585:15:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3599:1:11",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3589:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3614:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3649:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3660:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3645:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3645:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3669:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "3624:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3624:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3614:6:11"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3697:115:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3712:16:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3726:2:11",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3716:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3742:60:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3774:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3785:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3770:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3770:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3794:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bool",
                          "nodeType": "YulIdentifier",
                          "src": "3752:17:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3752:50:11"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "3742:6:11"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3460:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3471:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3483:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3491:6:11",
                "type": ""
              }
            ],
            "src": "3418:401:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3908:324:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3954:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3963:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3966:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3956:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3956:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3956:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3929:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3938:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3925:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3925:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3950:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3921:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3921:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "3918:2:11"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3980:117:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3995:15:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4009:1:11",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3999:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4024:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4059:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4070:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4055:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4055:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4079:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "4034:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4034:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4024:6:11"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4107:118:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4122:16:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4136:2:11",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4126:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4152:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4187:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4198:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4183:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4183:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4207:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4162:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4162:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "4152:6:11"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3870:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3881:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3893:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3901:6:11",
                "type": ""
              }
            ],
            "src": "3825:407:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4372:710:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4419:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4428:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4431:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4421:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4421:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4421:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4393:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4402:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4389:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4389:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4414:3:11",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4385:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4385:33:11"
                  },
                  "nodeType": "YulIf",
                  "src": "4382:2:11"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4445:117:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4460:15:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4474:1:11",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4464:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4489:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4524:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4535:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4520:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4520:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4544:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "4499:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4499:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4489:6:11"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4572:118:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4587:16:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4601:2:11",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4591:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4617:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4652:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4663:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4648:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4648:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4672:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4627:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4627:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "4617:6:11"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4700:118:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4715:16:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4729:2:11",
                        "type": "",
                        "value": "64"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4719:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4745:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4780:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4791:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4776:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4776:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4800:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4755:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4755:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "4745:6:11"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4828:118:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4843:16:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4857:2:11",
                        "type": "",
                        "value": "96"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4847:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4873:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4908:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4919:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4904:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4904:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4928:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4883:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4883:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value3",
                          "nodeType": "YulIdentifier",
                          "src": "4873:6:11"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4956:119:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4971:17:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4985:3:11",
                        "type": "",
                        "value": "128"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4975:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5002:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5037:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5048:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5033:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5033:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5057:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "5012:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5012:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value4",
                          "nodeType": "YulIdentifier",
                          "src": "5002:6:11"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256t_uint256t_uint256t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4310:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4321:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4333:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "4341:6:11",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "4349:6:11",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "4357:6:11",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "4365:6:11",
                "type": ""
              }
            ],
            "src": "4238:844:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5153:195:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5199:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5208:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5211:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5201:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5201:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5201:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5174:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5183:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5170:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5170:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5195:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5166:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5166:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "5163:2:11"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5225:116:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5240:15:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5254:1:11",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5244:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5269:62:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5303:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5314:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5299:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5299:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5323:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bytes4",
                          "nodeType": "YulIdentifier",
                          "src": "5279:19:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5279:52:11"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5269:6:11"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5123:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5134:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5146:6:11",
                "type": ""
              }
            ],
            "src": "5088:260:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5430:206:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5476:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5485:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5488:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5478:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5478:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5478:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5451:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5460:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5447:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5447:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5472:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5443:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5443:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "5440:2:11"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5502:127:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5517:15:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5531:1:11",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5521:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5546:73:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5591:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5602:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5587:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5587:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5611:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bytes4_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "5556:30:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5556:63:11"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5546:6:11"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bytes4_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5400:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5411:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5423:6:11",
                "type": ""
              }
            ],
            "src": "5354:282:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5708:196:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5754:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5763:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5766:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5756:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5756:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5756:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5729:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5738:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5725:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5725:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5750:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5721:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5721:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "5718:2:11"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5780:117:11",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5795:15:11",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5809:1:11",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5799:6:11",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5824:63:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5859:9:11"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5870:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5855:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5855:22:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5879:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "5834:20:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5834:53:11"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5824:6:11"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5678:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5689:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5701:6:11",
                "type": ""
              }
            ],
            "src": "5642:262:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5975:53:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5992:3:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "6015:5:11"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "5997:17:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5997:24:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5985:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5985:37:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5985:37:11"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5963:5:11",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5970:3:11",
                "type": ""
              }
            ],
            "src": "5910:118:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6093:50:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6110:3:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "6130:5:11"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_bool",
                          "nodeType": "YulIdentifier",
                          "src": "6115:14:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6115:21:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6103:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6103:34:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6103:34:11"
                }
              ]
            },
            "name": "abi_encode_t_bool_to_t_bool_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6081:5:11",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6088:3:11",
                "type": ""
              }
            ],
            "src": "6034:109:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6239:270:11",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6249:52:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6295:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_bytes_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "6263:31:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6263:38:11"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "6253:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6310:77:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6375:3:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6380:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6317:57:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6317:70:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "6310:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "6422:5:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6429:4:11",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6418:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6418:16:11"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6436:3:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6441:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "6396:21:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6396:52:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6396:52:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6457:46:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6468:3:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "6495:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "6473:21:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6473:29:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6464:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6464:39:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "6457:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6220:5:11",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6227:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "6235:3:11",
                "type": ""
              }
            ],
            "src": "6149:360:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6607:272:11",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6617:53:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6664:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "6631:32:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6631:39:11"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "6621:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6679:78:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6745:3:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6750:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6686:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6686:71:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "6679:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "6792:5:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6799:4:11",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6788:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6788:16:11"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6806:3:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6811:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "6766:21:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6766:52:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6766:52:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6827:46:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6838:3:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "6865:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "6843:21:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6843:29:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6834:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6834:39:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "6827:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6588:5:11",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6595:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "6603:3:11",
                "type": ""
              }
            ],
            "src": "6515:364:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6995:267:11",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7005:53:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "7052:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "7019:32:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7019:39:11"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "7009:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7067:96:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7151:3:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7156:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7074:76:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7074:89:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "7067:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "7198:5:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7205:4:11",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7194:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7194:16:11"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7212:3:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7217:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "7172:21:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7172:52:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7172:52:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7233:23:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7244:3:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7249:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7240:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7240:16:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "7233:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6976:5:11",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6983:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "6991:3:11",
                "type": ""
              }
            ],
            "src": "6885:377:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7414:231:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7424:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7490:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7495:2:11",
                        "type": "",
                        "value": "45"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7431:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7431:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "7424:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "7519:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7524:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7515:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7515:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7528:34:11",
                        "type": "",
                        "value": "ERC721: caller is not token owne"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7508:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7508:55:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7508:55:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "7584:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7589:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7580:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7580:12:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7594:15:11",
                        "type": "",
                        "value": "r or approved"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7573:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7573:37:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7573:37:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7620:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7631:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7636:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7627:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7627:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "7620:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "7402:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "7410:3:11",
                "type": ""
              }
            ],
            "src": "7268:377:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7797:236:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7807:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7873:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7878:2:11",
                        "type": "",
                        "value": "50"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7814:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7814:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "7807:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "7902:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7907:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7898:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7898:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7911:34:11",
                        "type": "",
                        "value": "ERC721: transfer to non ERC721Re"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7891:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7891:55:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7891:55:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "7967:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7972:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7963:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7963:12:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7977:20:11",
                        "type": "",
                        "value": "ceiver implementer"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7956:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7956:42:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7956:42:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8008:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8019:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8024:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8015:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8015:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "8008:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "7785:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "7793:3:11",
                "type": ""
              }
            ],
            "src": "7651:382:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8185:168:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8195:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8261:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8266:2:11",
                        "type": "",
                        "value": "16"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8202:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8202:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "8195:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "8290:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8295:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8286:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8286:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8299:18:11",
                        "type": "",
                        "value": "Invalid loan NFT"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8279:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8279:39:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8279:39:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8328:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8339:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8344:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8335:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8335:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "8328:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_1ec021132769161eef9439d418b0ada870000300a670258be4df3cc01d82a4a9_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8173:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "8181:3:11",
                "type": ""
              }
            ],
            "src": "8039:314:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8505:223:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8515:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8581:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8586:2:11",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8522:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8522:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "8515:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "8610:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8615:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8606:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8606:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8619:34:11",
                        "type": "",
                        "value": "ERC721: transfer from incorrect "
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8599:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8599:55:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8599:55:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "8675:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8680:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8671:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8671:12:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8685:7:11",
                        "type": "",
                        "value": "owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8664:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8664:29:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8664:29:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8703:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8714:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8719:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8710:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8710:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "8703:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8493:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "8501:3:11",
                "type": ""
              }
            ],
            "src": "8359:369:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8880:180:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8890:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8956:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8961:2:11",
                        "type": "",
                        "value": "28"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8897:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8897:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "8890:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "8985:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8990:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8981:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8981:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8994:30:11",
                        "type": "",
                        "value": "ERC721: token already minted"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8974:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8974:51:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8974:51:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9035:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9046:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9051:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9042:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9042:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "9035:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8868:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "8876:3:11",
                "type": ""
              }
            ],
            "src": "8734:326:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9212:224:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9222:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9288:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9293:2:11",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9229:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9229:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "9222:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "9317:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9322:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9313:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9313:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9326:34:11",
                        "type": "",
                        "value": "Insufficient funds to buy the lo"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9306:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9306:55:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9306:55:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "9382:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9387:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9378:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9378:12:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9392:8:11",
                        "type": "",
                        "value": "an NFT"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9371:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9371:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9371:30:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9411:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9422:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9427:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9418:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9418:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "9411:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_3b57e662a484f59cfe32942e0e4b7996130b2420cbc36974f3e264d51948bce8_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "9200:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "9208:3:11",
                "type": ""
              }
            ],
            "src": "9066:370:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9588:222:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9598:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9664:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9669:2:11",
                        "type": "",
                        "value": "36"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9605:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9605:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "9598:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "9693:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9698:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9689:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9689:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9702:34:11",
                        "type": "",
                        "value": "ERC721: transfer to the zero add"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9682:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9682:55:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9682:55:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "9758:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9763:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9754:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9754:12:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9768:6:11",
                        "type": "",
                        "value": "ress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9747:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9747:28:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9747:28:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9785:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9796:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9801:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9792:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9792:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "9785:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "9576:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "9584:3:11",
                "type": ""
              }
            ],
            "src": "9442:368:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9962:177:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9972:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10038:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10043:2:11",
                        "type": "",
                        "value": "25"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9979:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9979:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "9972:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "10067:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10072:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10063:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10063:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10076:27:11",
                        "type": "",
                        "value": "ERC721: approve to caller"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10056:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10056:48:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10056:48:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10114:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10125:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10130:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10121:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10121:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "10114:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "9950:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "9958:3:11",
                "type": ""
              }
            ],
            "src": "9816:323:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10291:227:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10301:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10367:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10372:2:11",
                        "type": "",
                        "value": "41"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10308:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10308:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "10301:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "10396:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10401:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10392:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10392:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10405:34:11",
                        "type": "",
                        "value": "ERC721: address zero is not a va"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10385:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10385:55:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10385:55:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "10461:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10466:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10457:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10457:12:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10471:11:11",
                        "type": "",
                        "value": "lid owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10450:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10450:33:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10450:33:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10493:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10504:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10509:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10500:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10500:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "10493:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "10279:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "10287:3:11",
                "type": ""
              }
            ],
            "src": "10145:373:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10670:221:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10680:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10746:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10751:2:11",
                        "type": "",
                        "value": "35"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10687:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10687:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "10680:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "10775:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10780:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10771:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10771:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10784:34:11",
                        "type": "",
                        "value": "Only owner can destroy the loan "
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10764:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10764:55:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10764:55:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "10840:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10845:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10836:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10836:12:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10850:5:11",
                        "type": "",
                        "value": "NFT"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10829:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10829:27:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10829:27:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10866:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10877:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10882:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10873:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10873:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "10866:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_8554bcb06f40e512368ce0c22e340994ef57453adc4873717f860aab03b759fc_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "10658:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "10666:3:11",
                "type": ""
              }
            ],
            "src": "10524:367:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11043:184:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11053:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11119:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11124:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11060:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11060:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "11053:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "11148:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11153:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11144:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11144:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11157:34:11",
                        "type": "",
                        "value": "ERC721: mint to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11137:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11137:55:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11137:55:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11202:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11213:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11218:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11209:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11209:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "11202:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "11031:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "11039:3:11",
                "type": ""
              }
            ],
            "src": "10897:330:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11379:180:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11389:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11455:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11460:2:11",
                        "type": "",
                        "value": "28"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11396:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11396:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "11389:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "11484:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11489:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11480:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11480:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11493:30:11",
                        "type": "",
                        "value": "Cannot buy your own loan NFT"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11473:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11473:51:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11473:51:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11534:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11545:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11550:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11541:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11541:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "11534:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_8cb4f805150d07280d4e301d28db952bb63f4792367e32521b583e1a015acbb1_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "11367:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "11375:3:11",
                "type": ""
              }
            ],
            "src": "11233:326:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11711:184:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11721:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11787:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11792:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11728:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11728:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "11721:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "11816:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11821:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11812:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11812:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11825:34:11",
                        "type": "",
                        "value": "Only borrower can repay the loan"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11805:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11805:55:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11805:55:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11870:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11881:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11886:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11877:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11877:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "11870:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_a5bb3b3135c230e8997c79ca17c3e19f591f808ec5a038219ba0335bf90859ab_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "11699:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "11707:3:11",
                "type": ""
              }
            ],
            "src": "11565:330:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12047:176:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12057:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12123:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12128:2:11",
                        "type": "",
                        "value": "24"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12064:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12064:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "12057:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "12152:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12157:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12148:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12148:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12161:26:11",
                        "type": "",
                        "value": "ERC721: invalid token ID"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12141:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12141:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12141:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12198:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12209:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12214:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12205:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12205:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "12198:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "12035:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "12043:3:11",
                "type": ""
              }
            ],
            "src": "11901:322:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12375:219:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12385:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12451:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12456:2:11",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12392:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12392:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "12385:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "12480:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12485:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12476:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12476:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12489:34:11",
                        "type": "",
                        "value": "ERC721: approval to current owne"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12469:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12469:55:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12469:55:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "12545:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12550:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12541:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12541:12:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12555:3:11",
                        "type": "",
                        "value": "r"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12534:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12534:25:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12534:25:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12569:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12580:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12585:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12576:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12576:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "12569:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "12363:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "12371:3:11",
                "type": ""
              }
            ],
            "src": "12229:365:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12746:247:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12756:74:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12822:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12827:2:11",
                        "type": "",
                        "value": "61"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12763:58:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12763:67:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "12756:3:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "12851:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12856:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12847:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12847:11:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12860:34:11",
                        "type": "",
                        "value": "ERC721: approve caller is not to"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12840:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12840:55:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12840:55:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "12916:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12921:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12912:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12912:12:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12926:31:11",
                        "type": "",
                        "value": "ken owner or approved for all"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12905:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12905:53:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12905:53:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12968:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12979:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12984:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12975:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12975:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "12968:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "12734:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "12742:3:11",
                "type": ""
              }
            ],
            "src": "12600:393:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13064:53:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13081:3:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "13104:5:11"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "13086:17:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13086:24:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13074:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13074:37:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13074:37:11"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "13052:5:11",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "13059:3:11",
                "type": ""
              }
            ],
            "src": "12999:118:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13307:251:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13318:102:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "13407:6:11"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13416:3:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13325:81:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13325:95:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "13318:3:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13430:102:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "13519:6:11"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13528:3:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13437:81:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13437:95:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "13430:3:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13542:10:11",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "13549:3:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "13542:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "13278:3:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "13284:6:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "13292:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "13303:3:11",
                "type": ""
              }
            ],
            "src": "13123:435:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13662:124:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13672:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13684:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13695:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13680:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13680:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13672:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "13752:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13765:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13776:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13761:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13761:17:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13708:43:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13708:71:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13708:71:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13634:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "13646:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13657:4:11",
                "type": ""
              }
            ],
            "src": "13564:222:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13992:440:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "14002:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14014:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14025:3:11",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14010:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14010:19:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14002:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "14083:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14096:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14107:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14092:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14092:17:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14039:43:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14039:71:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14039:71:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "14164:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14177:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14188:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14173:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14173:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14120:43:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14120:72:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14120:72:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "14246:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14259:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14270:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14255:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14255:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14202:43:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14202:72:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14202:72:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14295:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14306:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14291:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14291:18:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "14315:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14321:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "14311:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14311:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14284:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14284:48:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14284:48:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14341:84:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "14411:6:11"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14420:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14349:61:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14349:76:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14341:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13940:9:11",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "13952:6:11",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "13960:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "13968:6:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "13976:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13987:4:11",
                "type": ""
              }
            ],
            "src": "13792:640:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14530:118:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "14540:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14552:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14563:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14548:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14548:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14540:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "14614:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14627:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14638:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14623:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14623:17:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bool_to_t_bool_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14576:37:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14576:65:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14576:65:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14502:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "14514:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14525:4:11",
                "type": ""
              }
            ],
            "src": "14438:210:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14772:195:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "14782:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14794:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14805:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14790:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14790:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14782:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14829:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14840:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14825:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14825:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "14848:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14854:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "14844:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14844:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14818:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14818:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14818:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14874:86:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "14946:6:11"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14955:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14882:63:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14882:78:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14874:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14744:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "14756:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14767:4:11",
                "type": ""
              }
            ],
            "src": "14654:313:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15144:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "15154:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15166:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15177:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15162:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15162:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15154:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15201:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15212:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15197:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15197:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "15220:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15226:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "15216:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15216:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15190:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15190:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15190:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15246:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15380:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "15254:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15254:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15246:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "15124:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15139:4:11",
                "type": ""
              }
            ],
            "src": "14973:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15569:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "15579:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15591:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15602:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15587:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15587:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15579:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15626:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15637:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15622:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15622:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "15645:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15651:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "15641:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15641:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15615:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15615:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15615:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15671:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15805:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "15679:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15679:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15671:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "15549:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15564:4:11",
                "type": ""
              }
            ],
            "src": "15398:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15994:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "16004:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16016:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16027:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16012:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16012:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16004:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16051:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16062:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16047:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16047:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "16070:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16076:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "16066:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16066:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16040:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16040:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16040:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16096:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16230:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_1ec021132769161eef9439d418b0ada870000300a670258be4df3cc01d82a4a9_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "16104:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16104:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16096:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_1ec021132769161eef9439d418b0ada870000300a670258be4df3cc01d82a4a9__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "15974:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15989:4:11",
                "type": ""
              }
            ],
            "src": "15823:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16419:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "16429:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16441:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16452:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16437:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16437:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16429:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16476:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16487:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16472:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16472:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "16495:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16501:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "16491:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16491:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16465:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16465:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16465:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16521:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16655:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "16529:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16529:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16521:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "16399:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "16414:4:11",
                "type": ""
              }
            ],
            "src": "16248:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16844:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "16854:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16866:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16877:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16862:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16862:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16854:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16901:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16912:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16897:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16897:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "16920:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16926:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "16916:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16916:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16890:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16890:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16890:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16946:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17080:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "16954:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16954:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16946:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "16824:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "16839:4:11",
                "type": ""
              }
            ],
            "src": "16673:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17269:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "17279:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "17291:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17302:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "17287:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17287:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17279:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17326:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17337:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17322:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17322:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "17345:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17351:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "17341:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17341:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17315:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17315:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17315:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17371:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17505:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_3b57e662a484f59cfe32942e0e4b7996130b2420cbc36974f3e264d51948bce8_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "17379:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17379:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17371:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_3b57e662a484f59cfe32942e0e4b7996130b2420cbc36974f3e264d51948bce8__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "17249:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "17264:4:11",
                "type": ""
              }
            ],
            "src": "17098:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17694:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "17704:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "17716:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17727:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "17712:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17712:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17704:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17751:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17762:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17747:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17747:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "17770:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17776:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "17766:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17766:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17740:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17740:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17740:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17796:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17930:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "17804:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17804:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17796:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "17674:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "17689:4:11",
                "type": ""
              }
            ],
            "src": "17523:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "18119:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "18129:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "18141:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18152:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "18137:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18137:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "18129:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18176:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "18187:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "18172:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18172:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "18195:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18201:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "18191:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18191:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18165:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18165:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18165:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "18221:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "18355:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "18229:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18229:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "18221:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "18099:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "18114:4:11",
                "type": ""
              }
            ],
            "src": "17948:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "18544:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "18554:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "18566:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18577:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "18562:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18562:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "18554:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18601:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "18612:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "18597:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18597:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "18620:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18626:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "18616:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18616:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18590:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18590:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18590:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "18646:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "18780:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "18654:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18654:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "18646:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "18524:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "18539:4:11",
                "type": ""
              }
            ],
            "src": "18373:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "18969:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "18979:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "18991:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "19002:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "18987:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18987:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "18979:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "19026:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "19037:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "19022:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19022:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "19045:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "19051:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "19041:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19041:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "19015:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19015:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "19015:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "19071:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "19205:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_8554bcb06f40e512368ce0c22e340994ef57453adc4873717f860aab03b759fc_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "19079:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19079:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "19071:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_8554bcb06f40e512368ce0c22e340994ef57453adc4873717f860aab03b759fc__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "18949:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "18964:4:11",
                "type": ""
              }
            ],
            "src": "18798:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "19394:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "19404:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "19416:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "19427:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "19412:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19412:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "19404:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "19451:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "19462:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "19447:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19447:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "19470:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "19476:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "19466:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19466:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "19440:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19440:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "19440:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "19496:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "19630:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "19504:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19504:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "19496:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "19374:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "19389:4:11",
                "type": ""
              }
            ],
            "src": "19223:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "19819:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "19829:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "19841:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "19852:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "19837:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19837:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "19829:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "19876:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "19887:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "19872:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19872:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "19895:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "19901:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "19891:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19891:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "19865:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19865:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "19865:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "19921:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "20055:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_8cb4f805150d07280d4e301d28db952bb63f4792367e32521b583e1a015acbb1_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "19929:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19929:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "19921:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_8cb4f805150d07280d4e301d28db952bb63f4792367e32521b583e1a015acbb1__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "19799:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "19814:4:11",
                "type": ""
              }
            ],
            "src": "19648:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "20244:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "20254:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "20266:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "20277:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "20262:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20262:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "20254:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "20301:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "20312:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "20297:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20297:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "20320:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "20326:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "20316:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20316:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "20290:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20290:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "20290:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "20346:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "20480:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_a5bb3b3135c230e8997c79ca17c3e19f591f808ec5a038219ba0335bf90859ab_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "20354:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20354:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "20346:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_a5bb3b3135c230e8997c79ca17c3e19f591f808ec5a038219ba0335bf90859ab__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "20224:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "20239:4:11",
                "type": ""
              }
            ],
            "src": "20073:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "20669:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "20679:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "20691:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "20702:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "20687:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20687:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "20679:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "20726:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "20737:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "20722:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20722:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "20745:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "20751:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "20741:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20741:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "20715:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20715:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "20715:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "20771:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "20905:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "20779:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20779:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "20771:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "20649:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "20664:4:11",
                "type": ""
              }
            ],
            "src": "20498:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "21094:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "21104:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "21116:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "21127:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "21112:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21112:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "21104:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "21151:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "21162:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "21147:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "21147:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "21170:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "21176:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "21166:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "21166:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "21140:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21140:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "21140:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "21196:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "21330:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "21204:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21204:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "21196:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "21074:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "21089:4:11",
                "type": ""
              }
            ],
            "src": "20923:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "21519:248:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "21529:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "21541:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "21552:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "21537:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21537:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "21529:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "21576:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "21587:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "21572:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "21572:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "21595:4:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "21601:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "21591:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "21591:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "21565:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21565:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "21565:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "21621:139:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "21755:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "21629:124:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21629:131:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "21621:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "21499:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "21514:4:11",
                "type": ""
              }
            ],
            "src": "21348:419:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "21871:124:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "21881:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "21893:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "21904:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "21889:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21889:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "21881:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "21961:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "21974:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "21985:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "21970:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "21970:17:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "21917:43:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21917:71:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "21917:71:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "21843:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "21855:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "21866:4:11",
                "type": ""
              }
            ],
            "src": "21773:222:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "22261:614:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "22271:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "22283:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "22294:3:11",
                        "type": "",
                        "value": "224"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "22279:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22279:19:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "22271:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "22352:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "22365:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "22376:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "22361:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22361:17:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "22308:43:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22308:71:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "22308:71:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "22433:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "22446:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "22457:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "22442:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22442:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "22389:43:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22389:72:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "22389:72:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "22515:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "22528:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "22539:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "22524:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22524:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "22471:43:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22471:72:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "22471:72:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "22597:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "22610:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "22621:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "22606:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22606:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "22553:43:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22553:72:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "22553:72:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value4",
                        "nodeType": "YulIdentifier",
                        "src": "22679:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "22692:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "22703:3:11",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "22688:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22688:19:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "22635:43:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22635:73:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "22635:73:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value5",
                        "nodeType": "YulIdentifier",
                        "src": "22762:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "22775:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "22786:3:11",
                            "type": "",
                            "value": "160"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "22771:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22771:19:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "22718:43:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22718:73:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "22718:73:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value6",
                        "nodeType": "YulIdentifier",
                        "src": "22839:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "22852:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "22863:3:11",
                            "type": "",
                            "value": "192"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "22848:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22848:19:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bool_to_t_bool_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "22801:37:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22801:67:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "22801:67:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_uint256_t_uint256_t_uint256_t_uint256_t_address_t_bool__to_t_uint256_t_uint256_t_uint256_t_uint256_t_uint256_t_address_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "22185:9:11",
                "type": ""
              },
              {
                "name": "value6",
                "nodeType": "YulTypedName",
                "src": "22197:6:11",
                "type": ""
              },
              {
                "name": "value5",
                "nodeType": "YulTypedName",
                "src": "22205:6:11",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "22213:6:11",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "22221:6:11",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "22229:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "22237:6:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "22245:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "22256:4:11",
                "type": ""
              }
            ],
            "src": "22001:874:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "22921:243:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "22931:19:11",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "22947:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "22941:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22941:9:11"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "22931:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "22959:35:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "22981:6:11"
                      },
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "22989:4:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "22977:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22977:17:11"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "22963:10:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "23105:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "23107:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23107:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "23107:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "23048:10:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "23060:18:11",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "23045:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "23045:34:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "23084:10:11"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "23096:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "23081:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "23081:22:11"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "23042:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23042:62:11"
                  },
                  "nodeType": "YulIf",
                  "src": "23039:2:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23143:2:11",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "23147:10:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "23136:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23136:22:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "23136:22:11"
                }
              ]
            },
            "name": "allocateMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "22905:4:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "22914:6:11",
                "type": ""
              }
            ],
            "src": "22881:283:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23236:265:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "23341:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "23343:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23343:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "23343:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "23313:6:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23321:18:11",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "23310:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23310:30:11"
                  },
                  "nodeType": "YulIf",
                  "src": "23307:2:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23393:41:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "23409:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "23417:4:11",
                            "type": "",
                            "value": "0x1f"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "23405:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "23405:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "23428:4:11",
                            "type": "",
                            "value": "0x1f"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "23424:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "23424:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "23401:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23401:33:11"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "23393:4:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23471:23:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "23483:4:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23489:4:11",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "23479:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23479:15:11"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "23471:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "array_allocation_size_t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "23220:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "23231:4:11",
                "type": ""
              }
            ],
            "src": "23170:331:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23565:40:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "23576:22:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "23592:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "23586:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23586:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "23576:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "23548:5:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "23558:6:11",
                "type": ""
              }
            ],
            "src": "23507:98:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23670:40:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "23681:22:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "23697:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "23691:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23691:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "23681:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "23653:5:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "23663:6:11",
                "type": ""
              }
            ],
            "src": "23611:99:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23811:73:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "23828:3:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "23833:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "23821:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23821:19:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "23821:19:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23849:29:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "23868:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23873:4:11",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "23864:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23864:14:11"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "23849:11:11"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "23783:3:11",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "23788:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "23799:11:11",
                "type": ""
              }
            ],
            "src": "23716:168:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23986:73:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "24003:3:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "24008:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "23996:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23996:19:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "23996:19:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "24024:29:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "24043:3:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "24048:4:11",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "24039:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24039:14:11"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "24024:11:11"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "23958:3:11",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "23963:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "23974:11:11",
                "type": ""
              }
            ],
            "src": "23890:169:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "24179:34:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "24189:18:11",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "24204:3:11"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "24189:11:11"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "24151:3:11",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "24156:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "24167:11:11",
                "type": ""
              }
            ],
            "src": "24065:148:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "24263:261:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "24273:25:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "24296:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "24278:17:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24278:20:11"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "24273:1:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "24307:25:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "24330:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "24312:17:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24312:20:11"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "24307:1:11"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "24470:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "24472:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24472:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "24472:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "24391:1:11"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "24398:66:11",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "24466:1:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "24394:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "24394:74:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "24388:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24388:81:11"
                  },
                  "nodeType": "YulIf",
                  "src": "24385:2:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "24502:16:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "24513:1:11"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "24516:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "24509:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24509:9:11"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "24502:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "24250:1:11",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "24253:1:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "24259:3:11",
                "type": ""
              }
            ],
            "src": "24219:305:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "24572:143:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "24582:25:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "24605:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "24587:17:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24587:20:11"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "24582:1:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "24616:25:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "24639:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "24621:17:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24621:20:11"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "24616:1:11"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "24663:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "24665:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24665:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "24665:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "24660:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "24653:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24653:9:11"
                  },
                  "nodeType": "YulIf",
                  "src": "24650:2:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "24695:14:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "24704:1:11"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "24707:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "24700:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24700:9:11"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "24695:1:11"
                    }
                  ]
                }
              ]
            },
            "name": "checked_div_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "24561:1:11",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "24564:1:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "24570:1:11",
                "type": ""
              }
            ],
            "src": "24530:185:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "24769:300:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "24779:25:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "24802:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "24784:17:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24784:20:11"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "24779:1:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "24813:25:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "24836:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "24818:17:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24818:20:11"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "24813:1:11"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "25011:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "25013:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25013:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "25013:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "x",
                                "nodeType": "YulIdentifier",
                                "src": "24923:1:11"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "24916:6:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "24916:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "24909:6:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "24909:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "24931:1:11"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "24938:66:11",
                                "type": "",
                                "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                              },
                              {
                                "name": "x",
                                "nodeType": "YulIdentifier",
                                "src": "25006:1:11"
                              }
                            ],
                            "functionName": {
                              "name": "div",
                              "nodeType": "YulIdentifier",
                              "src": "24934:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "24934:74:11"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "24928:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "24928:81:11"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "24905:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24905:105:11"
                  },
                  "nodeType": "YulIf",
                  "src": "24902:2:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "25043:20:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "25058:1:11"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "25061:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "25054:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25054:9:11"
                  },
                  "variableNames": [
                    {
                      "name": "product",
                      "nodeType": "YulIdentifier",
                      "src": "25043:7:11"
                    }
                  ]
                }
              ]
            },
            "name": "checked_mul_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "24752:1:11",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "24755:1:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "product",
                "nodeType": "YulTypedName",
                "src": "24761:7:11",
                "type": ""
              }
            ],
            "src": "24721:348:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25120:51:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "25130:35:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "25159:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "25141:17:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25141:24:11"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "25130:7:11"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "25102:5:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "25112:7:11",
                "type": ""
              }
            ],
            "src": "25075:96:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25219:48:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "25229:32:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "25254:5:11"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "25247:6:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "25247:13:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "25240:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25240:21:11"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "25229:7:11"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "25201:5:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "25211:7:11",
                "type": ""
              }
            ],
            "src": "25177:90:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25317:105:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "25327:89:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "25342:5:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25349:66:11",
                        "type": "",
                        "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "25338:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25338:78:11"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "25327:7:11"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "25299:5:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "25309:7:11",
                "type": ""
              }
            ],
            "src": "25273:149:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25473:81:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "25483:65:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "25498:5:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25505:42:11",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "25494:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25494:54:11"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "25483:7:11"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "25455:5:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "25465:7:11",
                "type": ""
              }
            ],
            "src": "25428:126:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25605:32:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "25615:16:11",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "25626:5:11"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "25615:7:11"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "25587:5:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "25597:7:11",
                "type": ""
              }
            ],
            "src": "25560:77:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25694:103:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "25717:3:11"
                      },
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "25722:3:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "25727:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "25704:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25704:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25704:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "25775:3:11"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "25780:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "25771:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "25771:16:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25789:1:11",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "25764:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25764:27:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25764:27:11"
                }
              ]
            },
            "name": "copy_calldata_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "25676:3:11",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "25681:3:11",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "25686:6:11",
                "type": ""
              }
            ],
            "src": "25643:154:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25852:258:11",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "25862:10:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "25871:1:11",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "25866:1:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "25931:63:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "25956:3:11"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "25961:1:11"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "25952:3:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "25952:11:11"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "25975:3:11"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "25980:1:11"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "25971:3:11"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "25971:11:11"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "25965:5:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "25965:18:11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "25945:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25945:39:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "25945:39:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "25892:1:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "25895:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "25889:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25889:13:11"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "25903:19:11",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "25905:15:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "25914:1:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "25917:2:11",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "25910:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25910:10:11"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "25905:1:11"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "25885:3:11",
                    "statements": []
                  },
                  "src": "25881:113:11"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "26028:76:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "26078:3:11"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "26083:6:11"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "26074:3:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "26074:16:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26092:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "26067:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26067:27:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "26067:27:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "26009:1:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "26012:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "26006:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26006:13:11"
                  },
                  "nodeType": "YulIf",
                  "src": "26003:2:11"
                }
              ]
            },
            "name": "copy_memory_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "25834:3:11",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "25839:3:11",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "25844:6:11",
                "type": ""
              }
            ],
            "src": "25803:307:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "26167:269:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "26177:22:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "26191:4:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26197:1:11",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "26187:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26187:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "26177:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "26208:38:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "26238:4:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26244:1:11",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "26234:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26234:12:11"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "26212:18:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "26285:51:11",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "26299:27:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "26313:6:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26321:4:11",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "26309:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26309:17:11"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "26299:6:11"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "26265:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "26258:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26258:26:11"
                  },
                  "nodeType": "YulIf",
                  "src": "26255:2:11"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "26388:42:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "26402:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26402:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "26402:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "26352:18:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "26375:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "26383:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "26372:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "26372:14:11"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "26349:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26349:38:11"
                  },
                  "nodeType": "YulIf",
                  "src": "26346:2:11"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "26151:4:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "26160:6:11",
                "type": ""
              }
            ],
            "src": "26116:320:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "26485:190:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "26495:33:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "26522:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "26504:17:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26504:24:11"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "26495:5:11"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "26618:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "26620:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26620:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "26620:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "26543:5:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26550:66:11",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "26540:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26540:77:11"
                  },
                  "nodeType": "YulIf",
                  "src": "26537:2:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "26649:20:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "26660:5:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26667:1:11",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "26656:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26656:13:11"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "26649:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "increment_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "26471:5:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "26481:3:11",
                "type": ""
              }
            ],
            "src": "26442:233:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "26709:152:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26726:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26729:77:11",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "26719:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26719:88:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "26719:88:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26823:1:11",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26826:4:11",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "26816:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26816:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "26816:15:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26847:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26850:4:11",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "26840:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26840:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "26840:15:11"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "26681:180:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "26895:152:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26912:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26915:77:11",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "26905:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26905:88:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "26905:88:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27009:1:11",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27012:4:11",
                        "type": "",
                        "value": "0x12"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "27002:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27002:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "27002:15:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27033:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27036:4:11",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "27026:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27026:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "27026:15:11"
                }
              ]
            },
            "name": "panic_error_0x12",
            "nodeType": "YulFunctionDefinition",
            "src": "26867:180:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "27081:152:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27098:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27101:77:11",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "27091:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27091:88:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "27091:88:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27195:1:11",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27198:4:11",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "27188:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27188:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "27188:15:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27219:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27222:4:11",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "27212:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27212:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "27212:15:11"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "27053:180:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "27267:152:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27284:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27287:77:11",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "27277:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27277:88:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "27277:88:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27381:1:11",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27384:4:11",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "27374:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27374:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "27374:15:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27405:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "27408:4:11",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "27398:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27398:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "27398:15:11"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "27239:180:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "27473:54:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "27483:38:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "27501:5:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "27508:2:11",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "27497:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "27497:14:11"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "27517:2:11",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "27513:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "27513:7:11"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "27493:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27493:28:11"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "27483:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "round_up_to_mul_of_32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "27456:5:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "27466:6:11",
                "type": ""
              }
            ],
            "src": "27425:102:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "27576:79:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "27633:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "27642:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "27645:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "27635:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27635:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "27635:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "27599:5:11"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "27624:5:11"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "27606:17:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "27606:24:11"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "27596:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "27596:35:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "27589:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27589:43:11"
                  },
                  "nodeType": "YulIf",
                  "src": "27586:2:11"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "27569:5:11",
                "type": ""
              }
            ],
            "src": "27533:122:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "27701:76:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "27755:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "27764:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "27767:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "27757:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27757:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "27757:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "27724:5:11"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "27746:5:11"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_bool",
                              "nodeType": "YulIdentifier",
                              "src": "27731:14:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "27731:21:11"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "27721:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "27721:32:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "27714:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27714:40:11"
                  },
                  "nodeType": "YulIf",
                  "src": "27711:2:11"
                }
              ]
            },
            "name": "validator_revert_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "27694:5:11",
                "type": ""
              }
            ],
            "src": "27661:116:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "27825:78:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "27881:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "27890:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "27893:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "27883:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27883:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "27883:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "27848:5:11"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "27872:5:11"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_bytes4",
                              "nodeType": "YulIdentifier",
                              "src": "27855:16:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "27855:23:11"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "27845:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "27845:34:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "27838:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27838:42:11"
                  },
                  "nodeType": "YulIf",
                  "src": "27835:2:11"
                }
              ]
            },
            "name": "validator_revert_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "27818:5:11",
                "type": ""
              }
            ],
            "src": "27783:120:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "27952:79:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "28009:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "28018:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "28021:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "28011:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28011:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "28011:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "27975:5:11"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "28000:5:11"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "27982:17:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "27982:24:11"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "27972:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "27972:35:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "27965:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27965:43:11"
                  },
                  "nodeType": "YulIf",
                  "src": "27962:2:11"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "27945:5:11",
                "type": ""
              }
            ],
            "src": "27909:122:11"
          }
        ]
      },
      "contents": "{\n\n    function abi_decode_available_length_t_bytes_memory_ptr(src, length, end) -> array {\n        array := allocateMemory(array_allocation_size_t_bytes_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert(0, 0) }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_t_bool(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_t_bytes4(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_t_bytes4_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    // bytes\n    function abi_decode_t_bytes_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_bytes_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 96))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value3 := abi_decode_t_bytes_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_bool(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_bool(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_uint256t_uint256t_uint256t_uint256(headStart, dataEnd) -> value0, value1, value2, value3, value4 {\n        if slt(sub(dataEnd, headStart), 160) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 96\n\n            value3 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 128\n\n            value4 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_bytes4_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_bytes_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, length)\n    }\n\n    function abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 45)\n\n        mstore(add(pos, 0), \"ERC721: caller is not token owne\")\n\n        mstore(add(pos, 32), \"r or approved\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 50)\n\n        mstore(add(pos, 0), \"ERC721: transfer to non ERC721Re\")\n\n        mstore(add(pos, 32), \"ceiver implementer\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_1ec021132769161eef9439d418b0ada870000300a670258be4df3cc01d82a4a9_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 16)\n\n        mstore(add(pos, 0), \"Invalid loan NFT\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n\n        mstore(add(pos, 0), \"ERC721: transfer from incorrect \")\n\n        mstore(add(pos, 32), \"owner\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 28)\n\n        mstore(add(pos, 0), \"ERC721: token already minted\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_3b57e662a484f59cfe32942e0e4b7996130b2420cbc36974f3e264d51948bce8_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n\n        mstore(add(pos, 0), \"Insufficient funds to buy the lo\")\n\n        mstore(add(pos, 32), \"an NFT\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n\n        mstore(add(pos, 0), \"ERC721: transfer to the zero add\")\n\n        mstore(add(pos, 32), \"ress\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 25)\n\n        mstore(add(pos, 0), \"ERC721: approve to caller\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 41)\n\n        mstore(add(pos, 0), \"ERC721: address zero is not a va\")\n\n        mstore(add(pos, 32), \"lid owner\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_8554bcb06f40e512368ce0c22e340994ef57453adc4873717f860aab03b759fc_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 35)\n\n        mstore(add(pos, 0), \"Only owner can destroy the loan \")\n\n        mstore(add(pos, 32), \"NFT\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n\n        mstore(add(pos, 0), \"ERC721: mint to the zero address\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_8cb4f805150d07280d4e301d28db952bb63f4792367e32521b583e1a015acbb1_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 28)\n\n        mstore(add(pos, 0), \"Cannot buy your own loan NFT\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_a5bb3b3135c230e8997c79ca17c3e19f591f808ec5a038219ba0335bf90859ab_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n\n        mstore(add(pos, 0), \"Only borrower can repay the loan\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 24)\n\n        mstore(add(pos, 0), \"ERC721: invalid token ID\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n\n        mstore(add(pos, 0), \"ERC721: approval to current owne\")\n\n        mstore(add(pos, 32), \"r\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 61)\n\n        mstore(add(pos, 0), \"ERC721: approve caller is not to\")\n\n        mstore(add(pos, 32), \"ken owner or approved for all\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed(pos , value1, value0) -> end {\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value0,  pos)\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value1,  pos)\n\n        end := pos\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart , value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 128)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        mstore(add(headStart, 96), sub(tail, headStart))\n        tail := abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value3,  tail)\n\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_1ec021132769161eef9439d418b0ada870000300a670258be4df3cc01d82a4a9__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1ec021132769161eef9439d418b0ada870000300a670258be4df3cc01d82a4a9_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_3b57e662a484f59cfe32942e0e4b7996130b2420cbc36974f3e264d51948bce8__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_3b57e662a484f59cfe32942e0e4b7996130b2420cbc36974f3e264d51948bce8_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_8554bcb06f40e512368ce0c22e340994ef57453adc4873717f860aab03b759fc__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8554bcb06f40e512368ce0c22e340994ef57453adc4873717f860aab03b759fc_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_8cb4f805150d07280d4e301d28db952bb63f4792367e32521b583e1a015acbb1__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8cb4f805150d07280d4e301d28db952bb63f4792367e32521b583e1a015acbb1_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_a5bb3b3135c230e8997c79ca17c3e19f591f808ec5a038219ba0335bf90859ab__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_a5bb3b3135c230e8997c79ca17c3e19f591f808ec5a038219ba0335bf90859ab_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_uint256_t_uint256_t_uint256_t_uint256_t_address_t_bool__to_t_uint256_t_uint256_t_uint256_t_uint256_t_uint256_t_address_t_bool__fromStack_reversed(headStart , value6, value5, value4, value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 224)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value3,  add(headStart, 96))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value4,  add(headStart, 128))\n\n        abi_encode_t_address_to_t_address_fromStack(value5,  add(headStart, 160))\n\n        abi_encode_t_bool_to_t_bool_fromStack(value6,  add(headStart, 192))\n\n    }\n\n    function allocateMemory(size) -> memPtr {\n        memPtr := mload(64)\n        let newFreePtr := add(memPtr, size)\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function array_allocation_size_t_bytes_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        // round up\n        size := and(add(length, 0x1f), not(0x1f))\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function array_length_t_bytes_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length) -> updated_pos {\n        updated_pos := pos\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x != 0 and y > (maxValue / x)\n        if and(iszero(iszero(x)), gt(y, div(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n\n        product := mul(x, y)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function cleanup_t_bytes4(value) -> cleaned {\n        cleaned := and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_bytes4(value) {\n        if iszero(eq(value, cleanup_t_bytes4(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
      "id": 11,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "139:2099:10:-:0;;;479:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;563:5;570:7;1464:5:0;1456;:13;;;;;;;;;;;;:::i;:::-;;1489:7;1479;:17;;;;;;;;;;;;:::i;:::-;;1390:113;;598:1:10::1;589:6;:10;;;;622:11;609:10;:24;;;;479:161:::0;;;139:2099;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:353:11:-;;121:65;136:49;178:6;136:49;:::i;:::-;121:65;:::i;:::-;112:74;;209:6;202:5;195:21;247:4;240:5;236:16;285:3;276:6;271:3;267:16;264:25;261:2;;;302:1;299;292:12;261:2;315:39;347:6;342:3;337;315:39;:::i;:::-;102:258;;;;;;:::o;380:288::-;;496:3;489:4;481:6;477:17;473:27;463:2;;514:1;511;504:12;463:2;547:6;541:13;572:90;658:3;650:6;643:4;635:6;631:17;572:90;:::i;:::-;563:99;;453:215;;;;;:::o;674:143::-;;762:6;756:13;747:22;;778:33;805:5;778:33;:::i;:::-;737:80;;;;:::o;823:808::-;;;;996:2;984:9;975:7;971:23;967:32;964:2;;;1012:1;1009;1002:12;964:2;1076:1;1065:9;1061:17;1055:24;1106:18;1098:6;1095:30;1092:2;;;1138:1;1135;1128:12;1092:2;1166:74;1232:7;1223:6;1212:9;1208:22;1166:74;:::i;:::-;1156:84;;1026:224;1310:2;1299:9;1295:18;1289:25;1341:18;1333:6;1330:30;1327:2;;;1373:1;1370;1363:12;1327:2;1401:74;1467:7;1458:6;1447:9;1443:22;1401:74;:::i;:::-;1391:84;;1260:225;1524:2;1550:64;1606:7;1597:6;1586:9;1582:22;1550:64;:::i;:::-;1540:74;;1495:129;954:677;;;;;:::o;1637:283::-;;1703:2;1697:9;1687:19;;1745:4;1737:6;1733:17;1852:6;1840:10;1837:22;1816:18;1804:10;1801:34;1798:62;1795:2;;;1863:18;;:::i;:::-;1795:2;1903:10;1899:2;1892:22;1677:243;;;;:::o;1926:332::-;;2078:18;2070:6;2067:30;2064:2;;;2100:18;;:::i;:::-;2064:2;2185:4;2181:9;2174:4;2166:6;2162:17;2158:33;2150:41;;2246:4;2240;2236:15;2228:23;;1993:265;;;:::o;2264:77::-;;2330:5;2319:16;;2309:32;;;:::o;2347:307::-;2415:1;2425:113;2439:6;2436:1;2433:13;2425:113;;;2524:1;2519:3;2515:11;2509:18;2505:1;2500:3;2496:11;2489:39;2461:2;2458:1;2454:10;2449:15;;2425:113;;;2556:6;2553:1;2550:13;2547:2;;;2636:1;2627:6;2622:3;2618:16;2611:27;2547:2;2396:258;;;;:::o;2660:320::-;;2741:1;2735:4;2731:12;2721:22;;2788:1;2782:4;2778:12;2809:18;2799:2;;2865:4;2857:6;2853:17;2843:27;;2799:2;2927;2919:6;2916:14;2896:18;2893:38;2890:2;;;2946:18;;:::i;:::-;2890:2;2711:269;;;;:::o;2986:180::-;3034:77;3031:1;3024:88;3131:4;3128:1;3121:15;3155:4;3152:1;3145:15;3172:180;3220:77;3217:1;3210:88;3317:4;3314:1;3307:15;3341:4;3338:1;3331:15;3358:122;3431:24;3449:5;3431:24;:::i;:::-;3424:5;3421:35;3411:2;;3470:1;3467;3460:12;3411:2;3401:79;:::o;139:2099:10:-;;;;;;;",
  "deployedSourceMap": "139:2099:10:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1570:300:0;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2471:98;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3935:167;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3468:406;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4612:326;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5004:179;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1131:373:10;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2190:219:0;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1929:204;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1510:520:10;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2633:102:0;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4169:153;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;943:182:10;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5249:314:0;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;447:25:10;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2036:200;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2801:276:0;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;420:21:10;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;375:38;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;:::i;:::-;;;;;;;;4388:162:0;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;646:291:10;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1570:300:0;1672:4;1722:25;1707:40;;;:11;:40;;;;:104;;;;1778:33;1763:48;;;:11;:48;;;;1707:104;:156;;;;1827:36;1851:11;1827:23;:36::i;:::-;1707:156;1688:175;;1570:300;;;:::o;2471:98::-;2525:13;2557:5;2550:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2471:98;:::o;3935:167::-;4011:7;4030:23;4045:7;4030:14;:23::i;:::-;4071:15;:24;4087:7;4071:24;;;;;;;;;;;;;;;;;;;;;4064:31;;3935:167;;;:::o;3468:406::-;3548:13;3564:23;3579:7;3564:14;:23::i;:::-;3548:39;;3611:5;3605:11;;:2;:11;;;;3597:57;;;;;;;;;;;;:::i;:::-;;;;;;;;;3702:5;3686:21;;:12;:10;:12::i;:::-;:21;;;:62;;;;3711:37;3728:5;3735:12;:10;:12::i;:::-;3711:16;:37::i;:::-;3686:62;3665:170;;;;;;;;;;;;:::i;:::-;;;;;;;;;3846:21;3855:2;3859:7;3846:8;:21::i;:::-;3468:406;;;:::o;4612:326::-;4801:41;4820:12;:10;:12::i;:::-;4834:7;4801:18;:41::i;:::-;4793:99;;;;;;;;;;;;:::i;:::-;;;;;;;;;4903:28;4913:4;4919:2;4923:7;4903:9;:28::i;:::-;4612:326;;;:::o;5004:179::-;5137:39;5154:4;5160:2;5164:7;5137:39;;;;;;;;;;;;:16;:39::i;:::-;5004:179;;;:::o;1131:373:10:-;1217:10;1197:30;;:16;1205:7;1197;:16::i;:::-;:30;;;;1189:71;;;;;;;;;;;;:::i;:::-;;;;;;;;;1291:30;1313:7;1291:21;:30::i;:::-;1278:9;:43;;1270:94;;;;;;;;;;;;:::i;:::-;;;;;;;;;1374:13;1390:16;1398:7;1390;:16::i;:::-;1374:32;;1416:37;1426:5;1433:10;1445:7;1416:9;:37::i;:::-;1471:5;1463:23;;:34;1487:9;1463:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1131:373;;:::o;2190:219:0:-;2262:7;2281:13;2297:17;2306:7;2297:8;:17::i;:::-;2281:33;;2349:1;2332:19;;:5;:19;;;;2324:56;;;;;;;;;;;;:::i;:::-;;;;;;;;;2397:5;2390:12;;;2190:219;;;:::o;1929:204::-;2001:7;2045:1;2028:19;;:5;:19;;;;2020:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2110:9;:16;2120:5;2110:16;;;;;;;;;;;;;;;;2103:23;;1929:204;;;:::o;1510:520:10:-;1579:7;1634:1;1606:30;;:16;1614:7;1606;:16::i;:::-;:30;;;;1598:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;1699:16;1718:5;:14;1724:7;1718:14;;;;;;;;;;;1699:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1806:20;1886:4;:9;;;1880:3;:15;;;;:::i;:::-;1866:10;;1846:4;:17;;;1829:4;:14;;;:34;;;;:::i;:::-;:47;;;;:::i;:::-;:67;;;;:::i;:::-;1806:90;;1911:4;:13;;;1907:88;;;1970:4;:14;;;1955:12;:29;;;;:::i;:::-;1940:44;;1907:88;2011:12;2004:19;;;;1510:520;;;:::o;2633:102:0:-;2689:13;2721:7;2714:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2633:102;:::o;4169:153::-;4263:52;4282:12;:10;:12::i;:::-;4296:8;4306;4263:18;:52::i;:::-;4169:153;;:::o;943:182:10:-;1018:5;:14;1024:7;1018:14;;;;;;;;;;;:23;;;;;;;;;;;;1004:37;;:10;:37;;;996:82;;;;;;;;;;;;:::i;:::-;;;;;;;;;1114:4;1088:5;:14;1094:7;1088:14;;;;;;;;;;;:23;;;:30;;;;;;;;;;;;;;;;;;943:182;:::o;5249:314:0:-;5417:41;5436:12;:10;:12::i;:::-;5450:7;5417:18;:41::i;:::-;5409:99;;;;;;;;;;;;:::i;:::-;;;;;;;;;5518:38;5532:4;5538:2;5542:7;5551:4;5518:13;:38::i;:::-;5249:314;;;;:::o;447:25:10:-;;;;:::o;2036:200::-;2155:10;2135:30;;:16;2143:7;2135;:16::i;:::-;:30;;;2127:78;;;;;;;;;;;;:::i;:::-;;;;;;;;;2215:14;2221:7;2215:5;:14::i;:::-;2036:200;:::o;2801:276:0:-;2874:13;2899:23;2914:7;2899:14;:23::i;:::-;2933:21;2957:10;:8;:10::i;:::-;2933:34;;3008:1;2990:7;2984:21;:25;:86;;;;;;;;;;;;;;;;;3036:7;3045:18;:7;:16;:18::i;:::-;3019:45;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2984:86;2977:93;;;2801:276;;;:::o;420:21:10:-;;;;:::o;375:38::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4388:162:0:-;4485:4;4508:18;:25;4527:5;4508:25;;;;;;;;;;;;;;;:35;4534:8;4508:35;;;;;;;;;;;;;;;;;;;;;;;;;4501:42;;4388:162;;;;:::o;646:291:10:-;782:6;;:8;;;;;;;;;:::i;:::-;;;;;;816:79;;;;;;;;821:6;;816:79;;;;829:10;816:79;;;;841:13;816:79;;;;856:5;816:79;;;;863:13;816:79;;;;878:9;816:79;;;;;;889:5;816:79;;;;;800:5;:13;806:6;;800:13;;;;;;;;;;;:95;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;905:25;911:10;923:6;;905:5;:25::i;:::-;646:291;;;;;:::o;829:155:7:-;914:4;952:25;937:40;;;:11;:40;;;;930:47;;829:155;;;:::o;13466:133:0:-;13547:16;13555:7;13547;:16::i;:::-;13539:53;;;;;;;;;;;;:::i;:::-;;;;;;;;;13466:133;:::o;640:96:5:-;693:7;719:10;712:17;;640:96;:::o;12768:171:0:-;12869:2;12842:15;:24;12858:7;12842:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;12924:7;12920:2;12886:46;;12895:23;12910:7;12895:14;:23::i;:::-;12886:46;;;;;;;;;;;;12768:171;;:::o;7540:261::-;7633:4;7649:13;7665:23;7680:7;7665:14;:23::i;:::-;7649:39;;7717:5;7706:16;;:7;:16;;;:52;;;;7726:32;7743:5;7750:7;7726:16;:32::i;:::-;7706:52;:87;;;;7786:7;7762:31;;:20;7774:7;7762:11;:20::i;:::-;:31;;;7706:87;7698:96;;;7540:261;;;;:::o;11423:1233::-;11577:4;11550:31;;:23;11565:7;11550:14;:23::i;:::-;:31;;;11542:81;;;;;;;;;;;;:::i;:::-;;;;;;;;;11655:1;11641:16;;:2;:16;;;;11633:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;11709:42;11730:4;11736:2;11740:7;11749:1;11709:20;:42::i;:::-;11878:4;11851:31;;:23;11866:7;11851:14;:23::i;:::-;:31;;;11843:81;;;;;;;;;;;;:::i;:::-;;;;;;;;;11993:15;:24;12009:7;11993:24;;;;;;;;;;;;11986:31;;;;;;;;;;;12480:1;12461:9;:15;12471:4;12461:15;;;;;;;;;;;;;;;;:20;;;;;;;;;;;12512:1;12495:9;:13;12505:2;12495:13;;;;;;;;;;;;;;;;:18;;;;;;;;;;;12552:2;12533:7;:16;12541:7;12533:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;12589:7;12585:2;12570:27;;12579:4;12570:27;;;;;;;;;;;;12608:41;12628:4;12634:2;12638:7;12647:1;12608:19;:41::i;:::-;11423:1233;;;:::o;6838:115::-;6904:7;6930;:16;6938:7;6930:16;;;;;;;;;;;;;;;;;;;;;6923:23;;6838:115;;;:::o;13075:307::-;13225:8;13216:17;;:5;:17;;;;13208:55;;;;;;;;;;;;:::i;:::-;;;;;;;;;13311:8;13273:18;:25;13292:5;13273:25;;;;;;;;;;;;;;;:35;13299:8;13273:35;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;13356:8;13334:41;;13349:5;13334:41;;;13366:8;13334:41;;;;;;:::i;:::-;;;;;;;;13075:307;;;:::o;6424:305::-;6574:28;6584:4;6590:2;6594:7;6574:9;:28::i;:::-;6620:47;6643:4;6649:2;6653:7;6662:4;6620:22;:47::i;:::-;6612:110;;;;;;;;;;;;:::i;:::-;;;;;;;;;6424:305;;;;:::o;10337:762::-;10396:13;10412:23;10427:7;10412:14;:23::i;:::-;10396:39;;10446:51;10467:5;10482:1;10486:7;10495:1;10446:20;:51::i;:::-;10607:23;10622:7;10607:14;:23::i;:::-;10599:31;;10675:15;:24;10691:7;10675:24;;;;;;;;;;;;10668:31;;;;;;;;;;;10935:1;10915:9;:16;10925:5;10915:16;;;;;;;;;;;;;;;;:21;;;;;;;;;;;10963:7;:16;10971:7;10963:16;;;;;;;;;;;;10956:23;;;;;;;;;;;11023:7;11019:1;10995:36;;11004:5;10995:36;;;;;;;;;;;;11042:50;11062:5;11077:1;11081:7;11090:1;11042:19;:50::i;:::-;10337:762;;:::o;3319:92::-;3370:13;3395:9;;;;;;;;;;;;;;3319:92;:::o;415:696:6:-;471:13;520:14;557:1;537:17;548:5;537:10;:17::i;:::-;:21;520:38;;572:20;606:6;595:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;572:41;;627:11;753:6;749:2;745:15;737:6;733:28;726:35;;788:280;795:4;788:280;;;819:5;;;;;;;;958:8;953:2;946:5;942:14;937:30;932:3;924:44;1012:2;1003:11;;;;;;;;;;;;;;;;;1045:1;1036:5;:10;1032:21;;;1048:5;;1032:21;788:280;;;1088:6;1081:13;;;;;415:696;;;:::o;9091:920:0:-;9184:1;9170:16;;:2;:16;;;;9162:61;;;;;;;;;;;;:::i;:::-;;;;;;;;;9242:16;9250:7;9242;:16::i;:::-;9241:17;9233:58;;;;;;;;;;;;:::i;:::-;;;;;;;;;9302:48;9331:1;9335:2;9339:7;9348:1;9302:20;:48::i;:::-;9446:16;9454:7;9446;:16::i;:::-;9445:17;9437:58;;;;;;;;;;;;:::i;:::-;;;;;;;;;9854:1;9837:9;:13;9847:2;9837:13;;;;;;;;;;;;;;;;:18;;;;;;;;;;;9895:2;9876:7;:16;9884:7;9876:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;9938:7;9934:2;9913:33;;9930:1;9913:33;;;;;;;;;;;;9957:47;9985:1;9989:2;9993:7;10002:1;9957:19;:47::i;:::-;9091:920;;:::o;7256:126::-;7321:4;7373:1;7344:31;;:17;7353:7;7344:8;:17::i;:::-;:31;;;;7337:38;;7256:126;;;:::o;15698:154::-;;;;;:::o;16558:153::-;;;;;:::o;14151:831::-;14300:4;14320:15;:2;:13;;;:15::i;:::-;14316:660;;;14371:2;14355:36;;;14392:12;:10;:12::i;:::-;14406:4;14412:7;14421:4;14355:71;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;14351:573;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14610:1;14593:6;:13;:18;14589:321;;;14635:60;;;;;;;;;;:::i;:::-;;;;;;;;14589:321;14862:6;14856:13;14847:6;14843:2;14839:15;14832:38;14351:573;14486:41;;;14476:51;;;:6;:51;;;;14469:58;;;;;14316:660;14961:4;14954:11;;14151:831;;;;;;;:::o;9889:890:9:-;9942:7;9961:14;9978:1;9961:18;;10026:6;10017:5;:15;10013:99;;10061:6;10052:15;;;;;;;;;;;;;;;;;10095:2;10085:12;;;;10013:99;10138:6;10129:5;:15;10125:99;;10173:6;10164:15;;;;;;;;;;;;;;;;;10207:2;10197:12;;;;10125:99;10250:6;10241:5;:15;10237:99;;10285:6;10276:15;;;;;;;;;;;;;;;;;10319:2;10309:12;;;;10237:99;10362:5;10353;:14;10349:96;;10396:5;10387:14;;;;;;;;;;;;;;;;;10429:1;10419:11;;;;10349:96;10471:5;10462;:14;10458:96;;10505:5;10496:14;;;;;;;;;;;;;;;;;10538:1;10528:11;;;;10458:96;10580:5;10571;:14;10567:96;;10614:5;10605:14;;;;;;;;;;;;;;;;;10647:1;10637:11;;;;10567:96;10689:5;10680;:14;10676:64;;10724:1;10714:11;;;;10676:64;10766:6;10759:13;;;9889:890;;;:::o;1175:320:4:-;1235:4;1487:1;1465:7;:12;;;;;;;;;;;;;;;;;;;;;;;;;:19;:23;1458:30;;1175:320;;;:::o;7:342:11:-;;109:64;124:48;165:6;124:48;:::i;:::-;109:64;:::i;:::-;100:73;;196:6;189:5;182:21;234:4;227:5;223:16;272:3;263:6;258:3;254:16;251:25;248:2;;;289:1;286;279:12;248:2;302:41;336:6;331:3;326;302:41;:::i;:::-;90:259;;;;;;:::o;355:139::-;;439:6;426:20;417:29;;455:33;482:5;455:33;:::i;:::-;407:87;;;;:::o;500:133::-;;581:6;568:20;559:29;;597:30;621:5;597:30;:::i;:::-;549:84;;;;:::o;639:137::-;;722:6;709:20;700:29;;738:32;764:5;738:32;:::i;:::-;690:86;;;;:::o;782:141::-;;869:6;863:13;854:22;;885:32;911:5;885:32;:::i;:::-;844:79;;;;:::o;942:271::-;;1046:3;1039:4;1031:6;1027:17;1023:27;1013:2;;1064:1;1061;1054:12;1013:2;1104:6;1091:20;1129:78;1203:3;1195:6;1188:4;1180:6;1176:17;1129:78;:::i;:::-;1120:87;;1003:210;;;;;:::o;1219:139::-;;1303:6;1290:20;1281:29;;1319:33;1346:5;1319:33;:::i;:::-;1271:87;;;;:::o;1364:262::-;;1472:2;1460:9;1451:7;1447:23;1443:32;1440:2;;;1488:1;1485;1478:12;1440:2;1531:1;1556:53;1601:7;1592:6;1581:9;1577:22;1556:53;:::i;:::-;1546:63;;1502:117;1430:196;;;;:::o;1632:407::-;;;1757:2;1745:9;1736:7;1732:23;1728:32;1725:2;;;1773:1;1770;1763:12;1725:2;1816:1;1841:53;1886:7;1877:6;1866:9;1862:22;1841:53;:::i;:::-;1831:63;;1787:117;1943:2;1969:53;2014:7;2005:6;1994:9;1990:22;1969:53;:::i;:::-;1959:63;;1914:118;1715:324;;;;;:::o;2045:552::-;;;;2187:2;2175:9;2166:7;2162:23;2158:32;2155:2;;;2203:1;2200;2193:12;2155:2;2246:1;2271:53;2316:7;2307:6;2296:9;2292:22;2271:53;:::i;:::-;2261:63;;2217:117;2373:2;2399:53;2444:7;2435:6;2424:9;2420:22;2399:53;:::i;:::-;2389:63;;2344:118;2501:2;2527:53;2572:7;2563:6;2552:9;2548:22;2527:53;:::i;:::-;2517:63;;2472:118;2145:452;;;;;:::o;2603:809::-;;;;;2771:3;2759:9;2750:7;2746:23;2742:33;2739:2;;;2788:1;2785;2778:12;2739:2;2831:1;2856:53;2901:7;2892:6;2881:9;2877:22;2856:53;:::i;:::-;2846:63;;2802:117;2958:2;2984:53;3029:7;3020:6;3009:9;3005:22;2984:53;:::i;:::-;2974:63;;2929:118;3086:2;3112:53;3157:7;3148:6;3137:9;3133:22;3112:53;:::i;:::-;3102:63;;3057:118;3242:2;3231:9;3227:18;3214:32;3273:18;3265:6;3262:30;3259:2;;;3305:1;3302;3295:12;3259:2;3333:62;3387:7;3378:6;3367:9;3363:22;3333:62;:::i;:::-;3323:72;;3185:220;2729:683;;;;;;;:::o;3418:401::-;;;3540:2;3528:9;3519:7;3515:23;3511:32;3508:2;;;3556:1;3553;3546:12;3508:2;3599:1;3624:53;3669:7;3660:6;3649:9;3645:22;3624:53;:::i;:::-;3614:63;;3570:117;3726:2;3752:50;3794:7;3785:6;3774:9;3770:22;3752:50;:::i;:::-;3742:60;;3697:115;3498:321;;;;;:::o;3825:407::-;;;3950:2;3938:9;3929:7;3925:23;3921:32;3918:2;;;3966:1;3963;3956:12;3918:2;4009:1;4034:53;4079:7;4070:6;4059:9;4055:22;4034:53;:::i;:::-;4024:63;;3980:117;4136:2;4162:53;4207:7;4198:6;4187:9;4183:22;4162:53;:::i;:::-;4152:63;;4107:118;3908:324;;;;;:::o;4238:844::-;;;;;;4414:3;4402:9;4393:7;4389:23;4385:33;4382:2;;;4431:1;4428;4421:12;4382:2;4474:1;4499:53;4544:7;4535:6;4524:9;4520:22;4499:53;:::i;:::-;4489:63;;4445:117;4601:2;4627:53;4672:7;4663:6;4652:9;4648:22;4627:53;:::i;:::-;4617:63;;4572:118;4729:2;4755:53;4800:7;4791:6;4780:9;4776:22;4755:53;:::i;:::-;4745:63;;4700:118;4857:2;4883:53;4928:7;4919:6;4908:9;4904:22;4883:53;:::i;:::-;4873:63;;4828:118;4985:3;5012:53;5057:7;5048:6;5037:9;5033:22;5012:53;:::i;:::-;5002:63;;4956:119;4372:710;;;;;;;;:::o;5088:260::-;;5195:2;5183:9;5174:7;5170:23;5166:32;5163:2;;;5211:1;5208;5201:12;5163:2;5254:1;5279:52;5323:7;5314:6;5303:9;5299:22;5279:52;:::i;:::-;5269:62;;5225:116;5153:195;;;;:::o;5354:282::-;;5472:2;5460:9;5451:7;5447:23;5443:32;5440:2;;;5488:1;5485;5478:12;5440:2;5531:1;5556:63;5611:7;5602:6;5591:9;5587:22;5556:63;:::i;:::-;5546:73;;5502:127;5430:206;;;;:::o;5642:262::-;;5750:2;5738:9;5729:7;5725:23;5721:32;5718:2;;;5766:1;5763;5756:12;5718:2;5809:1;5834:53;5879:7;5870:6;5859:9;5855:22;5834:53;:::i;:::-;5824:63;;5780:117;5708:196;;;;:::o;5910:118::-;5997:24;6015:5;5997:24;:::i;:::-;5992:3;5985:37;5975:53;;:::o;6034:109::-;6115:21;6130:5;6115:21;:::i;:::-;6110:3;6103:34;6093:50;;:::o;6149:360::-;;6263:38;6295:5;6263:38;:::i;:::-;6317:70;6380:6;6375:3;6317:70;:::i;:::-;6310:77;;6396:52;6441:6;6436:3;6429:4;6422:5;6418:16;6396:52;:::i;:::-;6473:29;6495:6;6473:29;:::i;:::-;6468:3;6464:39;6457:46;;6239:270;;;;;:::o;6515:364::-;;6631:39;6664:5;6631:39;:::i;:::-;6686:71;6750:6;6745:3;6686:71;:::i;:::-;6679:78;;6766:52;6811:6;6806:3;6799:4;6792:5;6788:16;6766:52;:::i;:::-;6843:29;6865:6;6843:29;:::i;:::-;6838:3;6834:39;6827:46;;6607:272;;;;;:::o;6885:377::-;;7019:39;7052:5;7019:39;:::i;:::-;7074:89;7156:6;7151:3;7074:89;:::i;:::-;7067:96;;7172:52;7217:6;7212:3;7205:4;7198:5;7194:16;7172:52;:::i;:::-;7249:6;7244:3;7240:16;7233:23;;6995:267;;;;;:::o;7268:377::-;;7431:67;7495:2;7490:3;7431:67;:::i;:::-;7424:74;;7528:34;7524:1;7519:3;7515:11;7508:55;7594:15;7589:2;7584:3;7580:12;7573:37;7636:2;7631:3;7627:12;7620:19;;7414:231;;;:::o;7651:382::-;;7814:67;7878:2;7873:3;7814:67;:::i;:::-;7807:74;;7911:34;7907:1;7902:3;7898:11;7891:55;7977:20;7972:2;7967:3;7963:12;7956:42;8024:2;8019:3;8015:12;8008:19;;7797:236;;;:::o;8039:314::-;;8202:67;8266:2;8261:3;8202:67;:::i;:::-;8195:74;;8299:18;8295:1;8290:3;8286:11;8279:39;8344:2;8339:3;8335:12;8328:19;;8185:168;;;:::o;8359:369::-;;8522:67;8586:2;8581:3;8522:67;:::i;:::-;8515:74;;8619:34;8615:1;8610:3;8606:11;8599:55;8685:7;8680:2;8675:3;8671:12;8664:29;8719:2;8714:3;8710:12;8703:19;;8505:223;;;:::o;8734:326::-;;8897:67;8961:2;8956:3;8897:67;:::i;:::-;8890:74;;8994:30;8990:1;8985:3;8981:11;8974:51;9051:2;9046:3;9042:12;9035:19;;8880:180;;;:::o;9066:370::-;;9229:67;9293:2;9288:3;9229:67;:::i;:::-;9222:74;;9326:34;9322:1;9317:3;9313:11;9306:55;9392:8;9387:2;9382:3;9378:12;9371:30;9427:2;9422:3;9418:12;9411:19;;9212:224;;;:::o;9442:368::-;;9605:67;9669:2;9664:3;9605:67;:::i;:::-;9598:74;;9702:34;9698:1;9693:3;9689:11;9682:55;9768:6;9763:2;9758:3;9754:12;9747:28;9801:2;9796:3;9792:12;9785:19;;9588:222;;;:::o;9816:323::-;;9979:67;10043:2;10038:3;9979:67;:::i;:::-;9972:74;;10076:27;10072:1;10067:3;10063:11;10056:48;10130:2;10125:3;10121:12;10114:19;;9962:177;;;:::o;10145:373::-;;10308:67;10372:2;10367:3;10308:67;:::i;:::-;10301:74;;10405:34;10401:1;10396:3;10392:11;10385:55;10471:11;10466:2;10461:3;10457:12;10450:33;10509:2;10504:3;10500:12;10493:19;;10291:227;;;:::o;10524:367::-;;10687:67;10751:2;10746:3;10687:67;:::i;:::-;10680:74;;10784:34;10780:1;10775:3;10771:11;10764:55;10850:5;10845:2;10840:3;10836:12;10829:27;10882:2;10877:3;10873:12;10866:19;;10670:221;;;:::o;10897:330::-;;11060:67;11124:2;11119:3;11060:67;:::i;:::-;11053:74;;11157:34;11153:1;11148:3;11144:11;11137:55;11218:2;11213:3;11209:12;11202:19;;11043:184;;;:::o;11233:326::-;;11396:67;11460:2;11455:3;11396:67;:::i;:::-;11389:74;;11493:30;11489:1;11484:3;11480:11;11473:51;11550:2;11545:3;11541:12;11534:19;;11379:180;;;:::o;11565:330::-;;11728:67;11792:2;11787:3;11728:67;:::i;:::-;11721:74;;11825:34;11821:1;11816:3;11812:11;11805:55;11886:2;11881:3;11877:12;11870:19;;11711:184;;;:::o;11901:322::-;;12064:67;12128:2;12123:3;12064:67;:::i;:::-;12057:74;;12161:26;12157:1;12152:3;12148:11;12141:47;12214:2;12209:3;12205:12;12198:19;;12047:176;;;:::o;12229:365::-;;12392:67;12456:2;12451:3;12392:67;:::i;:::-;12385:74;;12489:34;12485:1;12480:3;12476:11;12469:55;12555:3;12550:2;12545:3;12541:12;12534:25;12585:2;12580:3;12576:12;12569:19;;12375:219;;;:::o;12600:393::-;;12763:67;12827:2;12822:3;12763:67;:::i;:::-;12756:74;;12860:34;12856:1;12851:3;12847:11;12840:55;12926:31;12921:2;12916:3;12912:12;12905:53;12984:2;12979:3;12975:12;12968:19;;12746:247;;;:::o;12999:118::-;13086:24;13104:5;13086:24;:::i;:::-;13081:3;13074:37;13064:53;;:::o;13123:435::-;;13325:95;13416:3;13407:6;13325:95;:::i;:::-;13318:102;;13437:95;13528:3;13519:6;13437:95;:::i;:::-;13430:102;;13549:3;13542:10;;13307:251;;;;;:::o;13564:222::-;;13695:2;13684:9;13680:18;13672:26;;13708:71;13776:1;13765:9;13761:17;13752:6;13708:71;:::i;:::-;13662:124;;;;:::o;13792:640::-;;14025:3;14014:9;14010:19;14002:27;;14039:71;14107:1;14096:9;14092:17;14083:6;14039:71;:::i;:::-;14120:72;14188:2;14177:9;14173:18;14164:6;14120:72;:::i;:::-;14202;14270:2;14259:9;14255:18;14246:6;14202:72;:::i;:::-;14321:9;14315:4;14311:20;14306:2;14295:9;14291:18;14284:48;14349:76;14420:4;14411:6;14349:76;:::i;:::-;14341:84;;13992:440;;;;;;;:::o;14438:210::-;;14563:2;14552:9;14548:18;14540:26;;14576:65;14638:1;14627:9;14623:17;14614:6;14576:65;:::i;:::-;14530:118;;;;:::o;14654:313::-;;14805:2;14794:9;14790:18;14782:26;;14854:9;14848:4;14844:20;14840:1;14829:9;14825:17;14818:47;14882:78;14955:4;14946:6;14882:78;:::i;:::-;14874:86;;14772:195;;;;:::o;14973:419::-;;15177:2;15166:9;15162:18;15154:26;;15226:9;15220:4;15216:20;15212:1;15201:9;15197:17;15190:47;15254:131;15380:4;15254:131;:::i;:::-;15246:139;;15144:248;;;:::o;15398:419::-;;15602:2;15591:9;15587:18;15579:26;;15651:9;15645:4;15641:20;15637:1;15626:9;15622:17;15615:47;15679:131;15805:4;15679:131;:::i;:::-;15671:139;;15569:248;;;:::o;15823:419::-;;16027:2;16016:9;16012:18;16004:26;;16076:9;16070:4;16066:20;16062:1;16051:9;16047:17;16040:47;16104:131;16230:4;16104:131;:::i;:::-;16096:139;;15994:248;;;:::o;16248:419::-;;16452:2;16441:9;16437:18;16429:26;;16501:9;16495:4;16491:20;16487:1;16476:9;16472:17;16465:47;16529:131;16655:4;16529:131;:::i;:::-;16521:139;;16419:248;;;:::o;16673:419::-;;16877:2;16866:9;16862:18;16854:26;;16926:9;16920:4;16916:20;16912:1;16901:9;16897:17;16890:47;16954:131;17080:4;16954:131;:::i;:::-;16946:139;;16844:248;;;:::o;17098:419::-;;17302:2;17291:9;17287:18;17279:26;;17351:9;17345:4;17341:20;17337:1;17326:9;17322:17;17315:47;17379:131;17505:4;17379:131;:::i;:::-;17371:139;;17269:248;;;:::o;17523:419::-;;17727:2;17716:9;17712:18;17704:26;;17776:9;17770:4;17766:20;17762:1;17751:9;17747:17;17740:47;17804:131;17930:4;17804:131;:::i;:::-;17796:139;;17694:248;;;:::o;17948:419::-;;18152:2;18141:9;18137:18;18129:26;;18201:9;18195:4;18191:20;18187:1;18176:9;18172:17;18165:47;18229:131;18355:4;18229:131;:::i;:::-;18221:139;;18119:248;;;:::o;18373:419::-;;18577:2;18566:9;18562:18;18554:26;;18626:9;18620:4;18616:20;18612:1;18601:9;18597:17;18590:47;18654:131;18780:4;18654:131;:::i;:::-;18646:139;;18544:248;;;:::o;18798:419::-;;19002:2;18991:9;18987:18;18979:26;;19051:9;19045:4;19041:20;19037:1;19026:9;19022:17;19015:47;19079:131;19205:4;19079:131;:::i;:::-;19071:139;;18969:248;;;:::o;19223:419::-;;19427:2;19416:9;19412:18;19404:26;;19476:9;19470:4;19466:20;19462:1;19451:9;19447:17;19440:47;19504:131;19630:4;19504:131;:::i;:::-;19496:139;;19394:248;;;:::o;19648:419::-;;19852:2;19841:9;19837:18;19829:26;;19901:9;19895:4;19891:20;19887:1;19876:9;19872:17;19865:47;19929:131;20055:4;19929:131;:::i;:::-;19921:139;;19819:248;;;:::o;20073:419::-;;20277:2;20266:9;20262:18;20254:26;;20326:9;20320:4;20316:20;20312:1;20301:9;20297:17;20290:47;20354:131;20480:4;20354:131;:::i;:::-;20346:139;;20244:248;;;:::o;20498:419::-;;20702:2;20691:9;20687:18;20679:26;;20751:9;20745:4;20741:20;20737:1;20726:9;20722:17;20715:47;20779:131;20905:4;20779:131;:::i;:::-;20771:139;;20669:248;;;:::o;20923:419::-;;21127:2;21116:9;21112:18;21104:26;;21176:9;21170:4;21166:20;21162:1;21151:9;21147:17;21140:47;21204:131;21330:4;21204:131;:::i;:::-;21196:139;;21094:248;;;:::o;21348:419::-;;21552:2;21541:9;21537:18;21529:26;;21601:9;21595:4;21591:20;21587:1;21576:9;21572:17;21565:47;21629:131;21755:4;21629:131;:::i;:::-;21621:139;;21519:248;;;:::o;21773:222::-;;21904:2;21893:9;21889:18;21881:26;;21917:71;21985:1;21974:9;21970:17;21961:6;21917:71;:::i;:::-;21871:124;;;;:::o;22001:874::-;;22294:3;22283:9;22279:19;22271:27;;22308:71;22376:1;22365:9;22361:17;22352:6;22308:71;:::i;:::-;22389:72;22457:2;22446:9;22442:18;22433:6;22389:72;:::i;:::-;22471;22539:2;22528:9;22524:18;22515:6;22471:72;:::i;:::-;22553;22621:2;22610:9;22606:18;22597:6;22553:72;:::i;:::-;22635:73;22703:3;22692:9;22688:19;22679:6;22635:73;:::i;:::-;22718;22786:3;22775:9;22771:19;22762:6;22718:73;:::i;:::-;22801:67;22863:3;22852:9;22848:19;22839:6;22801:67;:::i;:::-;22261:614;;;;;;;;;;:::o;22881:283::-;;22947:2;22941:9;22931:19;;22989:4;22981:6;22977:17;23096:6;23084:10;23081:22;23060:18;23048:10;23045:34;23042:62;23039:2;;;23107:18;;:::i;:::-;23039:2;23147:10;23143:2;23136:22;22921:243;;;;:::o;23170:331::-;;23321:18;23313:6;23310:30;23307:2;;;23343:18;;:::i;:::-;23307:2;23428:4;23424:9;23417:4;23409:6;23405:17;23401:33;23393:41;;23489:4;23483;23479:15;23471:23;;23236:265;;;:::o;23507:98::-;;23592:5;23586:12;23576:22;;23565:40;;;:::o;23611:99::-;;23697:5;23691:12;23681:22;;23670:40;;;:::o;23716:168::-;;23833:6;23828:3;23821:19;23873:4;23868:3;23864:14;23849:29;;23811:73;;;;:::o;23890:169::-;;24008:6;24003:3;23996:19;24048:4;24043:3;24039:14;24024:29;;23986:73;;;;:::o;24065:148::-;;24204:3;24189:18;;24179:34;;;;:::o;24219:305::-;;24278:20;24296:1;24278:20;:::i;:::-;24273:25;;24312:20;24330:1;24312:20;:::i;:::-;24307:25;;24466:1;24398:66;24394:74;24391:1;24388:81;24385:2;;;24472:18;;:::i;:::-;24385:2;24516:1;24513;24509:9;24502:16;;24263:261;;;;:::o;24530:185::-;;24587:20;24605:1;24587:20;:::i;:::-;24582:25;;24621:20;24639:1;24621:20;:::i;:::-;24616:25;;24660:1;24650:2;;24665:18;;:::i;:::-;24650:2;24707:1;24704;24700:9;24695:14;;24572:143;;;;:::o;24721:348::-;;24784:20;24802:1;24784:20;:::i;:::-;24779:25;;24818:20;24836:1;24818:20;:::i;:::-;24813:25;;25006:1;24938:66;24934:74;24931:1;24928:81;24923:1;24916:9;24909:17;24905:105;24902:2;;;25013:18;;:::i;:::-;24902:2;25061:1;25058;25054:9;25043:20;;24769:300;;;;:::o;25075:96::-;;25141:24;25159:5;25141:24;:::i;:::-;25130:35;;25120:51;;;:::o;25177:90::-;;25254:5;25247:13;25240:21;25229:32;;25219:48;;;:::o;25273:149::-;;25349:66;25342:5;25338:78;25327:89;;25317:105;;;:::o;25428:126::-;;25505:42;25498:5;25494:54;25483:65;;25473:81;;;:::o;25560:77::-;;25626:5;25615:16;;25605:32;;;:::o;25643:154::-;25727:6;25722:3;25717;25704:30;25789:1;25780:6;25775:3;25771:16;25764:27;25694:103;;;:::o;25803:307::-;25871:1;25881:113;25895:6;25892:1;25889:13;25881:113;;;25980:1;25975:3;25971:11;25965:18;25961:1;25956:3;25952:11;25945:39;25917:2;25914:1;25910:10;25905:15;;25881:113;;;26012:6;26009:1;26006:13;26003:2;;;26092:1;26083:6;26078:3;26074:16;26067:27;26003:2;25852:258;;;;:::o;26116:320::-;;26197:1;26191:4;26187:12;26177:22;;26244:1;26238:4;26234:12;26265:18;26255:2;;26321:4;26313:6;26309:17;26299:27;;26255:2;26383;26375:6;26372:14;26352:18;26349:38;26346:2;;;26402:18;;:::i;:::-;26346:2;26167:269;;;;:::o;26442:233::-;;26504:24;26522:5;26504:24;:::i;:::-;26495:33;;26550:66;26543:5;26540:77;26537:2;;;26620:18;;:::i;:::-;26537:2;26667:1;26660:5;26656:13;26649:20;;26485:190;;;:::o;26681:180::-;26729:77;26726:1;26719:88;26826:4;26823:1;26816:15;26850:4;26847:1;26840:15;26867:180;26915:77;26912:1;26905:88;27012:4;27009:1;27002:15;27036:4;27033:1;27026:15;27053:180;27101:77;27098:1;27091:88;27198:4;27195:1;27188:15;27222:4;27219:1;27212:15;27239:180;27287:77;27284:1;27277:88;27384:4;27381:1;27374:15;27408:4;27405:1;27398:15;27425:102;;27517:2;27513:7;27508:2;27501:5;27497:14;27493:28;27483:38;;27473:54;;;:::o;27533:122::-;27606:24;27624:5;27606:24;:::i;:::-;27599:5;27596:35;27586:2;;27645:1;27642;27635:12;27586:2;27576:79;:::o;27661:116::-;27731:21;27746:5;27731:21;:::i;:::-;27724:5;27721:32;27711:2;;27767:1;27764;27757:12;27711:2;27701:76;:::o;27783:120::-;27855:23;27872:5;27855:23;:::i;:::-;27848:5;27845:34;27835:2;;27893:1;27890;27883:12;27835:2;27825:78;:::o;27909:122::-;27982:24;28000:5;27982:24;:::i;:::-;27975:5;27972:35;27962:2;;28021:1;28018;28011:12;27962:2;27952:79;:::o",
  "source": "//SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\n\n// Loan Contract\ncontract LoanNFT is ERC721 {\n    struct Loan {\n        uint256 id;\n        uint256 principal;\n        uint256 interestRate;\n        uint256 term;\n        uint256 maturityDate;\n        address borrower;\n        bool isRepaid;\n    }\n\n    mapping (uint256 => Loan) public loans;\n\n    uint256 public loanId;\n    uint256 public couponRate;\n\n    constructor(string memory _name, string memory _symbol, uint256 _couponRate) ERC721(_name, _symbol) {\n        loanId = 0;\n        couponRate = _couponRate;\n    }\n\n    function issueLoan(address _borrower, uint256 _principal, uint256 _interestRate, uint256 _term, uint256 _maturityDate) public {\n        loanId++;\n        loans[loanId] = Loan(loanId, _principal, _interestRate, _term, _maturityDate, _borrower, false);\n        _mint(msg.sender, loanId);\n    }\n\n    function repayLoan(uint256 _loanId) public {\n        require(msg.sender == loans[_loanId].borrower, \"Only borrower can repay the loan\");\n        loans[_loanId].isRepaid = true;\n    }\n\n    function buyNFT(uint256 _loanId) public payable {\n        require(ownerOf(_loanId) != msg.sender, \"Cannot buy your own loan NFT\");\n        require(msg.value >= calculateCouponAmount(_loanId), \"Insufficient funds to buy the loan NFT\");\n        address owner = ownerOf(_loanId);\n        _transfer(owner, msg.sender, _loanId);\n        payable(owner).transfer(msg.value);\n    }\n\n    function calculateCouponAmount(uint256 _loanId) public view returns (uint256) {\n        require(ownerOf(_loanId) != address(0), \"Invalid loan NFT\"); // address of the loan contract\n        Loan memory loan = loans[_loanId];\n        // calculate the buyback price based on the coupon rate\n        uint256 couponAmount = loan.principal * loan.interestRate * couponRate / (100 * loan.term); \n        if (loan.isRepaid) {\n            couponAmount = couponAmount + loan.principal;\n        }\n        return couponAmount;\n    }\n\n    function destroyNFT(uint256 _loanId) public { // destroy the NFT after buying back\n        require(ownerOf(_loanId) == msg.sender, \"Only owner can destroy the loan NFT\");\n        _burn(_loanId);\n    }\n}\n",
  "sourcePath": "/Users/swetamukkollu/Desktop/phase2/contracts/LoanNFT.sol",
  "ast": {
    "absolutePath": "project:/contracts/LoanNFT.sol",
    "exportedSymbols": {
      "Address": [
        1417
      ],
      "Context": [
        1439
      ],
      "ERC165": [
        1638
      ],
      "ERC721": [
        926
      ],
      "IERC165": [
        1650
      ],
      "IERC721": [
        1042
      ],
      "IERC721Metadata": [
        1087
      ],
      "IERC721Receiver": [
        1060
      ],
      "LoanNFT": [
        2752
      ],
      "Math": [
        2515
      ],
      "Strings": [
        1614
      ]
    },
    "id": 2753,
    "license": "UNLICENSED",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2517,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "38:23:10"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 2518,
        "nodeType": "ImportDirective",
        "scope": 2753,
        "sourceUnit": 927,
        "src": "63:57:10",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 2519,
              "name": "ERC721",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 926,
              "src": "159:6:10"
            },
            "id": 2520,
            "nodeType": "InheritanceSpecifier",
            "src": "159:6:10"
          }
        ],
        "contractDependencies": [
          926,
          1042,
          1087,
          1439,
          1638,
          1650
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 2752,
        "linearizedBaseContracts": [
          2752,
          926,
          1087,
          1042,
          1638,
          1650,
          1439
        ],
        "name": "LoanNFT",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "LoanNFT.Loan",
            "id": 2535,
            "members": [
              {
                "constant": false,
                "id": 2522,
                "mutability": "mutable",
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 2535,
                "src": "194:10:10",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 2521,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "194:7:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 2524,
                "mutability": "mutable",
                "name": "principal",
                "nodeType": "VariableDeclaration",
                "scope": 2535,
                "src": "214:17:10",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 2523,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "214:7:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 2526,
                "mutability": "mutable",
                "name": "interestRate",
                "nodeType": "VariableDeclaration",
                "scope": 2535,
                "src": "241:20:10",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 2525,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "241:7:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 2528,
                "mutability": "mutable",
                "name": "term",
                "nodeType": "VariableDeclaration",
                "scope": 2535,
                "src": "271:12:10",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 2527,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "271:7:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 2530,
                "mutability": "mutable",
                "name": "maturityDate",
                "nodeType": "VariableDeclaration",
                "scope": 2535,
                "src": "293:20:10",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 2529,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "293:7:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 2532,
                "mutability": "mutable",
                "name": "borrower",
                "nodeType": "VariableDeclaration",
                "scope": 2535,
                "src": "323:16:10",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 2531,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "323:7:10",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 2534,
                "mutability": "mutable",
                "name": "isRepaid",
                "nodeType": "VariableDeclaration",
                "scope": 2535,
                "src": "349:13:10",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 2533,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "349:4:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Loan",
            "nodeType": "StructDefinition",
            "scope": 2752,
            "src": "172:197:10",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "e1ec3c68",
            "id": 2540,
            "mutability": "mutable",
            "name": "loans",
            "nodeType": "VariableDeclaration",
            "scope": 2752,
            "src": "375:38:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_$2535_storage_$",
              "typeString": "mapping(uint256 => struct LoanNFT.Loan)"
            },
            "typeName": {
              "id": 2539,
              "keyType": {
                "id": 2536,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "384:7:10",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "375:25:10",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_$2535_storage_$",
                "typeString": "mapping(uint256 => struct LoanNFT.Loan)"
              },
              "valueType": {
                "id": 2538,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 2537,
                  "name": "Loan",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2535,
                  "src": "395:4:10"
                },
                "referencedDeclaration": 2535,
                "src": "395:4:10",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Loan_$2535_storage_ptr",
                  "typeString": "struct LoanNFT.Loan"
                }
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "c95669a5",
            "id": 2542,
            "mutability": "mutable",
            "name": "loanId",
            "nodeType": "VariableDeclaration",
            "scope": 2752,
            "src": "420:21:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2541,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "420:7:10",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "c0bcb26f",
            "id": 2544,
            "mutability": "mutable",
            "name": "couponRate",
            "nodeType": "VariableDeclaration",
            "scope": 2752,
            "src": "447:25:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2543,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "447:7:10",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 2565,
              "nodeType": "Block",
              "src": "579:61:10",
              "statements": [
                {
                  "expression": {
                    "id": 2559,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2557,
                      "name": "loanId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2542,
                      "src": "589:6:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 2558,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "598:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "589:10:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2560,
                  "nodeType": "ExpressionStatement",
                  "src": "589:10:10"
                },
                {
                  "expression": {
                    "id": 2563,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2561,
                      "name": "couponRate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2544,
                      "src": "609:10:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 2562,
                      "name": "_couponRate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2550,
                      "src": "622:11:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "609:24:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2564,
                  "nodeType": "ExpressionStatement",
                  "src": "609:24:10"
                }
              ]
            },
            "id": 2566,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 2553,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2546,
                    "src": "563:5:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "id": 2554,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2548,
                    "src": "570:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 2555,
                "modifierName": {
                  "id": 2552,
                  "name": "ERC721",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 926,
                  "src": "556:6:10"
                },
                "nodeType": "ModifierInvocation",
                "src": "556:22:10"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2551,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2546,
                  "mutability": "mutable",
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 2566,
                  "src": "491:19:10",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2545,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "491:6:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2548,
                  "mutability": "mutable",
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 2566,
                  "src": "512:21:10",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2547,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "512:6:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2550,
                  "mutability": "mutable",
                  "name": "_couponRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 2566,
                  "src": "535:19:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2549,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "535:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "490:65:10"
            },
            "returnParameters": {
              "id": 2556,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "579:0:10"
            },
            "scope": 2752,
            "src": "479:161:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2602,
              "nodeType": "Block",
              "src": "772:165:10",
              "statements": [
                {
                  "expression": {
                    "id": 2580,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "782:8:10",
                    "subExpression": {
                      "id": 2579,
                      "name": "loanId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2542,
                      "src": "782:6:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2581,
                  "nodeType": "ExpressionStatement",
                  "src": "782:8:10"
                },
                {
                  "expression": {
                    "id": 2594,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 2582,
                        "name": "loans",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2540,
                        "src": "800:5:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_$2535_storage_$",
                          "typeString": "mapping(uint256 => struct LoanNFT.Loan storage ref)"
                        }
                      },
                      "id": 2584,
                      "indexExpression": {
                        "id": 2583,
                        "name": "loanId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2542,
                        "src": "806:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "800:13:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_$2535_storage",
                        "typeString": "struct LoanNFT.Loan storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 2586,
                          "name": "loanId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2542,
                          "src": "821:6:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 2587,
                          "name": "_principal",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2570,
                          "src": "829:10:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 2588,
                          "name": "_interestRate",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2572,
                          "src": "841:13:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 2589,
                          "name": "_term",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2574,
                          "src": "856:5:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 2590,
                          "name": "_maturityDate",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2576,
                          "src": "863:13:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 2591,
                          "name": "_borrower",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2568,
                          "src": "878:9:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "hexValue": "66616c7365",
                          "id": 2592,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "889:5:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 2585,
                        "name": "Loan",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2535,
                        "src": "816:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Loan_$2535_storage_ptr_$",
                          "typeString": "type(struct LoanNFT.Loan storage pointer)"
                        }
                      },
                      "id": 2593,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "816:79:10",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_$2535_memory_ptr",
                        "typeString": "struct LoanNFT.Loan memory"
                      }
                    },
                    "src": "800:95:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Loan_$2535_storage",
                      "typeString": "struct LoanNFT.Loan storage ref"
                    }
                  },
                  "id": 2595,
                  "nodeType": "ExpressionStatement",
                  "src": "800:95:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 2597,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "911:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2598,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "911:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2599,
                        "name": "loanId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2542,
                        "src": "923:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2596,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 600,
                      "src": "905:5:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 2600,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "905:25:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2601,
                  "nodeType": "ExpressionStatement",
                  "src": "905:25:10"
                }
              ]
            },
            "functionSelector": "ff1ea4b2",
            "id": 2603,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "issueLoan",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2577,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2568,
                  "mutability": "mutable",
                  "name": "_borrower",
                  "nodeType": "VariableDeclaration",
                  "scope": 2603,
                  "src": "665:17:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2567,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "665:7:10",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2570,
                  "mutability": "mutable",
                  "name": "_principal",
                  "nodeType": "VariableDeclaration",
                  "scope": 2603,
                  "src": "684:18:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2569,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "684:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2572,
                  "mutability": "mutable",
                  "name": "_interestRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 2603,
                  "src": "704:21:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2571,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "704:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2574,
                  "mutability": "mutable",
                  "name": "_term",
                  "nodeType": "VariableDeclaration",
                  "scope": 2603,
                  "src": "727:13:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2573,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "727:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2576,
                  "mutability": "mutable",
                  "name": "_maturityDate",
                  "nodeType": "VariableDeclaration",
                  "scope": 2603,
                  "src": "742:21:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2575,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "742:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "664:100:10"
            },
            "returnParameters": {
              "id": 2578,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "772:0:10"
            },
            "scope": 2752,
            "src": "646:291:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2626,
              "nodeType": "Block",
              "src": "986:139:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 2615,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 2609,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1004:3:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2610,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1004:10:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 2611,
                              "name": "loans",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2540,
                              "src": "1018:5:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_$2535_storage_$",
                                "typeString": "mapping(uint256 => struct LoanNFT.Loan storage ref)"
                              }
                            },
                            "id": 2613,
                            "indexExpression": {
                              "id": 2612,
                              "name": "_loanId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2605,
                              "src": "1024:7:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1018:14:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Loan_$2535_storage",
                              "typeString": "struct LoanNFT.Loan storage ref"
                            }
                          },
                          "id": 2614,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "borrower",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 2532,
                          "src": "1018:23:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1004:37:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4f6e6c7920626f72726f7765722063616e20726570617920746865206c6f616e",
                        "id": 2616,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1043:34:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a5bb3b3135c230e8997c79ca17c3e19f591f808ec5a038219ba0335bf90859ab",
                          "typeString": "literal_string \"Only borrower can repay the loan\""
                        },
                        "value": "Only borrower can repay the loan"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a5bb3b3135c230e8997c79ca17c3e19f591f808ec5a038219ba0335bf90859ab",
                          "typeString": "literal_string \"Only borrower can repay the loan\""
                        }
                      ],
                      "id": 2608,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "996:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2617,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "996:82:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2618,
                  "nodeType": "ExpressionStatement",
                  "src": "996:82:10"
                },
                {
                  "expression": {
                    "id": 2624,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 2619,
                          "name": "loans",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2540,
                          "src": "1088:5:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_$2535_storage_$",
                            "typeString": "mapping(uint256 => struct LoanNFT.Loan storage ref)"
                          }
                        },
                        "id": 2621,
                        "indexExpression": {
                          "id": 2620,
                          "name": "_loanId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2605,
                          "src": "1094:7:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1088:14:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Loan_$2535_storage",
                          "typeString": "struct LoanNFT.Loan storage ref"
                        }
                      },
                      "id": 2622,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "isRepaid",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2534,
                      "src": "1088:23:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 2623,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1114:4:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1088:30:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2625,
                  "nodeType": "ExpressionStatement",
                  "src": "1088:30:10"
                }
              ]
            },
            "functionSelector": "ab7b1c89",
            "id": 2627,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "repayLoan",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2606,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2605,
                  "mutability": "mutable",
                  "name": "_loanId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2627,
                  "src": "962:15:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2604,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "962:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "961:17:10"
            },
            "returnParameters": {
              "id": 2607,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "986:0:10"
            },
            "scope": 2752,
            "src": "943:182:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2674,
              "nodeType": "Block",
              "src": "1179:325:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 2638,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 2634,
                              "name": "_loanId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2629,
                              "src": "1205:7:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 2633,
                            "name": "ownerOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 145,
                            "src": "1197:7:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view returns (address)"
                            }
                          },
                          "id": 2635,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1197:16:10",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "expression": {
                            "id": 2636,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1217:3:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2637,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1217:10:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1197:30:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "43616e6e6f742062757920796f7572206f776e206c6f616e204e4654",
                        "id": 2639,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1229:30:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_8cb4f805150d07280d4e301d28db952bb63f4792367e32521b583e1a015acbb1",
                          "typeString": "literal_string \"Cannot buy your own loan NFT\""
                        },
                        "value": "Cannot buy your own loan NFT"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_8cb4f805150d07280d4e301d28db952bb63f4792367e32521b583e1a015acbb1",
                          "typeString": "literal_string \"Cannot buy your own loan NFT\""
                        }
                      ],
                      "id": 2632,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1189:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2640,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1189:71:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2641,
                  "nodeType": "ExpressionStatement",
                  "src": "1189:71:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2648,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 2643,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1278:3:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2644,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "1278:9:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "id": 2646,
                              "name": "_loanId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2629,
                              "src": "1313:7:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 2645,
                            "name": "calculateCouponAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2731,
                            "src": "1291:21:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256) view returns (uint256)"
                            }
                          },
                          "id": 2647,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1291:30:10",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1278:43:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e73756666696369656e742066756e647320746f2062757920746865206c6f616e204e4654",
                        "id": 2649,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1323:40:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3b57e662a484f59cfe32942e0e4b7996130b2420cbc36974f3e264d51948bce8",
                          "typeString": "literal_string \"Insufficient funds to buy the loan NFT\""
                        },
                        "value": "Insufficient funds to buy the loan NFT"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_3b57e662a484f59cfe32942e0e4b7996130b2420cbc36974f3e264d51948bce8",
                          "typeString": "literal_string \"Insufficient funds to buy the loan NFT\""
                        }
                      ],
                      "id": 2642,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1270:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2650,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1270:94:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2651,
                  "nodeType": "ExpressionStatement",
                  "src": "1270:94:10"
                },
                {
                  "assignments": [
                    2653
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2653,
                      "mutability": "mutable",
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 2674,
                      "src": "1374:13:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 2652,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1374:7:10",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2657,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 2655,
                        "name": "_loanId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2629,
                        "src": "1398:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2654,
                      "name": "ownerOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 145,
                      "src": "1390:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 2656,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1390:16:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1374:32:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2659,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2653,
                        "src": "1426:5:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 2660,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1433:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2661,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1433:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2662,
                        "name": "_loanId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2629,
                        "src": "1445:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2658,
                      "name": "_transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 752,
                      "src": "1416:9:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 2663,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1416:37:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2664,
                  "nodeType": "ExpressionStatement",
                  "src": "1416:37:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 2670,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1487:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2671,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "src": "1487:9:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 2667,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2653,
                            "src": "1471:5:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 2666,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1463:8:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_payable_$",
                            "typeString": "type(address payable)"
                          },
                          "typeName": {
                            "id": 2665,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1463:8:10",
                            "stateMutability": "payable",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 2668,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1463:14:10",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 2669,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "src": "1463:23:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 2672,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1463:34:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2673,
                  "nodeType": "ExpressionStatement",
                  "src": "1463:34:10"
                }
              ]
            },
            "functionSelector": "51ed8288",
            "id": 2675,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "buyNFT",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2629,
                  "mutability": "mutable",
                  "name": "_loanId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2675,
                  "src": "1147:15:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2628,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1147:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1146:17:10"
            },
            "returnParameters": {
              "id": 2631,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1179:0:10"
            },
            "scope": 2752,
            "src": "1131:373:10",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2730,
              "nodeType": "Block",
              "src": "1588:442:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 2690,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 2684,
                              "name": "_loanId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2677,
                              "src": "1614:7:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 2683,
                            "name": "ownerOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 145,
                            "src": "1606:7:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view returns (address)"
                            }
                          },
                          "id": 2685,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1606:16:10",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 2688,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1634:1:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 2687,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1626:7:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 2686,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1626:7:10",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 2689,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1626:10:10",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1606:30:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e76616c6964206c6f616e204e4654",
                        "id": 2691,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1638:18:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_1ec021132769161eef9439d418b0ada870000300a670258be4df3cc01d82a4a9",
                          "typeString": "literal_string \"Invalid loan NFT\""
                        },
                        "value": "Invalid loan NFT"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_1ec021132769161eef9439d418b0ada870000300a670258be4df3cc01d82a4a9",
                          "typeString": "literal_string \"Invalid loan NFT\""
                        }
                      ],
                      "id": 2682,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1598:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2692,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1598:59:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2693,
                  "nodeType": "ExpressionStatement",
                  "src": "1598:59:10"
                },
                {
                  "assignments": [
                    2696
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2696,
                      "mutability": "mutable",
                      "name": "loan",
                      "nodeType": "VariableDeclaration",
                      "scope": 2730,
                      "src": "1699:16:10",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_$2535_memory_ptr",
                        "typeString": "struct LoanNFT.Loan"
                      },
                      "typeName": {
                        "id": 2695,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 2694,
                          "name": "Loan",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 2535,
                          "src": "1699:4:10"
                        },
                        "referencedDeclaration": 2535,
                        "src": "1699:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Loan_$2535_storage_ptr",
                          "typeString": "struct LoanNFT.Loan"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2700,
                  "initialValue": {
                    "baseExpression": {
                      "id": 2697,
                      "name": "loans",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2540,
                      "src": "1718:5:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_$2535_storage_$",
                        "typeString": "mapping(uint256 => struct LoanNFT.Loan storage ref)"
                      }
                    },
                    "id": 2699,
                    "indexExpression": {
                      "id": 2698,
                      "name": "_loanId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2677,
                      "src": "1724:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1718:14:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Loan_$2535_storage",
                      "typeString": "struct LoanNFT.Loan storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1699:33:10"
                },
                {
                  "assignments": [
                    2702
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2702,
                      "mutability": "mutable",
                      "name": "couponAmount",
                      "nodeType": "VariableDeclaration",
                      "scope": 2730,
                      "src": "1806:20:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2701,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1806:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2716,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2715,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 2709,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2707,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 2703,
                            "name": "loan",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2696,
                            "src": "1829:4:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Loan_$2535_memory_ptr",
                              "typeString": "struct LoanNFT.Loan memory"
                            }
                          },
                          "id": 2704,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "principal",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 2524,
                          "src": "1829:14:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "expression": {
                            "id": 2705,
                            "name": "loan",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2696,
                            "src": "1846:4:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Loan_$2535_memory_ptr",
                              "typeString": "struct LoanNFT.Loan memory"
                            }
                          },
                          "id": 2706,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "interestRate",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 2526,
                          "src": "1846:17:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1829:34:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "id": 2708,
                        "name": "couponRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2544,
                        "src": "1866:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1829:47:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2713,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "313030",
                            "id": 2710,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1880:3:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_100_by_1",
                              "typeString": "int_const 100"
                            },
                            "value": "100"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "expression": {
                              "id": 2711,
                              "name": "loan",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2696,
                              "src": "1886:4:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Loan_$2535_memory_ptr",
                                "typeString": "struct LoanNFT.Loan memory"
                              }
                            },
                            "id": 2712,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "term",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2528,
                            "src": "1886:9:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1880:15:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 2714,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1879:17:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1829:67:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1806:90:10"
                },
                {
                  "condition": {
                    "expression": {
                      "id": 2717,
                      "name": "loan",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2696,
                      "src": "1911:4:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_$2535_memory_ptr",
                        "typeString": "struct LoanNFT.Loan memory"
                      }
                    },
                    "id": 2718,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "isRepaid",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 2534,
                    "src": "1911:13:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2727,
                  "nodeType": "IfStatement",
                  "src": "1907:88:10",
                  "trueBody": {
                    "id": 2726,
                    "nodeType": "Block",
                    "src": "1926:69:10",
                    "statements": [
                      {
                        "expression": {
                          "id": 2724,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2719,
                            "name": "couponAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2702,
                            "src": "1940:12:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 2723,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 2720,
                              "name": "couponAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2702,
                              "src": "1955:12:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "expression": {
                                "id": 2721,
                                "name": "loan",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2696,
                                "src": "1970:4:10",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Loan_$2535_memory_ptr",
                                  "typeString": "struct LoanNFT.Loan memory"
                                }
                              },
                              "id": 2722,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "principal",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 2524,
                              "src": "1970:14:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1955:29:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1940:44:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2725,
                        "nodeType": "ExpressionStatement",
                        "src": "1940:44:10"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 2728,
                    "name": "couponAmount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2702,
                    "src": "2011:12:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2681,
                  "id": 2729,
                  "nodeType": "Return",
                  "src": "2004:19:10"
                }
              ]
            },
            "functionSelector": "7d3fb87d",
            "id": 2731,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCouponAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2677,
                  "mutability": "mutable",
                  "name": "_loanId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2731,
                  "src": "1541:15:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2676,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1541:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1540:17:10"
            },
            "returnParameters": {
              "id": 2681,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2680,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2731,
                  "src": "1579:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2679,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1579:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1578:9:10"
            },
            "scope": 2752,
            "src": "1510:520:10",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2750,
              "nodeType": "Block",
              "src": "2080:156:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 2742,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 2738,
                              "name": "_loanId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2733,
                              "src": "2143:7:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 2737,
                            "name": "ownerOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 145,
                            "src": "2135:7:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view returns (address)"
                            }
                          },
                          "id": 2739,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2135:16:10",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "id": 2740,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2155:3:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2741,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2155:10:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2135:30:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4f6e6c79206f776e65722063616e2064657374726f7920746865206c6f616e204e4654",
                        "id": 2743,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2167:37:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_8554bcb06f40e512368ce0c22e340994ef57453adc4873717f860aab03b759fc",
                          "typeString": "literal_string \"Only owner can destroy the loan NFT\""
                        },
                        "value": "Only owner can destroy the loan NFT"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_8554bcb06f40e512368ce0c22e340994ef57453adc4873717f860aab03b759fc",
                          "typeString": "literal_string \"Only owner can destroy the loan NFT\""
                        }
                      ],
                      "id": 2736,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2127:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2744,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2127:78:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2745,
                  "nodeType": "ExpressionStatement",
                  "src": "2127:78:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2747,
                        "name": "_loanId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2733,
                        "src": "2221:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2746,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 667,
                      "src": "2215:5:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 2748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2215:14:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2749,
                  "nodeType": "ExpressionStatement",
                  "src": "2215:14:10"
                }
              ]
            },
            "functionSelector": "c40412b5",
            "id": 2751,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "destroyNFT",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2733,
                  "mutability": "mutable",
                  "name": "_loanId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2751,
                  "src": "2056:15:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2732,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2056:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2055:17:10"
            },
            "returnParameters": {
              "id": 2735,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2080:0:10"
            },
            "scope": 2752,
            "src": "2036:200:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 2753,
        "src": "139:2099:10"
      }
    ],
    "src": "38:2201:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
  },
  "networks": {
    "5": {
      "events": {},
      "links": {},
      "address": "0x64F08b48d3709d39CAA33454A19078Cc71405457",
      "transactionHash": "0x81245a030008bf67a4840c1fe8e550827d853e10ae57885c0bedff544dead2f0"
    },
    "11155111": {
      "events": {},
      "links": {},
      "address": "0xfEA515086F6b42C1Ab188B75D621527D8b78B80c",
      "transactionHash": "0x23f5f1df77d93690fd8db1fc86fad8fd9ebdcedf644eba60cdd4c5949d2b2b44"
    }
  },
  "schemaVersion": "3.4.13",
  "updatedAt": "2023-05-02T01:21:16.799Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "approve(address,uint256)": {
        "details": "See {IERC721-approve}."
      },
      "balanceOf(address)": {
        "details": "See {IERC721-balanceOf}."
      },
      "getApproved(uint256)": {
        "details": "See {IERC721-getApproved}."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC721-isApprovedForAll}."
      },
      "name()": {
        "details": "See {IERC721Metadata-name}."
      },
      "ownerOf(uint256)": {
        "details": "See {IERC721-ownerOf}."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC721-setApprovalForAll}."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}."
      },
      "symbol()": {
        "details": "See {IERC721Metadata-symbol}."
      },
      "tokenURI(uint256)": {
        "details": "See {IERC721Metadata-tokenURI}."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC721-transferFrom}."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}

export default LoanNFT;