/**
 * Regex find the matches but it is not the more efficient way
 * to search by text
 */
db.movies.find({ summary: { $regex: /musical/gi } });

/**
 * Expression is to compare two fields of one document
 * - $volume:
 *     - hace referencia al campo en el documento
 *     - Se usa $ para hacer referencia al campo
 */

db.sales.find({ $expr: { $gt: ["$volume", "$target"] } }).pretty();


/**
 * The first cond return volume - 10 if the volume is greater than 190 otherwise return volume value
 */

db.sales
  .find({
    $expr: {
      $gt: [
        {
          $cond: {
            if: { $gte: ["$volume", 190] },
            then: {
              $subtract: ["$volume", 10],
            },
            else: "$volume",
          },
        },
        "$target"
      ],
    },
  })
  .pretty();
