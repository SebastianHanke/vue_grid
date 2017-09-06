<template>
  <div class="grid_container">
    <div class="result_box_auswahl">
      <router-link v-for="link in links" :key="link.linkName" v-bind:class="link.classText" v-bind:to="{path: '/' + link.linkName}">{{link.linkText}}</router-link>
    </div>
    <div class="result_box">
      <router-view></router-view>
      <!--<h1>{{ dna2rna }}</h1>
      <div class="result_box">{{ rna2dna }}</div>-->
    </div>
  </div>
</template>

<script>

  /* FORMATE: https://www.genomatix.de/online_help/help/sequence_formats.html */

  import store from '../store';

  // Match a single character not present in the list below
  const CHECK_IF_DNA_REGEX = /[^aAtTgGcC]/;
  const CHECK_IF_RNA_REGEX = /[^uUtTgGcC]/;

  export default {
    name: 'hello',
    data() {
      return {
        mappings: {
          fasta: ['EMBL', 'FASTQ', 'GenBank', 'IG'],
          iq: ['EMBL', 'FASTQ', 'GenBank', 'IG'],
          fastq: ['EMBL', 'FASTQ', 'GenBank', 'IG'],
          genbank: ['EMBL', 'FASTQ', 'GenBank', 'IG'],
        },
        testSequenceMappings: { '>': 'fasta', ';': 'iq', '@': 'fastq', GenBank: 'genbank' },
      };
    },
    computed: {
      sequenceType() {
        return this.testSequenceMappings[store.getters.getSequence.charAt(0)];
      },
      links() {
        let linkArray;
        if (this.mappings[this.sequenceType]) {
          const array = this.mappings[this.sequenceType];
          linkArray = array.map(name => ({
            linkName: name, classText: { auswahl_sub_box: true }, linkText: `to ${name}`,
          }));
        } else {
          linkArray = '';
        }
        return linkArray;
      },
      dna2rna() {
        /* eslint-disable no-console */
        return !(CHECK_IF_DNA_REGEX).test(store.getters.getSequence) ? store.getters.getSequence.toUpperCase().replace(/[A]/gi, 'U') : 'NO DNA !!!';
      },
      rna2dna() {
        return !(CHECK_IF_RNA_REGEX).test(store.getters.getSequence) ? store.getters.getSequence.toUpperCase().replace(/[U]/gi, 'A') : 'NO RNA!!!';
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #42b983;
  }

  .grid_container {
    display : grid;
    grid-template-columns: 300px 1fr;
    grid-gap: .5%;
    padding: .5%;
    height : 90%;
  }

  .result_box {
    background : lightgoldenrodyellow;
    border-radius: 5px;
  }

  .result_box_auswahl {
    background : lightgoldenrodyellow;
    border-radius: 5px;
    display: grid;
    grid-template-rows: repeat(10, auto);
    grid-gap: 5px;
    padding: 5px;
  }

  .auswahl_sub_box {
    background : lightcoral;
    border-radius: 5px;
  }
</style>
