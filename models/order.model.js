import db from '../db';


export default db.Model.extend({
  tableName: 'orders',
  idAttribute: 'order_id',
});
