export default function validateSchema(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.body);

    if (validation.error) {
      return res.status(400).send(validation.error);
    }

    return next();
  };
}
