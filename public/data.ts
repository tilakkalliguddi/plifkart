  // data.ts
  import { Product,Category } from "../src/app/interface";
  import { v4 as uuidv4 } from 'uuid';

  export const categoryData: Category[] = [
      { heading: 'Best of Electronics', image: 'assets/bestofElectronics.png'},
      { heading: 'Beauty, Food, Toys & more', image: 'assets/bestofBeautyToys.png'},
      { heading: 'Monsoon Essentials', image: 'assets/bestofElectronics.png'},
    ];

  export const allProducts : Product[] = [
      // electronics
          { id: uuidv4(), image: 'assets/power-bank.png', title: 'Premium PowerBanks', price:   799, discountPrice:   699, brand: 'Mi, Ambrane & more', category: 'Best of Electronics' , quantity: 1 },
          { id: uuidv4(), image: 'assets/camera.png', title: 'Top Mirrorless Cameras', price:   10999, discountPrice:   9999, brand: 'Canon, Sony, Fujifilm', category: 'Best of Electronics' , quantity: 1 },
          { id: uuidv4(), image: 'assets/printer.png', title: 'Printer', price:   12999, discountPrice:   10999, brand: 'Epson', category: 'Best of Electronics' , quantity: 1 },
          { id: uuidv4(), image: 'assets/xerox.png', title: 'xerox machines', price:   1499, discountPrice:   3999, brand: 'xerox', category: 'Best of Electronics' , quantity: 1 },
          { id: uuidv4(), image: 'assets/monitor.png', title: 'Monitors', price:   5999, discountPrice:   899, brand: 'Dell', category: 'Best of Electronics' , quantity: 1 },
          { id: uuidv4(), image: 'assets/trimmer.png', title: 'Best of Shavers', price:   1499, discountPrice:   1099, brand: 'Havells', category: 'Best of Electronics' , quantity: 1 },
          { id: uuidv4(), image: 'assets/nothing-phone.webp', title: 'Nothing 2', price:   39999, discountPrice:   34999, brand: 'Nothing', category: 'Best of Electronics' , quantity: 1 },
          { id: uuidv4(), image: 'assets/moto-g4.webp', title: 'Moto g4', price:   25999, discountPrice:   22999, brand: 'Moto', category: 'Best of Electronics' , quantity: 1 },
          { id: uuidv4(), image: 'assets/moto-edge50.webp', title: 'Moto Edge 50', price:   29999, discountPrice:   27999, brand: 'Moto', category: 'Best of Electronics' , quantity: 1 },
          // beautyAndToys
          { id: uuidv4(), image: 'assets/beautyNToys/cycle.png', title: 'Geared Cycle', price:   11999, discountPrice:7999, brand: 'Leader, Cradiac and More', category: 'Beauty, Food, Toys & more', quantity: 1 },
          { id: uuidv4(), image: 'assets/beautyNToys/mike.png', title: 'Microphones', price:   599, discountPrice:   499, brand: 'Explore More', category: 'Beauty, Food, Toys & more', quantity: 1 },
          { id: uuidv4(), image: 'assets/beautyNToys/penHolder.png', title: 'Pen Holder', price:   199, discountPrice:   99, brand: 'cello', category: 'Beauty, Food, Toys & more', quantity: 1 },
          { id: uuidv4(), image: 'assets/beautyNToys/headPhone.png', title: 'Studio Headphones', price:   4999, discountPrice:   3999, brand: 'Sony', category: 'Beauty, Food, Toys & more', quantity: 1 },
          { id: uuidv4(), image: 'assets/beautyNToys/helmet.png', title: 'Top Helmets', price:   1999, discountPrice:   1799, brand: 'Canon, Sony, Fujifilm', category: 'Beauty, Food, Toys & more', quantity: 1 },
          { id: uuidv4(), image: 'assets/beautyNToys/tyre.png', title: 'Monitors', price:   5999, discountPrice:   899, brand: 'Dell', category: 'Beauty, Food, Toys & more', quantity: 1 },
          { id: uuidv4(), image: 'assets/beautyNToys/pushupBar.png', title: 'Nothing 2', price:   39999, discountPrice:   34999, brand: 'Nothing', category: 'Beauty, Food, Toys & more', quantity: 1 },
          { id: uuidv4(), image: 'assets/beautyNToys/penHolder.png', title: 'Moto g4', price:   25999, discountPrice:   22999, brand: 'Moto', category: 'Beauty, Food, Toys & more', quantity: 1 },
          { id: uuidv4(), image: 'assets/beautyNToys/headPhone.png', title: 'Moto Edge 50', price:   29999, discountPrice:   27999, brand: 'Moto', category: 'Beauty, Food, Toys & more', quantity: 1 },
           //  monsoonEssentials
           { id: uuidv4(), image: 'assets/mansoon/mensCaps.png', title: 'Men"s Caps', price:   799, discountPrice:   699, brand: 'Adidas, Puma and More ', category: 'Monsoon Essentials', quantity: 1 },
           { id: uuidv4(), image: 'assets/mansoon/light.png', title: 'Emergency Lights', price:   999, discountPrice:   899, brand: 'Canon, Sony, Fujifilm', category: 'Monsoon Essentials', quantity: 1 },
           { id: uuidv4(), image: 'assets/mansoon/carpet.png', title: 'Carpets', price:   2999, discountPrice:   1899, brand: 'carlox', category: 'Monsoon Essentials', quantity: 1 },
           { id: uuidv4(), image: 'assets/mansoon/namkeens.png', title: 'Namkeens', price:   299, discountPrice:   199, brand: 'Haldiram', category: 'Monsoon Essentials', quantity: 1 },
           { id: uuidv4(), image: 'assets/mansoon/bulb.png', title: 'Bulbs', price:   399, discountPrice:   299, brand: 'Philips', category: 'Monsoon Essentials', quantity: 1 },
           { id: uuidv4(), image: 'assets/mansoon/bedCover.png', title: 'Bed Covers', price:   699, discountPrice:   599, brand: 'Havells', category: 'Monsoon Essentials', quantity: 1 },
           { id: uuidv4(), image: 'assets/mansoon/carpet.png', title: 'Carpet', price:   2999, discountPrice:   1899, brand: 'carlox', category: 'Monsoon Essentials', quantity: 1 },
           { id: uuidv4(), image: 'assets/mansoon/namkeens.png', title: 'Namkeen', price:   299, discountPrice:   199, brand: 'Haldiram', category: 'Monsoon Essentials', quantity: 1 },
           { id: uuidv4(), image: 'assets/mansoon/bulb.png', title: 'Bulb', price:   399, discountPrice:   299, brand: 'Philips', category: 'Monsoon Essentials', quantity: 1 },
           { id: uuidv4(), image: 'assets/mansoon/bedCover.png', title: 'Bed Cover', price:   699, discountPrice:   599, brand: 'Havells', category: 'Monsoon Essentials', quantity: 1 },
           
      ];