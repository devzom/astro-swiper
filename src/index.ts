// Copyright (c) Pascal Brand
// MIT License

import type { Swiper, SwiperOptions } from 'swiper/types';
import type { HTMLAttributes } from 'astro/types';

/** properties passed to the <Swiper> component
 * It extends a div (that is may have class, style,...), plus other attributes
 * Note that all other components (<SwiperSlide>, <SwiperButtonNext>...) extends a div only
 */
export interface AstroSwiperType extends HTMLAttributes<'div'> {
  /** swiper options, to set autoplay, navigation, thumbnails,...
   * check fullset of options: https://swiperjs.com/swiper-api#parameters
   */
  options?: SwiperOptions;

  /** unique class to be able to retrieve the swiper instance, if required
   * Mandatory on thumbnail for example
   * When undefined, an automatic unique class name is provided
   */
  uniqueClass?: string;

  /** a thumbnail slider is build, this parameter is provided on the main slider
   * (the one with big slides, not the one to track the progress) and equal
   * the unique class of the thumbnail slider
   */
  linkToThumbUniqueClass?: string;

  /** add the default swiper class, true by default */
  addDefaultClass?: boolean;

  /** useCustomElement, if true, the component will be rendered as a custom element, otherwise as a div.
   * This option is true by default to keep legacy.
   * It is there to be as close as possible to the original swiper structure, that is a div with class "swiper"
   * and not a custom element.
   * It is also to avoid issues with some swiper modules that are looking for the "swiper" class on the parent
   * element, and not on the custom element.
   */
  useCustomElement?: boolean;
}

/** astro components exported, used to create a swiper */
export { default as Swiper } from './components/Swiper.astro';
export { default as SwiperButtonNext } from './components/SwiperButtonNext.astro';
export { default as SwiperButtonPrev } from './components/SwiperButtonPrev.astro';
export { default as SwiperPagination } from './components/SwiperPagination.astro';
export { default as SwiperScrollbar } from './components/SwiperScrollbar.astro';
export { default as SwiperSlide } from './components/SwiperSlide.astro';
export { default as SwiperWrapper } from './components/SwiperWrapper.astro';

declare class AstroSwiper extends HTMLElement {
  /** pointer to the swiper structure that was created using "new",
   *  even when not initialized */
  astroSwiper: Swiper | undefined;
}

/** @deprecated: use getSwiperFromUniqueSelector() instead */
export function getSwiperFromUniqueClass(uniqueClass: string): Swiper | undefined {
  return getSwiperFromUniqueSelector(`.${uniqueClass}`);
}

/** Retrieve the swiper instance from the unique selector provided
 * when creating the swiper
 * @param uniqueSelector the unique selector provided when creating the swiper,
 * @example const swiper = getSwiperFromUniqueSelector('.my-unique-class')
 *          const swiper = getSwiperFromUniqueSelector('#my-unique-id')
 */
export function getSwiperFromUniqueSelector(uniqueSelector: string): Swiper | undefined {
  let swiperEl: AstroSwiper = document.querySelector(uniqueSelector) as AstroSwiper;
  if (!swiperEl) {
    console.warn(`astro-swiper: no element found with unique selector "${uniqueSelector}"`);
    return undefined;
  }
  if (swiperEl.astroSwiper) {
    // this is the custom element that contains the swiper instance, return it
    return swiperEl.astroSwiper;
  }

  // this a div, with 1st child being the custom element that contains the swiper instance
  swiperEl = swiperEl.firstElementChild as AstroSwiper;
  if (!swiperEl) {
    console.warn(`astro-swiper: no element found with unique selector "${uniqueSelector}"`);
    return undefined;
  }
  if (swiperEl.astroSwiper) {
    return swiperEl.astroSwiper;
  }

  console.warn(`astro-swiper: no element found with unique selector "${uniqueSelector}"`);
  return undefined;
}
