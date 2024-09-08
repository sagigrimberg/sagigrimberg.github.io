/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Vast Data',
    position: 'VP of Architecture',
    url: 'https://vastdata.com',
    startDate: '2024-03-01',
    // endDate: 'Present',
    summary: '.',
    highlights: [
    ],
  },
  {
    name: 'Lightbits Labs',
    position: 'Co-founder and CTO',
    url: 'https://lightbitslabs.com',
    startDate: '2016-03-01',
    endDate: '2024-02-01',
    summary: '.',
    highlights: [
    ],
  },
  {
    name: 'Mellanox Technologies (NVIDIA)',
    position: 'Sr. SW Manager',
    url: 'https://nvidia.com',
    startDate: '2010-03-01',
    endDate: '2016-03-01',
    summary: '.',
    highlights: [
    ],
  },

];

export default work;
