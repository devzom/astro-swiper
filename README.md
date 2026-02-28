<div align="center" style="padding: 1rem;">
  <a href="https://swiperjs.com" target="_blank"><img width="70" width="auto" src="images/swiper-logo.svg"></a>
  <a href="https://astro.build/" target="_blank"><img height="68" width="auto" src="images/astro-logo.svg"></a>

# Astro Swiper

Astro Swiper - native component for <a href="https://github.com/nolimits4web/swiper">Swiper</a>. <br/>Use case: slides, carousel, photo swiper.

<img src="images/astro-swiper.gif" />

## [Check demo](https://pascal-brand38.github.io/astro-dev/packages/astro-swiper)

</div>
## Installation

```bash
npm install astro-swiper
pnpm add astro-swiper
bun install astro-swiper
```

## Usage

Code example of a carousel with loop, 3 pictures, 1 second interval:

```jsx
---
import { Swiper, SwiperWrapper, SwiperSlide } from "astro-swiper";
---

<Swiper
// check options at https://swiperjs.com/swiper-api
  options={{
    loop: true,
    autoplay: {
      delay: 700,
      disableOnInteraction: false,
      waitForTransition: false
    }
  }}>
  <SwiperWrapper>
    <SwiperSlide>
      <img src="https://picsum.photos/455/256?nb=1" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://picsum.photos/455/256?nb=2" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://picsum.photos/455/256?nb=3" alt="" />
    </SwiperSlide>
  </SwiperWrapper>
</Swiper>

<style>
  .swiper {
    max-width: 455px;
    aspect-ratio: 16/9;
  }

  img {
    width: 100%;
  }
</style>
```

## Examples

Check the [online doc](https://pascal-brand38.github.io/astro-dev/packages/astro-swiper) for a fullset of examples, including navigation and thumbnails.
Full code is provided.
You can also look at how others are using `astro-swiper` in public github repo:

- the famous astro template [astroplate](https://github.com/zeon-studio/astroplate) in the
  [testominial section](https://zeon.studio/preview?project=astroplate)
  (cf. **_What Users Are Saying About Astroplate_**):
  autoplay, pagination and breakpoints are used
- the popular astro template [pinwheel-astro](https://github.com/themefisher/pinwheel-astro)
  is using `astro-swiper` in several places:
  [testimonial section](https://pinwheel-astro.vercel.app/),
  [signin](https://pinwheel-astro.vercel.app/signin),
  [password reset](https://pinwheel-astro.vercel.app/password-reset) and
  [signup](https://pinwheel-astro.vercel.app/signup) pages. Pagination and
  breakpoints are used.
- the well-known astro template [hello-astro](https://github.com/hellotham/hello-astro)
  uses swiper in the [carousel page](https://hellotham.github.io/hello-astro/carousel/)
  as well as in [blog article](https://hellotham.github.io/hello-astro/blog/2022-08-19-sample-carousel/).
  It makes use of navigation arrow, pagination and autoplay.
- [bigspring-light-astro](https://github.com/themefisher/bigspring-light-astro) astro theme is
  also using `astro-swiper` in several places in the
  [main page](https://tf-bigspring-light-astro.vercel.app/) with customized pagination.
- [Women Techmakers organized by GDG Madrid](https://github.com/wtmgdgmadrid/wtmgdgmadrid.github.io)
  is using pagination and autoplay at different places in their
  [page](http://wtmgdgmadrid.github.io/)
- [kando-menu](https://github.com/make-42/kando-menu.github.io) is using `astro-swiper`
  with pagination, card effect, and coverflow effect as displayed in [kando.menu](https://kando.menu/)
- [astroimagej](https://github.com/AstroImageJ/astroimagej) is using pagination with progress bar
- ... and many others such as
  [Cinerama](https://github.com/RaiderMr3003/Cinerama) and
  [pfm-landing-page](https://github.com/RichardAgain/pfm-landing-page)
  using `astro-swiper` in the hero section

## Help needed?

**Do you need help to integrate `astro-swiper` in your astro template / component?**
I'll be happy to help!

- mention me with `@pascal-brand38` in an issue on your own github repo
- or [fill a GitHub issue](https://github.com/pascal-brand38/astro-swiper/issues/new?template=help-needed.md)
  in `astro-swiper` github

### Support us

**Let's star the project as you like it.**
