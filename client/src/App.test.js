import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
import * as math from "./component/__test__/math.test";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("sum", () => {
  it("1 + 2", () => {
    const expected = 3;
    const actual = math.sum(1, 2);
    expect(actual).toBe(expected);
  });
});

it("players", () => {
  expect(20).not.toBe(19);
});

it("another test", () => {
  expect(100).toBe(100);
  expect(100).toBeGreaterThan(99);
});
describe("math module", () => {
  describe("ten function", () => {
    it("returns ten", () => {
      expect(math.ten()).toBe(10);
    });
    it("returns a value that is defined", () => {
      expect(math.ten()).not.toBeUndefined();
    });
    it("returns a value greater than 4", () => {
      expect(math.ten()).toBeGreaterThan(4);
    });
    it("returns a value not NaN", () => {
      expect(math.ten()).not.toBeNaN();
    });
  });
});

describe("sum function", () => {
  it("positive numbers", () => {
    expect(math.sum(10, 10)).toBe(20);
    expect(math.sum(50, 50)).toBe(100);
  });
  it("negative numbers", () => {
    expect(math.sum(-1, 1)).toBe(0);
    expect(math.sum(-1, 2)).toBe(1);
    expect(math.sum(-1, -1)).toBe(-2);
  });
  it("null numbers", () => {
    expect(math.sum("1", 1)).toBe(null);
    expect(math.sum("1", null)).toBe(null);
    expect(math.sum(1)).toBe(null);
  });
  it("NAN", () => {
    expect(math.sum(1, NaN)).toBe(NaN);
    expect(math.sum(NaN, 5)).toBe(NaN);
  });
});
