// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AppNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter public versions;
    mapping(uint256 => string) public builds;
    address public appOwner;

    constructor(string memory tokenURI, uint256 id)
        ERC721("AppNFT-V3", "APP-V3")
    {
        appOwner = msg.sender;
        mint(tokenURI, id);
    }

    function updateApp(string memory newTokenURI) public {
        require(
            msg.sender == appOwner,
            "Only the app owner can make this change"
        );
        uint256 currentVersion = versions.current();
        _setTokenURI(1, newTokenURI);
        builds[currentVersion + 1] = newTokenURI;
        versions.increment();
    }

    function getPreviousBuild(uint256 versionNumber)
        public
        view
        returns (string memory)
    {
        return builds[versionNumber];
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: caller is not token owner nor approved"
        );

        _transfer(from, to, tokenId);
        appOwner = to;
    }

    function mint(string memory tokenURI, uint256 id) public returns (uint256) {
        versions.increment();
        uint256 tokenId = id;
        uint256 currentVersion = versions.current();
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
        builds[currentVersion] = tokenURI;
        return tokenId;
    }
}
