/**
 * @jest-environment jsdom
 */

const { TestScheduler } = require("jest");
const buttonClick = require("../button");

beforeEach(() => {

    let fs= require("fs");
    let fileContents = fs.readFileSync("index.html","utf-8");
    document.open();
    document.write(fileContents);
    document.close();
   // document.body.innerHTML = "<p id ='par'></p>";
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", ()=> {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    }
    )
});