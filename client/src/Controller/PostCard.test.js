/* eslint-disable react/react-in-jsx-scope */
import { render } from "react-dom";
import React from "react";
import { fireEvent} from "@testing-library/react";
//import React, { Component }  from 'react';
import LikeButton from "./LikeButton";

describe(LikeButton,() =>{
    const user = {user : "abcd"};
    const post ={ post: { id:"abc", likeCount:"0", likes:[
        {
          id: "asdasd",
          username: "us1"
        }
      ] 
    }};
    it("likebutton should be increment", ()=>{
        const {getByTestId} = render(<LikeButton user={{...user}} post={{...post}}/>);
        const likebtn = getByTestId("likebtn")
        fireEvent.click(likebtn);
        const likeValue = getByTestId("likeCount").textContent;
        expect (likeValue).toEqual("1");
    });
});