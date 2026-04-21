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
      switch (item.name) {
        case "Sulfuras, Hand of Ragnaros": {
          continue;
        }
        case "Aged Brie": {
          item.quality++;
          break;
        }
        case "Backstage passes to a TAFKAL80ETC concert": {
          item.quality++;
          if (item.sellIn < 11) {
            item.quality++;
          }
          if (item.sellIn < 6) {
            item.quality++;
          }
          break;
        }
        case "Conjured": {
          item.quality--;
          item.quality--;
          break;
        }
        default: {
          item.quality--;
        }
      }

      item.sellIn--;

      if (item.sellIn < 0) {
        switch (item.name) {
          case "Aged Brie": {
            item.quality++;
            break;
          }
          case "Backstage passes to a TAFKAL80ETC concert": {
            item.quality = 0;
            break;
          }
          case "Conjured": {
            item.quality--;
            item.quality--;
            break;
          }
          default: {
            item.quality--;
          }
        }
      }

      item.quality = Math.max(0, Math.min(50, item.quality));
    }

    return this.items;
  }
}
