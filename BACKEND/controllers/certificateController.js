const CertificateRequest = require(
  "../models/CertificateRequest"
);

const User = require(
  "../models/User"
);

const createRequest = async (
  req,
  res
) => {
  try {
    const user =
      await User.findById(
        req.user.id
      );

    if (!user) {
      return res.status(404).json({
        message:
          "User not found",
      });
    }

    const request =
      await CertificateRequest.create(
        {
          user: user._id,
          name: user.name,
          email: user.email,
        }
      );

    res.status(201).json(
      request
    );
  } catch (error) {
    res.status(500).json({
      message:
        error.message,
    });
  }
};

const getRequests = async (
  req,
  res
) => {
  try {
    const requests =
      await CertificateRequest.find();

    res.json(requests);
  } catch (error) {
    res.status(500).json({
      message:
        error.message,
    });
  }
};

const updateRequestStatus =
  async (req, res) => {
    try {
      const request =
        await CertificateRequest.findById(
          req.params.id
        );

      if (!request) {
        return res.status(404).json({
          message:
            "Request not found",
        });
      }

      request.status =
        req.body.status;

      await request.save();

      res.json(request);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  createRequest,
  getRequests,
  updateRequestStatus,
};