import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("Empty shop", () => {
    const gildedRose = new Shop();
    const items = gildedRose.updateQuality();
    expect(items).to.be.empty;
  });

  test("(foo, 0, 0)", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });

  test("(foo, 0, 3)", () => {
    const gildedRose = new Shop([new Item("foo", 0, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(1);
  });

  test("(backstage passes, 0, 0)", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });

  test("(backstage passes, 1, 0)", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 0)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(3);
  });

  test("(backstage passes, 11, 0)", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(10);
    expect(items[0].quality).to.equal(1);
  });

  test("(backstage passes, 10, 50)", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(50);
  });

  test("(backstage passes, 5, 49)", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(50);
  });

  test("(backstage passes, 6, 0)", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 0)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(5);
    expect(items[0].quality).to.equal(2);
  });

  test("(aged brie, 0, 0)", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(2);
  });

  test("(aged brie, 0, 50)", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(50);
  });

  test("(sulfuras, -1, 1)", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", -1, 1)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(1);
  });

  test("(conjured, 2, 3)", () => {
    const gildedRose = new Shop([new Item("Conjured", 2, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(1);
    expect(items[0].quality).to.equal(1);
  });

  test("(conjured, 0, 5)", () => {
    const gildedRose = new Shop([new Item("Conjured", 0, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(1);
  });
});
