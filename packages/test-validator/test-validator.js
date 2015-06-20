Test = Astro.Class({
  name: 'Test',

  fields: {
    testField: {
      type: 'string'
    }
  },

  validators: [
    function () {
      return true;
    }
  ],

  data: {
    type: 'object'
  },

  default: {}

});
