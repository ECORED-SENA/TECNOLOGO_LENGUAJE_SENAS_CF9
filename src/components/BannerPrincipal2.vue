<template lang="pug">
.banner-principal
  .container.tarjeta.position-relative(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .container-fluid
      .row.banner-principal__row.position-relative.justify-content-center.align-items-center
        .col-lg-7.col-xxl-6.py-sm-5.banner-principal__info
          .banner-principal__componente
            h1.mb-0(v-html="globalData.componenteFormativo")
          .col-lg-12
            .banner-principal__descripcion
              p.mb-0(v-html="globalData.descripcionCurso")
          .banner-principal__accion
            router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
              span Iniciar
              i.fas.fa-angle-right

        .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
          img.img-a(:src="globalData.imagenBannerPrincipal")
      .imagen_flotante_1.d-none.d-lg-block: img(src="@/assets/curso/portada/Mini_Elipse_white.svg")
      .imagen_flotante_2.d-none.d-lg-block: img(src="@/assets/curso/portada/Mini_Elipse_white_1.svg")
      .imagen_flotante_3.d-none.d-lg-block: img(src="@/assets/curso/portada/Mini_Elipse_white_2.svg")
      .imagen_flotante_4.d-none.d-lg-block: img(src="@/assets/curso/portada/flechas.svg")
      .imagen_flotante_5.d-none.d-lg-block: img(src="@/assets/curso/portada/Elipse_blue.svg")
      .imagen_flotante_6.d-none.d-lg-block: img(src="@/assets/curso/portada/ondas.svg")
      .imagen_flotante_7.d-none.d-lg-block: img(src="@/assets/curso/portada/flechas2.svg")
      .imagen_flotante_9.d-none.d-lg-block: img(src="@/assets/curso/portada/Mini_Elipse_white_3.svg")
    

</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.fondo-contenido
  position: absolute
  padding: 0px
  z-index: 2
  height: 100%
  width: 10%
.banner-principal__info
  padding-left: 13px!important
  z-index: 3
  @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
    padding-right: 80px
    padding-left: 0px!important
    z-index: 3
    margin-top: 24px
  @media (max-width: $bp-max-xs)
    padding-left: 15px !important

.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text
  .tarjeta
    background-size: contain
    background-position: center
    background-repeat: no-repeat

    @media (max-width: $bp-max-xs)
      background-size: cover
      padding-block: 30px
      padding-inline: 0px

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__accion
      margin-top: 33px
      @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
        margin-top: 3px


  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    margin-right: 78px
    @media (max-width: $bp-max-xs)
      margin-right: 15px
    h1
      line-height: 1.1em
      margin-right: 92px
      @media (max-width: $bp-max-xs)
        font-size: 2em
        margin-right: 5px

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          margin-left: 5%
          margin-top: 14px
        @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
          .banner-principal__img
            margin-left: -1%!important
            margin-top: 15px

  &__img
    animation: scale 5s ease-in-out infinite alternate
    z-index: 9
    max-width: 394px
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
      max-width: 358px

    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important


.imagen_flotante
  &_1
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 36px
    top: 16rem
    left: 2%
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
      width: 33px
      left: 0%
      top: 14rem

  &_2
    animation: float1 3.5s ease-in-out infinite alternate
    position: absolute
    width: 538px
    bottom: 40px
    left: 59%
    z-index: 3
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
      width: 492px
      bottom: 24px
      left: 57%
  &_3
    animation: float1 3.8s ease-in-out infinite alternate
    position: absolute
    width: 35px
    top: 81%
    left: 61%
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
       top: 80%
       left: 62%
  &_4
    animation: float1 4s ease-in-out infinite alternate
    position: absolute
    width: 30px
    top: 18%
    left: 55%
    z-index: 99
  &_5
    animation: giro .9s ease-in-out infinite alternate
    position: absolute
    width: 522px
    top: 7rem
    left: 58%
    z-index: 0
    @keyframes giro
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
      width: 465px
      left: 57%
      top: 6rem
  &_6
    filter: blur(2px)
    animation: float1 2.7s ease-in-out infinite alternate
    position: absolute
    width: 100px
    bottom: 8rem
    left: 431px
    z-index: 1
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
      width: 91px
      left: 368px
      bottom: 7rem
  &_7
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 36px
    top: 24rem
    left: 4%
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
      width: 30px
      top: 22rem
      left: 23px
  &_9
    animation: float1 3.5s ease-in-out infinite alternate
    position: absolute
    width: 69px
    top: 15%
    right: 1%



@keyframes float1
  0%
    transform: translateY(20px)

  100%
    transform: translateY(0px)
@keyframes scale
  0%
    transform: scale(1.01)

  100%
    transform: scale(1)

@keyframes giro
  0%
    transform: rotate(180deg)

  100%
    transform: rotate(360deg)


@media (max-width: $bp-max-md)
  .fondo-contenido
    display: none
  .fondo-contenido2
    background-repeat: no-repeat
    background-size: cover
</style>
