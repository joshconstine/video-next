export default async function stats(req, resp) {
  if (req.method === "POST") {
    console.log({ cookies: req.cookies });

    try {
      const token = req.cookies.token;
      if (!token) {
        resp.status(403).send({});
      } else {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log({ decoded });

        const userId = "<did>";
        const videoId = "4zH5iYM4wJo";

        const findVideoId = await findVideoIdByUser(token, userId, videoId);
        console.log({ findVideoId });
        resp.send({ msg: "it works", decoded, findVideoId });
      }
    } catch (error) {
      console.error("Error occurred /stats", error);
      resp.status(500).send({ done: false, error: error?.message });
    }
  }
}
