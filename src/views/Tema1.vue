<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Verificación de los procesos de traducción

    .row.mb-4
      .col-12.col-md-12
        figure
          img(src='@/assets/curso/tema1/img01.png' data-aos="zoom-in-down")
    
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.1	Técnicas de revisión del texto meta

    .row.justify-content-center-align-items-center
      .col-12-.col-md-5
        figure
          img.mb-4.mb-md-0(src='@/assets/curso/tema1/img02.png' data-aos="zoom-in-down")
      .col-12.col-md-7
        .cajon.color-acento-contenido.px-4.px-md-5.py-4.mb-5.mb-md-0.h-100.flex-center(data-aos="fade-right")
          p.m-0 Para implementar las técnicas de revisión y corrección que se aplican a un proceso de traducción logrando lo propuesto en el texto meta en Lengua de Señas Colombiana - Español, y que atiendan al propósito de éste, debe tenerse en cuenta al público al que se dirige dicho texto, además de tomar en cuenta el contexto social y cultural.
          p.m-0 Algunas técnicas de revisión del texto meta son: la exactitud, la corrección, la legibilidad, la tonalidad y la adecuación al destinatario. La conveniencia de sujetarse a una técnica de revisión del texto meta se debe a que así se evita entrar en apreciaciones personales que subjetivan el texto, logra también una mayor exactitud en la traducción y agiliza la tarea de traducir.
    
    Separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.2 Métodos y normas técnicas de revisión y corrección

    p.mb-4 Existen diferentes métodos para la revisión en los procesos de traducción. Sin embargo, siempre será aconsejable, antes de pasar a este punto, hacer una auto revisión del trabajo realizado. Al hacerlo, se puede comparar con el texto origen para encontrar posibles desfases o errores. Entre estos desaciertos se pueden mencionar los dobles espacios, los dobles puntos finales, dos comas seguidas, los acentos, los términos, las expresiones, la coherencia entre palabras y las cifras.

    .row.justify-content-center-align-items-center
      .col-12.col-md-6
        .cajon.color-acento-botones.px-4.px-md-5.py-4.mb-5.mb-md-0.h-100.flex-center(data-aos="fade-right")
          p.m-0 A continuación, se puede proceder de varias formas. Una de ellas es el método de edición donde el revisor, que es un profesional cualificado, se encarga completamente de corregir por su cuenta. Quien realizaba el proceso de traducción, lo entrega y deja de preocuparse; la responsabilidad pasa a ser del revisor.
          p.m-0 Otro método de revisión y corrección es el de validación, donde también se entrega el trabajo realizado a un revisor, pero en este caso las correcciones y opiniones del trabajo se hacen en un informe, se le devuelven al mismo traductor y éste finalmente debe leerlas cuidadosamente para hacer los ajustes necesarios. Este proceso ocupa más tiempo que el método de edición.
      .col-12-.col-md-6
        figure
          img.mb-4.mb-md-0(src='@/assets/curso/tema1/img03.png' data-aos="zoom-in-down")

    Separador

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
