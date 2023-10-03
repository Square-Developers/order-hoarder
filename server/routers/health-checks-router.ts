import express from 'express';

const healthChecksRouter = express.Router();

// "/_status" is the standard health check path defined in
// Square's container contract. See go/container-contract
// for more detail.
healthChecksRouter.get('/_status', (_req, res) => {
  // Optionally, you can perform additional logic here
  // in order to gauge the health of your service.
  // If healthy, respond with a 200 status code.
  res.status(200).json({
    status: 'OK',
  });
});

export default healthChecksRouter;
