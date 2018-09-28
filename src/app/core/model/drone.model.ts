import { RatingAttribute } from './subtypes/rating-attribute';
import { ValuableAttribute } from './subtypes/valuable-attribute';
import { PhysicalAttributes } from './subtypes/physical-attributes';
import { RangedAttribute } from './subtypes/ranged-attribute';
import { Brand } from './brand.model';

// Drone class
export class Drone {
  id$: string

  model: string
  brand: Brand //Key
  category: string
  pictureURL: string
  productURL?: string
  releaseDate?: Date
  cameraPhoto: ValuableAttribute
  cameraMovie: ValuableAttribute
  fpvType: ValuableAttribute
  battery: ValuableAttribute
  chargeTime: number
  flightTime: number
  flightMaximunDistance: number
  rcType: ValuableAttribute
  physical: PhysicalAttributes
  priceRange: RangedAttribute
  videos: string[]
  pictures: string[]
  reviews: string[]
  rating: RatingAttribute

  // Update the rating attribute with the calculated value and increase the ammount of people that has evaluated it
  updateRating(rate: number) {
    let rating: RatingAttribute = this.rating
    if (rating.value == undefined) {
      rating.value = rate
      rating.ammount = 1
    } else {
      rating.ammount ++
      rating.value += (rate - rating.value) / rating.ammount
    }
  }
}
