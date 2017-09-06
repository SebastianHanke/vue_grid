import Vue from 'vue';
import Router from 'vue-router';
import TextManipulation from '@/components/TextManipulation';
import TextManipulationFasta from '@/components/TextManipulation_fasta';
import TextManipulationTab from '@/components/TextManipulation_tab';
import Statistic from '@/components/Statistic';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/',
      name: 'TextManipulation',
      component: TextManipulation,
      children: [
        { path: 'fasta', component: TextManipulationFasta },
        { path: 'tab', component: TextManipulationTab },
      ],
    },
    { path: '/Statistic', name: 'Statistic', component: Statistic },
  ],
});
