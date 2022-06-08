//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Tweets {

    address public owner;
    uint public counter;

    constructor() {
        counter = 0;
        owner = msg.sender;
    }

    struct tweet {
        address tweeter;
        uint id;
        string tweetTxt;
        string  tweetImg;
    }

    event tweetCreated (
        address tweeter,
        uint id,
        string tweetTxt,
        string  tweetImg
    );

    mapping(uint=>tweet) public tweets;

    function addTweet(string memory _tweetTxt,string memory _tweetImg) public payable{
        require(msg.value == (0.0001 ether), "Please send 1 Matic");
        tweet storage newTweet = tweets[counter];
        newTweet.tweetTxt = _tweetTxt;
        newTweet.tweetImg = _tweetImg;
        newTweet.tweeter = msg.sender;
        newTweet.id = counter;

        emit tweetCreated(msg.sender,counter,_tweetTxt,_tweetImg);
        counter++;

        payable(owner).transfer(msg.value);
    }

    function getTweet(uint _id) public view returns(string memory,string memory,address){
        require(_id < counter,"No such Tweet!");
        tweet storage t = tweets[_id];
        return(t.tweetTxt,t.tweetImg,t.tweeter);
    } 
}