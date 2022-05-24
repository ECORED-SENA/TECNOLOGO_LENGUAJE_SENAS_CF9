<template lang="pug">
.banner-principal
  .container.tarjeta.position-relative(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row.position-relative.justify-content-center.align-items-center
      .col-lg-7.col-xxl-6.py-sm-5.banner-principal__info.ps-5
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .col-lg-12
          .banner-principal__descripcion
            p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion(style= "margin-left: -40px")
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span Iniciar
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-6.px-0.banner-principal__img.img-banner
        img(:src="globalData.imagenBannerPrincipal")
    .imagen_flotante_1.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img: img(src="@/assets/curso/portada/Mini_Elipse_white.svg")
    .imagen_flotante_2.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img: img(src="@/assets/curso/portada/Mini_Elipse_white_1.svg")
    .imagen_flotante_3.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img: img(src="@/assets/curso/portada/Mini_Elipse_white_2.svg")
    .imagen_flotante_4.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img: img(src="@/assets/curso/portada/flechas.svg")
    .imagen_flotante_5.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img: img(src="@/assets/curso/portada/Elipse_blue.svg")
    .imagen_flotante_6.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img: img(src="@/assets/curso/portada/ondas.svg")
    .imagen_flotante_9.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img: img(src="@/assets/curso/portada/Mini_Elipse_white_3.svg")
  

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
  height: 100% !important
  width: 10%
.banner-principal__info
  padding-left: 1rem



.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text
    @media (max-width: $bp-max-xs)
      margin-left: -50px

  .tarjeta
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    top: 49px
    margin-bottom: 70px
    height: 500px
    @media (max-width: 992px)
      background-size: cover
      background-position: center
      background-repeat: no-repeat
      top: 49px
      margin-bottom: 50px

  &__info
    display: flex
    flex-direction: column
    justify-content: center
    margin-left: 17px

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px


  &__componente
    margin-bottom: 20px
    margin-left: -40px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em
        margin-left: -40px
        margin-top: 10px

  &__descripcion
    margin-bottom: 20px
    margin-left: -40px
    @media (max-width: $bp-max-xs)
      margin-left: -40px
      margin-right: 24px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 1rem!important
          margin-right: 19px

  &__img
    animation: scale 5s ease-in-out infinite alternate
    width: 28%
    margin-left: 30px
    margin-top: 16px
    z-index: 9



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
        padding-top: 1%!important
        height: 420px


.imagen_flotante
  &_1
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 36px
    top: 10rem
    left: 3%
  &_2
    animation: float1 3.5s ease-in-out infinite alternate
    position: absolute
    width: 450px
    bottom: 100px
    left: 59%
    z-index: 3
  &_3
    animation: float1 3.8s ease-in-out infinite alternate
    position: absolute
    width: 35px
    top: 25rem
    left: 58%
  &_4
    animation: float1 4s ease-in-out infinite alternate
    position: absolute
    width: 30px
    top: 5%
    left: 54%
    z-index: 99
  &_5
    animation: giro .9s ease-in-out infinite alternate
    position: absolute
    width: 472px
    top: 3rem
    left: 58%
    z-index: 0
    @keyframes giro
  &_6
    filter: blur(2px)
    animation: float1 2.7s ease-in-out infinite alternate
    position: absolute
    width: 100px
    bottom: -20rem
    box-shadow: none
    left: 31.3%
    z-index: 1
  &_7
    animation: float1 2.5s ease-in-out infinite alternate
    position: absolute
    width: 50px
    bottom: 10%
    right: 3%
    z-index: 99
  &_8
    filter: blur(1px)

    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 50px
    top: 5%
    right: -6%
    z-index: 99
    @media  (max-width: $bp-max-lg)
      display: none
  &_9
    animation: float1 3.5s ease-in-out infinite alternate
    position: absolute
    width: 69px
    top: 3%
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
    transform: rotate(0deg)

  100%
    transform: rotate(360deg)





@media (max-width: $bp-max-md)
  .fondo-contenido
    display: none
  .fondo-contenido2
    background-repeat: no-repeat
    background-size: cover
</style>
