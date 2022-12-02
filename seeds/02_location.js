/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('location').del()
  await knex('location').insert([
    {
      id: 'b076cec1-a9cf-4c69-afb5-987c13556f1a',
      user_id: 'a6787936-f471-472c-bea7-d29973a42a98', 
      latitude: '10.393606275410692',
      longitude: '-75.4862121973142',
      private_lat: '10.372162264175538',
      private_long: '-75.50766986918126'
    },
    {
      id: 'd42668c5-e73e-47ae-9669-b92c6a23b3e4',
      user_id: 'a6787936-f471-472c-bea7-d29973a42a98', 
      latitude: '-0.1780107670153107',
      longitude: '-78.46694157302666',
      private_lat: '-0.19090141314041614',
      private_long: '-78.4831067346342'
    },
    {
      id: '941cb0ee-136c-4ff2-b412-8df4fdc7a10d',
      user_id: 'a6787936-f471-472c-bea7-d29973a42a98', 
      latitude: '-10.304554790263758',
      longitude: '-75.81052036154237',
      private_lat: '-13.161110594821453',
      private_long: '-74.22765197922901'
    },
    {
      id: '974cc5bc-881d-413e-8e80-cb05e43deb2d',
      user_id: 'a6787936-f471-472c-bea7-d29973a42a98', 
      latitude: '-33.37346100411357',
      longitude: '-70.65693899215921',
      private_lat: '-33.45999635003689',
      private_long: '-70.64562002541481'
    }
  ]);
};
