const tblName = 'review';
const rawSql = `CREATE TABLE ${tblName} (
  review_id INT NOT NULL AUTO_INCREMENT,
  customer_id INT NOT NULL,
  product_id  INT NOT NULL,
  review TEXT NOT NULL,
  rating SMALLINT NOT NULL,
  created_on DATETIME NOT NULL,
  PRIMARY KEY (review_id),
  KEY idx_review_customer_id (customer_id),
  KEY idx_review_product_id (product_id)
)`;

exports.up = knex => knex
  .schema.hasTable(tblName)
  .then(exists => !exists && knex.schema.raw(rawSql));

exports.down = knex => knex
  .schema.dropTableIfExists(tblName);
