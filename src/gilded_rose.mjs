export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.name == "Sulfuras, Hand of Ragnaros") {
        continue;
      }

      if (item.name == "Aged Brie") {
        item.quality++;
      } else if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        item.quality++;
        if (item.sellIn < 11) {
          item.quality++;
        }
        if (item.sellIn < 6) {
          item.quality++;
        }
      } else if (item.name == "Conjured") {
        item.quality--;
        item.quality--;
      } else {
        item.quality--;
      }

      item.sellIn--;

      if (item.sellIn < 0) {
        if (item.name == "Aged Brie") {
          item.quality++;
        } else if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
          item.quality = 0;
        } else if (item.name == "Conjured") {
          item.quality--;
          item.quality--;
        } else {
          item.quality--;
        }
      }

      item.quality = Math.max(0, Math.min(50, item.quality));
    }

    return this.items;
  }
}
