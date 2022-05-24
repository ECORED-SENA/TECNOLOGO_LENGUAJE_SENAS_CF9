<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5
      .col-12.col-md-12
        figure
          img(src='@/assets/curso/introduccion/img01.png' data-aos="zoom-in-down")
    
    p.mb-5 De acuerdo con ISO 17100, como se citó en INSOR (2019), interpretar se define como el acto de verter una lengua a otra información oral o en forma de Signos, de esta manera los intérpretes de Lengua de Señas Colombiana (LSC) trabajan para permitir intercambios comunicativos entre los usuarios la lengua de señas y los usuarios de habla español. 

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/introduccion/img02.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Con dicha idoneidad, el intérprete se convierte en “un medio a través del cual las personas sordas pueden acceder a todos los servicios que como ciudadanos colombianos les confiere la Constitución.” (Ley 324 de 1996, art.7) definiendo escenarios incluyentes y participativos que le permiten: 
              br
              br
    
    .row.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/introduccion/img03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.flex-center
            .p-4
              p Revisar y corregir la traducción de acuerdo con técnicas y normas de corrección.

      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/introduccion/img04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.flex-center
            .p-4
              p Establecer un plan de mejora continua de acuerdo con procesos normalizados de traducción.

      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/introduccion/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.flex-center
            .p-4
              p Comprobar procesos de traducción empleados según solicitud.

      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/introduccion/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.flex-center
            .p-4
              p Aplicar medidas de mejora continua acorde a métodos de traducción estandarizados.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
